#!/usr/bin/env tsx
/*
 * Non-GET endpoints validator (POST / PUT / PATCH / DELETE).
 *
 * Unlike `validate-get-endpoints.ts`, this script does NOT make a separate
 * raw HTTP call to compare against the SDK — it only invokes the SDK method
 * with a fixture-supplied request and captures the parsed SDK response.
 *
 * Per non-GET endpoint declared in `tests/non-get-endpoints-fixtures.json`:
 *  - Looks up the SDK method via `getSDKInvoker(operationId)`
 *  - Calls it with the fixture-supplied request body
 *  - Writes the response (or normalized error) to `tests/artifacts/<operationId>.sdk.json`
 *  - Records PASS (SDK call resolved) or FAIL (SDK call threw)
 *  - Generates a consolidated markdown report
 *
 * Operations without a fixture entry are SKIPPED — this is intentional, since
 * POST/PUT/PATCH/DELETE are destructive and need explicit opt-in. To run an
 * operation, add it to `non-get-endpoints-fixtures.json` with a `request`
 * object that matches the SDK's request shape.
 *
 * Requirements:
 *  - FASTPIX_USERNAME / FASTPIX_PASSWORD env vars (Basic Auth) — same as the
 *    GET validator; the hard-coded literals below are dev-only placeholders.
 *  - `tests/non-get-endpoints-fixtures.json` describing which ops to run.
 */

/// <reference types="node" />

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import yaml from "js-yaml";
import { Fastpix } from "../src/sdk/sdk.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

type NonGetMethod = "POST" | "PUT" | "PATCH" | "DELETE";

type Fixture = {
  operations: Record<
    string,
    {
      description?: string;
      request?: any;
      skip?: boolean;
      reason?: string;
    }
  >;
};

type EndpointInfo = {
  path: string;
  method: NonGetMethod;
  operationId: string;
};

type EndpointResult = {
  endpoint: string;
  operationId: string;
  method: NonGetMethod;
  sdkCallOk: boolean;
  sdkCallError?: string;
  sdkResponseFile?: string;
  sdkResponsePreview?: string;
  status: "PASS" | "FAIL" | "SKIP";
  note?: string;
};

const ARTIFACTS_DIRNAME = "artifacts";
const MAX_PREVIEW_CHARS = 4000;
const FIXTURES_FILENAME = "non-get-endpoints-fixtures.json";
const REPORT_FILENAME = "NON_GET_ENDPOINTS_VALIDATION_REPORT.md";
const NON_GET_METHODS: NonGetMethod[] = ["POST", "PUT", "PATCH", "DELETE"];

function safeFileSlug(input: string): string {
  return input.replaceAll(/[^a-zA-Z0-9._-]+/g, "_");
}

function toPrettyJson(value: unknown): string {
  return JSON.stringify(value, null, 2);
}

// FastPix asset hosts have migrated to the .com TLD. Some legacy media records
// still have pre-migration CDN URLs persisted on them. Normalize before writing
// artifacts so committed snapshots are consistent with the post-migration host.
function normalizeLegacyFastpixHosts(text: string): string {
  return text.replaceAll("fastpix.io", "fastpix.com");
}

function preview(text: string): string {
  if (text.length <= MAX_PREVIEW_CHARS) return text;
  return text.slice(0, MAX_PREVIEW_CHARS) + "\n... (truncated)";
}

// Race an SDK call against a per-call deadline. Defaults to 120s so a slow but
// successful call (e.g. a sluggish origin) still resolves instead of being cut
// off at a hard limit. Override with FASTPIX_SDK_TIMEOUT_MS; set it to 0 to
// disable the cap entirely.
function withSdkTimeout<T>(call: Promise<T>): Promise<T> {
  const timeoutMs = Number(process.env.FASTPIX_SDK_TIMEOUT_MS ?? 120000);
  if (!Number.isFinite(timeoutMs) || timeoutMs <= 0) return call;
  const timeout = new Promise<T>((_, reject) =>
    setTimeout(
      () => reject(new Error(`SDK call timeout (${timeoutMs / 1000}s)`)),
      timeoutMs,
    ),
  );
  return Promise.race([call, timeout]);
}

function writeArtifactFile(
  operationId: string,
  sdkBody: unknown,
): { sdkPath: string; sdkPreview: string } {
  const artifactsDir = join(__dirname, ARTIFACTS_DIRNAME);
  mkdirSync(artifactsDir, { recursive: true });

  const slug = safeFileSlug(operationId);
  const sdkFilename = `${slug}.sdk.json`;
  const sdkPath = join(artifactsDir, sdkFilename);

  const sdkText = normalizeLegacyFastpixHosts(toPrettyJson(sdkBody));
  writeFileSync(sdkPath, sdkText);

  return {
    sdkPath: `tests/${ARTIFACTS_DIRNAME}/${sdkFilename}`,
    sdkPreview: preview(sdkText),
  };
}

type SDKInvoker = (client: Fastpix, request: any) => Promise<any>;

// Mapping operationId → SDK method invocation. Mirrors the pattern used by
// validate-get-endpoints.ts. Each invoker receives the full fixture request
// object as the second argument; the SDK methods expect a single object that
// combines path params, query params, and request body.
function getSDKInvoker(operationId: string): SDKInvoker | null {
  const map: Record<string, SDKInvoker> = {
    // On-demand media
    "create-media": (c, req) => c.inputVideo.create(req),
    "updated-media": (c, req) => c.manageVideos.update(req),
    "delete-media": (c, req) => c.manageVideos.delete(req),
    "Add-media-track": (c, req) => c.manageVideos.addTrack(req),
    "cancel-upload": (c, req) => c.manageVideos.cancelUpload(req),
    "update-media-track": (c, req) => c.manageVideos.updateTrack(req),
    "delete-media-track": (c, req) => c.media.deleteTrack(req),
    "Generate-subtitle-track": (c, req) =>
      c.manageVideos.generateSubtitleTrack(req),
    "direct-upload-video-media": (c, req) => c.inputVideo.upload(req),

    // AI features
    "update-media-summary": (c, req) => (c as any).aiFeatures.updateSummary(req),
    "update-media-chapters": (c, req) =>
      (c as any).invideoAIFeatures.generateChapters(req),
    "update-media-named-entities": (c, req) =>
      (c as any).aiFeatures.generateNamedEntities(req),
    "update-media-moderation": (c, req) =>
      (c as any).invideoAI.updateModeration(req),

    // Media access / mp4
    "updated-source-access": (c, req) => c.media.updateSourceAccess(req),
    "updated-mp4Support": (c, req) =>
      (c.manageVideos as any).updateMp4Support(req),

    // Playback
    "create-media-playback-id": (c, req) => c.playback.create(req),
    "delete-media-playback-id": (c, req) => c.playback.delete(req),
    "update-domain-restrictions": (c, req) =>
      c.playback.updateDomainRestrictions(req),
    "update-user-agent-restrictions": (c, req) =>
      c.playback.updateUserAgentRestrictions(req),

    // Playlists
    "create-a-playlist": (c, req) => c.playlist.create(req),
    "update-a-playlist": (c, req) => c.playlist.update(req),
    "delete-a-playlist": (c, req) => c.playlist.delete(req),
    "change-media-order-in-playlist": (c, req) =>
      c.playlist.updateMediaOrder(req),
    "add-media-to-playlist": (c, req) => (c as any).playlists.addMedia(req),
    "delete-media-from-playlist": (c, req) =>
      (c as any).playlists.deleteMedia(req),

    // Live streams
    "create-new-stream": (c, req) => c.liveStreams.create(req),
    "update-live-stream": (c, req) => (c as any).manageLiveStream.update(req),
    "delete-live-stream": (c, req) => c.liveStreams.delete(req),
    "enable-live-stream": (c, req) => c.liveStreams.enable(req),
    "disable-live-stream": (c, req) => (c as any).manageLiveStream.disable(req),
    "complete-live-stream": (c, req) =>
      (c as any).manageLiveStream.complete(req),

    // Live playback / simulcasts
    "create-playbackId-of-stream": (c, req) =>
      (c as any).livePlayback.createId(req),
    "delete-playbackId-of-stream": (c, req) =>
      (c as any).livePlayback.delete(req),
    "create-simulcast-of-stream": (c, req) => c.simulcasts.create(req),
    "update-specific-simulcast-of-stream": (c, req) =>
      c.simulcasts.update(req),
    "delete-simulcast-of-stream": (c, req) =>
      (c as any).simulcastStreams.delete(req),

    // IAM
    create_signing_key: (c, req) => c.signingKeys.create(req),
    delete_signing_key: (c, req) => c.signingKeys.delete(req),
  };
  return map[operationId] ?? null;
}

function headersToObject(headers: any): Record<string, string> | undefined {
  try {
    if (!headers) return undefined;
    if (typeof headers.entries === "function") {
      return Object.fromEntries(Array.from(headers.entries()));
    }
  } catch {
    // ignore
  }
  return undefined;
}

function normalizeSdkError(err: any): any {
  const base: any = {
    name: err?.name,
    message: err?.message,
    stack: err?.stack,
  };

  if (err?.statusCode !== undefined) base.statusCode = err.statusCode;
  if (err?.contentType !== undefined) base.contentType = err.contentType;
  if (err?.body !== undefined) {
    base.body = err.body;
    if (typeof err.body === "string") {
      try {
        base.bodyJson = JSON.parse(err.body);
      } catch {
        // ignore
      }
    }
  }
  base.headers =
    headersToObject(err?.headers) ??
    headersToObject(err?.rawResponse?.headers);
  if (err?.rawResponse?.url) base.url = err.rawResponse.url;

  if (err?.cause) base.cause = err.cause;
  if (err?.rawMessage !== undefined) base.rawMessage = err.rawMessage;
  if (err?.rawValue !== undefined) base.rawValue = err.rawValue;

  return base;
}

function readFixtures(): Fixture {
  const p = join(__dirname, FIXTURES_FILENAME);
  if (!existsSync(p)) {
    // eslint-disable-next-line no-console
    console.warn(`No fixtures file at ${p}; no operations will be exercised.`);
    return { operations: {} };
  }
  return JSON.parse(readFileSync(p, "utf-8")) as Fixture;
}

function resolveSpecPath(): string {
  const candidates = [
    join(__dirname, "../fixed.yaml"),
    join(__dirname, "../../fixed.yaml"),
  ];
  for (const p of candidates) {
    if (existsSync(p)) return p;
  }
  throw new Error(
    `OpenAPI spec not found. Tried: ${candidates.map((c) => JSON.stringify(c)).join(", ")}`,
  );
}

function loadOpenAPISpec(): any {
  return yaml.load(readFileSync(resolveSpecPath(), "utf-8"));
}

function extractNonGetEndpoints(spec: any): EndpointInfo[] {
  const out: EndpointInfo[] = [];
  for (const [path, methods] of Object.entries(spec.paths || {})) {
    const m = methods as any;
    for (const httpMethod of NON_GET_METHODS) {
      const lc = httpMethod.toLowerCase();
      if (!m[lc]) continue;
      out.push({
        path,
        method: httpMethod,
        operationId: m[lc].operationId,
      });
    }
  }
  return out;
}

function nonGetSdkCol(r: EndpointResult): string {
  if (r.status === "SKIP") return "—";
  return r.sdkCallOk ? "✅" : "❌";
}

function nonGetStatusLabel(r: EndpointResult): string {
  if (r.status === "PASS") return "✅ PASS";
  if (r.status === "FAIL") return "❌ FAIL";
  return "⏭️ SKIP";
}

function nonGetTableRow(r: EndpointResult): string {
  return `| ${r.method} | \`${r.endpoint}\` | \`${r.operationId}\` | ${nonGetSdkCol(r)} | ${nonGetStatusLabel(r)} |`;
}

function buildNonGetEndpointDetail(r: EndpointResult): string[] {
  return [
    `### ${r.operationId} (\`${r.method} ${r.endpoint}\`)`,
    "",
    `- **Status**: ${r.status}`,
    ...(r.note ? [`- **Note**: ${r.note}`] : []),
    ...(r.sdkResponseFile ? [`- **SDK response file**: \`${r.sdkResponseFile}\``] : []),
    ...(!r.sdkCallOk && r.sdkCallError ? [`- **SDK error**: ${r.sdkCallError}`] : []),
    "",
    ...(r.sdkResponsePreview
      ? ["**SDK response (preview)**", "", "```json", r.sdkResponsePreview, "```", ""]
      : []),
  ];
}

function writeReport(results: EndpointResult[]) {
  const total = results.length;
  const passed = results.filter((r) => r.status === "PASS").length;
  const failed = results.filter((r) => r.status === "FAIL").length;
  const skipped = results.filter((r) => r.status === "SKIP").length;

  const reportPath = join(__dirname, REPORT_FILENAME);
  const generatedAt = new Date().toISOString();

  const lines: string[] = [
    "# Non-GET Endpoints — SDK Response Validation Report",
    "",
    `Generated: ${generatedAt}`,
    "",
    "## Summary",
    "",
    `- **Total non-GET endpoints**: ${total}`,
    `- **PASS**: ${passed}`,
    `- **FAIL**: ${failed}`,
    `- **SKIP**: ${skipped}`,
    "",
    "SKIP = no fixture entry for the operation (or `skip: true`). PASS = SDK call resolved without throwing. FAIL = SDK call threw; see the error in the per-endpoint section.",
    "",
    "## Consolidated report",
    "",
    "| Method | Endpoint | OperationId | SDK call | Status |",
    "|---|---|---|---:|---|",
    ...results.map(nonGetTableRow),
    "",
    "## Per-endpoint details",
    "",
    ...results.flatMap(buildNonGetEndpointDetail),
  ];

  writeFileSync(reportPath, lines.join("\n"));

  // eslint-disable-next-line no-console
  console.log(`Report generated: ${reportPath}`);
  // eslint-disable-next-line no-console
  console.log(
    `Summary: total=${total} pass=${passed} fail=${failed} skip=${skipped}`,
  );
}

type OpFixture = Fixture["operations"][string];

function buildSkipReason(opFixture: OpFixture | undefined): string {
  if (opFixture?.skip !== true) {
    return "No fixture entry — add one to non-get-endpoints-fixtures.json to enable";
  }
  const detail = opFixture.reason ? `: ${opFixture.reason}` : "";
  return `Explicitly skipped${detail}`;
}

function buildSkipResult(ep: EndpointInfo, opFixture: OpFixture | undefined): EndpointResult {
  const reason = buildSkipReason(opFixture);
  // eslint-disable-next-line no-console
  console.log(`  ⏭️  SKIP — ${reason}`);
  return {
    endpoint: ep.path,
    operationId: ep.operationId,
    method: ep.method,
    sdkCallOk: false,
    status: "SKIP",
    note: reason,
  };
}

async function callSdkInvoker(
  sdkClient: Fastpix,
  invoker: SDKInvoker,
  request: any,
): Promise<{ sdkCallOk: boolean; sdkCallError?: string; sdkPrinted: any }> {
  try {
    const sdkCallPromise = invoker(sdkClient, request);
    const sdkRes = await withSdkTimeout(sdkCallPromise);
    return { sdkCallOk: true, sdkCallError: undefined, sdkPrinted: sdkRes };
  } catch (e: any) {
    const sdkCallError = e?.message ?? String(e);
    // eslint-disable-next-line no-console
    console.error(`  ⚠️  SDK call failed: ${sdkCallError}`);
    return { sdkCallOk: false, sdkCallError, sdkPrinted: normalizeSdkError(e) };
  }
}

async function processEndpoint(
  ep: EndpointInfo,
  opFixture: OpFixture | undefined,
  sdkClient: Fastpix,
): Promise<EndpointResult> {
  // Skip when no fixture, no request body, or explicitly skipped.
  if (!opFixture || opFixture.skip === true || !opFixture.request) {
    return buildSkipResult(ep, opFixture);
  }

  const invoker = getSDKInvoker(ep.operationId);
  if (!invoker) {
    // eslint-disable-next-line no-console
    console.error(`  ✗ No SDK invoker for ${ep.operationId}`);
    return {
      endpoint: ep.path,
      operationId: ep.operationId,
      method: ep.method,
      sdkCallOk: false,
      sdkCallError: "No SDK invoker mapping for this operationId",
      status: "FAIL",
      note: "Add a mapping in getSDKInvoker() in validate-non-get-endpoints.ts",
    };
  }

  const { sdkCallOk, sdkCallError, sdkPrinted } = await callSdkInvoker(
    sdkClient,
    invoker,
    opFixture.request,
  );

  const artifact = writeArtifactFile(ep.operationId, sdkPrinted);

  // eslint-disable-next-line no-console
  console.log(`  ${sdkCallOk ? "✓" : "✗"} ${ep.operationId} — ${sdkCallOk ? "PASS" : "FAIL"}`);

  return {
    endpoint: ep.path,
    operationId: ep.operationId,
    method: ep.method,
    sdkCallOk,
    sdkCallError,
    sdkResponseFile: artifact.sdkPath,
    sdkResponsePreview: artifact.sdkPreview,
    status: sdkCallOk ? "PASS" : "FAIL",
  };
}

async function main(): Promise<void> {
  const spec = loadOpenAPISpec();
  const endpoints = extractNonGetEndpoints(spec);
  const fixtures = readFixtures();

  const baseUrl: string =
    process.env.FASTPIX_BASE_URL ??
    ((spec.servers?.[0]?.url as string | undefined) ??
      "https://api.fastpix.com/v1/");

  const username = process.env.FASTPIX_USERNAME ?? "";
  const password = process.env.FASTPIX_PASSWORD ?? "";

  if (!username || !password) {
    throw new Error(
      "Missing FASTPIX_USERNAME / FASTPIX_PASSWORD env vars (BasicAuth)",
    );
  }

  const sdkClient = new Fastpix({
    security: { username, password },
    serverURL: baseUrl,
  });

  const results: EndpointResult[] = [];
  const total = endpoints.length;

  for (let i = 0; i < endpoints.length; i++) {
    const ep = endpoints[i];
    // eslint-disable-next-line no-console
    console.log(
      `[${i + 1}/${total}] ${ep.method} ${ep.path} (${ep.operationId})`,
    );

    results.push(
      await processEndpoint(ep, fixtures.operations?.[ep.operationId], sdkClient),
    );
  }

  writeReport(results);
}

try {
  await main();
} catch (err) {
  // eslint-disable-next-line no-console
  console.error("Fatal error:", err);
  process.exit(1);
}

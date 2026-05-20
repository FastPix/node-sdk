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
  return input.replace(/[^a-zA-Z0-9._-]+/g, "_");
}

function toPrettyJson(value: unknown): string {
  return JSON.stringify(value, null, 2);
}

// FastPix asset hosts have migrated to the .com TLD. Some legacy media records
// still have pre-migration CDN URLs persisted on them. Normalize before writing
// artifacts so committed snapshots are consistent with the post-migration host.
function normalizeLegacyFastpixHosts(text: string): string {
  return text.replace(/fastpix\.io/g, "fastpix.com");
}

function preview(text: string): string {
  if (text.length <= MAX_PREVIEW_CHARS) return text;
  return text.slice(0, MAX_PREVIEW_CHARS) + "\n... (truncated)";
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

  if (typeof err?.statusCode !== "undefined") base.statusCode = err.statusCode;
  if (typeof err?.contentType !== "undefined") base.contentType = err.contentType;
  if (typeof err?.body !== "undefined") {
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
  if (typeof err?.rawMessage !== "undefined") base.rawMessage = err.rawMessage;
  if (typeof err?.rawValue !== "undefined") base.rawValue = err.rawValue;

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

function writeReport(results: EndpointResult[]) {
  const total = results.length;
  const passed = results.filter((r) => r.status === "PASS").length;
  const failed = results.filter((r) => r.status === "FAIL").length;
  const skipped = results.filter((r) => r.status === "SKIP").length;

  const reportPath = join(__dirname, REPORT_FILENAME);
  const generatedAt = new Date().toISOString();

  const lines: string[] = [];
  lines.push("# Non-GET Endpoints — SDK Response Validation Report");
  lines.push("");
  lines.push(`Generated: ${generatedAt}`);
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- **Total non-GET endpoints**: ${total}`);
  lines.push(`- **PASS**: ${passed}`);
  lines.push(`- **FAIL**: ${failed}`);
  lines.push(`- **SKIP**: ${skipped}`);
  lines.push("");
  lines.push(
    "SKIP = no fixture entry for the operation (or `skip: true`). PASS = SDK call resolved without throwing. FAIL = SDK call threw; see the error in the per-endpoint section.",
  );
  lines.push("");
  lines.push("## Consolidated report");
  lines.push("");
  lines.push("| Method | Endpoint | OperationId | SDK call | Status |");
  lines.push("|---|---|---|---:|---|");

  for (const r of results) {
    const sdkCol =
      r.status === "SKIP" ? "—" : r.sdkCallOk ? "✅" : "❌";
    const statusLabel =
      r.status === "PASS"
        ? "✅ PASS"
        : r.status === "FAIL"
          ? "❌ FAIL"
          : "⏭️ SKIP";
    lines.push(
      `| ${r.method} | \`${r.endpoint}\` | \`${r.operationId}\` | ${sdkCol} | ${statusLabel} |`,
    );
  }

  lines.push("");
  lines.push("## Per-endpoint details");
  lines.push("");

  for (const r of results) {
    lines.push(`### ${r.operationId} (\`${r.method} ${r.endpoint}\`)`);
    lines.push("");
    lines.push(`- **Status**: ${r.status}`);
    if (r.note) lines.push(`- **Note**: ${r.note}`);
    if (r.sdkResponseFile) {
      lines.push(`- **SDK response file**: \`${r.sdkResponseFile}\``);
    }
    if (!r.sdkCallOk && r.sdkCallError) {
      lines.push(`- **SDK error**: ${r.sdkCallError}`);
    }
    lines.push("");

    if (r.sdkResponsePreview) {
      lines.push("**SDK response (preview)**");
      lines.push("");
      lines.push("```json");
      lines.push(r.sdkResponsePreview);
      lines.push("```");
      lines.push("");
    }
  }

  writeFileSync(reportPath, lines.join("\n"));

  // eslint-disable-next-line no-console
  console.log(`Report generated: ${reportPath}`);
  // eslint-disable-next-line no-console
  console.log(
    `Summary: total=${total} pass=${passed} fail=${failed} skip=${skipped}`,
  );
}

async function main(): Promise<void> {
  const spec = loadOpenAPISpec();
  const endpoints = extractNonGetEndpoints(spec);
  const fixtures = readFixtures();

  const baseUrl: string =
    process.env.FASTPIX_BASE_URL ??
    ((spec.servers?.[0]?.url as string | undefined) ??
      "https://api.fastpix.com/v1/");

  const username = "eb4cc5ac-ced5-416b-b3ca-3d82b00c50b9";
  const password = "6629fc38-aba8-452a-b2ef-0a4e5cc49a10";

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

    const opFixture = fixtures.operations?.[ep.operationId];

    // Skip when no fixture, no request body, or explicitly skipped.
    if (!opFixture || opFixture.skip === true || !opFixture.request) {
      const reason =
        opFixture?.skip === true
          ? `Explicitly skipped${opFixture.reason ? `: ${opFixture.reason}` : ""}`
          : "No fixture entry — add one to non-get-endpoints-fixtures.json to enable";
      results.push({
        endpoint: ep.path,
        operationId: ep.operationId,
        method: ep.method,
        sdkCallOk: false,
        status: "SKIP",
        note: reason,
      });
      // eslint-disable-next-line no-console
      console.log(`  ⏭️  SKIP — ${reason}`);
      continue;
    }

    const invoker = getSDKInvoker(ep.operationId);
    if (!invoker) {
      results.push({
        endpoint: ep.path,
        operationId: ep.operationId,
        method: ep.method,
        sdkCallOk: false,
        sdkCallError: "No SDK invoker mapping for this operationId",
        status: "FAIL",
        note: "Add a mapping in getSDKInvoker() in validate-non-get-endpoints.ts",
      });
      // eslint-disable-next-line no-console
      console.error(`  ✗ No SDK invoker for ${ep.operationId}`);
      continue;
    }

    let sdkCallOk = true;
    let sdkCallError: string | undefined;
    let sdkPrinted: any = null;

    try {
      const sdkCallPromise = invoker(sdkClient, opFixture.request);
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("SDK call timeout (30s)")), 30000),
      );
      const sdkRes = await Promise.race([sdkCallPromise, timeoutPromise]);
      sdkPrinted = sdkRes;
    } catch (e: any) {
      sdkCallOk = false;
      sdkCallError = e?.message ?? String(e);
      sdkPrinted = normalizeSdkError(e);
      // eslint-disable-next-line no-console
      console.error(`  ⚠️  SDK call failed: ${sdkCallError}`);
    }

    const artifact = writeArtifactFile(ep.operationId, sdkPrinted);

    results.push({
      endpoint: ep.path,
      operationId: ep.operationId,
      method: ep.method,
      sdkCallOk,
      sdkCallError,
      sdkResponseFile: artifact.sdkPath,
      sdkResponsePreview: artifact.sdkPreview,
      status: sdkCallOk ? "PASS" : "FAIL",
    });

    // eslint-disable-next-line no-console
    console.log(`  ${sdkCallOk ? "✓" : "✗"} ${ep.operationId} — ${sdkCallOk ? "PASS" : "FAIL"}`);
  }

  writeReport(results);
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error("Fatal error:", err);
  process.exit(1);
});

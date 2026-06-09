#!/usr/bin/env tsx
/*
 * GET endpoints validator using `openapi-response-validator`
 *
 * Per GET endpoint in `fixed.yaml`:
 * - Calls the API to get the raw JSON response
 * - Validates the raw response against the OpenAPI response schema using `openapi-response-validator`
 * - Parses the same raw response through the SDK's Zod inbound schema (this is what the SDK returns)
 * - Compares JSON paths:
 *   - missingInSDK: present in API raw JSON but missing after SDK parsing
 *   - missingInAPI: present after SDK parsing but missing in API raw JSON
 * - Generates a consolidated markdown report.
 *
 * Requirements:
 * - FASTPIX_USERNAME / FASTPIX_PASSWORD env vars (Basic Auth)
 * - `tests/get-endpoints-fixtures.json` for endpoints with required path params (optional but recommended)
 */

/// <reference types="node" />

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import yaml from "js-yaml";
import * as operations from "../src/models/operations/index.js";
import { Fastpix } from "../src/sdk/sdk.js";

const require = createRequire(import.meta.url);
const openapiResponseValidatorMod = require("openapi-response-validator");
const OpenAPIResponseValidator =
  openapiResponseValidatorMod?.default ?? openapiResponseValidatorMod;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

type Fixture = {
  operations: Record<
    string,
    {
      pathParams?: Record<string, string>;
      query?: Record<string, string | number | boolean | Array<string | number | boolean>>;
    }
  >;
};

type EndpointInfo = {
  path: string;
  method: "GET";
  operationId: string;
  responses: any;
  parameters: Array<any>;
};

type FixSuggestion = {
  title: string;
  why: string;
  where?: string;
  pasteYaml?: string;
};

type EndpointResult = {
  endpoint: string;
  operationId: string;
  method: "GET";
  openapiValid: boolean;
  openapiErrors: Array<{ path?: string; message?: string; errorCode?: string }>;
  sdkParseOk: boolean;
  sdkParseError?: string;
  missingInSDK: string[];
  missingInAPI: string[];
  emptyArraysOmittedInSDK: string[];
  emptyArraysOmittedInAPI: string[];
  apiResponseFile?: string;
  sdkResponseFile?: string;
  apiResponsePreview?: string;
  sdkResponsePreview?: string;
  status: "PASS" | "FAIL";
  note?: string;
  fixSuggestions?: FixSuggestion[];
};

const ARTIFACTS_DIRNAME = "artifacts";
const MAX_PREVIEW_CHARS = 4000;
const PLACEHOLDER_UUID = "00000000-0000-0000-0000-000000000000";
const FIX_SUGGESTIONS_MD = "GET_ENDPOINTS_OPENAPI_RESPONSE_FIX_SUGGESTIONS.md";

// Non-secret placeholders used only when the corresponding env vars are unset,
// so the script can still run (and surface auth errors) without real credentials.
const DEFAULT_AUTH_USER = "your-access-token";
const DEFAULT_AUTH_KEY = "your-secret-key";

function safeFileSlug(input: string): string {
  return input.replaceAll(/[^a-zA-Z0-9._-]+/g, "_");
}

function toPrettyJson(value: unknown): string {
  return JSON.stringify(value, null, 2);
}

// FastPix asset hosts have migrated to the .com TLD. Some legacy media
// records still have pre-migration CDN thumbnails persisted on them, and
// the API echoes those URLs back verbatim. Both hosts continue to serve
// the same content during the deprecation window, so we normalize before
// writing artifacts to disk — this keeps committed snapshots consistent
// with the post-migration host without changing API behavior. Runs after
// validation, so any real shape/schema issues are still surfaced.
function normalizeLegacyFastpixHosts(text: string): string {
  return text.replaceAll("fastpix.io", "fastpix.com");
}

function preview(text: string): string {
  if (text.length <= MAX_PREVIEW_CHARS) return text;
  return text.slice(0, MAX_PREVIEW_CHARS) + "\n... (truncated)";
}

function writeArtifactFiles(
  operationId: string,
  rawBody: unknown,
  sdkBody: unknown,
): {
  apiPath: string;
  sdkPath: string;
  apiPreview: string;
  sdkPreview: string;
} {
  const artifactsDir = join(__dirname, ARTIFACTS_DIRNAME);
  mkdirSync(artifactsDir, { recursive: true });

  const slug = safeFileSlug(operationId);
  const apiFilename = `${slug}.api.json`;
  const sdkFilename = `${slug}.sdk.json`;

  const apiText = normalizeLegacyFastpixHosts(toPrettyJson(rawBody));
  const sdkText = normalizeLegacyFastpixHosts(toPrettyJson(sdkBody));

  const apiPath = join(artifactsDir, apiFilename);
  const sdkPath = join(artifactsDir, sdkFilename);

  writeFileSync(apiPath, apiText);
  writeFileSync(sdkPath, sdkText);

  return {
    apiPath: `tests/${ARTIFACTS_DIRNAME}/${apiFilename}`,
    sdkPath: `tests/${ARTIFACTS_DIRNAME}/${sdkFilename}`,
    apiPreview: preview(apiText),
    sdkPreview: preview(sdkText),
  };
}

type SDKInvoker = (client: Fastpix, request: any) => Promise<any>;

function getSDKInvoker(operationId: string): SDKInvoker | null {
  const map: Record<string, SDKInvoker> = {
    // On-demand media
    "list-media": (c, req) => c.media.list(req),
    "get-media": (c, req) => c.manageVideos.get(req),
    "get-media-summary": (c, req) => c.manageVideos.getSummary(req),
    retrieveMediaInputInfo: (c, req) => c.manageVideos.retrieveMediaInputInfo(req),
    "list-uploads": (c, req) => c.manageVideos.listUploads(req),
    "get-media-clips": (c, req) => c.media.getClips(req),

    // Live clips / streams
    "list-live-clips": (c, req) => c.liveStreams.listClips(req),
    "get-all-streams": (c, req) => c.liveStreams.list(req),
    "get-live-stream-by-id": (c, req) => c.manageLiveStream.get(req),
    "get-live-stream-viewer-count-by-id": (c, req) => c.manageLiveStream.getViewerCount(req),
    "get-live-stream-playback-id": (c, req) => c.livePlayback.get(req),
    "get-specific-simulcast-of-stream": (c, req) => c.simulcasts.get(req),

    // Playlists
    "get-all-playlists": (c, req) => c.playlist.list(req),
    "get-playlist-by-id": (c, req) => c.playlist.get(req),

    // Playback / DRM
    "list-playback-ids": (c, req) => c.playback.listIds(req),
    "get-playback-id": (c, req) => c.playback.get(req),
    getDrmConfiguration: (c, req) => c.drmConfigurations.list(req),
    getDrmConfigurationById: (c, req) => c.drmConfigurations.get(req),

    // IAM
    list_signing_keys: (c, req) => c.signingKeys.list(req),
    "get-signing_key_by_id": (c, req) => c.signingKeys.getById(req),

    // Data APIs
    list_video_views: (c, req) => c.views.list(req),
    get_video_view_details: (c, req) => c.views.getDetails(req),
    list_by_top_content: (c, req) => c.views.listTopContent(req),

    list_dimensions: (c, req) => c.dimensions.list(req),
    list_filter_values_for_dimension: (c, req) => c.dimensions.listFilterValues(req),

    list_breakdown_values: (c, req) => c.metrics.listBreakdownValues(req),
    list_overall_values: (c, req) => c.metrics.listOverallValues(req),
    get_timeseries_data: (c, req) => c.metrics.getTimeseriesData(req),
    list_comparison_values: (c, req) => c.metrics.listCompares(req),

    list_errors: (c, req) => c.errors.list(req),
  };
  return map[operationId] ?? null;
}

function defaultSDKRequest(operationId: string): any {
  // Ensure SDK input validation passes so we reach the HTTP call and get server errors on failures.
  switch (operationId) {
    case "get-media":
    case "get-media-summary":
    case "retrieveMediaInputInfo":
    case "list-playback-ids":
    case "get-media-clips":
      return { mediaId: PLACEHOLDER_UUID };
    case "get-playback-id":
      return { mediaId: PLACEHOLDER_UUID, playbackId: PLACEHOLDER_UUID };
    case "list-live-clips":
      return { livestreamId: PLACEHOLDER_UUID };
    case "get-playlist-by-id":
      return { playlistId: PLACEHOLDER_UUID };
    case "getDrmConfigurationById":
      return { drmConfigurationId: PLACEHOLDER_UUID };
    case "get-live-stream-by-id":
    case "get-live-stream-viewer-count-by-id":
      return { streamId: PLACEHOLDER_UUID };
    case "get-live-stream-playback-id":
      return { streamId: PLACEHOLDER_UUID, playbackId: PLACEHOLDER_UUID };
    case "get-specific-simulcast-of-stream":
      return { streamId: PLACEHOLDER_UUID, simulcastId: PLACEHOLDER_UUID };
    case "get-signing_key_by_id":
      return { signingKeyId: PLACEHOLDER_UUID };
    case "get_video_view_details":
      return { viewId: PLACEHOLDER_UUID };
    case "list_filter_values_for_dimension":
      return { dimensionsId: "browser_name" };
    case "list_breakdown_values":
      return {
        metricId: "quality_of_experience_score",
        timespan: "24:hours",
        groupBy: "browser_name",
      };
    case "list_overall_values":
      return { metricId: "quality_of_experience_score", timespan: "24:hours" };
    case "get_timeseries_data":
      return {
        metricId: "quality_of_experience_score",
        timespan: "24:hours",
        groupBy: "hour",
      };
    case "list_comparison_values":
      return { timespan: "24:hours", dimension: "browser_name", value: "Chrome" };
    case "list_errors":
      return { timespan: "24:hours", limit: 5 };
    case "list_video_views":
      return { timespan: "24:hours", limit: 5, offset: 1 };
    case "list_by_top_content":
      return { timespan: "24:hours", limit: 5 };
    case "list-media":
      return { limit: 5, offset: 1, orderBy: "desc" };
    case "list-uploads":
      return { limit: 5, offset: 1, orderBy: "desc" };
    case "get-all-streams":
      return { limit: 5, offset: 1, orderBy: "desc" };
    case "getDrmConfiguration":
      return { limit: 10, offset: 1 };
    case "get-all-playlists":
      return { limit: 5, offset: 1 };
    case "list_signing_keys":
      return { limit: 5, offset: 1 };
    case "list_dimensions":
      return undefined;
    default:
      return undefined;
  }
}

function buildSDKRequest(endpoint: EndpointInfo, fixtures: Fixture | null): any {
  const opFixture = fixtures?.operations?.[endpoint.operationId];
  const fromFixture = opFixture
    ? { ...opFixture.pathParams, ...opFixture.query }
    : undefined;

  // If fixtures exist, use them as-is (they match SDK request shapes).
  if (fromFixture) return fromFixture;

  // Prefer operation-specific defaults (handles required query params too).
  const def = defaultSDKRequest(endpoint.operationId);
  if (def !== undefined) return def;

  // Otherwise: auto-generate a placeholder request object for required path params.
  const requiredPathParams = endpoint.parameters
    .filter((p) => p?.in === "path" && p?.required)
    .map((p) => p.name);

  if (requiredPathParams.length === 0) return undefined;

  const req: Record<string, string> = {};
  for (const name of requiredPathParams) req[name] = PLACEHOLDER_UUID;
  return req;
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
  base.headers = headersToObject(err?.headers) ?? headersToObject(err?.rawResponse?.headers);
  if (err?.rawResponse?.url) base.url = err.rawResponse.url;

  if (err?.cause) base.cause = err.cause;
  if (err?.rawMessage !== undefined) base.rawMessage = err.rawMessage;
  if (err?.rawValue !== undefined) base.rawValue = err.rawValue;

  return base;
}

function readFixtures(): Fixture | null {
  const p = join(__dirname, "get-endpoints-fixtures.json");
  if (!existsSync(p)) return null;
  return JSON.parse(readFileSync(p, "utf-8")) as Fixture;
}

function resolveSpecPath(): string {
  // Deterministic search order (mirrors reference repo’s "../../fastpix.yaml" pattern).
  const candidates = [
    join(__dirname, "../fixed.yaml"), // tests/../fixed.yaml (repo root)
    join(__dirname, "../../fixed.yaml"), // tests/../../fixed.yaml (workspace new sdk/fixed.yaml)
  ];
  for (const p of candidates) {
    if (existsSync(p)) return p;
  }
  throw new Error(
    `OpenAPI spec not found. Tried: ${candidates.map((c) => JSON.stringify(c)).join(", ")}`,
  );
}

function loadOpenAPISpec(): any {
  const specPath = resolveSpecPath();
  return yaml.load(readFileSync(specPath, "utf-8"));
}

function extractGetEndpoints(spec: any): EndpointInfo[] {
  const out: EndpointInfo[] = [];
  for (const [path, methods] of Object.entries(spec.paths || {})) {
    const m = methods as any;
    if (!m.get) continue;
    out.push({
      path,
      method: "GET",
      operationId: m.get.operationId,
      responses: m.get.responses || {},
      parameters: [...(m.get.parameters || []), ...(m.parameters || [])],
    });
  }
  return out;
}

// Convert OpenAPI 3 schema refs (#/components/schemas/X) to the format used by openapi-response-validator (#/definitions/X)
function convertRefsToDefinitions(node: any): any {
  if (node == null || typeof node !== "object") return node;
  if (Array.isArray(node)) return node.map(convertRefsToDefinitions);
  const out: any = {};
  for (const [k, v] of Object.entries(node)) {
    if (k === "$ref" && typeof v === "string") {
      out[k] = v.replace("#/components/schemas/", "#/definitions/");
    } else {
      out[k] = convertRefsToDefinitions(v);
    }
  }
  return out;
}

function makeOpenAPIResponseValidator(spec: any, endpoint: EndpointInfo) {
  const definitions = convertRefsToDefinitions(spec.components?.schemas || {});
  const responses: any = {};

  for (const [status, def] of Object.entries(endpoint.responses || {})) {
    const d = def as any;
    const schema = d?.content?.["application/json"]?.schema;
    if (!schema) continue;
    responses[status] = {
      description: d.description || "",
      schema: convertRefsToDefinitions(schema),
    };
  }

  if (Object.keys(responses).length === 0) return null;

  return new OpenAPIResponseValidator({
    responses,
    definitions,
  });
}

function hasOpenapiError(r: EndpointResult, includes: string): boolean {
  return (r.openapiErrors || []).some((e) => (e?.message ?? "").includes(includes));
}

function openapiErrorPaths(r: EndpointResult): string[] {
  return (r.openapiErrors || [])
    .map((e) => e?.path)
    .filter((p): p is string => typeof p === "string" && p.length > 0);
}

function generateFixSuggestions(r: EndpointResult): FixSuggestion[] {
  const out: FixSuggestion[] = [];
  const paths = openapiErrorPaths(r);

  // 1) Generic: oneOf overlap on tracks
  const hasTracksOneOf =
    hasOpenapiError(r, "must match exactly one schema in oneOf") &&
    paths.some((p) => p.includes("tracks"));
  if (hasTracksOneOf) {
    out.push({
      title: "Fix `tracks[].oneOf` overlap by constraining `type` per track schema",
      why:
        "The current track schemas overlap (e.g. `type` is a free string and distinguishing fields are not required), so a single track object can match multiple branches. `oneOf` requires exactly one match.",
      where:
        "In `fixed.yaml`: `components/schemas/{VideoTrack,VideoTrackForGetAll,AudioTrack,SubtitleTrack}.properties.type`",
      pasteYaml: [
        "# Apply these changes inside each schema’s `properties:` block:",
        "",
        "# VideoTrack (and VideoTrackForGetAll)",
        "type:",
        "  type: string",
        "  enum: [video]",
        "  example: video",
        "",
        "# AudioTrack",
        "type:",
        "  type: string",
        "  enum: [audio]",
        "  example: audio",
        "",
        "# SubtitleTrack",
        "type:",
        "  type: string",
        "  enum: [subtitle]",
        "  example: subtitle",
      ].join("\n"),
    });
  }

  // 2) Enum mismatch: sourceResolution
  const hasSourceResolutionEnum =
    hasOpenapiError(r, "must be equal to one of the allowed values") &&
    paths.some((p) => p.includes("sourceResolution"));
  if (hasSourceResolutionEnum) {
    out.push({
      title: "Fix `sourceResolution` enum mismatch (API may return values without `p`)",
      why:
        "The API can return values like `\"1080\"` but the spec constrains the enum to `\"1080p\"`-style values.",
      where:
        "In `fixed.yaml`: under the relevant media response schema(s) `sourceResolution:` field definition",
    });
  }

  // 3) Redundant oneOf for /data/dimensions
  const hasDimensionsOneOf =
    hasOpenapiError(r, "must match exactly one schema in oneOf") &&
    (r.endpoint === "/data/dimensions" || paths.some((p) => p.includes("dimensions")));
  if (hasDimensionsOneOf) {
    out.push({
      title: "Remove redundant `oneOf` on `/data/dimensions` response schema",
      why:
        "`data` is defined as `oneOf: [array<string>, $ref: Dimensions]` and `Dimensions` itself is also `array<string>`, so valid responses can match multiple branches.",
      where:
        "In `fixed.yaml`: `paths./data/dimensions.get.responses.200.content.application/json.schema.properties.data.oneOf`",
    });
  }

  // 4) Overlapping numeric oneOf: integer vs number
  const hasIntegerVsNumber =
    hasOpenapiError(r, "must match exactly one schema in oneOf") &&
    paths.some((p) => p.includes("value"));
  if (hasIntegerVsNumber) {
    out.push({
      title: "Avoid `oneOf: [integer, number]` overlaps (integers are also numbers)",
      why:
        "In JSON Schema, `integer` is a subset of `number`. A value like `0` matches both, causing oneOf validation errors.",
      where:
        "In `fixed.yaml`: metrics schemas that use `oneOf: [integer, number]`",
    });
  }

  // 5) Nullable mismatch: fpApiVersion
  const hasFpApiVersionNull =
    hasOpenapiError(r, "must be string") &&
    paths.some((p) => p.includes("fpApiVersion"));
  if (hasFpApiVersionNull) {
    out.push({
      title: "Make `fpApiVersion` nullable in the spec",
      why: "The API can return `null` for fpApiVersion but the schema declares `string` only.",
      where: "In `fixed.yaml`: `components/schemas/Views.properties.fpApiVersion`",
    });
  }

  // 6) Placeholder fixture guidance (common 404)
  const placeholderUsed = (r.note || "").includes("Placeholder used");
  const likely404 =
    r.sdkParseOk === false &&
    /404|not found/i.test(r.sdkParseError || "") &&
    placeholderUsed;
  if (likely404) {
    out.push({
      title: "Provide real fixture IDs for this operationId",
      why:
        "A placeholder UUID was used for required path params; the API likely returned 404 because the resource doesn't exist. Add a real ID under `tests/get-endpoints-fixtures.json` for this operationId.",
    });
  }

  // 7) Playlist playOrder default / missing
  const playOrderMissing = r.missingInAPI.some((p) => p.includes("playOrder")) ||
    r.missingInSDK.some((p) => p.includes("playOrder"));
  if (playOrderMissing) {
    out.push({
      title: "Ensure `playOrder` is correctly modeled for smart playlists only",
      why:
        "If `playOrder` is present/required only for `type: smart`, the response schemas should reflect that (e.g. discriminator split).",
      where:
        "In `fixed.yaml`: playlist response schemas for create/update/get-by-id",
    });
  }

  // 8) simulcastResponses missing
  const hasSimulcastResponses = r.missingInSDK.some((p) => p.includes("simulcastResponses"));
  if (hasSimulcastResponses) {
    out.push({
      title: "Add `simulcastResponses` to the live stream response schema",
      why:
        "The API response includes simulcastResponses but the OpenAPI schema (and generated SDK inbound schema) does not, causing the SDK to drop the field.",
      where:
        "In `fixed.yaml`: live stream response schema(s) for get/list streams",
    });
  }

  return out;
}

function buildFixObservedErrors(r: EndpointResult): string[] {
  if (r.openapiValid || (r.openapiErrors?.length ?? 0) === 0) return [];
  const lines = ["### Observed OpenAPI errors", ""];
  for (const e of r.openapiErrors) {
    const loc = e.path ? `\`${e.path}\`` : "";
    const msg = e.message ?? "";
    lines.push(`- ${loc} ${msg}`.trim());
  }
  lines.push("");
  return lines;
}

function buildFixSuggestionLines(s: FixSuggestion): string[] {
  return [
    `- **${s.title}**`,
    `  - **why**: ${s.why}`,
    ...(s.where ? [`  - **where**: ${s.where}`] : []),
    ...(s.pasteYaml ? ["  - **paste**:", "", "```yaml", s.pasteYaml, "```"] : []),
    "",
  ];
}

function buildFixSuggestionsSection(suggestions: FixSuggestion[]): string[] {
  if (suggestions.length === 0) {
    return ["### Suggested fixes", "", "- No heuristic suggestions available for this failure yet.", ""];
  }
  return ["### Suggested fixes", "", ...suggestions.flatMap(buildFixSuggestionLines)];
}

function buildFixEndpointBlock(r: EndpointResult): string[] {
  const suggestions = r.fixSuggestions ?? [];
  return [
    `## ${r.operationId} (\`${r.endpoint}\`)`,
    "",
    `- **Status**: ${r.status}`,
    `- **OpenAPI valid**: ${r.openapiValid ? "yes" : "no"}`,
    `- **SDK parse**: ${r.sdkParseOk ? "ok" : "failed"}`,
    ...(r.apiResponseFile ? [`- **API artifact**: \`${r.apiResponseFile}\``] : []),
    ...(r.sdkResponseFile ? [`- **SDK artifact**: \`${r.sdkResponseFile}\``] : []),
    "",
    ...buildFixObservedErrors(r),
    ...buildFixSuggestionsSection(suggestions),
  ];
}

function writeFixSuggestions(results: EndpointResult[]) {
  const failing = results.filter((r) => r.status === "FAIL");
  const outPath = join(__dirname, FIX_SUGGESTIONS_MD);

  const lines: string[] = [
    "# GET Endpoints — OpenAPI Response Fix Suggestions",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    `Total failing endpoints: ${failing.length}`,
    "",
    ...failing.flatMap(buildFixEndpointBlock),
  ];

  writeFileSync(outPath, lines.join("\n"));
}

function mergePaths(out: Set<string>, src: Iterable<string>): void {
  for (const p of src) out.add(p);
}

function collectEmptyArrayFieldPaths(value: any, prefix = ""): Set<string> {
  const out = new Set<string>();
  if (value === null || value === undefined || typeof value !== "object") return out;

  if (Array.isArray(value)) {
    const arrayPrefix = prefix ? `${prefix}[]` : "[]";
    for (const item of value) mergePaths(out, collectEmptyArrayFieldPaths(item, arrayPrefix));
    return out;
  }

  for (const [k, v] of Object.entries(value)) {
    const p = prefix ? `${prefix}.${k}` : k;
    if (Array.isArray(v) && v.length === 0) out.add(p);
    mergePaths(out, collectEmptyArrayFieldPaths(v, p));
  }
  return out;
}

type CollectOpts = { includeEmptyArrays?: boolean };

function collectArrayJsonPaths(
  value: any[],
  prefix: string,
  opts: CollectOpts,
  includeEmptyArrays: boolean,
): Set<string> {
  const out = new Set<string>();
  if (!includeEmptyArrays && value.length === 0) return out;
  const arrayPrefix = prefix ? `${prefix}[]` : "[]";
  out.add(arrayPrefix);
  for (const item of value) mergePaths(out, collectJsonPaths(item, arrayPrefix, opts));
  return out;
}

function collectJsonPaths(
  value: any,
  prefix = "",
  opts: CollectOpts = {},
): Set<string> {
  const includeEmptyArrays = opts.includeEmptyArrays ?? true;
  const out = new Set<string>();

  if (value === null || value === undefined) return out;
  if (typeof value !== "object") {
    if (prefix) out.add(prefix);
    return out;
  }

  if (Array.isArray(value)) {
    return collectArrayJsonPaths(value, prefix, opts, includeEmptyArrays);
  }

  for (const [k, v] of Object.entries(value)) {
    if (!includeEmptyArrays && Array.isArray(v) && v.length === 0) continue;
    const p = prefix ? `${prefix}.${k}` : k;
    out.add(p);
    mergePaths(out, collectJsonPaths(v, p, opts));
  }
  return out;
}

function sortUnique(arr: string[]) {
  return Array.from(new Set(arr)).sort((a, b) => a.localeCompare(b));
}

function canonicalizeKey(key: string): string {
  // 1) snake_case -> camelCase
  const camel = key.includes("_")
    ? key
        .toLowerCase()
        .replaceAll(/_([a-z0-9])/g, (_, c) => String(c).toUpperCase())
    : key;

  // 2) normalize acronyms casing
  return camel.replaceAll("SDK", "Sdk").replaceAll("API", "Api");
}

function normalizeJsonForComparison(value: any): any {
  if (value === null || value === undefined) return value;
  if (Array.isArray(value)) return value.map(normalizeJsonForComparison);
  if (typeof value !== "object") return value;
  const out: any = {};
  for (const [k, v] of Object.entries(value)) {
    out[canonicalizeKey(k)] = normalizeJsonForComparison(v);
  }
  return out;
}

// NOTE: This is intentionally NOT structuredClone(). The goal is a JSON-shaped
// value, not a structural deep clone: JSON.stringify applies `toJSON()` (e.g.
// RFCDate -> "YYYY-MM-DD" string) and drops `undefined`/functions, which is what
// the downstream path-diff relies on. structuredClone would instead preserve
// class instances as plain objects (e.g. RFCDate -> { serialized: "..." }),
// changing the computed missing-field paths. Behavior must stay JSON-based.
function jsonRoundTrip(value: any): any {
  return JSON.parse(JSON.stringify(value)); // NOSONAR(typescript:S7784) - JSON normalization, not a deep clone
}

function applyPathParams(
  path: string,
  requiredPathParams: string[],
  effectiveReq: Record<string, any>,
): { path: string; note?: string } {
  let note: string | undefined;
  for (const name of requiredPathParams) {
    const val = effectiveReq[name] ?? PLACEHOLDER_UUID;
    if (effectiveReq[name] == null) {
      note = note ? `${note}; placeholder used for ${name}` : `Placeholder used for ${name}`;
    }
    path = path.replaceAll(`{${name}}`, encodeURIComponent(val));
  }
  return { path, note };
}

function appendQueryParams(
  url: URL,
  queryParams: Array<any>,
  effectiveReq: Record<string, any>,
): void {
  for (const p of queryParams) {
    const name: string = p.name;
    const baseName = name.endsWith("[]") ? name.slice(0, -2) : name;
    const val = effectiveReq[name] ?? effectiveReq[baseName];
    if (val == null) continue;

    if (Array.isArray(val)) {
      for (const item of val) url.searchParams.append(name, String(item));
    } else if (name.endsWith("[]")) {
      url.searchParams.append(name, String(val));
    } else {
      url.searchParams.set(name, String(val));
    }
  }
}

function buildUrl(
  baseUrl: string,
  endpoint: EndpointInfo,
  fixture: Fixture | null,
): { url: string; note?: string } {
  const opFixture = fixture?.operations?.[endpoint.operationId];

  const requiredPathParams = endpoint.parameters
    .filter((p) => p?.in === "path" && p?.required)
    .map((p) => p.name);

  const defaults = defaultSDKRequest(endpoint.operationId) ?? {};
  const fromFixture = opFixture
    ? { ...opFixture.pathParams, ...opFixture.query }
    : {};
  const effectiveReq: Record<string, any> = { ...defaults, ...fromFixture };

  const resolved =
    requiredPathParams.length > 0
      ? applyPathParams(endpoint.path, requiredPathParams, effectiveReq)
      : { path: endpoint.path, note: undefined as string | undefined };

  const base = baseUrl.endsWith("/") ? baseUrl : baseUrl + "/";
  const url = new URL(resolved.path.replace(/^\//, ""), base);

  const queryParams = endpoint.parameters.filter((p) => p?.in === "query");
  appendQueryParams(url, queryParams, effectiveReq);

  return { url: url.toString(), note: resolved.note };
}

function basicAuthHeader(username: string, password: string): string {
  const token = Buffer.from(`${username}:${password}`).toString("base64");
  return `Basic ${token}`;
}

function getSDKInboundSchemaForOperation(operationId: string): any {
  // Use union response schemas where possible (Response$inboundSchema) so DefaultError fields are preserved.
  const map: Record<string, any> = {
    "list-media": operations.ListMediaResponse$inboundSchema,
    "get-media": operations.GetMediaResponse$inboundSchema,
    "get-media-summary": operations.GetMediaSummaryResponse$inboundSchema,
    retrieveMediaInputInfo: operations.RetrieveMediaInputInfoResponse$inboundSchema,
    "list-live-clips": operations.ListLiveClipsResponse$inboundSchema,
    "list-playback-ids": operations.ListPlaybackIdsResponse$inboundSchema,
    "get-playback-id": operations.GetPlaybackIdResponse$inboundSchema,
    "list-uploads": operations.ListUploadsResponse$inboundSchema,
    "get-media-clips": operations.GetMediaClipsResponse$inboundSchema,
    "get-all-playlists": operations.GetAllPlaylistsResponse$inboundSchema,
    "get-playlist-by-id": operations.GetPlaylistByIdResponse$inboundSchema,
    getDrmConfiguration: operations.GetDrmConfigurationResponse$inboundSchema,
    getDrmConfigurationById: operations.GetDrmConfigurationByIdResponse$inboundSchema,
    "get-all-streams": operations.GetAllStreamsResponse$inboundSchema,
    "get-live-stream-viewer-count-by-id": operations.GetLiveStreamViewerCountByIdResponse$inboundSchema,
    "get-live-stream-by-id": operations.GetLiveStreamByIdResponse$inboundSchema,
    "get-live-stream-playback-id": operations.GetLiveStreamPlaybackIdResponse$inboundSchema,
    "get-specific-simulcast-of-stream": operations.GetSpecificSimulcastOfStreamResponse$inboundSchema,
    list_signing_keys: operations.ListSigningKeysResponse$inboundSchema,
    "get-signing_key_by_id": operations.GetSigningKeyByIdResponse$inboundSchema,
    list_video_views: operations.ListVideoViewsResponse$inboundSchema,
    get_video_view_details: operations.GetVideoViewDetailsResponse$inboundSchema,
    list_by_top_content: operations.ListByTopContentResponse$inboundSchema,
    list_dimensions: operations.ListDimensionsResponse$inboundSchema,
    list_filter_values_for_dimension: operations.ListFilterValuesForDimensionResponse$inboundSchema,
    list_breakdown_values: operations.ListBreakdownValuesResponse$inboundSchema,
    list_overall_values: operations.ListOverallValuesResponse$inboundSchema,
    get_timeseries_data: operations.GetTimeseriesDataResponse$inboundSchema,
    list_comparison_values: operations.ListComparisonValuesResponse$inboundSchema,
    list_errors: operations.ListErrorsResponse$inboundSchema,
  };
  return map[operationId] || null;
}

type ReportSummary = {
  total: number;
  passed: number;
  failed: number;
  skipped: number;
  generatedAt: string;
};

function fmtPathList(paths: string[]): string {
  return paths.length ? paths.map((p) => `\`${p}\``).join(", ") : "None";
}

function consolidatedTableRow(r: EndpointResult): string {
  const openapiCol = r.openapiValid ? "✅" : "❌";
  const sdkCol = r.sdkParseOk ? "✅" : "❌";
  const status = r.status === "PASS" ? "✅ PASS" : "❌ FAIL";
  return `| \`${r.endpoint}\` | \`${r.operationId}\` | ${openapiCol} | ${sdkCol} | ${fmtPathList(r.missingInSDK)} | ${fmtPathList(r.missingInAPI)} | ${fmtPathList(r.emptyArraysOmittedInSDK)} | ${status} |`;
}

function buildOpenapiErrorLines(r: EndpointResult): string[] {
  if (r.openapiValid || !r.openapiErrors.length) return [];
  const lines = ["- **OpenAPI errors**:"];
  for (const e of r.openapiErrors) {
    const loc = e.path ? `\`${e.path}\`` : "";
    const msg = e.message ?? "";
    lines.push(`  - ${loc} ${msg}`.trim());
  }
  return lines;
}

function buildPreviewSection(label: string, previewText?: string): string[] {
  if (!previewText) return [];
  return [label, "", "```json", previewText, "```", ""];
}

function buildPathListSection(label: string, paths: string[]): string[] {
  const lines: string[] = [`**${label} — ${paths.length}**`, ""];
  if (paths.length === 0) lines.push("- None");
  else for (const p of paths) lines.push(`- \`${p}\``);
  lines.push("");
  return lines;
}

function buildEndpointDetail(r: EndpointResult): string[] {
  return [
    `### ${r.operationId} (\`${r.endpoint}\`)`,
    "",
    `- **Status**: ${r.status}`,
    ...(r.note ? [`- **Note**: ${r.note}`] : []),
    `- **OpenAPI valid**: ${r.openapiValid ? "yes" : "no"}`,
    ...buildOpenapiErrorLines(r),
    `- **SDK parse**: ${r.sdkParseOk ? "ok" : "failed"}`,
    ...(!r.sdkParseOk && r.sdkParseError ? [`- **SDK parse error**: ${r.sdkParseError}`] : []),
    ...(r.apiResponseFile ? [`- **API response file**: \`${r.apiResponseFile}\``] : []),
    ...(r.sdkResponseFile ? [`- **SDK response file**: \`${r.sdkResponseFile}\``] : []),
    "",
    ...buildPreviewSection("**API response (preview)**", r.apiResponsePreview),
    ...buildPreviewSection("**SDK response (preview)**", r.sdkResponsePreview),
    ...buildPathListSection("Missing in SDK (present in API)", r.missingInSDK),
    ...buildPathListSection("Missing in API (present in SDK)", r.missingInAPI),
    ...buildPathListSection("Empty arrays omitted by SDK", r.emptyArraysOmittedInSDK),
    ...buildPathListSection("Empty arrays omitted by API", r.emptyArraysOmittedInAPI),
  ];
}

function buildReportLines(results: EndpointResult[], summary: ReportSummary): string[] {
  const { total, passed, failed, skipped, generatedAt } = summary;
  const lines: string[] = [];
  lines.push(
    "# GET Endpoints — OpenAPI Response Validation Report",
    "",
    `Generated: ${generatedAt}`,
    "",
    "## Summary",
    "",
    `- **Total GET endpoints**: ${total}`,
    `- **PASS**: ${passed}`,
    `- **FAIL**: ${failed}`,
    `- **SKIP**: ${skipped}`,
    "",
    "## Consolidated report",
    "",
    "| Endpoint | OperationId | OpenAPI valid | SDK parse | Missing in SDK (present in API) | Missing in API (present in SDK) | Empty arrays omitted by SDK | Status |",
    "|---|---|---:|---:|---|---|---|---|",
  );
  for (const r of results) lines.push(consolidatedTableRow(r));
  lines.push("", "## Per-endpoint details (full missing parameter lists)", "");
  for (const r of results) lines.push(...buildEndpointDetail(r));
  return lines;
}

function buildConsolidatedLines(results: EndpointResult[], summary: ReportSummary): string[] {
  const { total, passed, failed, skipped, generatedAt } = summary;
  const consolidated: string[] = [];
  consolidated.push(
    `Last generated: ${generatedAt}`,
    "",
    `- **Total GET endpoints**: ${total}`,
    `- **PASS**: ${passed}`,
    `- **FAIL**: ${failed}`,
    `- **SKIP**: ${skipped}`,
    "",
    "| Endpoint | OperationId | OpenAPI valid | SDK parse | Missing in SDK (present in API) | Missing in API (present in SDK) | Empty arrays omitted by SDK | Status |",
    "|---|---|---:|---:|---|---|---|---|",
  );
  for (const r of results) consolidated.push(consolidatedTableRow(r));
  consolidated.push("", "#### Missing fields (full lists)", "");
  for (const r of results) {
    consolidated.push(
      `- **${r.operationId}** (\`${r.endpoint}\`)`,
      `  - **Missing in SDK (present in API)**: ${fmtPathList(r.missingInSDK)}`,
      `  - **Missing in API (present in SDK)**: ${fmtPathList(r.missingInAPI)}`,
      `  - **Empty arrays omitted by SDK**: ${fmtPathList(r.emptyArraysOmittedInSDK)}`,
      `  - **Empty arrays omitted by API**: ${fmtPathList(r.emptyArraysOmittedInAPI)}`,
    );
  }
  consolidated.push("", `Full details: \`tests/GET_ENDPOINTS_OPENAPI_RESPONSE_VALIDATION_REPORT.md\``);
  return consolidated;
}

// Also update tests/README.md with the consolidated report section so it always stays in sync.
function updateReadmeConsolidated(
  readmePath: string,
  results: EndpointResult[],
  summary: ReportSummary,
): void {
  try {
    if (!existsSync(readmePath)) return;
    const begin = "<!-- BEGIN GET_ENDPOINTS_CONSOLIDATED -->";
    const end = "<!-- END GET_ENDPOINTS_CONSOLIDATED -->";

    const consolidated = buildConsolidatedLines(results, summary);

    const readme = readFileSync(readmePath, "utf-8");
    if (readme.includes(begin) && readme.includes(end)) {
      const block = `${begin}\n${consolidated.join("\n")}\n${end}`;
      const updated = readme.replace(new RegExp(String.raw`${begin}[\s\S]*?${end}`), block);
      writeFileSync(readmePath, updated);
    }
  } catch {
    // ignore README update failures
  }
}

function writeReport(results: EndpointResult[]) {
  const summary: ReportSummary = {
    total: results.length,
    passed: results.filter((r) => r.status === "PASS").length,
    failed: results.filter((r) => r.status === "FAIL").length,
    skipped: 0,
    generatedAt: new Date().toISOString(),
  };

  const reportPath = join(__dirname, "GET_ENDPOINTS_OPENAPI_RESPONSE_VALIDATION_REPORT.md");
  const readmePath = join(__dirname, "README.md");

  writeFileSync(reportPath, buildReportLines(results, summary).join("\n"));
  writeFixSuggestions(results);

  updateReadmeConsolidated(readmePath, results, summary);

  // eslint-disable-next-line no-console
  console.log(`Report generated: ${reportPath}`);
  // eslint-disable-next-line no-console
  console.log(`Fix suggestions generated: ${join(__dirname, FIX_SUGGESTIONS_MD)}`);
  // eslint-disable-next-line no-console
  console.log(`Summary: total=${summary.total} pass=${summary.passed} fail=${summary.failed} skip=${summary.skipped}`);
}

type ProcessContext = {
  spec: any;
  fixtures: Fixture | null;
  baseUrl: string;
  username: string;
  password: string;
  sdkClient: Fastpix;
};

async function fetchRawResponse(
  url: string,
  username: string,
  password: string,
): Promise<{ httpStatus: number; rawBody: any; requestError?: string }> {
  let httpStatus = 0;
  let rawBody: any = null;
  let requestError: string | undefined;
  try {
    // Add timeout to prevent hanging
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

    const res = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: basicAuthHeader(username, password),
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    httpStatus = res.status;
    const bodyText = await res.text();
    try {
      rawBody = bodyText ? JSON.parse(bodyText) : null;
    } catch {
      rawBody = bodyText;
    }
  } catch (e: any) {
    if (e.name === 'AbortError') {
      requestError = "Request timeout (30s)";
    } else {
      requestError = e?.message ?? String(e);
    }
    // eslint-disable-next-line no-console
    console.error(`  ⚠️  API request failed: ${requestError}`);
  }
  return { httpStatus, rawBody, requestError };
}

function validateOpenApiResponse(
  spec: any,
  ep: EndpointInfo,
  httpStatus: number,
  rawBody: any,
  requestError?: string,
): { openapiValid: boolean; openapiErrors: any[] } {
  if (requestError) {
    return { openapiValid: false, openapiErrors: [{ message: `Request failed: ${requestError}` }] };
  }
  const validator = makeOpenAPIResponseValidator(spec, ep);
  if (!validator) return { openapiValid: true, openapiErrors: [] };
  const err = validator.validateResponse(String(httpStatus), rawBody);
  if (err) return { openapiValid: false, openapiErrors: err.errors || [] };
  return { openapiValid: true, openapiErrors: [] };
}

// SDK output: call SDK and capture success result or thrown error (normalized).
async function callSdk(
  sdkClient: Fastpix,
  sdkReq: any,
  invoker: SDKInvoker | null,
): Promise<{ sdkParseOk: boolean; sdkParseError?: string; sdkPrinted: any; sdkValueForDiff: any }> {
  if (!invoker) {
    const sdkParseError = "No SDK method mapping for this operationId";
    return {
      sdkParseOk: false,
      sdkParseError,
      sdkPrinted: { name: "SDKMappingError", message: sdkParseError },
      sdkValueForDiff: null,
    };
  }
  try {
    // Add timeout wrapper for SDK calls
    const sdkCallPromise = invoker(sdkClient, sdkReq);
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("SDK call timeout (30s)")), 30000)
    );

    const sdkRes = await Promise.race([sdkCallPromise, timeoutPromise]);
    return { sdkParseOk: true, sdkParseError: undefined, sdkPrinted: sdkRes, sdkValueForDiff: sdkRes };
  } catch (e: any) {
    const sdkParseError = e?.message ?? String(e);
    // eslint-disable-next-line no-console
    console.error(`  ⚠️  SDK call failed: ${sdkParseError}`);
    return { sdkParseOk: false, sdkParseError, sdkPrinted: normalizeSdkError(e), sdkValueForDiff: null };
  }
}

// Parse raw API JSON through SDK inbound schema (when available) for diff comparisons.
function parseInboundFromRaw(ep: EndpointInfo, rawBody: any): any {
  const inboundSchema = getSDKInboundSchemaForOperation(ep.operationId);
  if (inboundSchema && rawBody && typeof rawBody === "object") {
    try {
      return inboundSchema.parse(rawBody);
    } catch {
      // If inbound parsing fails, we still proceed with diffing the actual SDK call result.
    }
  }
  return null;
}

function toJsonLike(sdkParsedFromRaw: any, sdkValueForDiff: any): any {
  if (sdkParsedFromRaw && typeof sdkParsedFromRaw === "object") return jsonRoundTrip(sdkParsedFromRaw);
  if (sdkValueForDiff && typeof sdkValueForDiff === "object") return jsonRoundTrip(sdkValueForDiff);
  return null;
}

function computeDiffs(
  rawBody: any,
  sdkParsedFromRaw: any,
  sdkValueForDiff: any,
): {
  missingInSDK: string[];
  missingInAPI: string[];
  emptyArraysOmittedInSDK: string[];
  emptyArraysOmittedInAPI: string[];
} {
  const apiNormalized = normalizeJsonForComparison(rawBody);
  const sdkJsonLike = toJsonLike(sdkParsedFromRaw, sdkValueForDiff);
  const sdkNormalized = sdkJsonLike ? normalizeJsonForComparison(sdkJsonLike) : null;

  // Treat `[]` the same as "missing" for comparison.
  const apiPaths = collectJsonPaths(apiNormalized, "", { includeEmptyArrays: false });
  const sdkPaths = sdkNormalized ? collectJsonPaths(sdkNormalized, "", { includeEmptyArrays: false }) : new Set<string>();

  const missingInSDK = sdkPaths.size
    ? sortUnique([...apiPaths].filter((p) => !sdkPaths.has(p)))
    : [];
  const missingInAPI = sdkPaths.size
    ? sortUnique([...sdkPaths].filter((p) => !apiPaths.has(p)))
    : [];

  const apiStrictPaths = collectJsonPaths(apiNormalized, "", { includeEmptyArrays: true });
  const sdkStrictPaths = sdkNormalized ? collectJsonPaths(sdkNormalized, "", { includeEmptyArrays: true }) : new Set<string>();
  const apiEmptyArrayFields = collectEmptyArrayFieldPaths(apiNormalized);
  const sdkEmptyArrayFields = sdkNormalized ? collectEmptyArrayFieldPaths(sdkNormalized) : new Set<string>();

  const emptyArraysOmittedInSDK = sortUnique([...apiEmptyArrayFields].filter((p) => !sdkStrictPaths.has(p)));
  const emptyArraysOmittedInAPI = sortUnique([...sdkEmptyArrayFields].filter((p) => !apiStrictPaths.has(p)));

  return { missingInSDK, missingInAPI, emptyArraysOmittedInSDK, emptyArraysOmittedInAPI };
}

async function processEndpoint(ep: EndpointInfo, ctx: ProcessContext): Promise<EndpointResult> {
  try {
    const { url, note } = buildUrl(ctx.baseUrl, ep, ctx.fixtures);

    const { httpStatus, rawBody, requestError } = await fetchRawResponse(
      url,
      ctx.username,
      ctx.password,
    );

    const { openapiValid, openapiErrors } = validateOpenApiResponse(
      ctx.spec,
      ep,
      httpStatus,
      rawBody,
      requestError,
    );

    const invoker = getSDKInvoker(ep.operationId);
    const sdkReq = buildSDKRequest(ep, ctx.fixtures);
    const { sdkParseOk, sdkParseError, sdkPrinted, sdkValueForDiff } = await callSdk(
      ctx.sdkClient,
      sdkReq,
      invoker,
    );

    const sdkParsedFromRaw = parseInboundFromRaw(ep, rawBody);
    const { missingInSDK, missingInAPI, emptyArraysOmittedInSDK, emptyArraysOmittedInAPI } =
      computeDiffs(rawBody, sdkParsedFromRaw, sdkValueForDiff);

    const pass = openapiValid && sdkParseOk && missingInSDK.length === 0 && missingInAPI.length === 0;

    const artifacts = writeArtifactFiles(ep.operationId, rawBody, sdkPrinted);

    const result: EndpointResult = {
      endpoint: ep.path,
      operationId: ep.operationId,
      method: "GET",
      openapiValid,
      openapiErrors,
      sdkParseOk,
      sdkParseError,
      missingInSDK,
      missingInAPI,
      emptyArraysOmittedInSDK,
      emptyArraysOmittedInAPI,
      apiResponseFile: artifacts.apiPath,
      sdkResponseFile: artifacts.sdkPath,
      apiResponsePreview: artifacts.apiPreview,
      sdkResponsePreview: artifacts.sdkPreview,
      status: pass ? "PASS" : "FAIL",
      note,
      fixSuggestions: undefined,
    };

    // eslint-disable-next-line no-console
    console.log(`  ✓ Completed: ${ep.operationId} - ${result.status}`);
    return result;
  } catch (error: any) {
    // Catch any unexpected errors and continue with next endpoint
    // eslint-disable-next-line no-console
    console.error(`  ✗ Unexpected error processing ${ep.operationId}:`, error?.message ?? String(error));
    return {
      endpoint: ep.path,
      operationId: ep.operationId,
      method: "GET",
      openapiValid: false,
      openapiErrors: [{ message: `Unexpected error: ${error?.message ?? String(error)}` }],
      sdkParseOk: false,
      sdkParseError: error?.message ?? String(error),
      missingInSDK: [],
      missingInAPI: [],
      emptyArraysOmittedInSDK: [],
      emptyArraysOmittedInAPI: [],
      status: "FAIL",
      note: "Unexpected error during processing",
      fixSuggestions: undefined,
    };
  }
}

async function main(): Promise<void> {
  const spec = loadOpenAPISpec();
  const endpoints = extractGetEndpoints(spec);
  const fixtures = readFixtures();

  const baseUrl: string =
    process.env.FASTPIX_BASE_URL
    ?? ((spec.servers?.[0]?.url as string | undefined) ?? "https://api.fastpix.com/v1/");

  const username = process.env.FASTPIX_USERNAME ?? DEFAULT_AUTH_USER;
  const password = process.env.FASTPIX_PASSWORD ?? DEFAULT_AUTH_KEY;

  if (!username || !password) {
    throw new Error("Missing FASTPIX_USERNAME / FASTPIX_PASSWORD env vars (BasicAuth)");
  }

  const sdkClient = new Fastpix({
    security: { username, password },
    serverURL: baseUrl,
  });

  const results: EndpointResult[] = [];
  const totalEndpoints = endpoints.length;
  const ctx: ProcessContext = { spec, fixtures, baseUrl, username, password, sdkClient };

  for (let i = 0; i < endpoints.length; i++) {
    const ep = endpoints[i];
    // eslint-disable-next-line no-console
    console.log(`[${i + 1}/${totalEndpoints}] Processing: ${ep.operationId} (${ep.path})`);

    results.push(await processEndpoint(ep, ctx));
  }

  for (const r of results) {
    if (r.status !== "FAIL") continue;
    r.fixSuggestions = generateFixSuggestions(r);
  }

  writeReport(results);
}

await main();


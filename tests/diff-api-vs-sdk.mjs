// One-shot diff over GET artifact pairs.
// For each <op>.api.json + <op>.sdk.json pair:
//   - missingInSDK  : paths in API not in SDK
//   - nullInSDKNotInAPI : paths in SDK whose value is null AND not present in API
import { readdirSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ARTIFACTS = join(__dirname, "artifacts");

function canonicalKey(k) {
  const camel = k.includes("_")
    ? k.toLowerCase().replace(/_([a-z0-9])/g, (_, c) => c.toUpperCase())
    : k;
  return camel.replaceAll("SDK", "Sdk").replaceAll("API", "Api");
}

// Collect leaf+intermediate paths. For SDK side, also track which paths have a
// null value so we can isolate "field exists but value is null" cases.
function collectPaths(value, prefix = "", out = new Map()) {
  if (value === undefined) return out;
  if (value === null) {
    if (prefix) out.set(prefix, "null");
    return out;
  }
  if (typeof value !== "object") {
    if (prefix) out.set(prefix, "value");
    return out;
  }
  if (Array.isArray(value)) {
    // treat [] same as missing — skip empty arrays for comparison
    if (value.length === 0) return out;
    const p = prefix ? `${prefix}[]` : "[]";
    out.set(p, "array");
    for (const item of value) collectPaths(item, p, out);
    return out;
  }
  for (const [k, v] of Object.entries(value)) {
    if (Array.isArray(v) && v.length === 0) continue;
    const ck = canonicalKey(k);
    const p = prefix ? `${prefix}.${ck}` : ck;
    out.set(p, v === null ? "null" : typeof v === "object" ? "object" : "value");
    collectPaths(v, p, out);
  }
  return out;
}

const files = readdirSync(ARTIFACTS);
const ops = new Set();
for (const f of files) {
  const m = f.match(/^(.+)\.(api|sdk)\.json$/);
  if (m) ops.add(m[1]);
}

const report = [];
for (const op of [...ops].sort()) {
  const apiPath = join(ARTIFACTS, `${op}.api.json`);
  const sdkPath = join(ARTIFACTS, `${op}.sdk.json`);
  let api, sdk;
  try {
    api = JSON.parse(readFileSync(apiPath, "utf-8"));
    sdk = JSON.parse(readFileSync(sdkPath, "utf-8"));
  } catch {
    continue;
  }

  const apiPaths = collectPaths(api);
  const sdkPaths = collectPaths(sdk);

  // Missing in SDK = in API but not in SDK
  const missingInSDK = [...apiPaths.keys()].filter((p) => !sdkPaths.has(p));
  // Null in SDK not in API = SDK path has null value AND API does not have that path
  const nullInSDKNotInAPI = [...sdkPaths.entries()]
    .filter(([p, kind]) => kind === "null" && !apiPaths.has(p))
    .map(([p]) => p);

  if (missingInSDK.length === 0 && nullInSDKNotInAPI.length === 0) continue;

  report.push({ op, missingInSDK: missingInSDK.sort(), nullInSDKNotInAPI: nullInSDKNotInAPI.sort() });
}

// Print compact summary
console.log(`\nEndpoints with mismatches: ${report.length}\n`);
for (const r of report) {
  console.log(`── ${r.op} ──`);
  if (r.missingInSDK.length) {
    console.log(`  Missing in SDK (${r.missingInSDK.length}): ${r.missingInSDK.join(", ")}`);
  }
  if (r.nullInSDKNotInAPI.length) {
    console.log(`  Null in SDK, absent in API (${r.nullInSDKNotInAPI.length}): ${r.nullInSDKNotInAPI.join(", ")}`);
  }
  console.log();
}

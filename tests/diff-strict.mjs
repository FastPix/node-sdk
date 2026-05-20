// Strict diff: compare each api.json / sdk.json pair WITHOUT canonicalizing keys.
// Surfaces any field-name divergence the validator's fuzzy comparison hides.
// Skips endpoints where the SDK threw (API artifact has success:false), since
// those are 4xx test-data failures, not schema drift.

import { readdirSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ARTIFACTS = join(__dirname, "artifacts");

function collectPathsStrict(value, prefix = "", out = new Set()) {
  if (value === undefined || value === null) return out;
  if (typeof value !== "object") return out;
  if (Array.isArray(value)) {
    if (value.length === 0) return out;
    const p = prefix ? `${prefix}[]` : "[]";
    for (const item of value) collectPathsStrict(item, p, out);
    return out;
  }
  for (const [k, v] of Object.entries(value)) {
    const p = prefix ? `${prefix}.${k}` : k;
    out.add(p);
    collectPathsStrict(v, p, out);
  }
  return out;
}

const files = readdirSync(ARTIFACTS);
const ops = new Set();
for (const f of files) {
  const m = f.match(/^(.+)\.(api|sdk)\.json$/);
  if (m) ops.add(m[1]);
}

let totalIssues = 0;
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
  // Skip error-response artifacts (test-data noise)
  if (api && api.success === false) continue;
  // Skip if SDK was an error envelope (it threw)
  if (sdk && sdk.statusCode && sdk.statusCode >= 400) continue;

  const apiPaths = collectPathsStrict(api);
  const sdkPaths = collectPathsStrict(sdk);

  const missingInSDK = [...apiPaths].filter((p) => !sdkPaths.has(p));
  const extraInSDK = [...sdkPaths].filter((p) => !apiPaths.has(p));

  if (!missingInSDK.length && !extraInSDK.length) continue;

  // Skip events[] inner paths — kept per direction
  const filteredMissing = missingInSDK.filter(
    (p) => !p.startsWith("data.events[]"),
  );
  const filteredExtra = extraInSDK.filter(
    (p) => !p.startsWith("data.events[]"),
  );

  if (!filteredMissing.length && !filteredExtra.length) continue;
  totalIssues++;
  console.log(`\n── ${op} ──`);
  if (filteredMissing.length) {
    console.log(`  Missing in SDK (${filteredMissing.length}):`);
    for (const p of filteredMissing.sort()) console.log(`    - ${p}`);
  }
  if (filteredExtra.length) {
    console.log(`  Extra in SDK (${filteredExtra.length}):`);
    for (const p of filteredExtra.sort()) console.log(`    - ${p}`);
  }
}
console.log(`\nEndpoints with real (non-events, non-error) mismatches: ${totalIssues}`);

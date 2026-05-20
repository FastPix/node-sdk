// Per-endpoint strict diff for every PASSED endpoint (SDK call resolved).
// Reports: clean match, or specific field-name differences.
//   - missingInSDK: API has the field, SDK doesn't
//   - extraInSDK: SDK has the field, API doesn't
// Skips: artifacts where the SDK threw / API returned an error envelope.

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

const sorted = [...ops].sort();
let clean = 0;
let dirty = 0;
let skipped = 0;
const dirtyDetails = [];

for (const op of sorted) {
  const apiPath = join(ARTIFACTS, `${op}.api.json`);
  const sdkPath = join(ARTIFACTS, `${op}.sdk.json`);
  let api, sdk;
  try {
    api = JSON.parse(readFileSync(apiPath, "utf-8"));
    sdk = JSON.parse(readFileSync(sdkPath, "utf-8"));
  } catch {
    continue;
  }
  // Skip 4xx/error artifacts — not real schema comparisons
  if (api && api.success === false) {
    skipped++;
    continue;
  }
  if (sdk && sdk.statusCode && sdk.statusCode >= 400) {
    skipped++;
    continue;
  }

  const apiPaths = collectPathsStrict(api);
  const sdkPaths = collectPathsStrict(sdk);

  const missingInSDK = [...apiPaths].filter((p) => !sdkPaths.has(p)).sort();
  const extraInSDK = [...sdkPaths].filter((p) => !apiPaths.has(p)).sort();

  if (missingInSDK.length === 0 && extraInSDK.length === 0) {
    clean++;
    console.log(`✅  ${op}`);
  } else {
    dirty++;
    dirtyDetails.push({ op, missingInSDK, extraInSDK });
    console.log(
      `⚠️  ${op}  (missing: ${missingInSDK.length}, extra: ${extraInSDK.length})`,
    );
  }
}

if (dirtyDetails.length) {
  console.log("\n=== Details ===");
  for (const { op, missingInSDK, extraInSDK } of dirtyDetails) {
    console.log(`\n── ${op} ──`);
    if (missingInSDK.length) {
      console.log(`  Missing in SDK (API has, SDK doesn't): ${missingInSDK.length}`);
      for (const p of missingInSDK) console.log(`    - ${p}`);
    }
    if (extraInSDK.length) {
      console.log(`  Extra in SDK (SDK has, API doesn't): ${extraInSDK.length}`);
      for (const p of extraInSDK) console.log(`    - ${p}`);
    }
  }
}

console.log(
  `\nSummary: clean=${clean} dirty=${dirty} skipped(error-responses)=${skipped}  total=${clean + dirty + skipped}`,
);

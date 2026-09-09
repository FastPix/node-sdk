import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

/**
 * B.9 — every resource method's declared return type must equal the operations
 * class it actually deserializes on the success path. A drift here means the
 * type checker promises `.data.x` on a shape the SDK never returns. This scans
 * the source so it can never silently regress.
 */

const FUNCS_DIR = join(__dirname, "../src/funcs");
const SDK_DIR = join(__dirname, "../src/sdk");

// func name -> operations.<X> deserialized on the first 2xx match
function funcDeserializedTypes(): Record<string, string> {
  const map: Record<string, string> = {};
  for (const file of readdirSync(FUNCS_DIR).filter((f) => f.endsWith(".ts"))) {
    const src = readFileSync(join(FUNCS_DIR, file), "utf8");
    const fn = src.match(/export function ([A-Za-z0-9_]+)\(/);
    const success = src.match(
      /M\.json\(\s*2\d\d,\s*operations\.([A-Za-z0-9_]+)\$inboundSchema/,
    );
    if (fn && success) map[fn[1]!] = success[1]!;
  }
  return map;
}

// { method, declaredReturn, funcName, file } for each async resource method
function sdkMethods() {
  const out: Array<{ method: string; ret: string; fn: string; file: string }> = [];
  const re =
    /async\s+([A-Za-z0-9_]+)\([^)]*\)[^{]*?:\s*Promise<\s*operations\.([A-Za-z0-9_]+)\s*>[^{]*\{\s*return\s+unwrapAsync\(\s*([A-Za-z0-9_]+)\(/gs;
  for (const file of readdirSync(SDK_DIR).filter((f) => f.endsWith(".ts"))) {
    const src = readFileSync(join(SDK_DIR, file), "utf8");
    for (const m of src.matchAll(re)) {
      out.push({ method: m[1]!, ret: m[2]!, fn: m[3]!, file });
    }
  }
  return out;
}

describe("resource method return types (B.9)", () => {
  const deser = funcDeserializedTypes();
  const methods = sdkMethods();

  it("scans the full surface (guard against a vacuous pass)", () => {
    expect(methods.length).toBeGreaterThanOrEqual(70);
  });

  for (const { method, ret, fn, file } of methods) {
    it(`${file} ${method}() returns what ${fn} deserializes`, () => {
      const deserialized = deser[fn];
      // Every resource method routes through a func with a 2xx JSON matcher.
      expect(deserialized, `no 2xx matcher found in ${fn}`).toBeDefined();
      expect(ret).toBe(deserialized);
    });
  }
});

// Check every external URL across all markdown files for broken links.
// Uses HEAD first, falls back to GET if HEAD fails. Treats 2xx/3xx as OK.
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

function walk(dir, out = []) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    const st = statSync(p);
    if (st.isDirectory()) {
      if (["node_modules", ".git", "dist"].includes(f)) continue;
      walk(p, out);
    } else if (f.endsWith(".md")) out.push(p);
  }
  return out;
}

const mdFiles = walk(ROOT);
const urlToFiles = new Map(); // url -> Set(files)
const urlRe = /https?:\/\/[^\s"'<>()[\]`]+/g;

for (const f of mdFiles) {
  const content = readFileSync(f, "utf-8");
  for (const m of content.matchAll(urlRe)) {
    let url = m[0].replace(/[.,;:)\]]+$/, ""); // strip trailing punctuation
    if (!urlToFiles.has(url)) urlToFiles.set(url, new Set());
    urlToFiles.get(url).add(f.replace(ROOT + "/", ""));
  }
}

const urls = [...urlToFiles.keys()].sort();
console.log(`Checking ${urls.length} unique URLs across ${mdFiles.length} markdown files...\n`);

async function checkUrl(url) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 15000);
  try {
    let res = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      signal: ctrl.signal,
      headers: { "User-Agent": "Mozilla/5.0 (link-checker)" },
    });
    // Many servers reject HEAD (405) — fall back to GET range.
    if (res.status === 405 || res.status === 403 || res.status === 0) {
      res = await fetch(url, {
        method: "GET",
        redirect: "follow",
        signal: ctrl.signal,
        headers: { "User-Agent": "Mozilla/5.0 (link-checker)", Range: "bytes=0-0" },
      });
    }
    return { ok: res.ok || (res.status >= 200 && res.status < 400), status: res.status };
  } catch (e) {
    return { ok: false, status: 0, error: e.name === "AbortError" ? "timeout" : e.message };
  } finally {
    clearTimeout(timer);
  }
}

const broken = [];
const concurrency = 10;
let idx = 0;
async function worker() {
  while (idx < urls.length) {
    const i = idx++;
    const url = urls[i];
    const r = await checkUrl(url);
    const tag = r.ok ? "✅" : "❌";
    const status = r.status || r.error || "?";
    process.stdout.write(
      `${tag} [${String(i + 1).padStart(3)}/${urls.length}] ${status}  ${url}\n`,
    );
    if (!r.ok) broken.push({ url, status: r.status, error: r.error, files: [...urlToFiles.get(url)] });
  }
}
await Promise.all(Array.from({ length: concurrency }, worker));

console.log(`\n=== Broken links: ${broken.length} ===`);
for (const b of broken) {
  console.log(`\n${b.url}`);
  console.log(`  status: ${b.status || b.error}`);
  console.log(`  appears in:`);
  for (const f of b.files) console.log(`    - ${f}`);
}

// Build OLD → NEW URL mapping by pairing <a href="...">text</a> entries
// across old-yaml.yaml and fixed.yaml. Then apply to every README under
// the repo (excluding node_modules and the yaml files themselves).
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

// Parse all <a href="URL">TEXT</a> pairs in a yaml.
function extractAnchors(yamlPath) {
  const text = readFileSync(yamlPath, "utf-8");
  const re = /<a href="(https?:\/\/[^"]+)"[^>]*>([^<]+)<\/a>/g;
  const map = new Map(); // text → set of urls
  let m;
  while ((m = re.exec(text))) {
    const url = m[1].trim();
    const linkText = m[2].trim();
    if (!map.has(linkText)) map.set(linkText, new Set());
    map.get(linkText).add(url);
  }
  return map;
}

const oldMap = extractAnchors(join(ROOT, "old-yaml.yaml"));
const newMap = extractAnchors(join(ROOT, "fixed.yaml"));

// Build oldURL → newURL by linkText match.
const urlMap = new Map();
for (const [text, oldUrls] of oldMap) {
  const newUrls = newMap.get(text);
  if (!newUrls) continue;
  // Prefer same-domain replacement; pick first new url
  const newUrl = [...newUrls][0];
  for (const oldUrl of oldUrls) {
    if (oldUrl !== newUrl) urlMap.set(oldUrl, newUrl);
  }
}

// Sort longest first to avoid prefix collisions in replacement
const sortedKeys = [...urlMap.keys()].sort((a, b) => b.length - a.length);

// Walk all .md files (excluding node_modules)
function walk(dir, out = []) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    const st = statSync(p);
    if (st.isDirectory()) {
      if (f === "node_modules" || f === ".git" || f === "dist") continue;
      walk(p, out);
    } else if (f.endsWith(".md")) {
      out.push(p);
    }
  }
  return out;
}

const mdFiles = walk(ROOT);
let totalReplacements = 0;
let filesChanged = 0;

for (const file of mdFiles) {
  let content = readFileSync(file, "utf-8");
  let changed = false;
  let fileCount = 0;
  for (const oldUrl of sortedKeys) {
    const newUrl = urlMap.get(oldUrl);
    if (content.includes(oldUrl)) {
      const count = (
        content.match(new RegExp(oldUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g")) || []
      ).length;
      content = content.split(oldUrl).join(newUrl);
      totalReplacements += count;
      fileCount += count;
      changed = true;
    }
  }
  if (changed) {
    writeFileSync(file, content);
    filesChanged++;
    console.log(`  ${file.replace(ROOT + "/", "")}  (${fileCount} replacements)`);
  }
}

console.log(
  `\nSummary: ${urlMap.size} URL mappings, ${totalReplacements} replacements across ${filesChanged} files.`,
);

// Diagnostic: orphan old URLs in markdown that didn't have a new-yaml counterpart
const allOldUrlsInMd = new Set();
for (const file of mdFiles) {
  const c = readFileSync(file, "utf-8");
  for (const m of c.matchAll(/https?:\/\/docs\.fastpix\.[^\s"')<>]+/g)) {
    allOldUrlsInMd.add(m[0]);
  }
}
if (allOldUrlsInMd.size) {
  console.log(`\nUnmapped old docs.fastpix URLs still in markdown:`);
  for (const u of [...allOldUrlsInMd].sort()) console.log(`  ${u}`);
}

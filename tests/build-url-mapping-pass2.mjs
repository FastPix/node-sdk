// Second-pass URL replacements for entries that didn't match by link text.
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const urlMap = {
  "https://docs.fastpix.com/": "https://fastpix.com/docs/",
  "https://docs.fastpix.com/changelog/api-update-direct-upload-media-from-device":
    "https://fastpix.com/docs/changelog/api-update-direct-upload-media-from-device",
  "https://docs.fastpix.com/docs/basic-authentication":
    "https://fastpix.com/docs/getting-started/activate-your-account#authentication-format",
  "https://docs.fastpix.com/docs/live-stream-overview":
    "https://fastpix.com/docs/get-started/live-overview",
  "https://docs.fastpix.com/docs/video-data-overview":
    "https://fastpix.com/docs/concepts/what-video-data-do-we-capture",
  // No 1:1 replacement in fixed.yaml. Closest user-facing page for the
  // signing-keys concept lives under video-security:
  "https://docs.fastpix.com/reference/signingkeys-overview":
    "https://fastpix.com/docs/video-security/secure-media-access-with-jwts",
};

const sortedKeys = Object.keys(urlMap).sort((a, b) => b.length - a.length);

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
  let fileCount = 0;
  for (const oldUrl of sortedKeys) {
    const newUrl = urlMap[oldUrl];
    if (content.includes(oldUrl)) {
      const count = content.split(oldUrl).length - 1;
      content = content.split(oldUrl).join(newUrl);
      fileCount += count;
    }
  }
  if (fileCount > 0) {
    writeFileSync(file, content);
    filesChanged++;
    totalReplacements += fileCount;
    console.log(`  ${file.replace(ROOT + "/", "")}  (${fileCount} replacements)`);
  }
}
console.log(`\nPass 2: ${totalReplacements} replacements across ${filesChanged} files.`);

// Verify no docs.fastpix URLs remain
const remaining = new Set();
for (const file of mdFiles) {
  const c = readFileSync(file, "utf-8");
  for (const m of c.matchAll(/https?:\/\/docs\.fastpix\.[^\s"')<>]+/g)) {
    remaining.add(`${m[0]}  (in ${file.replace(ROOT + "/", "")})`);
  }
}
if (remaining.size) {
  console.log(`\nStill-unresolved docs.fastpix URLs:`);
  for (const u of [...remaining].sort()) console.log(`  ${u}`);
} else {
  console.log(`\n✅  Zero docs.fastpix URLs remain in any markdown file.`);
}

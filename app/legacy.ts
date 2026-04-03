import fs from "node:fs";
import path from "node:path";

function readHtmlFile(filename: string) {
  return fs.readFileSync(path.join(process.cwd(), filename), "utf8");
}

function extractBodyMarkup(html: string) {
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const body = bodyMatch ? bodyMatch[1] : html;

  return body
    .replace(/<script[^>]*src="script\.js"[^>]*><\/script>/i, "")
    .replace(/action="\/thank-you\.html"/gi, 'action="/thank-you"')
    .replace(/src="assets\//gi, 'src="/assets/')
    .trim();
}

export function getLegacyHomeMarkup() {
  return extractBodyMarkup(readHtmlFile("source-index.html"));
}

export function getLegacyThankYouMarkup() {
  return extractBodyMarkup(readHtmlFile("source-thank-you.html"));
}

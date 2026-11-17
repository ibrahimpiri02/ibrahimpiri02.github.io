import fs from "node:fs";
import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { PAGES, NOT_FOUND, SITE_URL } from "./src/pages.js";

const escape = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

/** Swap the page-specific tags in the built index.html. */
function withMeta(html, { title, description, url }) {
  const set = (attr, key, value) => {
    const re = new RegExp(`(<meta ${attr}="${key}" content=")[^"]*(")`);
    if (!re.test(html)) throw new Error(`index.html is missing <meta ${attr}="${key}">`);
    html = html.replace(re, `$1${escape(value)}$2`);
  };
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escape(title)}</title>`);
  set("name", "description", description);
  set("property", "og:title", title);
  set("property", "og:description", description);
  set("name", "twitter:title", title);
  set("name", "twitter:description", description);
  if (url) {
    set("property", "og:url", url);
    html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);
  }
  return html;
}

/**
 * GitHub Pages has no SPA fallback, so write a real HTML file for every page (mireta.html, ...)
 * (each with its own title and link-preview tags) plus a 404.html that boots
 * the app for anything else.
 */
function staticPages() {
  let outDir;
  return {
    name: "static-pages",
    apply: "build",
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      const base = fs.readFileSync(path.join(outDir, "index.html"), "utf8");
      for (const page of PAGES) {
        // GitHub Pages serves /mireta from mireta.html without adding a trailing slash.
        const file = page.path === "/" ? "index.html" : `${page.path.slice(1)}.html`;
        const dest = path.join(outDir, file);
        fs.writeFileSync(dest, withMeta(base, { ...page, url: SITE_URL + (page.path === "/" ? "/" : page.path) }));
      }
      fs.writeFileSync(path.join(outDir, "404.html"), withMeta(base, NOT_FOUND));
    },
  };
}

export default defineConfig({
  plugins: [react(), staticPages()],
  base: "/",
});

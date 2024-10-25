import { defineConfig } from "vite";
import monkey, { util, cdn } from "vite-plugin-monkey";
import AutoImport from "unplugin-auto-import/vite";
import userscript from "./src/userscript.meta";

export default defineConfig({
  plugins: [
    AutoImport({
      imports: [util.unimportPreset],
    }),
    monkey({
      userscript,
      entry: "src/main.js",
      build: {
        externalGlobals: {
          jquery: cdn
            .unpkg("jquery", "dist/jquery.min.js")
            .concat(util.dataUrl(";window.jquery=jQuery;")),
          jsmind: cdn
            .unpkg("jsmind", "es6/jsmind.js")
            .concat(util.dataUrl(";window.jsmind=jsMind;")),
          beautifier: cdn
            .unpkg("beautifier")
            .concat(
              util.dataUrl(
                ";window.beautifier=js_beautify;window.js_beautify=js_beautify;window.css_beautify=css_beautify;"
              )
            ),
          "highlight.js": [
            "hljs",
            (version) =>
              `https://unpkg.com/@highlightjs/cdn-assets@${version}/highlight.min.js`,
          ].concat(util.dataUrl(";window.hljs=hljs;")),
        },
        systemjs: cdn.unpkg()[1],
        cssSideEffects: () => {
          return (e) => {
            // 是否向document.head插入样式
            window.addEventListener("message", (event) => {
              const { data } = event;
              if (!data?.addStyle) {
                return;
              }

              if (typeof GM_addStyle == "function") {
                GM_addStyle(e);
                return;
              }

              const o = document.createElement("style");
              o.textContent = e;
              document.head.append(o);
            });
          };
        },
      },
    }),
  ],
});

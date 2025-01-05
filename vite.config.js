import { defineConfig } from "vite";
import monkey, { util, cdn } from "vite-plugin-monkey";
import AutoImport from "unplugin-auto-import/vite";
import userscript from "./src/userscript.meta";

export default defineConfig({
  build: {
    target: "es2020",
  },
  plugins: [
    AutoImport({
      imports: [util.unimportPreset],
    }),
    monkey({
      userscript,
      entry: "src/main.js",
      build: {
        systemjs: "inline",
        externalGlobals: {
          jsmind: cdn.unpkg("jsmind", "es6/jsmind.js").concat(util.dataUrl(";window.jsmind=jsMind;")),
          "dom-to-image": ["domtoimage", () => `https://unpkg.com/dom-to-image@2.6.0/src/dom-to-image.js`].concat(
            util.dataUrl(";window.domtoimage=domtoimage;")
          ),
          beautifier: cdn
            .unpkg("beautifier")
            .concat(
              util.dataUrl(
                ";window.beautifier=js_beautify;window.js_beautify=js_beautify;window.css_beautify=css_beautify;"
              )
            ),
          "highlight.js": ["hljs", () => `https://unpkg.com/@highlightjs/cdn-assets@11.10.0/highlight.min.js`].concat(
            util.dataUrl(";window.hljs=hljs;")
          ),
        },
        cssSideEffects: () => {
          return (e) => {
            // 是否向document.head插入样式
            window.addEventListener("message", (event) => {
              const { data } = event;
              if (!data?.addStyle) return;
              if (typeof GM_addStyle === "function") return GM_addStyle(e);
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

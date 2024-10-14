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
            .concat(
              util.dataUrl(";window.jQuery=jQuery;;window.jquery=jQuery;")
            ),
          jsmind: cdn
            .unpkg("jsmind", "es6/jsmind.js")
            .concat(
              util.dataUrl(";window.jsMind=jsMind;window.jsmind=jsMind;")
            ),
          "jsmind/screenshot": cdn.unpkg("jsmind", "es6/jsmind.screenshot.js"),
        },
        externalResource: {
          "jsmind/style/jsmind.css": cdn.unpkg("jsmind", "style/jsmind.css"),
        },
        systemjs: cdn.unpkg()[1],
        cssSideEffects: () => {
          return (e) => {
            // 是否为JSON数据
            window.addEventListener("message", (event) => {
              const { data } = event;
              if (data && data.isJSON) {
                if (typeof GM_addStyle == "function") {
                  GM_addStyle(e);
                  return;
                }

                const o = document.createElement("style");
                o.textContent = e;
                document.head.append(o);
              }
            });
          };
        },
      },
    }),
  ],
});

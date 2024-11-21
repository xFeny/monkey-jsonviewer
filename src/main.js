import Utils from "./common/Utils";
import URL from "./common/URL";
import layout from "./layout";
import "./layout/layout.scss";
import "tippy.js/dist/tippy.css";

const { EXAMPLE_JSON, LAYUI_JS } = URL;
(function () {
  "use strict";

  const openInTab = () => GM_openInTab(EXAMPLE_JSON);
  GM_registerMenuCommand("测试JSON( Alt + j )", openInTab);
  window.addEventListener("keydown", function (event) {
    const { key, altKey } = event;
    if (altKey && key.toLowerCase() === "j") openInTab();
  });

  const innerText = document.body.innerText;
  const { rawText, jsonpFun } = Utils.matchJsonp(innerText);
  unsafeWindow.RAW_TEXT = rawText;
  unsafeWindow.GLOBAL_JSONP_FUN = jsonpFun;
  if (!Utils.isJSON(unsafeWindow.RAW_TEXT)) {
    import("./js_css_beautify");
    return;
  }

  Utils.hide(Utils.query("pre"));
  Utils.addClass(Utils.query("html"), "monkey-jsonviewer");
  window.postMessage({ addStyle: true });

  setTimeout(() => {
    const meta = Utils.createElement("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    });
    document.head.appendChild(meta);

    const script = Utils.createElement("script", {
      src: LAYUI_JS,
      type: "text/javascript",
    });
    document.head.appendChild(script);

    GM_addStyle(`
      jmnode.root::before{background-color: ${Utils.randomColor(0.5)}}
      jmnode:not(.root)::before{background-color: ${Utils.randomColor(0.5)}}
    `);

    document.body.insertAdjacentHTML("afterbegin", layout);
    unsafeWindow.GLOBAL_JSON = Utils.parse(unsafeWindow.RAW_TEXT);
    const temp = Utils.query('template[data-for="viewFormater"]');
    Utils.query(".toolbar").innerHTML = temp.innerHTML;
    import("./format").then(() => {
      import("./toolbar");
      import("./scrollTop");
    });
  });
})();

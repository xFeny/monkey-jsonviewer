import JSONbig from "json-bigint";
import Utils from "./common/Utils";
import URL from "./common/URL";
import layout from "./layout";
import "./layout/layout.scss";
import "tippy.js/dist/tippy.css";

const { EXAMPLE_JSON, LAYUI_CSS, LAYUI_JS } = URL;
(function () {
  "use strict";

  // 新标签页打开测试JSON
  const openInTab = () => GM_openInTab(EXAMPLE_JSON);
  GM_registerMenuCommand("测试JSON( Alt + j )", openInTab);
  window.addEventListener("keydown", function (event) {
    const { key, altKey } = event;
    if (altKey && (key === "J" || key === "j")) {
      openInTab();
    }
  });

  const innerText = document.body.innerText;

  const { rawText, jsonpFun } = Utils.jsonpMatch(innerText);
  unsafeWindow.RAW_TEXT = rawText;
  unsafeWindow.GLOBAL_JSONP_FUN = jsonpFun;

  if (!Utils.isJSON(unsafeWindow.RAW_TEXT)) {
    import("./js_css_beautify");
    return;
  }

  document.querySelector("pre").style.display = "none";
  document.querySelector("html").classList.add("monkey-jsonviewer");

  window.postMessage({ addStyle: true });

  const meta = document.createElement("meta");
  meta.setAttribute("name", "viewport");
  meta.setAttribute("content", "width=device-width, initial-scale=1.0");
  document.head.appendChild(meta);

  const link = document.createElement("link");
  link.setAttribute("href", LAYUI_CSS);
  link.setAttribute("rel", "stylesheet");
  document.head.appendChild(link);

  const script = document.createElement("script");
  script.setAttribute("src", LAYUI_JS);
  script.setAttribute("type", "text/javascript");
  document.head.appendChild(script);

  // 脑图节点随机颜色
  GM_addStyle(`
    jmnode.root::before{background-color: ${Utils.randomColor(0.5)}}
    jmnode:not(.root)::before{background-color: ${Utils.randomColor(0.5)}}
  `);

  setTimeout(() => {
    unsafeWindow.GLOBAL_JSON = JSONbig({ useNativeBigInt: true }).parse(
      unsafeWindow.RAW_TEXT
    );
    document.body.insertAdjacentHTML("afterbegin", layout);

    import("./format")
      .then((format) => format.default.init())
      .then(() => import("./toolbar"))
      .then(() => import("./scrollTop"));
  });
})();

import Utils from "./common/Utils";
import URL from "./common/URL";
import layout from "./layout";
import "./layout/layout.scss";
import "tippy.js/dist/tippy.css";

const { EXAMPLE_JSON, LAYUI_JS } = URL;
(function () {
  "use strict";

  const openInTab = () => GM_openInTab(EXAMPLE_JSON);
  GM_registerMenuCommand("测试JSON( Alt + J )", openInTab);
  window.addEventListener("keydown", function (event) {
    const { key, altKey } = event;
    if (altKey && key.toLowerCase() === "j") openInTab();
  });

  const innerText = document.body.innerText;
  const { rawText, jsonpFun } = Utils.matchJsonp(innerText);
  if (!Utils.isJSON(rawText)) return import("./js_css_beautify");

  unsafeWindow.RAW_TEXT = rawText;
  unsafeWindow.GLOBAL_JSONP_FUN = jsonpFun;
  unsafeWindow.GLOBAL_JSON = Utils.parse(unsafeWindow.RAW_TEXT);

  Utils.hide(Utils.query("pre"));
  window.postMessage({ addStyle: true });

  const meta = Utils.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
  });
  document.head.appendChild(meta);

  const script = Utils.createElement("script", { src: LAYUI_JS, type: "text/javascript" });
  document.head.appendChild(script);

  setTimeout(() => {
    document.body.insertAdjacentHTML("afterbegin", layout);
    const temp = Utils.query('template[data-for="viewFormater"]');
    Utils.query(".toolbar").innerHTML = temp.innerHTML;
    import("./format").then(() => {
      import("./toolbar");
      import("./scrollTop");
    });
  });
})();

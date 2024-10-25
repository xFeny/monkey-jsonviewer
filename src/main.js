import $ from "jquery";
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

  // 判断是否为jsonp格式
  const { rawText, jsonpFun } = Utils.jsonpMatch(innerText);
  unsafeWindow.RAW_TEXT = rawText;
  unsafeWindow.GLOBAL_JSONP_FUN = jsonpFun;

  if (!Utils.isJSON(unsafeWindow.RAW_TEXT)) {
    import("./js_css_beautify");
    return;
  }

  $("pre").hide();

  window.postMessage({ addStyle: true });
  $("html").addClass("monkey-jsonviewer");

  $(document.head)
    .append(`<link href="${LAYUI_CSS}" rel="stylesheet"/>`)
    .append(`<script src="${LAYUI_JS}" type="text/javascript"></script>`);

  // 脑图节点随机颜色
  GM_addStyle(`
    jmnode.root::before{background-color: ${Utils.randomColor(0.5)}}
    jmnode:not(.root)::before{background-color: ${Utils.randomColor(0.5)}}
    `);
  setTimeout(() => {
    // 将内容用eval函数处理下
    try {
      unsafeWindow.GLOBAL_JSON = eval(`(${unsafeWindow.RAW_TEXT})`);
    } catch (e) {
      unsafeWindow.GLOBAL_JSON = JSON.parse(unsafeWindow.RAW_TEXT);
    }

    document.body.insertAdjacentHTML("afterbegin", layout);

    import("./format")
      .then((format) => format.default.init())
      .then(() => import("./toolbar"))
      .then(() => import("./scrollTop"));
  });
})();

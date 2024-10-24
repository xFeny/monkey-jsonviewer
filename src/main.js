import $ from "jquery";
import Utils from "./common/Utils";
import URL from "./common/URL";
import "tippy.js/dist/tippy.css";

(function () {
  "use strict";

  // 新标签页打开测试JSON
  const openInTab = () => GM_openInTab(URL.EXAMPLE_JSON);
  GM_registerMenuCommand("测试JSON( Alt + j )", openInTab);
  window.addEventListener("keydown", function (event) {
    if (event.altKey && event.key === "j") {
      openInTab();
    }
  });

  const docType = [
    "application/vnd.api+json",
    "application/x-javascript",
    "application/javascript",
    "application/json",
    "text/javascript",
    "text/plain",
    "text/json",
    "text/css",
  ];
  if (!docType.includes(document.contentType)) {
    return;
  }

  unsafeWindow.GLOBAL_SOURCE_ELEMENT = $("pre").first();
  if (unsafeWindow.GLOBAL_SOURCE_ELEMENT.length === 0) {
    const text = document.body.innerText;
    if (!Utils.isJSON(text)) {
      return;
    }

    const pre = document.createElement("pre");
    pre.innerText = text;
    document.body.insertAdjacentHTML("afterbegin", pre);
    unsafeWindow.GLOBAL_SOURCE_ELEMENT = $(pre);
  }

  let rawText = unsafeWindow.GLOBAL_SOURCE_ELEMENT.text();
  if (!rawText) {
    return;
  }

  // 判断是否为jsonp格式
  const { raw, jsonpFun } = Utils.jsonpMatch(rawText);
  rawText = raw;
  unsafeWindow.GLOBAL_JSONP_FUN = jsonpFun;

  if (!Utils.isJSON(rawText)) {
    import("./beautify");
    return;
  }

  window.postMessage({ addStyle: true });
  // document.head插入layui
  $(document.head)
    .append(`<link href="${URL.LAYUI_CSS}" rel="stylesheet"/>`)
    .append(`<script src="${URL.LAYUI_JS}" type="text/javascript"></script>`);

  // 脑图节点随机颜色
  GM_addStyle(`
    jmnode.root::before{background-color: ${Utils.randomColor(0.5)}}
    jmnode:not(.root)::before{background-color: ${Utils.randomColor(0.5)}}
    `);
  setTimeout(() => {
    unsafeWindow.GLOBAL_SOURCE_ELEMENT.hide();
    // 将内容用eval函数处理下
    try {
      unsafeWindow.GLOBAL_JSON = eval(`(${rawText})`);
    } catch (e) {
      unsafeWindow.GLOBAL_JSON = JSON.parse(rawText);
    }

    import("./layout");
    import("./format")
      .then((format) => format.default.init())
      .then(() => import("./toolbar"))
      .then(() => import("./scrollTop"));
  });
})();

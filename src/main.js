import $ from "jquery";
import Utils from "./core/Utils";

(function () {
  "use strict";

  if (!Utils.isJSONDocument(document.contentType)) {
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
  let tokens = rawText.match(/^([^\s(]*)\s*\(([\s\S]*)\)\s*;?$/);
  if (tokens && tokens[1] && tokens[2]) {
    unsafeWindow.GLOBAL_JSONP_FUN = tokens[1];
    rawText = tokens[2];
  }

  if (!Utils.isJSON(rawText)) {
    return;
  }

  unsafeWindow.GLOBAL_SOURCE_ELEMENT.hide();
  // 将内容用eval函数处理下
  try {
    unsafeWindow.GLOBAL_JSON = eval(`(${rawText})`);
  } catch (e) {
    unsafeWindow.GLOBAL_JSON = JSON.parse(rawText);
  }

  const layuiJs = "//unpkg.com/layui@2.7.6/dist/layui.js";
  const layuiCss = "//unpkg.com/layui@2.7.6/dist/css/layui.css";
  $("head")
    .append(`<link href="${layuiCss}" rel="stylesheet">`)
    .append(`<script src="${layuiJs}">`);

  GM_addStyle(`
    jmnode.root::before{
      background-color: ${Utils.randomColor(0.5)}
    }

    jmnode:not(.root)::before{
      background-color: ${Utils.randomColor(0.5)}
    }
  `);
  // 脑图节点随机颜色

  import("./layout");
  import("./format")
    .then((format) => format.default.init())
    .then(() => import("./toolbar"))
    .then(() => import("./scrollTop"));
})();

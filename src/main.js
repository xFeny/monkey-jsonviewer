import "./style.scss";
import $ from "jquery";
import Utils from "./core/Utils";

(function () {
  "use strict";

  if (!Utils.isJSONDocument(document.contentType)) {
    return;
  }

  window.GLOBAL_SOURCE_ELEMENT = $("pre").first();
  if (window.GLOBAL_SOURCE_ELEMENT.length === 0) {
    let text = document.body.innerText;
    if (!Utils.isJSON(text)) {
      return;
    }

    let pre = document.createElement("pre");
    pre.innerText = text;
    document.body.insertAdjacentHTML("afterbegin", pre);
    window.GLOBAL_SOURCE_ELEMENT = $(pre);
  }

  let rawText = window.GLOBAL_SOURCE_ELEMENT.text();
  if (!rawText) {
    return;
  }

  // 判断是否为jsonp格式
  let tokens = rawText.match(/^([^\s(]*)\s*\(([\s\S]*)\)\s*;?$/);
  if (tokens && tokens[1] && tokens[2]) {
    window.GLOBAL_JSONP_FUN = tokens[1];
    rawText = tokens[2];
  }

  if (!Utils.isJSON(rawText)) {
    return;
  }

  window.GLOBAL_SOURCE_ELEMENT.hide();
  // 将内容用eval函数处理下
  try {
    window.GLOBAL_JSON = eval(`(${rawText})`);
  } catch (e) {
    window.GLOBAL_JSON = JSON.parse(rawText);
  }

  const LAYUI_JS = "//unpkg.com/layui@2.7.6/dist/layui.js";
  const LAYUI_CSS = "//unpkg.com/layui@2.7.6/dist/css/layui.css";
  $("head")
    .append(`<link href="${LAYUI_CSS}" rel="stylesheet">`)
    .append(`<script src="${LAYUI_JS}">`);

  GM_addStyle(`
    jmnode.root::before{
      background-color: ${Utils.randomColor(0.5)}
    }

    jmnode:not(.root)::before{
      background-color: ${Utils.randomColor(0.5)}
    }
  `);
  // 脑图节点随机颜色

  import("./core/layout");
  import("./core/formatStyle").then((formatStyle) => {
    formatStyle.default.init();
  });
})();

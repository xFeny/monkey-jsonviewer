import "./style.scss";
import $ from "jquery";
import hljs from "highlight.js";
import { js_beautify, css_beautify } from "beautifier";
// import "highlight.js/styles/vs.min.css";
import "highlight.js/styles/xcode.min.css";

/**
 * 对JS、CSS美化
 */
(function () {
  const docType = [
    "application/x-javascript",
    "application/javascript",
    "text/javascript",
    "text/css",
  ];
  const contentType = document.contentType;
  if (!docType.includes(contentType)) {
    return;
  }

  const preElement = $("pre").first();
  if (preElement.length === 0) {
    return;
  }

  window.postMessage({ addStyle: true });
  setTimeout(() => {
    const rawText = preElement.text();
    const layout = `<div class="beautify_checkbox">
        <input type="checkbox" id="beautify"/>
        <label for="beautify">美化输出</label>
      </div>`;

    document.body.insertAdjacentHTML("afterbegin", layout);

    const checkbox = document.querySelector(".beautify_checkbox input");
    checkbox.addEventListener("click", function () {
      if (this.checked) {
        beautifyCode(contentType, preElement, rawText);
      } else {
        preElement.html(rawText);
      }
    });
  });
})();

/**
 * JS、CSS美化
 * @param {*} contentType 文档类型
 * @param {*} element <pre></pre>标签
 * @param {*} rawText 原始数据
 * @returns
 */
function beautifyCode(contentType, element, rawText) {
  const language = contentType.substring(contentType.indexOf("/") + 1);
  if (!["css", "javascript", "x-javascript"].includes(language)) {
    return;
  }

  let beautifyCode;
  if ("css" === language) {
    const cssBeautify = css_beautify ? css_beautify : window.css_beautify;
    beautifyCode = cssBeautify(rawText);
    beautifyCode = hljs.highlight(beautifyCode, {
      language,
    }).value;
  } else {
    const jsBeautify = js_beautify ? js_beautify : window.js_beautify;
    beautifyCode = jsBeautify(rawText);
    beautifyCode = hljs.highlight(beautifyCode, {
      language: "javascript",
    }).value;
  }

  element.html(`<code>${beautifyCode}</code>`);
}

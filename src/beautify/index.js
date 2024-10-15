/**
 * 美化JS、CSS
 */
import "./style.scss";
import $ from "jquery";
import hljs from "highlight.js";
import { js_beautify, css_beautify } from "beautifier";
import "highlight.js/styles/xcode.min.css";

const docType = ["application/javascript", "text/javascript", "text/css"];
const contentType = document.contentType;
if (docType.includes(document.contentType)) {
  window.postMessage({ isJSON: true });
  setTimeout(() => {
    const preElement = $("pre").first();
    if (preElement.length == 0) {
      return;
    }

    const rawText = preElement.text();
    const layout =
      '<div class="beautify_checkbox"><input type="checkbox" id="beautify"/><label for="beautify">美化输出</label></div>';

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
}

function beautifyCode(contentType, element, rawText) {
  const language = contentType.substring(contentType.indexOf("/") + 1);
  if (!["css", "javascript"].includes(language)) {
    return;
  }

  let beautifyCode;
  switch (language) {
    case "css":
      const cssBeautify = css_beautify ? css_beautify : window.css_beautify;
      // beautifyCode = cssBeautify(rawText);
      beautifyCode = hljs.highlight(cssBeautify(rawText), {
        language,
      }).value;
      break;
    case "javascript":
      const jsBeautify = js_beautify ? js_beautify : window.js_beautify;
      // beautifyCode = jsBeautify(rawText);
      beautifyCode = hljs.highlight(jsBeautify(rawText), {
        language,
      }).value;
      break;
    default:
      break;
  }

  element.html(`<code>${beautifyCode}</code>`);
}

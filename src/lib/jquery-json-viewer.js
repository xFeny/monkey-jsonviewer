import jQuery from "jquery";
import Utils from "../common/Utils";

(function ($) {
  /**
   * 检查 arg 是否为至少包含 1 个元素的数组或至少包含 1 个键的字典
   */
  function isCollapsable(arg) {
    return arg instanceof Object && Object.keys(arg).length > 0;
  }

  /**
   * 将 JSON 对象转换为 HTML 表示形式
   * @return string
   */
  function json2html(json, parentPath = "") {
    let html = "",
      type = Utils.getType(json);
    switch (type) {
      case "array":
      case "object":
        let len = json.length || Object.keys(json).length;
        if (len > 0) {
          html += `<span class="json-brackets ${
            type == "array" ? "json-square-brackets" : "json-curly-brackets"
          }">`;
          html +=
            type === "array"
              ? '[</span><ol class="json-array">'
              : '{</span><ul class="json-object">';
          for (var key in json) {
            if (json.hasOwnProperty(key)) {
              let comma = --len > 0 ? "," : "",
                jsonPath = parentPath + "." + key,
                collapse = isCollapsable(json[key])
                  ? '<a href class="json-toggle"></a>'
                  : "",
                res = json2html(json[key], jsonPath);
              let toHtml =
                type === "array"
                  ? res
                  : `<span class="json-key">"${key}"</span>: ${res}`;
              html += [
                `<li json-path="${jsonPath}">`,
                collapse,
                toHtml,
                comma,
                "</li>",
              ].join("");
            }
          }

          if (type === "array") {
            html += `</ol><span class="json-brackets json-square-brackets">]</span>`;
          } else {
            html += `</ul><span class="json-brackets json-curly-brackets">}</span>`;
          }
        } else {
          html += `<span class="json-brackets ${
            type == "array" ? "json-square-brackets" : "json-curly-brackets"
          }">`;
          html += type === "array" ? "[]" : "{}";
          html += "</span>";
        }
        break;
      default:
        /* Escape tags */
        json =
          type === "string"
            ? json
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
            : json;
        if (Utils.isUrl(json)) {
          html += `<a target="_blank" href="${json}" class="json-string">"${json}"</a>`;
        } else {
          json = type === "string" ? `"${json}"` : json;
          html += `<span class="json-${type}">${json}</span>`;
        }
        break;
    }
    return html;
  }

  $.fn.jsonViewer = function (json, jsonpFn) {
    return this.each(function () {
      /* Transform to HTML */
      var html = json2html(json);
      /** is JSONP */
      if (jsonpFn !== undefined && jsonpFn !== null) {
        html = `<div class="jsonp">${jsonpFn}(</div>${html}<div class="jsonp">)</div>`;
      }
      /* Insert HTML in target DOM element */
      $(this).html(html);

      /* Bind click on toggle buttons */
      $(this).off("click");
      $(this).on("click", "a.json-toggle", function () {
        var target = $(this)
          .toggleClass("collapsed")
          .siblings("ul.json-object, ol.json-array");
        target.toggle();
        if (target.is(":visible")) {
          target.siblings(".json-placeholder").remove();
        } else {
          let clas = target.attr("class");
          clas = clas.substring(clas.indexOf("-") + 1);

          var count = target.children('li:not([class*="hidden"])').length;
          var placeholder = count + (count > 1 ? " items" : " item");
          if (clas === "object") {
            placeholder = count + (count > 1 ? " keys" : " key");
          }

          target.after(
            '<a href class="json-placeholder">' + placeholder + "</a>"
          );
        }
        return false;
      });

      /* Simulate click on toggle button when placeholder is clicked */
      $(this).on("click", "a.json-placeholder", function () {
        $(this).siblings("a.json-toggle").trigger("click");
        $(this).siblings("a.json-placeholder").remove();
        return false;
      });
    });
  };
})(jQuery);

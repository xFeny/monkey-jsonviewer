import jQuery from "jquery";

(function ($) {
  function isColor(colorString) {
    const hexCodeRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    const rgbRegex = /^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/;
    const rgbaRegex =
      /^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(0|1|0\.\d+)\s*\)$/;

    return (
      hexCodeRegex.test(colorString) ||
      rgbRegex.test(colorString) ||
      rgbaRegex.test(colorString)
    );
  }

  function isUrl(str) {
    const regexp =
      /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return regexp.test(str);
  }

  /**
   * 获取数据的类型
   * @param {Object} value
   * @return 返回类型 number、object、array、string、null等
   */
  function getType(value) {
    return Object.prototype.toString
      .call(value)
      .match(/\s(.+)]/)[1]
      .toLowerCase();
  }
  /**
   * 转义
   */
  function escape(str) {
    return str
      .replace(/\t/g, "\\t")
      .replace(/\n/g, "\\n")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }
  /**
   * 检查 arg 是否为至少包含 1 个元素的数组或至少包含 1 个键的字典
   */
  function isCollapsable(arg) {
    return arg && typeof arg === "object" && Object.keys(arg).length > 0;
  }

  /**
   * 将 JSON 对象转换为 HTML 表示形式
   * @return string
   */
  function json2html(json, parentPath = "Root") {
    let html = "";
    const type = getType(json);
    switch (type) {
      case "array":
      case "object":
        let len = json.length || Object.keys(json).length;
        if (len > 0) {
          html += `<span class="json-${type}-bracket">${
            type === "array" ? "[" : "{"
          }</span><ul class="json-items">`;

          for (var key in json) {
            if (Object.prototype.hasOwnProperty.call(json, key)) {
              const comma = --len > 0 ? "," : "";
              const jsonPath = parentPath + "." + key;
              const collapse = isCollapsable(json[key])
                ? '<a href class="json-toggle"></a>'
                : "";
              const next = json2html(json[key], jsonPath);

              let keyVal = next;
              if (type !== "array") {
                keyVal = `<span class="json-key">"${key}"</span>: ${next}`;
              }

              html += [
                `<li json-path="${jsonPath}">`,
                collapse,
                keyVal,
                comma,
                "</li>",
              ].join("");
            }
          }

          html += `</ul><span class="json-${type}-bracket">${
            type === "array" ? "]" : "}"
          }</span>`;
        } else {
          html += `<span class="json-${type}-bracket">${
            type === "array" ? "[]" : "{}"
          }</span>`;
        }
        break;
      default:
        if (isUrl(json)) {
          html += `<a target="_blank" href="${json}" class="json-string">"${json}"</a>`;
        } else if (isColor(json)) {
          html += `<span style="background-color: ${json}" class="json-color"></span>`;
          html += `<span class="json-${type}">"${json}"</span>`;
        } else {
          json = type === "string" ? `"${escape(json)}"` : json;
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
        var target = $(this).toggleClass("collapsed").siblings(".json-items");
        target.toggle();

        if (target.is(":visible")) {
          target.siblings("a.json-placeholder").remove();
        } else {
          let clas = target.attr("class");
          clas = clas.substring(clas.indexOf("-") + 1);

          var count = target.children('li:not([class*="hidden"])').length;
          var placeholder = count + (count > 1 ? " items" : " item");
          if (clas === "object") {
            placeholder = count + (count > 1 ? " keys" : " key");
          }

          target.after(`<a href class="json-placeholder">${placeholder}</a>`);
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

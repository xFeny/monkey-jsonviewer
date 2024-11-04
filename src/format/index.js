import JsonViewer from "../lib/JsonViewer";
import JsonToTable from "../lib/JsonToTable";
import evnet from "./evnet";
import "../lib/json-fromaer.scss";
import Utils from "../common/Utils";

const formatBox = document.querySelector("#formatBox");
const $input = document.querySelector(".searchbox input");
const $clear = document.querySelector(".searchbox .clear");
const format = {
  /**
   * 切换JSON 格式化风格
   * @param {*} style 格式化风格，default/table
   * @returns
   */
  changeStyle: function (style) {
    GM_setValue("style", style);
    this.setStyle();
    return this;
  },
  /**
   * 设置JSON 格式化风格
   * @returns
   */
  setStyle: function () {
    $input.value = "";
    $clear.setAttribute("hidden", true);
    this.render(unsafeWindow.GLOBAL_JSON);
    return this;
  },
  /**
   * 渲染
   * @param {Object} json
   * @returns
   */
  render: function (json) {
    const style = GM_getValue("style") || "default";
    const theme = GM_getValue("theme") || "default";
    const options = {
      json,
      theme,
      container: formatBox,
    };

    if (style === "default") {
      unsafeWindow.JSON_TO_TABLE = null;
      unsafeWindow.JSON_VIEWER = new JsonViewer(options);
    } else {
      unsafeWindow.JSON_VIEWER = null;
      unsafeWindow.JSON_TO_TABLE = new JsonToTable(options);
    }

    if (unsafeWindow.GLOBAL_JSONP_FUN) {
      const start = document.createElement("div");
      start.setAttribute("class", "jsonp");
      start.textContent = `${unsafeWindow.GLOBAL_JSONP_FUN}(`;
      formatBox.prepend(start);

      const end = start.cloneNode(true);
      end.textContent = ")";
      formatBox.append(end);
    }
    return this;
  },
  /**
   * JSON 过滤
   * @param {Object} json 要过滤的JOSN
   * @param {String} text 过滤值
   * @returns
   */
  filter: function (json, text) {
    text = text.toLowerCase();
    function match(json, text) {
      const newJson = Array.isArray(json) ? new Array() : new Object();
      for (const key in json) {
        if (Object.prototype.hasOwnProperty.call(json, key)) {
          const value = json[key];
          const _key = key.toLowerCase();
          const _value = Utils.stringify(value).toLowerCase();

          if (!_key.includes(text) && !_value.includes(text)) {
            continue;
          }

          if (typeof value === "object") {
            const result = match(value, text);
            const _result = Utils.stringify(result).toLowerCase();
            if (_key.includes(text) || _result.includes(text)) {
              newJson[key] = result;
            }
          } else {
            newJson[key] = value;
          }
        }
      }
      return newJson;
    }

    return match(json, text);
  },
  /**
   * JSON 过滤输入事件
   * @returns
   */
  input: function () {
    const that = this;
    const debounceInput = Utils.debounce(function () {
      const value = this.value;
      value
        ? $clear.removeAttribute("hidden")
        : $clear.setAttribute("hidden", true);
      const newJson = that.filter(unsafeWindow.GLOBAL_JSON, value);
      that.render(newJson);
    }, 400);
    $input.addEventListener("input", debounceInput);
    return that;
  },
  /**
   * 清空过滤值
   * @returns
   */
  clear: function () {
    $clear.addEventListener("click", () => this.setStyle());
    return this;
  },
  init: function () {
    this.setStyle().input().clear();
    evnet.init();
  },
};

window.addEventListener("message", function (event) {
  const { data } = event;
  if (!data) {
    return;
  }

  if (data.reload) {
    format.setStyle();
    return;
  }

  const { type, value } = data;
  if (type === "style") {
    format.changeStyle(value);
    return;
  }
});
export default format;

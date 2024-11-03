import JsonViewer from "../lib/JsonViewer";
import JsonToTable from "../lib/JsonToTable";
import evnet from "./evnet";
import "../lib/json-fromaer.scss";

const format_style = {
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
    const style = GM_getValue("style") || "default";
    const theme = GM_getValue("theme") || "default";

    const formatBox = document.querySelector("#formatBox");
    formatBox.innerHTML = "";
    document.querySelector(".searchbox input").value = "";

    if (style === "default") {
      unsafeWindow.JSON_VIEWER = new JsonViewer({
        theme,
        json: unsafeWindow.GLOBAL_JSON,
        container: formatBox,
      });
    } else {
      unsafeWindow.JSON_TO_TABLE = new JsonToTable({
        theme,
        json: unsafeWindow.GLOBAL_JSON,
        container: formatBox,
      });
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
  init: function () {
    const that = this;
    that.setStyle();
    evnet.init();

    window.addEventListener("message", function (event) {
      const { data } = event;
      if (!data) {
        return;
      }

      if (data.reload) {
        that.setStyle();
        return;
      }

      const { type, value } = data;
      if (type === "style") {
        that.changeStyle(value);
        return;
      }
    });
  },
};

export default format_style;

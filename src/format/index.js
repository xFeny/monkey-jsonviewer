import $ from "jquery";
import "../lib/jquery-json-viewer";
import JsonToTable from "../lib/JsonToTable";
import evnet from "./evnet";

const $formatBox = $("#formatBox");
const format_style = {
  /**
   * 切换JSON 格式化风格
   * @param {*} style 格式化风格，default/table
   * @returns
   */
  changeStyle: function (style) {
    layer.load(0, { shade: false });
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

    $("input").val("");
    $formatBox.empty();
    try {
      if (style === "default") {
        $formatBox.jsonViewer(
          unsafeWindow.GLOBAL_JSON,
          unsafeWindow.GLOBAL_JSONP_FUN
        );
        return this;
      }

      this.tableFormat();
    } finally {
      try {
        layer.closeAll();
      } catch (error) {}
    }
  },
  /**
   * JSON 表格格式化
   */
  tableFormat: function () {
    unsafeWindow.JSON_TO_TABLE = new JsonToTable({
      json: unsafeWindow.GLOBAL_JSON,
      container: $formatBox[0],
    });

    if (unsafeWindow.GLOBAL_JSONP_FUN) {
      const jsonp = `<div class="jsonp">${unsafeWindow.GLOBAL_JSONP_FUN}(</div>`;
      $formatBox.prepend(jsonp);
      $formatBox.append('<div class="jsonp">)</div>');
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

import $ from "jquery";
import "../lib/jquery.json-viewer";
import "../lib/jquery-simple-tree-table.min";
import generateTrHtml from "./generateTrHtml";
import evnet from "./evnet";

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
    $("#formatContainer").html("");
    if (style === "default") {
      $("#formatContainer").jsonViewer(
        unsafeWindow.GLOBAL_JSON,
        unsafeWindow.GLOBAL_JSONP_FUN
      );
      try {
        layer.closeAll();
      } catch (error) {}
    } else {
      const trHTML = generateTrHtml(unsafeWindow.GLOBAL_JSON);
      let appendHtml = `<table id="treeTable">${trHTML}</table>`;
      if (
        unsafeWindow.GLOBAL_JSONP_FUN !== undefined &&
        unsafeWindow.GLOBAL_JSONP_FUN !== null
      ) {
        appendHtml = `<div class="jsonp">${unsafeWindow.GLOBAL_JSONP_FUN}(</div>${appendHtml}<div class="jsonp">)</div>`;
      }
      $("#formatContainer").append(appendHtml);
      setTimeout(() => {
        $("#treeTable").simpleTreeTable({
          expander: "#expandAll",
          collapser: "#collapseAll",
        });
        try {
          layer.closeAll();
        } catch (error) {}
      });

      // Highlight selected row
      $("#treeTable").on("mousedown", "tr", function () {
        $(".selected").not(this).removeClass("selected");
        $(this).toggleClass("selected");
      });
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

import $ from "jquery";
import "../lib/jquery.json-viewer";
import theme from "./theme";
import btnEvent from "./btnEvent";
import otherEvent from "./otherEvent";
import treeTableHtml from "./treeTable";
import "../lib/jquery-simple-tree-table.min";

const formatStyle = {
  // 切换风格
  changeStyle: function () {
    const that = this;
    $(".formatStyle select").change(function (e) {
      const val = $(e.target).val();
      GM_setValue("formatStyle", val);
      that.setStyle();
    });
    return this;
  },
  // 设置风格
  setStyle: function () {
    const style = GM_getValue("formatStyle") || "default";
    $(".formatStyle select").val(style);

    $("input").val("");
    $("#formatContainer").html("");
    if (style === "default") {
      $("#formatContainer").jsonViewer(
        unsafeWindow.GLOBAL_JSON,
        unsafeWindow.GLOBAL_JSONP_FUN
      );
    } else {
      let appendHtml = `<table id="treeTable">${treeTableHtml(
        unsafeWindow.GLOBAL_JSON
      )}</table>`;
      if (
        unsafeWindow.GLOBAL_JSONP_FUN !== undefined &&
        unsafeWindow.GLOBAL_JSONP_FUN !== null
      ) {
        appendHtml = `<div class="jsonp">${unsafeWindow.GLOBAL_JSONP_FUN}(</div>${appendHtml}<div class="jsonp">)</div>`;
      }
      $("#formatContainer").append(appendHtml);
      $("#treeTable").simpleTreeTable({
        expander: "#expandAll",
        collapser: "#collapseAll",
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
    this.setStyle().changeStyle();
    theme.init();
    btnEvent.init();
    setTimeout(() => otherEvent.init(), 1000);
  },
};

export default formatStyle;

import $ from "jquery";
import "../lib/jquery.json-viewer";
import "../lib/jquery-simple-tree-table.min";
import treeTableTrHTML from "./treeTable";
import evnet from "./container_evnet";

const formatStyle = {
  // 切换风格
  changeStyle: function () {
    const that = this;
    $(".formatStyle select").on("change", function (e) {
      layer.load(0, { shade: false });
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
      try {
        layer.closeAll();
      } catch (error) {}
    } else {
      const trHTML = treeTableTrHTML(unsafeWindow.GLOBAL_JSON);
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
    this.setStyle().changeStyle();
    evnet.init();
  },
};

window.addEventListener("message", function (event) {
  const { data } = event;
  if (data && data.reload) {
    formatStyle.setStyle();
    // console.log("JSON数据变更，重新格式化");
  }
});

export default formatStyle;

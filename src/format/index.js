import $ from "jquery";
import "../lib/jquery.json-viewer";
import "../lib/jquery-simple-tree-table.min";
import treeTableTrHTML from "./treeTable";
import evnet from "./container_evnet";

const formatStyle = {
  // 切换风格
  changeStyle: function (val) {
    const that = this;
    layer.load(0, { shade: false });
    GM_setValue("style", val);
    this.setStyle();
    return this;
  },
  // 设置风格
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

export default formatStyle;

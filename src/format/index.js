import $ from "jquery";
import "../lib/jquery-json-viewer";
import "../lib/jquery-simple-tree-table.min";
import generateTrHtml from "./generateTrHtml";
import evnet from "./evnet";

const table = {};

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
        appendHtml = `
        <div class="jsonp">${unsafeWindow.GLOBAL_JSONP_FUN}(</div>
        ${appendHtml}
        <div class="jsonp">)</div>`;
      }
      $("#formatContainer").append(appendHtml);
      setTimeout(() => {
        const simpleTreeTable = $("#treeTable")
          .simpleTreeTable({
            expander: "#expandAll",
            collapser: "#collapseAll",
          })
          .on("node:open", (e, $node) => onNodeOpen($node))
          .on("node:close", (e, $node) => onNodeClose($node));

        const arrow = $("tr:not(.simple-tree-table-empty)");
        $("#expandAll").on("click", function () {
          arrow.each((i, node) => onNodeOpen($(node)));
        });

        $("#collapseAll").on("click", function () {
          arrow.each((i, node) => onNodeClose($(node)));
        });

        simpleTreeTable.on("click", ".node-len", function () {
          const id = $(this).closest("tr").data("node-id");
          simpleTreeTable.data("simple-tree-table").openByID(id);
        });

        function onNodeOpen($node) {
          $node.find(".node-len").html("");
        }

        function onNodeClose($node) {
          const type = $node.attr("type");
          const id = $node.data("node-id");
          const length = $(`tr[data-node-pid="${id}"]:not(.hidden)`).length;

          let content =
            `[ <span>${length}` +
            `${length > 1 ? " items" : " item"}` +
            "</span> ]";
          if (type === "object") {
            content =
              `{ <span>${length}` +
              `${length > 1 ? " keys" : " key"}` +
              "</span> }";
          }
          $node.find(".node-len").html(content);
        }

        try {
          layer.closeAll();
        } catch (error) {}
      });

      // Highlight selected row
      $("#treeTable").on("mousedown", "tr", function (event) {
        const target = event.target;
        if (target.tagName === "SPAN") {
          return;
        }

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

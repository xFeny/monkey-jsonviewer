import $ from "jquery";
import "../lib/jquery-json-viewer";
import "../lib/jquery-simple-tree-table.min";
import JsonToTable from "../lib/JsonToTable";
import evnet from "./evnet";

const $formatBox = $("#formatBox");
/**
 * 表格节点展开事件
 * @param {*} $node 节点
 */
function onNodeOpen($node) {
  $node.find("span.json-placeholder").empty();
}
/**
 * 表格节点折叠事件
 * @param {*} $node 节点
 */
function onNodeClose($node) {
  const type = $node.data("type");
  const id = $node.data("node-id");
  const length = $(`tr[data-node-pid="${id}"]:not(.hidden)`).length;

  let content = `[ <span>${length}${length > 1 ? " items" : " item"}</span> ]`;
  if (type === "object") {
    content = `{ <span>${length}${length > 1 ? " keys" : " key"}</span> }`;
  }
  $node.find("span.json-placeholder").html(content);
}

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
    new JsonToTable({
      json: unsafeWindow.GLOBAL_JSON,
      container: $formatBox[0],
    });

    if (unsafeWindow.GLOBAL_JSONP_FUN) {
      const jsonp = `<div class="jsonp">${unsafeWindow.GLOBAL_JSONP_FUN}(</div>`;
      $formatBox.prepend(jsonp);
      $formatBox.append('<div class="jsonp">)</div>');
    }

    setTimeout(() => {
      const $table = $("table");
      const simple = $table
        .simpleTreeTable()
        .on("node:open", (e, $node) => onNodeOpen($node))
        .on("node:close", (e, $node) => onNodeClose($node));

      const simpleTreeTable = simple.data("simple-tree-table");
      $(document.body).on("click", "#expandAll", toggle);
      $(document.body).on("click", "#collapseAll", toggle);
      function toggle() {
        if (!$table.is(":visible")) {
          return;
        }

        const arrow = $("tr:not(.simple-tree-table-empty)");
        if ($(this).is("#collapseAll")) {
          simpleTreeTable.collapse();
          arrow.each((i, node) => onNodeClose($(node)));
          return;
        }

        simpleTreeTable.expand();
        arrow.each((i, node) => onNodeOpen($(node)));
      }

      simple.on("click", "span.json-placeholder", function () {
        const id = $(this).closest("tr").data("node-id");
        simpleTreeTable.openByID(id);
      });
    });

    // Highlight selected row
    $(document.body).on("mousedown", "table tr", function (event) {
      const { tagName } = event.target;
      if (tagName === "A" || tagName === "SPAN" || event.ctrlKey) {
        return;
      }

      $(".selected").not(this).removeClass("selected");
      $(this).toggleClass("selected");
    });

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

import $ from "jquery";
import jsonMind from "../mind";

const tabsEvent = {
  firstFormat: true,
  isBeautify: false,
  $rawText: $("#rawTextContainer"),
  /**
   * 保存为文件
   */
  download: {
    download: function (content, filename) {
      const link = document.createElement("a");
      link.href = content;
      link.download = filename;
      link.click();
    },
    saveJSON: function (text) {
      // 创建一个 Blob 对象，包含要下载的文本内容
      const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const filename = new Date().getTime() + ".json";
      this.download(url, filename);
      URL.revokeObjectURL(url);
    },
    savePNG: () => unsafeWindow.GLOBAL_JSMIND.shoot(),
  },
  saveJson: function () {
    if ($("#jmContainer").is(":visible")) {
      this.download.savePNG();
    } else {
      this.download.saveJSON(this.$rawText.text());
    }
  },
  // 复制JSON文本内容
  copyJson: function () {
    GM_setClipboard(this.$rawText.text());
    layer.msg("复制成功", { time: 1500 });
  },
  // 全部折叠
  collapseAll: function () {
    if ($("#formatContainer").is(":visible")) {
      try {
        $("a.json-toggle").not(".collapsed").click();
      } catch (e) {}
    } else {
      unsafeWindow.GLOBAL_JSMIND.collapse_all();
    }
  },
  // 全部展开
  expandAll: function () {
    if ($("#formatContainer").is(":visible")) {
      try {
        $("a.json-placeholder").click().remove();
      } catch (e) {}
    } else {
      unsafeWindow.GLOBAL_JSMIND.expand_all();
      unsafeWindow.GLOBAL_JSMIND.scroll_node_to_center(unsafeWindow.GLOBAL_JSMIND.get_root());
    }
  },
  format: function () {},
  // 显示JSON脑图
  viewJsonMind: function () {
    jsonMind.init(unsafeWindow.GLOBAL_JSON);
    unsafeWindow.GLOBAL_JSMIND.scroll_node_to_center(unsafeWindow.GLOBAL_JSMIND.get_root());
  },
  // 查看原始JSON内容
  viewRawText: function () {
    if (this.firstFormat) {
      this.$rawText.html(unsafeWindow.GLOBAL_SOURCE_ELEMENT.clone());
      this.firstFormat = false;
    }
  },
  // 美化
  beautify: function () {
    this.isBeautify = !this.isBeautify;
    if (this.isBeautify) {
      let str = JSON.stringify(unsafeWindow.GLOBAL_JSON, null, 2);
      if (
        unsafeWindow.GLOBAL_JSONP_FUN !== undefined &&
        unsafeWindow.GLOBAL_JSONP_FUN !== null
      ) {
        str = `${unsafeWindow.GLOBAL_JSONP_FUN}(${str})`;
      }
      this.$rawText.find("pre").text(str);
    } else {
      this.$rawText.html(unsafeWindow.GLOBAL_SOURCE_ELEMENT.clone());
    }
  },
  jsoncrack: function () {
    layer.closeAll();
    const index = layer.open({
      type: 1,
      title: false,
      maxmin: true,
      shadeClose: true,
      area: ["900px", "600px"],
      content:
        '<iframe style="width: 100%;height: 100%;border: 0;" id="jsoncrackEmbed" src="https://jsoncrack.feny.ink/widget"></iframe>',
      success: function (layero) {
        const jsonCrackEmbed = layero.find("#jsoncrackEmbed")[0];
        window?.addEventListener("message", () => {
          jsonCrackEmbed.contentWindow.postMessage(
            {
              json: JSON.stringify(unsafeWindow.GLOBAL_JSON),
            },
            "*"
          );
        });
      },
    });
    layer.full(index);
  },
  init: function () {
    this.viewRawText();
    // 按钮点击事件
    $(".btn").on("click", (e) => {
      const target = e.target,
        id = target.id;
      if (target.classList.contains("tabs-item")) {
        const index = $(target).index();
        $(target).addClass("active").siblings().removeClass("active");
        $(".tabs-container > div")
          .removeClass("active")
          .eq(index)
          .addClass("active");

        const beautifyEl = $("#beautify"),
          searchEl = $(".searchbox"),
          copyJsonEl = $("#copyJson"),
          jsoncrackEl = $("#jsoncrack"),
          aEl = $("#collapseAll, #expandAll");
        id === "format" ? searchEl.show() : searchEl.hide();
        id === "viewJsonMind"
          ? copyJsonEl.hide() && jsoncrackEl.show()
          : copyJsonEl.show() && jsoncrackEl.hide();
        id === "viewRawText"
          ? beautifyEl.show() && aEl.hide()
          : beautifyEl.hide() && aEl.show();
      }
      this[id](target);
    });

    return this;
  },
};

window.addEventListener("message", function (event) {
  const { data } = event;
  if (data && data.reload) {
    jsonMind.isFirst = true;
    jsonMind.init(unsafeWindow.GLOBAL_JSON);
    tabsEvent.isBeautify = false;
    tabsEvent.$rawText.html(unsafeWindow.GLOBAL_SOURCE_ELEMENT.clone());
    // console.log("JSON数据变更，更新原始数据");
  }
});

export default tabsEvent;
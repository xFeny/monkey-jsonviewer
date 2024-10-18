import $ from "jquery";
import jsonMind from "../mind";
import COMMON_URL from "../common/URL";
import Utils from "../common/Utils";

const tabsEvent = {
  firstFormat: true,
  isBeautify: false,
  $rawText: $("#rawTextContainer"),
  /**
   * 保存为文件
   * 如果是JSON 格式化可见，保存JSON数据为.json文件
   * 如果是JSON 脑图可见，保存脑图为图片
   */
  saveJson: function () {
    if ($("#jmContainer").is(":visible")) {
      unsafeWindow.GLOBAL_JSMIND.shoot();
    } else {
      const content = this.$rawText.text();
      const filename = new Date().getTime() + ".json";
      Utils.downloadText(content, filename);
    }
  },
  /**
   * 复制JSON文本内容
   */
  copyJson: function () {
    GM_setClipboard(this.$rawText.text());
    layer.msg("复制成功", { time: 1500 });
  },
  /**
   * 点击了`全部折叠`
   * 如果是JSON 格式化可见，折叠JSON
   * 如果是JSON 脑图可见，折叠脑图节点
   */
  collapseAll: function () {
    if ($("#formatContainer").is(":visible")) {
      try {
        $("a.json-toggle").not(".collapsed").click();
      } catch (e) {}
    } else {
      unsafeWindow.GLOBAL_JSMIND.collapse_all();
    }
  },
  /**
   * 点击了`全部展开`
   * 如果是JSON 格式化可见，展开JSON
   * 如果是JSON 脑图可见，展开脑图节点
   */
  expandAll: function () {
    if ($("#formatContainer").is(":visible")) {
      try {
        $("a.json-placeholder").click().remove();
      } catch (e) {}
    } else {
      unsafeWindow.GLOBAL_JSMIND.expand_all();
      unsafeWindow.GLOBAL_JSMIND.scroll_node_to_center(
        unsafeWindow.GLOBAL_JSMIND.get_root()
      );
    }
  },
  format: function () {},
  /**
   * tabs点击了`JSON脑图`
   */
  viewJsonMind: function () {
    jsonMind.init(unsafeWindow.GLOBAL_JSON);
    unsafeWindow.GLOBAL_JSMIND.scroll_node_to_center(
      unsafeWindow.GLOBAL_JSMIND.get_root()
    );
  },
  /**
   * tabs点击了`原始数据`
   */
  viewRawText: function () {
    if (this.firstFormat) {
      this.$rawText.html(unsafeWindow.GLOBAL_SOURCE_ELEMENT.clone());
      this.firstFormat = false;
    }
  },
  /**
   * 点击了`美化输出`
   */
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
  /**
   * 点击了`JSON Crack`
   */
  jsoncrack: function () {
    let theme = GM_getValue("theme") || "light";
    theme = theme.replace(/_.*/, "");
    layer.closeAll();
    const index = layer.open({
      type: 1,
      title: false,
      maxmin: true,
      shadeClose: true,
      area: ["900px", "600px"],
      content: `<iframe style="width: 100%;height: 100%;border: 0;" id="jsoncrackEmbed" src="${COMMON_URL.JSON_CRACK_WIDGET}"></iframe>`,
      success: function (layero) {
        const jsonCrackEmbed = layero.find("#jsoncrackEmbed")[0];
        window?.addEventListener("message", () => {
          jsonCrackEmbed.contentWindow.postMessage(
            {
              options: { theme },
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

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
        $("a.json-toggle").not(".collapsed").trigger("click");
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
        $("a.json-placeholder").trigger("click").remove();
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
   * tabs点击了`JSON 脑图`
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
      if (unsafeWindow.GLOBAL_JSONP_FUN) {
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
    layer.open({
      type: 1,
      title: false,
      area: ["100vw", "100vh"],
      content: `<iframe id="jsoncrackEmbed" src="${COMMON_URL.JSON_CRACK_WIDGET}"></iframe>`,
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
  },
  init: function () {
    this.viewRawText();
    // 按钮点击事件
    $(".btn").on("click", (e) => {
      const target = e.target;
      const id = target.id;
      if (target.classList.contains("tabs-item")) {
        const clas = "active";
        const index = $(target).index();
        $(target).addClass(clas).siblings().removeClass(clas);
        $(".tabs-container > div").removeClass(clas).eq(index).addClass(clas);

        const beautifyEl = $("#beautify");
        const searchEl = $(".searchbox");
        const copyJsonEl = $("#copyJson");
        const jsoncrackEl = $("#jsoncrack");
        const aEl = $("#collapseAll, #expandAll");

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
    tabsEvent.isBeautify = false;
    jsonMind.init(unsafeWindow.GLOBAL_JSON);
    tabsEvent.$rawText.html(unsafeWindow.GLOBAL_SOURCE_ELEMENT.clone());
  }
});

export default tabsEvent;

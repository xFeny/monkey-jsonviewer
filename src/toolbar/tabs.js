import $ from "jquery";
import JSONbig from "json-bigint";
import jsonMind from "../mind";
import URL from "../common/URL";
import Utils from "../common/Utils";

const $jmContainer = $("#jmContainer");
const $formatContainer = $("#formatContainer");
const $rawTextContainer = $("#rawTextContainer");

const tabsEvent = {
  firstFormat: true,
  isBeautify: false,
  $rawTextPre: $rawTextContainer.find("pre"),
  /**
   * 原始数据
   */
  _setRawText: function () {
    let rawText = unsafeWindow.RAW_TEXT;
    if (unsafeWindow.GLOBAL_JSONP_FUN) {
      rawText = `${unsafeWindow.GLOBAL_JSONP_FUN}(${rawText})`;
    }
    this.$rawTextPre.text(rawText);
  },
  /**
   * 保存为文件
   * 如果是JSON 格式化可见，保存JSON数据为.json文件
   * 如果是JSON 脑图可见，保存脑图为图片
   */
  saveJson: function () {
    if ($jmContainer.is(":visible")) {
      unsafeWindow.GLOBAL_JSMIND.shoot();
      return;
    }

    const content = this.$rawTextPre.text() || unsafeWindow.RAW_TEXT;
    const filename = new Date().getTime() + ".json";
    Utils.downloadText(content, filename);
  },
  /**
   * 复制JSON文本内容
   */
  copyJson: function () {
    const content = this.$rawTextPre.text() || unsafeWindow.RAW_TEXT;
    GM_setClipboard(content);
    layer.msg("复制成功", { time: 1500 });
  },
  /**
   * 点击了`全部折叠`
   * 如果是JSON 格式化可见，折叠JSON
   * 如果是JSON 脑图可见，折叠脑图节点
   */
  collapseAll: function () {
    if ($formatContainer.is(":visible")) {
      try {
        $("a.json-toggle").not(".collapsed").trigger("click");
      } catch (e) {}

      return;
    }

    unsafeWindow.GLOBAL_JSMIND.collapse_all();
  },
  /**
   * 点击了`全部展开`
   * 如果是JSON 格式化可见，展开JSON
   * 如果是JSON 脑图可见，展开脑图节点
   */
  expandAll: function () {
    if ($formatContainer.is(":visible")) {
      try {
        $("a.json-placeholder").trigger("click").remove();
      } catch (e) {}

      return;
    }

    unsafeWindow.GLOBAL_JSMIND.expand_all();
    unsafeWindow.GLOBAL_JSMIND.scroll_node_to_center(
      unsafeWindow.GLOBAL_JSMIND.get_root()
    );
  },
  viewFormater: function () {},
  /**
   * tabs点击了`JSON 脑图`
   */
  viewMind: function () {
    jsonMind.init(unsafeWindow.GLOBAL_JSON);
    unsafeWindow.GLOBAL_JSMIND.scroll_node_to_center(
      unsafeWindow.GLOBAL_JSMIND.get_root()
    );
  },
  /**
   * tabs点击了`原始数据`
   */
  viewRawText: function () {
    if (!this.firstFormat) {
      return;
    }

    this.firstFormat = false;
    this._setRawText();
  },
  /**
   * 点击了`美化输出`
   */
  beautify: function () {
    this.isBeautify = !this.isBeautify;
    if (this.isBeautify) {
      let str = JSONbig.stringify(unsafeWindow.GLOBAL_JSON, null, 2);
      if (unsafeWindow.GLOBAL_JSONP_FUN) {
        str = `${unsafeWindow.GLOBAL_JSONP_FUN}(${str})`;
      }

      this.$rawTextPre.text(str);
      return;
    }

    this._setRawText();
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
      content: `<iframe id="jsoncrackEmbed" src="${URL.JSON_CRACK_WIDGET}"></iframe>`,
      success: function (layero) {
        const jsonCrackEmbed = layero.find("#jsoncrackEmbed")[0];
        window?.addEventListener("message", () => {
          jsonCrackEmbed?.contentWindow?.postMessage(
            {
              options: { theme },
              json: unsafeWindow.RAW_TEXT,
            },
            "*"
          );
        });
      },
    });
  },
  init: function () {
    $(document.body).on("click", ".btn", (e) => {
      const target = e.target;
      const id = target.id;
      if (target.classList.contains("tabs-item")) {
        const clas = "active";
        const index = $(target).index();
        $(target).addClass(clas).siblings().removeClass(clas);
        $(".tabs-container > div").removeClass(clas).eq(index).addClass(clas);

        const beautifyEl = $("#beautify");
        const searchEl = $(".searchbox");
        const copyEl = $("#copyJson");
        const jsoncrackEl = $("#jsoncrack");
        const aEl = $("#collapseAll, #expandAll");

        id === "viewFormater" ? searchEl.show() : searchEl.hide();
        id === "viewMind"
          ? copyEl.hide() && jsoncrackEl.show()
          : copyEl.show() && jsoncrackEl.hide();
        id === "viewRawText"
          ? beautifyEl.show() && aEl.hide()
          : beautifyEl.hide() && aEl.show();
      }

      this[id](target);
    });

    return this;
  },
};

/**
 * 数据发生变更
 */
window.addEventListener("message", function (event) {
  const { data } = event;
  if (!data?.reload) {
    return;
  }

  $jmContainer.html("");
  jsonMind.isFirst = true;
  tabsEvent.isBeautify = false;
  tabsEvent.firstFormat = true;
  unsafeWindow.GLOBAL_JSMIND = undefined;

  if ($rawTextContainer.is(":visible")) {
    tabsEvent.viewRawText();
  }

  if ($jmContainer.is(":visible")) {
    jsonMind.init(unsafeWindow.GLOBAL_JSON);
  }
});

export default tabsEvent;

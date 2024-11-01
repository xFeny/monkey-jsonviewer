import $ from "jquery";
import tippy from "tippy.js";

/**
 * 右侧提示操作
 */
export default {
  instance: null,
  /**
   * 对右侧操作栏的点击事件初始化
   * @returns
   */
  handle: function () {
    const that = this;
    const tagName = "span";
    [".style", ".theme", ".tools"].forEach((selector) => {
      tippy(selector, {
        duration: 500,
        allowHTML: true,
        interactive: true,
        trigger: "click",
        appendTo: document.querySelector(selector).parentNode,
        onTrigger: function (instance) {
          const tools = $(instance.reference);
          tools.siblings().find(tagName).removeClass();
          tools.find(tagName).addClass("active");

          const template = tools.find("template");
          const type = template.data("type");
          const value = GM_getValue(type) || "default";

          const ul = template.contents();
          ul.find("li").removeClass();
          ul.find(`li[data-value=${value}]`).addClass("active");

          instance.setContent(template.html());
          that.instance = instance;
        },
        onHide: function (instance) {
          const tools = $(instance.reference);
          tools.find(tagName).removeClass();
        },
      });
    });
    return this;
  },
  /**
   * 点击了对应选项
   * 如点击了`主题`-`暗黑`，通过window.postMessage进行主题色更新
   * @returns
   */
  checked: function () {
    const that = this;
    $(document.body).on("click", ".rightbox li", function () {
      const el = $(this);
      const hasClass = el.hasClass("active");
      if (hasClass) {
        return;
      }

      const type = el.data("type");
      const value = el.data("value");

      if (type !== "tools") {
        el.addClass("active").siblings().removeClass();
      } else {
        that.instance.hide();
      }

      window.postMessage({ type, value });
    });
    return this;
  },
  init: function () {
    this.handle().checked();
  },
};

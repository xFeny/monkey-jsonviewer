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
  tippy: function () {
    const that = this;
    [".style", ".theme", ".tools"].forEach((selector) => {
      tippy(selector, {
        duration: 100,
        allowHTML: true,
        interactive: true,
        trigger: "click",
        onTrigger: function (instance) {
          const ulbox = $(instance.reference).find(".ulbox");
          const type = ulbox.data("type");
          const dataValue = GM_getValue(type) || "default";
          ulbox.find("li").removeClass();
          ulbox.find(`li[data-value=${dataValue}]`).addClass("active");
          instance.setContent(ulbox.html());
          that.instance = instance;
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
    this.tippy().checked();
  },
};

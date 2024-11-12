import tippy from "tippy.js";
import Utils from "../common/Utils";

const active = "active";
export default {
  currentTippy: null,
  handle: function () {
    const that = this;
    const tagName = "span";
    [".style", ".theme", ".tools"].forEach((selector) => {
      tippy(selector, {
        duration: 500,
        allowHTML: true,
        interactive: true,
        trigger: "click",
        appendTo: Utils.query(selector).parentNode,
        onTrigger: function (instance) {
          that.currentTippy = instance;
          const target = instance.reference;
          Utils.addClass(Utils.query(tagName, target), active);
          const template = Utils.query("template", target);
          const ul = template.content.cloneNode(true);
          const type = template.dataset.type;
          const value = GM_getValue(type) || "default";
          const current = Utils.query(`li[data-value=${value}]`, ul);
          Utils.addClass(current, active);
          const tempDiv = Utils.createElement("div");
          while (ul.firstChild) tempDiv.appendChild(ul.firstChild);
          instance.setContent(tempDiv.innerHTML);
        },
        onHide: function (instance) {
          const target = instance.reference;
          Utils.removeClass(Utils.query(tagName, target));
        },
      });
    });
    return this;
  },
  checked: function () {
    const selector = ".rightbox li";
    Utils.addEvent("click", selector, (event) => {
      const target = event.target;
      if (Utils.hasClass(target, active)) return;
      const type = target.dataset.type;
      const value = target.dataset.value;
      window.postMessage({ type, value });
      if (Object.is(type, "tools")) return this.currentTippy.hide();
      Utils.removeClass(Utils.queryAll(selector));
      Utils.addClass(target, active);
    });
    return this;
  },
  init: function () {
    this.handle().checked();
  },
};

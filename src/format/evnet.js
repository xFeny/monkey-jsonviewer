import tippy from "tippy.js";
import Utils from "../common/Utils";

export default {
  urlHover: function () {
    Utils.addEvent("mouseenter", "a[href]", function () {
      const href = Utils.attr(this, "href");
      if (!Utils.isImg(href)) return;
      tippy(this, {
        duration: 800,
        content: `<img style="max-width: 500px;" src="${href}" />`,
        allowHTML: true,
        theme: "imagebox",
      }).show();
    });
    return this;
  },
  tipsJsonPath: function () {
    Utils.addEvent("mouseenter", ".json-key", (event) => {
      const target = event.target;
      const jsonPath = this.getJsonPath(target);
      const content = `<i>ctrl＋click 复制</i><br/><b>路径：</b>${jsonPath}`;
      tippy(target, {
        content,
        duration: 800,
        allowHTML: true,
        theme: "layer",
      }).show();
    });
    return this;
  },
  copyJsonPath: function () {
    Utils.addEvent("click", ".json-key", (event) => {
      if (!event.ctrlKey) return;
      const jsonPath = this.getJsonPath(event.target);
      GM_setClipboard(jsonPath);
      layer.msg("复制成功", { time: 1500 });
    });
    return this;
  },
  getJsonPath: function (ele) {
    return Utils.attr(ele.parentElement, "JSONPath");
  },
  init: function () {
    this.urlHover().tipsJsonPath().copyJsonPath();
  },
};

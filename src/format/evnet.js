import tippy from "tippy.js";
import Utils from "../common/Utils";

export default {
  urlHover() {
    Utils.addEvent("mouseenter", "a[href]", function () {
      const href = Utils.attr(this, "href");
      if (!Utils.isImg(href)) return;
      const content = `<img style="width:100%" src="${href}" />`;
      tippy(this, { maxWidth: 500, duration: 800, allowHTML: true, theme: "imagebox", content }).show();
    });
    return this;
  },
  eventPath() {
    Utils.addEvent("click mouseenter", ".json-key", (event) => {
      const target = event.target;
      const path = Utils.closest(target, "[path]").getAttribute("path");
      if (Object.is(event.type, "click") && event.ctrlKey) {
        return GM_setClipboard(path) & layer.msg("复制成功", { time: 1500 });
      }
      const content = `<i>ctrl＋click 复制</i><br/><b>路径：</b>${path}`;
      tippy(target, { duration: 800, theme: "layer", allowHTML: true, maxWidth: "none", content }).show();
    });
    return this;
  },
  init() {
    this.urlHover().eventPath();
  },
};

import tippy from "tippy.js";
import Utils from "../common/Utils";

export default {
  urlHover() {
    Utils.addEvent("mouseenter", "a[href]", function () {
      const href = Utils.attr(this, "href");
      if (!Utils.isImg(href)) return;
      tippy(this, {
        duration: 800,
        allowHTML: true,
        theme: "imagebox",
        content: `<img style="max-width: 500px;" src="${href}" />`,
      }).show();
    });
    return this;
  },
  eventPath() {
    Utils.addEvent("click mouseenter", ".json-key", (event) => {
      const target = event.target;
      const path = Utils.closest(target, ".json-formater-item").getAttribute("path");
      if (Object.is(event.type, "click") && event.ctrlKey) {
        return GM_setClipboard(path) & layer.msg("复制成功", { time: 1500 });
      }

      tippy(target, {
        duration: 800,
        theme: "layer",
        allowHTML: true,
        content: `<i>ctrl＋click 复制</i><br/><b>路径：</b>${path}`,
      }).show();
    });
    return this;
  },
  init() {
    this.urlHover().eventPath();
  },
};

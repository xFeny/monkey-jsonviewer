import $ from "jquery";
import tippy from "tippy.js";
import Utils from "../common/Utils";

/**
 * JSON 格式化容器内事件
 */
export default {
  /**
   * a标签鼠标移入，看是否是图片，是图片生成预览图
   * @returns this
   */
  urlHover: function () {
    $("#formatContainer").on("mouseenter", "a[href]", function () {
      const that = $(this),
        href = that.attr("href");
      if (Utils.isImg(href)) {
        tippy(this, {
          content: `<img style="max-width: 500px;" src="${href}" />`,
          allowHTML: true,
          theme: "imagebox",
        }).show();
      }
    });
    return this;
  },
  /**
   * 鼠标移入key提示JSONPath
   * @returns this
   */
  tipsJsonPath: function () {
    const that = this;
    $("#formatContainer").on("mouseenter", ".json-key", function () {
      const jsonPath = that.getJsonPath(this);
      const content = `<b>ctrl + 点击复制</b><br/>${jsonPath}`;
      tippy(this, {
        content,
        allowHTML: true,
        theme: "layer",
      }).show();
    });
    return that;
  },
  /**
   * 复制key的JSONPath
   * @returns
   */
  copyJsonPath: function () {
    const that = this;
    $("#formatContainer").on("click", ".json-key", function (event) {
      if (event.ctrlKey) {
        const jsonPath = that.getJsonPath(this);
        GM_setClipboard(jsonPath);
        layer.msg("复制成功", { time: 1500 });
      }
    });
    return that;
  },
  /**
   * 给定htmlElement获取JSONPath
   * @param {*} element
   * @returns
   */
  getJsonPath: function (element) {
    const style = GM_getValue("style") || "default";
    const jsonPath =
      style == "default"
        ? $(element).parent().attr("json-path")
        : $(element).attr("json-path");
    return jsonPath
      .split(".")
      .reduce((prev, next) =>
        /^\d+$/.test(next) ? prev + `[${next}]` : prev + "." + next
      );
  },
  init: function () {
    this.urlHover().tipsJsonPath().copyJsonPath();
  },
};

import $ from "jquery";
import Utils from "../core/Utils";

/**
 * JSON 格式化容器内事件
 */
export default {
  /**
   * a标签鼠标移入，看是否是图片，是图片生成预览图
   * @returns this
   */
  urlHover: function () {
    $("#formatContainer").on(
      {
        mouseenter: function () {
          var that = $(this),
            href = that.attr("href");
          if (Utils.isImg(href)) {
            layer.tips(`<img src="${href}" />`, that, {
              time: 0,
              anim: 5,
              maxWidth: 500,
              tips: [3, "#d9d9d9"],
            });
          }
        },
        mouseleave: () => layer.closeAll(),
      },
      "a[href]"
    );
    return this;
  },
  /**
   * 鼠标移入key提示JSONPath
   * @returns this
   */
  tipsJsonPath: function () {
    var that = this;
    $("#formatContainer").on(
      {
        mouseenter: function () {
          const jsonPath = that.getJsonPath(this);
          const tips = `<b>ctrl + 点击复制</b><br/>${jsonPath}`;
          layer.tips(tips, this, {
            time: 0,
            anim: 5,
            maxWidth: 500,
            tips: [1, "#2e59a7"],
          });
        },
        mouseleave: () => layer.closeAll(),
      },
      ".json-key"
    );
    return this;
  },
  /**
   * 复制key的JSONPath
   * @returns
   */
  copyJsonPath: function () {
    var that = this;
    $("#formatContainer").on("click", ".json-key", function (event) {
      if (event.ctrlKey) {
        const jsonPath = that.getJsonPath(this);
        GM_setClipboard(jsonPath);
        layer.msg("复制成功", { time: 1500 });
      }
    });
    return this;
  },
  /**
   * 给定htmlElement获取JSONPath
   * @param {*} element
   * @returns
   */
  getJsonPath: function (element) {
    const style = GM_getValue("formatStyle") || "default";
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

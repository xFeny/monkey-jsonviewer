import $ from "jquery";
import Utils from "../common/Utils";

export default {
  /**
   * 根据`filter`过滤 JSON
   * @param {*} filter 过滤值
   * @returns
   */
  match: function (filter) {
    const style = GM_getValue("style") || "default";
    const allPath = $(`#formatBox *[json-path]`);
    if (!filter) {
      style == "default"
        ? allPath.removeClass("hidden")
        : allPath.parent().removeClass("hidden");
      return;
    }

    const chainSet = new Set();
    /**
     * 模糊匹配 JSON key
     * 假如`filter`值为`id`, querySelectorAll所有`json-path`的DOM节点，判断是否为最末端匹配
     * 如匹配到`Root.feedList.0.images.0.user_id`
     * 则循环获取上级，最终结果数组：
     * ['.feedList.0.images.0.user_id', '.feedList.0.images.0', '.feedList.0.images', '.feedList.0', '.feedList']
     */
    document.querySelectorAll("#formatBox *[json-path]").forEach((el) => {
      let chain = $(el).attr("json-path");
      if (!chain) {
        return;
      }

      const newChain = chain.substring(chain.lastIndexOf("."));
      if (!newChain.toLowerCase().includes(filter.toLowerCase())) {
        return;
      }

      chainSet.add(chain);
      while ((chain = chain.substring(0, chain.lastIndexOf(".")))) {
        chainSet.add(chain);
      }
    });

    /**
     * 模糊匹配 JSON value
     */
    const selector = [
      "json-key",
      "json-comma",
      "json-colon",
      "json-viewer",
      "json-formater-placeholder",
    ].reduce(
      (prev, next) => prev + ':not([class*="' + next + '"])',
      "#formatBox *[class*='json-']"
    );
    document.querySelectorAll(selector).forEach((el) => {
      const target = $(el);
      let chain = target.siblings().attr("json-path");
      if (style == "default") {
        chain = target.parent().attr("json-path");
      }

      if (!chain) {
        return;
      }

      const text = target.text();
      if (!text.toLowerCase().includes(filter.toLowerCase())) {
        return;
      }

      chainSet.add(chain);
      while ((chain = chain.substring(0, chain.lastIndexOf(".")))) {
        chainSet.add(chain);
      }
    });

    // console.log(chainSet)
    style == "default"
      ? allPath.addClass("hidden")
      : allPath.parent().addClass("hidden");
    chainSet.forEach((chain) => {
      const path = $(`#formatBox *[json-path="${chain}"]`);
      style == "default"
        ? path.removeClass("hidden")
        : path.parent().removeClass("hidden");
    });
  },
  /**
   * JSON 过滤输入框事件监听
   * @returns
   */
  input: function () {
    const that = this;
    const debounceInput = Utils.debounce(function () {
      that.match(this.value);
      $(".clear").attr("hidden", !this.value);
    }, 500);
    $(document.body).on("input", ".searchbox input", debounceInput);
    return that;
  },
  /**
   * 清空输入框内容
   * @returns
   */
  clear: function () {
    const that = this;
    $(document.body).on("click", ".searchbox .clear", function () {
      that.match();
      $(this).attr("hidden", true);
      $(".searchbox input").val("");
    });
    return this;
  },
  init: function () {
    this.input().clear();
  },
};

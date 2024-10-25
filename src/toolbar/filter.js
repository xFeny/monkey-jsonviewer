import $ from "jquery";

export default {
  /**
   * 根据`filter`过滤 JSON
   * @param {*} filter 过滤值
   * @returns
   */
  filterJSON: function (filter) {
    const style = GM_getValue("style") || "default";
    const allPath = $(`#formatContainer *[json-path]`);
    if (!filter) {
      style == "default"
        ? allPath.removeClass("hidden")
        : allPath.parent().removeClass("hidden");
      return;
    }

    const chainSet = new Set();
    /**
     * 模糊匹配 JSON key
     * 假如`filter`值为`id`, querySelectorAll得到DOM节点
     * 得到：['.feedList.0.images.0.user_id', '.feedList.0.images.0', '.feedList.0.images', '.feedList.0', '.feedList']
     */
    document.querySelectorAll("#formatContainer *[json-path]").forEach((el) => {
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
    document
      .querySelectorAll(
        "#formatContainer *[class*='json-']:not([class*='json-key']):not([class*='json-brackets'])"
      )
      .forEach((el) => {
        const target = $(el);
        let chain =
          style == "default"
            ? target.parent().attr("json-path")
            : target.siblings().attr("json-path");
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
      const path = $(`#formatContainer *[json-path="${chain}"]`);
      if (style == "default") {
        path.removeClass("hidden");
        return;
      }

      path.parent().removeClass("hidden");
    });
  },
  /**
   * JSON 过滤输入框事件监听
   * @returns
   */
  input: function () {
    const that = this;
    $(document.body).on("input", ".searchbox input", function () {
      const val = $(this).val();
      $(".clear").attr("hidden", !val);
      that.filterJSON(val);
    });
    return that;
  },
  /**
   * 清空输入框内容
   * @returns
   */
  clear: function () {
    const that = this;
    $(document.body).on("click", ".searchbox .clear", function () {
      that.filterJSON();
      $("input").val("");
      $(this).attr("hidden", true);
    });
    return this;
  },
  init: function () {
    this.input().clear();
  },
};

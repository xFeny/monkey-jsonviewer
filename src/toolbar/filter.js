import $ from "jquery";

export default {
  /**
   * 根据`filter`过滤 JSON
   * @param {*} filter 过滤值
   * @returns
   */
  filterJSON: function (filter) {
    const style = GM_getValue("style") || "default";
    if (!filter) {
      style == "default"
        ? $("#formatContainer li").removeClass("hidden")
        : $(".json-key").parent().removeClass("hidden");
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
      const newChain = chain.substr(chain.lastIndexOf("."));
      if (!newChain.toLowerCase().includes(filter.toLowerCase())) {
        return;
      }
      chainSet.add(chain);
      while ((chain = chain.substr(0, chain.lastIndexOf(".")))) {
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
            : target.siblings(".json-key").attr("json-path");
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
      ? $("#formatContainer li").addClass("hidden")
      : $(".json-key").parent().addClass("hidden");
    chainSet.forEach((chain) => {
      style == "default"
        ? $(`#formatContainer *[json-path="${chain}"]`).removeClass("hidden")
        : $(`#formatContainer *[json-path="${chain}"]`)
            .parent()
            .removeClass("hidden");
    });
  },
  /**
   * JSON 过滤输入框事件监听
   * @returns
   */
  input: function () {
    const that = this;
    $("input").on("input", function () {
      const val = $(this).val();
      val === ""
        ? $(".clear").attr("hidden", true)
        : $(".clear").attr("hidden", false);
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
    $(".clear").click(function () {
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

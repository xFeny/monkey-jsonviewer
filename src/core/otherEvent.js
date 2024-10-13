import $ from "jquery";
import Utils from "./Utils";
import btnEvent from "./btnEvent";
import formatStyle from "./formatStyle";
import jsonMind from "./jsonMind";

const otherEvent = {
  // 过滤 JSON
  filterJSON: function (filter) {
    const style = GM_getValue("formatStyle") || "default";
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
  // JSON 过滤
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
  // 清空输入框内容
  clear: function () {
    const that = this;
    $(".clear").click(function () {
      that.filterJSON();
      $("input").val("");
      $(this).attr("hidden", true);
    });
    return this;
  },
  // 返回顶部
  scrollTop: function () {
    $(".scroll-top").click(function () {
      $(".tabs-container").animate(
        {
          scrollTop: "0",
        },
        1000
      );
    });
    $(".tabs-container").scroll(function (e) {
      const scrollTop = $(this).scrollTop();
      scrollTop > 500 ? $(".scroll-top").fadeIn() : $(".scroll-top").fadeOut();
    });
    return this;
  },
  // 所有a标签，看是否是图片，是图片生成预览图
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
  // 提示key的JSONPath
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
  // 单击key复制JSONPath
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
  inputJson: function () {
    const that = this;
    $(".inputJson")
      .off("click")
      .click(function () {
        layer.prompt(
          {
            title: "JSON 输入",
            formType: 2,
            shadeClose: true,
            maxlength: 1000000,
          },
          function (text) {
            if (!text) {
              layer.msg("内容不能为空", { time: 1500 });
              return;
            }

            const rawText = text,
              oldJSONPFun = unsafeWindow.GLOBAL_JSONP_FUN;

            // 判断是否为jsonp格式
            const match = text.match(/^([^\s(]*)\s*\(([\s\S]*)\)\s*;?$/);
            if (match && match[1] && match[2]) {
              unsafeWindow.GLOBAL_JSONP_FUN = match[1];
              text = match[2];
            }

            try {
              const json = JSON.parse(JSON.stringify(eval(`(${text})`)));
              that.reload(json, rawText);
            } catch (e) {
              console.log(e);
              unsafeWindow.GLOBAL_JSONP_FUN = oldJSONPFun;
              layer.msg("JSON不合法", { time: 1500 });
            }
          }
        );
      });
    return this;
  },
  fetchApi: function () {
    const that = this;
    $(".fetchApi")
      .off("click")
      .on("click", function () {
        layer.open({
          type: 1,
          closeBtn: 0, //不显示关闭按钮
          shadeClose: true, //开启遮罩关闭
          title: "HTTP 请求",
          content: `<form class="httpRequest">
                        <div class="requestbox">
                            <select name="method">
                                <option value="POST">POST</option>
                                <option value="GET">GET</option>
                                <option value="PUT">PUT</option>
                                <option value="DELETE">DELETE</option>
                            </select>
                            <input name="url" placeholder="请求地址" />
                            <select name="contentType">
                                <option value="application/x-www-form-urlencoded;charset=UTF-8">urlencoded</option>
                                <option value="application/json;charset=UTF-8">application/json</option>
                            </select>
                            <button type="submit">发送</button>
                        </div>
                        <div class="textarea">
                            <input name="headers" placeholder='请求头 {"token": "test"}' />
                            <input name="params" placeholder='请求参数 {"id": "test", ""name": "test"}' />
                        </div>
                    </form>`,
        });

        $("form").submit(function (event) {
          event.preventDefault();

          const serialize = $(this).serializeArray();
          const form = {};
          for (const key in serialize) {
            const it = serialize[key];
            form[it.name] = it.value;
          }

          if (form.url === "") {
            layer.msg("请求URL不能为空");
            return;
          }

          let headers = form.headers;
          let params = form.params;
          try {
            if (headers) {
              headers = JSON.parse(headers);
            }
          } catch (e) {
            layer.msg("请求头格式不合法");
            return;
          }
          try {
            if (params) {
              params = JSON.parse(params);
            }
          } catch (e) {
            layer.msg("请求参数格式不合法");
            return;
          }

          layer.load(0, { shade: false });
          $.ajax({
            url: "https://fetch-api.feny.ink/httpRequest",
            type: "POST",
            data: JSON.stringify(form),
            contentType: "application/json",
          }).then(
            (response) => {
              unsafeWindow.GLOBAL_JSONP_FUN = null;
              that.reload(response, JSON.stringify(response));
            },
            (error) => {
              layer.closeAll();
              console.log(error);
            }
          );
        });
      });
    return this;
  },
  reload: function (json, rawText) {
    unsafeWindow.GLOBAL_JSON = json;
    unsafeWindow.GLOBAL_SOURCE_ELEMENT.text(rawText);
    btnEvent.isBeautify = false;
    btnEvent.$rawText.html(unsafeWindow.GLOBAL_SOURCE_ELEMENT.clone());
    formatStyle.setStyle();
    jsonMind.isFirst = true;
    jsonMind.init(unsafeWindow.GLOBAL_JSON);
    layer.closeAll();
  },
  init: function () {
    this.input()
      .clear()
      .scrollTop()
      .urlHover()
      .tipsJsonPath()
      .copyJsonPath()
      .inputJson()
      .fetchApi();
  },
};
export default otherEvent;

import $ from "jquery";
import JSONbig from "json-bigint";
import URL from "../common/URL";
import Utils from "../common/Utils";
import http_form from "../layout/http_form";

/**
 * toolbar右侧JOSN输入和HTTP请求功能操作
 */
export default {
  inputJson: function () {
    const that = this;
    layer.prompt(
      {
        title: "JSON 输入",
        formType: 2,
        btn: ["确认"],
        shadeClose: true,
        maxlength: 1000000,
        area: ["400px", "300px"],
      },
      function (text) {
        if (!text) {
          layer.msg("内容不能为空", { time: 1500 });
          return;
        }

        // 判断是否为jsonp格式
        const { rawText, jsonpFun } = Utils.jsonpMatch(text);
        try {
          const json = JSONbig({ useNativeBigInt: true }).parse(rawText);
          that.reload(json, rawText, jsonpFun);
        } catch (e) {
          layer.msg("JSON格式不正确", { time: 1500 });
          console.log("格式化异常: ", e);
        }
      }
    );
    return this;
  },
  fetchApi: function () {
    const that = this;
    layer.open({
      type: 1,
      closeBtn: 0,
      shadeClose: true,
      title: "HTTP 请求",
      content: http_form,
    });

    $("form").on("submit", function (event) {
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
      fetch(URL.ONLINE_REQUEST, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })
        .then(async (response) => {
          const result = await response.json();
          if (typeof result === "string") {
            try {
              const { rawText, jsonpFun } = Utils.jsonpMatch(result);
              const json = JSONbig({ useNativeBigInt: true }).parse(rawText);
              that.reload(json, rawText, jsonpFun);
            } catch (e) {
              layer.closeAll();
              console.log("HTTP 请求异常：", e);
            }
          } else {
            that.reload(result, JSONbig.stringify(result), null);
          }
        })
        .catch((e) => {
          layer.closeAll();
          console.log("HTTP 请求异常：", e);
        });
    });
    return this;
  },
  reload: function (json, rawText, jsonpFun) {
    unsafeWindow.GLOBAL_JSON = json;
    unsafeWindow.RAW_TEXT = rawText;
    unsafeWindow.GLOBAL_JSONP_FUN = jsonpFun;
    window.postMessage({ reload: true });
    layer.closeAll();
  },
  init: function () {
    window.addEventListener("message", (event) => {
      const { data } = event;
      if (!data) {
        return;
      }

      const { type, value } = data;
      if (type === "tools") {
        this[value]();
      }
    });
  },
};

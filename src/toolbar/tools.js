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
        move: false,
        formType: 2,
        btn: ["确认"],
        shadeClose: true,
        title: "JSON 输入",
        maxlength: 1000000,
        area: ["400px", "300px"],
      },
      function (text) {
        if (!text) return layer.msg("内容不能为空", { time: 1500 });
        const { rawText, jsonpFun } = Utils.matchJsonp(text);
        try {
          const json = Utils.parse(rawText);
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
      success: function () {
        const form = Utils.query("form");
        form.addEventListener("submit", function (event) {
          handler(event, form);
        });
      },
    });

    function handler(event, formEl) {
      event.preventDefault();
      const formData = new FormData(formEl);
      const form = {};
      for (const [name, value] of formData) {
        form[name] = value;
      }
      if (form.url === "") return layer.msg("请求URL不能为空");
      let headers = form.headers;
      let params = form.params;
      try {
        if (headers) headers = JSON.parse(headers);
      } catch (e) {
        return layer.msg("请求头格式不合法");
      }
      try {
        if (params) params = JSON.parse(params);
      } catch (e) {
        return layer.msg("请求参数格式不合法");
      }

      layer.load(0, { shade: false });
      fetch(URL.ONLINE_REQUEST, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: Utils.stringify(form),
      })
        .then(async (response) => {
          const result = await response.json();
          if (typeof result === "string") {
            try {
              const { rawText, jsonpFun } = Utils.matchJsonp(result);
              const json = Utils.parse(rawText);
              that.reload(json, rawText, jsonpFun);
            } catch (e) {
              layer.closeAll();
              console.log("HTTP 请求异常：", e);
            }
          } else {
            that.reload(result, Utils.stringify(result), null);
          }
        })
        .catch((e) => {
          layer.closeAll();
          console.log("HTTP 请求异常：", e);
        });
    }
    return this;
  },
  reload: function (json, rawText, jsonpFun) {
    unsafeWindow.GLOBAL_JSON = json;
    unsafeWindow.RAW_TEXT = rawText;
    unsafeWindow.GLOBAL_JSONP_FUN = jsonpFun;
    window.postMessage({ reload: true });
    layer.closeAll();
  },
};

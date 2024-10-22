import $ from "jquery";
import URL from "../common/URL";
import Utils from "../common/Utils";
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

        const oldJSONPFun = unsafeWindow.GLOBAL_JSONP_FUN;

        // 判断是否为jsonp格式
        const { raw, jsonpFun } = Utils.jsonpMatch(text);
        unsafeWindow.GLOBAL_JSONP_FUN = jsonpFun;
        try {
          const json = JSON.parse(JSON.stringify(eval(`(${raw})`)));
          that.reload(json, raw);
        } catch (e) {
          unsafeWindow.GLOBAL_JSONP_FUN = oldJSONPFun;
          layer.msg("JSON不合法", { time: 1500 });
        }
      }
    );
    return this;
  },
  fetchApi: function () {
    const that = this;
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
      $.ajax({
        url: URL.ONLINE_HTTP_REQUEST,
        type: "POST",
        data: JSON.stringify(form),
        contentType: "application/json",
      }).then(
        (response) => {
          if (typeof response === "string") {
            const { raw, jsonpFun } = Utils.jsonpMatch(response);
            unsafeWindow.GLOBAL_JSONP_FUN = jsonpFun;
            that.reload(eval(`(${raw})`), raw);
          } else {
            unsafeWindow.GLOBAL_JSONP_FUN = null;
            that.reload(response, JSON.stringify(response));
          }
        },
        (error) => {
          layer.closeAll();
          console.log(error);
        }
      );
    });
    return this;
  },
  reload: function (json, rawText) {
    unsafeWindow.GLOBAL_JSON = json;
    unsafeWindow.GLOBAL_SOURCE_ELEMENT.text(rawText);
    window.postMessage({ reload: true });
    layer.closeAll();
  },
  init: function () {
    const that = this;
    window.addEventListener("message", function (event) {
      const { data } = event;
      if (!data) {
        return;
      }

      const { type, value } = data;
      if (type === "tools") {
        that[value]();
      }
    });
  },
};

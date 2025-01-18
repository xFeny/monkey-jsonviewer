import FormaterFactory from "../common/lib";
import "../common/lib/json-fromaer.scss";
import Utils from "../common/Utils";
import evnet from "./evnet";

const format = {
  changeStyle(style) {
    GM_setValue("style", style) & this.setStyle();
    return this;
  },
  setStyle() {
    unsafeWindow.FILTER_VALUE = "";
    Utils.query(".filter").value = "";
    Utils.attr(Utils.query(".clear"), "hidden", true);
    this.render(unsafeWindow.GLOBAL_JSON);
    return this;
  },
  render(json) {
    const container = Utils.query("#formatBox");
    const style = GM_getValue("style") || "default";
    const theme = GM_getValue("theme") || "default";
    const options = { json, style, theme, container };
    unsafeWindow.JSON_FORMATER = FormaterFactory.getInstance(options);
    if (unsafeWindow.GLOBAL_JSONP_FUN) {
      const start = Utils.createElement("div", { class: "jsonp" });
      start.textContent = `${unsafeWindow.GLOBAL_JSONP_FUN}(`;
      container.prepend(start);
      const end = start.cloneNode(true);
      end.textContent = ")";
      container.append(end);
    }
    return this;
  },
  filter(json, text) {
    text = text.toLowerCase();
    function match(json, text) {
      const newJson = Array.isArray(json) ? new Array() : new Object();
      const entries = Object.entries(json);
      for (const [key, value] of entries) {
        const type = Utils.getType(value);
        const _key = key.toLowerCase();
        const _value = Utils.stringify(value).toLowerCase();

        if (!_key.includes(text) && !_value.includes(text)) continue;
        if (["array", "object"].includes(type)) {
          const result = match(value, text);
          const _result = Utils.stringify(result).toLowerCase();
          if (_key.includes(text) || _result.includes(text)) {
            newJson[key] = result;
          }
        } else {
          newJson[key] = value;
        }
      }
      return newJson;
    }
    return match(json, text);
  },
  input() {
    const debounceInput = Utils.debounce((event) => {
      const value = event.target.value;
      unsafeWindow.FILTER_VALUE = value;
      const clear = Utils.query(".clear");
      Utils.attr(clear, "hidden", !value);
      const newJson = this.filter(unsafeWindow.GLOBAL_JSON, value);
      this.render(newJson);
    }, 400);
    Utils.addEvent("input", ".filter", debounceInput);
    return this;
  },
  clear() {
    Utils.addEvent("click", ".clear", () => this.setStyle());
    return this;
  },
  init() {
    this.setStyle().input().clear();
    evnet.init();
  },
};

window.addEventListener("message", function (event) {
  const { data } = event;
  if (!data) return;
  if (data.reload) return format.setStyle();
  const { type, value } = data;
  if (Object.is(type, "style")) format.changeStyle(value);
});

format.init();
export default format;

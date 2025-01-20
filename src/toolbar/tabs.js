import jsonMind from "../mind";
import URL from "../common/URL";
import Utils from "../common/Utils";

const mindBox = Utils.query("#mindBox");
const formatBox = Utils.query("#formatBox");
const rawTextBox = Utils.query("#rawTextBox");
const rawTextPre = Utils.query("pre", rawTextBox);
const tabs = {
  viewFormater() {
    const value = unsafeWindow.FILTER_VALUE || "";
    Utils.query(".filter").value = value;
    Utils.attr(Utils.query(".clear"), "hidden", !value);
  },
  saveJson() {
    if (Utils.isVisible(mindBox)) return unsafeWindow.GLOBAL_JSMIND.shoot();
    const content = rawTextPre.textContent || unsafeWindow.RAW_TEXT;
    const filename = new Date().getTime() + ".json";
    Utils.downloadText(content, filename);
  },
  copyJson() {
    GM_setClipboard(rawTextPre.textContent || unsafeWindow.RAW_TEXT);
    layer.msg("复制成功", { time: 1500 });
  },
  sorted(el) {
    el.textContent = unsafeWindow.JSON_FORMATER.sorted();
  },
  collapseAll() {
    Utils.isVisible(formatBox) ? unsafeWindow.JSON_FORMATER.collapseAll() : unsafeWindow.GLOBAL_JSMIND.collapse_all();
  },
  expandAll() {
    if (Utils.isVisible(formatBox)) return unsafeWindow.JSON_FORMATER.expandAll();
    unsafeWindow.GLOBAL_JSMIND.expand_all();
    unsafeWindow.GLOBAL_JSMIND.scroll_node_to_center(unsafeWindow.GLOBAL_JSMIND?.get_root());
  },
  viewMind() {
    jsonMind.init(unsafeWindow.GLOBAL_JSON);
    unsafeWindow.GLOBAL_JSMIND.scroll_node_to_center(unsafeWindow.GLOBAL_JSMIND.get_root());
  },
  jsoncrack() {
    const theme = (GM_getValue("theme") || "light").replace(/-.*/, "");
    layer.closeAll();
    layer.open({
      type: 1,
      move: false,
      title: false,
      area: ["100vw", "100vh"],
      content: `<iframe id="jsoncrackEmbed" src="${URL.JSON_CRACK_WIDGET}"></iframe>`,
      success() {
        const jsonCrackEmbed = Utils.query("#jsoncrackEmbed");
        window?.addEventListener("message", () => {
          const msg = { options: { theme }, json: unsafeWindow.RAW_TEXT };
          jsonCrackEmbed?.contentWindow?.postMessage(msg, "*");
        });
      },
    });
  },
  _setRawText() {
    let rawText = unsafeWindow.RAW_TEXT;
    if (unsafeWindow.GLOBAL_JSONP_FUN) {
      rawText = `${unsafeWindow.GLOBAL_JSONP_FUN}(${rawText})`;
    }
    rawTextPre.textContent = rawText;
  },
  firstFormat: true,
  viewRawText() {
    if (!this.firstFormat) return;
    this.firstFormat = false;
    this._setRawText();
  },
  isBeautify: false,
  beautify() {
    this.isBeautify = !this.isBeautify;
    if (!this.isBeautify) return this._setRawText();
    let str = Utils.stringify(unsafeWindow.GLOBAL_JSON, null, 2);
    if (unsafeWindow.GLOBAL_JSONP_FUN) {
      str = `${unsafeWindow.GLOBAL_JSONP_FUN}(${str})`;
    }
    rawTextPre.textContent = str;
  },
  init() {
    Utils.addEvent("click", ".btn", (e) => {
      const target = e.target;
      const id = target.id;
      if (Utils.hasClass(target, "tabs-item")) {
        const clas = "active";
        Utils.removeClass(Utils.queryAll(".tabs-item"), clas);
        Utils.addClass(target, clas);
        Utils.removeClass(Utils.queryAll("div[data-for]"), clas);
        Utils.addClass(Utils.query(`div[data-for="${id}"]`), clas);
        const template = Utils.query(`template[data-for='${id}']`);
        Utils.query(".toolbar").innerHTML = template.innerHTML;
      }
      this[id](target);
    });
  },
};

window.addEventListener("message", function (event) {
  const { data } = event;
  if (!data?.reload) return;
  mindBox.innerHTML = "";
  jsonMind.isFirst = true;
  tabs.isBeautify = false;
  tabs.firstFormat = true;
  unsafeWindow.GLOBAL_JSMIND = undefined;
  if (Utils.isVisible(rawTextBox)) return tabs.viewRawText();
  if (Utils.isVisible(mindBox)) return jsonMind.init(unsafeWindow.GLOBAL_JSON);
});

export default tabs;

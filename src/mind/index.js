import tippy from "tippy.js";
import jsMind from "jsmind";
import "jsmind/screenshot";
import "jsmind/style/jsmind.css";
import Utils from "../common/Utils";

export default {
  isFirst: true,
  transform(json) {
    const result = [];
    if (Utils.isObject(json)) {
      for (const key in json) {
        let value = json[key];
        const isArray = Array.isArray(value);
        const type = Utils.getPropType(value);
        if (isArray && value.length > 0) value = Utils.getMaxKeysAndDepthObject(value);
        const isObject = Object.is(Utils.getType(value), "object");
        const keys = isObject ? Object.keys(value) : null;
        const children = this.transform(value);
        const topic = `${key}<span class="datatype">${type}</span>`;
        result.push({ keys, topic, isArray, children, chain: key, id: Utils.random() });
      }
    }
    return result;
  },
  getChain(node) {
    let chain = node?.data?.chain;
    if (!node?.parent) return chain;
    const parent = node.parent;
    const parentChain = this.getChain(parent);
    if (parent.data.isArray) return `${parentChain}[i].${chain}`;
    if (chain.includes(".")) return `${parentChain}["${chain}"]`;
    return `${parentChain}.${chain}`;
  },
  show(json) {
    let isArray = Array.isArray(json);
    if (isArray) {
      if (typeof json[0] !== "object") {
        layer.msg("无法生成脑图", { time: 1000 });
        return this;
      }
      json = Utils.getMaxKeysAndDepthObject(json);
    }

    if (!this.isFirst) return this;
    const children = this.transform(json);
    unsafeWindow.GLOBAL_JSMIND.show({
      format: "node_tree",
      meta: { version: "1.0", name: "JSON脑图", author: "1220301855@qq.com" },
      data: { isArray, children, id: "root", chain: "Root", topic: "Root", direction: "left", keys: Object.keys(json) },
    });
    this.isFirst = false;
    return this;
  },
  event() {
    Utils.addEvent("click mouseover", "jmnode", (event) => {
      const target = event.target;
      const nodeid = Utils.attr(target, "nodeid");
      const node = unsafeWindow.GLOBAL_JSMIND.get_node(nodeid);
      const chain = this.getChain(node);
      if (!chain) return;
      if (event.type === "click") {
        if (event.ctrlKey) {
          GM_setClipboard(chain);
          layer.msg("复制成功", { time: 1500 });
          return;
        }

        const keys = node.data.keys;
        if (!keys || keys.length === 0) return;
        this.popup(chain, keys);
      } else {
        const content = `<i>ctrl＋click 复制</i><br/><b>路径：</b>${chain}`;
        tippy(target, { content, duration: 800, theme: "layer", allowHTML: true, maxWidth: "none" }).show();
      }
    });
    return this;
  },
  popup(chain, keys) {
    layer.open({
      type: 1,
      move: false,
      shadeClose: true,
      title: " 节点",
      content: (function () {
        const chain = Utils.createElement("div");
        const chainCon = Utils.createElement("div");
        chain.appendChild(chainCon);
        const content = Utils.createElement("div", { class: "js-mind-child-node" });
        const copy = Utils.createElement("div", { title: "复制", class: "js-mind-copy" });
        content.appendChild(copy);
        keys.forEach((i) => {
          const child = Utils.createElement("div");
          child.textContent = i;
          content.appendChild(child);
        });
        return content.outerHTML;
      })(),
      success(layero) {
        layero.on("click", ".js-mind-copy", function () {
          GM_setClipboard(chain + "\n\n" + keys.join("\n"));
          layer.msg("复制成功", { time: 1500 });
        });
      },
    });
  },
  init(json) {
    if (unsafeWindow.GLOBAL_JSMIND) return;
    unsafeWindow.GLOBAL_JSMIND = new jsMind({
      mode: "side",
      editable: false,
      container: "mindBox",
      view: { hmargin: 50, vmargin: 50, engine: "svg", draggable: true, support_html: false, line_color: "#C4C9D0" },
      layout: { vspace: 5, hspace: 130 },
    });
    this.show(json).event();
  },
};

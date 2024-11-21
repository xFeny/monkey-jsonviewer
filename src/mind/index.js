import tippy from "tippy.js";
import jsMind from "jsmind";
import "jsmind/screenshot";
import "jsmind/style/jsmind.css";
import Utils from "../common/Utils";

export default {
  isFirst: true,
  transform(json) {
    const children = [];
    if (Utils.isObject(json)) {
      for (const key in json) {
        let val = json[key];
        const isArray = Array.isArray(val);
        const type = Utils.getPropType(val);
        if (isArray && val.length > 0) val = Utils.findMaxKeysObject(val);
        const isObject = Object.is(Utils.getType(val), "object");
        const keys = isObject ? Object.keys(val) : null;
        children.push({
          keys,
          isArray,
          chain: key,
          id: key + "_" + Math.random(),
          topic: `${key}<span class="datatype">${type}</span>`,
          children: this.transform(val),
        });
      }
    }
    return children;
  },
  getChain(node) {
    let chain = node.data.chain;
    if (!node.parent) return chain;
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
      json = Utils.findMaxKeysObject(json);
    }

    if (!this.isFirst) return this;
    unsafeWindow.GLOBAL_JSMIND.show({
      meta: {
        version: "1.0",
        name: "JSON脑图",
        author: "1220301855@qq.com",
      },
      format: "node_tree",
      data: {
        isArray,
        id: "root",
        chain: "Root",
        topic: "Root",
        direction: "left",
        keys: Object.keys(json),
        children: this.transform(json),
      },
    });
    this.isFirst = false;
    return this;
  },
  event() {
    const that = this;
    Utils.addEvent("click mouseover", "jmnode", handler);
    function handler(event) {
      const nodeid = Utils.attr(this, "nodeid");
      const node = unsafeWindow.GLOBAL_JSMIND.get_node(nodeid);
      const chain = that.getChain(node);

      if (event.type === "click") {
        if (event.ctrlKey) {
          GM_setClipboard(chain);
          layer.msg("复制成功", { time: 1500 });
          return;
        }

        const keys = node.data.keys;
        if (!keys || keys.length === 0) return;
        that.popup(chain, keys);
      } else {
        const content = `<i>ctrl＋click 复制</i><br/><b>路径：</b>${chain}`;
        tippy(this, {
          content,
          duration: 800,
          allowHTML: true,
          theme: "layer",
        }).show();
      }
    }
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
        const copy = Utils.createElement("div", {
          title: "复制",
          class: "js-mind-copy",
        });
        const content = Utils.createElement("div", {
          class: "js-mind-child-node",
        });
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
      view: {
        hmargin: 50,
        vmargin: 50,
        engine: "svg",
        draggable: true,
        support_html: false,
        line_color: "#C4C9D0",
      },
      layout: {
        vspace: 5,
        hspace: 130,
      },
    });
    this.show(json).event();
  },
};

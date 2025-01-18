import Utils from "../Utils";
import JsonFormat from "./JsonFormat";

class JsonViewer extends JsonFormat {
  constructor(options) {
    options.style = JsonFormat.STYLE.VIEWER;
    super(options, "div", "json-viewer");
  }

  createNode(wrapper, json, path, pid) {
    const type = Utils.getType(json);
    const isIterator = this.isIterator(json);
    const hasNext = this.hasNext(json);
    const node = hasNext
      ? this.depthNode(json, path, pid)
      : isIterator
      ? this.createBracket(type)
      : this.creatValueNode(type, json);
    wrapper.appendChild(node);
    // 添加折叠箭头
    if (hasNext && this.Root !== pid) wrapper.prepend(this.creatArrowNode());
  }

  depthNode(json, path, pid) {
    json = this.keySort(json);
    // 创建文档片段
    const fragment = document.createDocumentFragment();

    fragment.appendChild(this.startBracket(Utils.getType(json)));
    if (this.Root !== pid) {
      fragment.appendChild(this.creatCopyNode(json));
      fragment.appendChild(this.creatDescNode(json));
    }

    const ul = Utils.createElement("ul", { id: pid });

    const entries = Object.entries(json);
    const length = entries.length;
    const last = length - 1;
    for (let i = 0; i < length; i++) {
      const id = this.random();
      const [key, value] = entries[i];
      const hasNext = this.hasNext(value);
      const JSONPath = this.JSONPath(path, key);

      const node = Utils.createElement("li", {
        path: JSONPath,
        "data-node-id": id,
        "data-node-pid": pid,
        style: `padding-left: 20px`,
        "data-type": Utils.getType(value),
        class: `json-item${hasNext ? " collapsible expanded" : ""}`,
      });

      this.createKeyNode(node, key);
      this.createNode(node, value, JSONPath, id);
      // 添加逗号
      if (i !== last) node.appendChild(Utils.createElement("span", { class: "json-comma" }, ","));
      ul.appendChild(node);
    }

    fragment.appendChild(ul);
    fragment.appendChild(this.endBracket(Utils.getType(json)));
    return fragment;
  }

  startBracket(type) {
    const span = Utils.createElement("span", { class: `json-${type}-bracket` });
    span.textContent = Object.is(type, "array") ? "[" : "{";
    return span;
  }

  endBracket(type) {
    const span = Utils.createElement("span", { class: `json-${type}-bracket` });
    span.textContent = Object.is(type, "array") ? "]" : "}";
    return span;
  }

  createKeyNode(node, key) {
    if (this.isNumber(key)) return;
    const span = Utils.createElement("span", { class: "json-key" }, `"${key}"`);
    node.appendChild(span);

    const colon = Utils.createElement("span", { class: "json-colon" }, ":");
    node.appendChild(colon);
  }

  creatOther(node, json) {
    if (!node.dataset.nodeId) return;
    this.creatOtherNodes(node, json);
  }
}

export default JsonViewer;

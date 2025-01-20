import Utils from "../Utils";
import JsonFormat from "./JsonFormat";

class JsonViewer extends JsonFormat {
  constructor(options) {
    options.style = JsonFormat.STYLE.VIEWER;
    super(options, "div", "json-viewer");
  }

  buildNode(fragment, json, parentPath = this.Root, parentId = this.Root) {
    const type = Utils.getType(json);
    fragment.appendChild(Utils.createElement("span", { type, class: `json-bracket` }, this.BRACKET[type].START));
    if (this.Root !== parentId) this.creatExtraNodes(fragment, json);
    this.iterateNodes(fragment, json, parentPath, parentId);
    fragment.appendChild(Utils.createElement("span", { type, class: `json-bracket` }, this.BRACKET[type].END));
  }

  iterateNodes(fragment, json, parentPath, parentId) {
    const wrapper = Utils.createElement("ul", { id: parentId });
    this.iterateJson(json, parentId, parentPath, "li", (data) => {
      const { id, key, value, type, path, hasNext, element, notLast } = data;
      // JSON key
      this.createKeyNode(element, key);
      // 如果值可迭代，继续往下迭代
      if (hasNext) this.buildNode(element, value, path, id);
      // JSON value
      if (!hasNext) element.appendChild(this.creatValueNode(type, value));
      // 不是最后一个，添加逗号
      if (notLast) element.appendChild(Utils.createElement("span", { class: "json-comma" }, ","));
      wrapper.appendChild(element);
    });
    fragment.appendChild(wrapper);
  }

  createKeyNode(node, key) {
    if (this.isNumber(key)) return;
    node.appendChild(Utils.createElement("span", { class: "json-key" }, `"${key}"`));
    node.appendChild(Utils.createElement("span", { class: "json-colon" }, ":"));
  }
}

export default JsonViewer;

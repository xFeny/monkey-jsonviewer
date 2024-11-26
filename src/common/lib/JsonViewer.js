import Utils from "../Utils";
import JsonFormat from "./JsonFormat";

class JsonViewer extends JsonFormat {
  constructor(options) {
    options.style = JsonFormat.STYLE.VIEWER;
    super(options, "div", "json-view-formater");
  }

  createNode(box, json, JSONPath, pid) {
    const type = Utils.getType(json);
    const isIterate = this.isIterate(json);
    const canIterate = this.canIterate(json);
    if (canIterate) {
      this.depthNode(box, type, json, JSONPath, pid);
    } else if (isIterate) {
      const bracket = this.createBracket(type);
      box.appendChild(bracket);
    } else {
      const valueNode = this.creatValueNode(type, json);
      box.appendChild(valueNode);
    }
  }

  depthNode(box, type, json, path, pid) {
    json = this.keySort(json);
    box.appendChild(this.startBracket(type));
    this.creatOther(box, json);
    let length = Object.keys(json).length;
    for (var key in json) {
      if (Object.prototype.hasOwnProperty.call(json, key)) {
        const value = json[key];
        const id = this.random();
        const canComma = --length > 0;
        const JSONPath = this.JSONPath(path, key);

        const node = Utils.createElement("div", {
          JSONPath,
          "data-node-id": id,
          "data-node-pid": pid,
          style: `padding-left: 20px`,
          "data-type": Utils.getType(value),
          class: `json-formater-item${this.canIterate(value) ? " json-formater-opened" : ""}`,
        });

        this.createKeyNode(node, key);
        this.createNode(node, value, JSONPath, id);

        if (canComma) {
          const comma = Utils.createElement("span", { class: "json-comma" });
          comma.textContent = ",";
          node.appendChild(comma);
        }
        box.appendChild(node);
      }
    }
    box.appendChild(this.endBracket(type));
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
    const span = Utils.createElement("span", { class: "json-key" });
    span.textContent = `"${key}"`;
    node.appendChild(span);

    const colon = Utils.createElement("span", { class: "json-colon" });
    colon.textContent = ":";
    node.appendChild(colon);
  }

  creatOther(node, json) {
    if (!node.dataset.nodeId) return;
    this.creatOtherNodes(node, json);
  }
}

export default JsonViewer;

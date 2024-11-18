import Utils from "../Utils";
import JsonFormat from "./JsonFormat";

class JsonViewer extends JsonFormat {
  constructor(options) {
    options.style = JsonFormat.STYLE.viewer;
    super(options, "div", "json-view-formater");
  }

  createNode(box, json, JSONPath, pid) {
    const type = this.getType(json);
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
    const startBracket = this.startBracket(type);
    box.appendChild(startBracket);
    this.otherNode(box, json);
    let length = Object.keys(json).length;
    for (var key in json) {
      if (Object.prototype.hasOwnProperty.call(json, key)) {
        const value = json[key];
        const id = this.random();
        const canComma = --length > 0;
        const JSONPath = this.JSONPath(path, key);

        const node = this.createElement("div", {
          JSONPath,
          "data-node-id": id,
          "data-node-pid": pid,
          style: `padding-left: 20px`,
          "data-type": this.getType(value),
          class: `json-formater-item${
            this.canIterate(value) ? " json-formater-opened" : ""
          }`,
        });

        this.createKeyNode(node, key, value);
        this.createNode(node, value, JSONPath, id);

        if (canComma) {
          const comma = this.createElement("span", {
            class: "json-comma",
          });
          comma.textContent = ",";
          node.appendChild(comma);
        }
        box.appendChild(node);
      }
    }
    const endBracket = this.endBracket(type);
    box.appendChild(endBracket);
  }

  startBracket(type) {
    const span = this.createElement("span", {
      class: `json-${type}-bracket`,
    });
    span.textContent = Object.is(type, "array") ? "[" : "{";
    return span;
  }

  endBracket(type) {
    const span = this.createElement("span", {
      class: `json-${type}-bracket`,
    });
    span.textContent = Object.is(type, "array") ? "]" : "}";
    return span;
  }

  createKeyNode(node, key, value) {
    if (this.canIterate(value)) {
      const arrow = this.createElement("span", {
        class: "json-formater-arrow",
      });
      node.appendChild(arrow);
    }

    if (!this.isNumber(key)) {
      const span = this.createElement("span", {
        class: "json-key",
      });
      span.textContent = `"${key}"`;
      node.appendChild(span);

      const colon = this.createElement("span", {
        class: "json-colon",
      });
      colon.textContent = ":";
      node.appendChild(colon);
    }
  }

  otherNode(node, json) {
    const nodeId = node.dataset.nodeId;
    if (nodeId && nodeId !== "Root" && this.canIterate(json)) {
      const copy = this.createElement("span", {
        title: "复制",
        class: "json-formater-copy",
      });
      copy.json = json;
      node.appendChild(copy);

      const placeholder = this.creatPlaceholder(json);
      node.appendChild(placeholder);
    }
  }
}

export default JsonViewer;

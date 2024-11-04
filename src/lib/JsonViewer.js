import JsonFormat from "./JsonFormat";

class JsonViewer extends JsonFormat {
  constructor(options) {
    options.style = "viewer";
    super(options);
  }

  render() {
    const { json, container } = this.options;

    this.$container =
      container instanceof HTMLElement
        ? container
        : document.querySelector(container);

    this.$box = this.createElement("div");
    this.$box.setAttribute("class", "json-view-formater");

    this.createNode(this.$box, json, "Root", "Root");

    this.$container.innerHTML = "";
    this.$container.appendChild(this.$box);
  }

  createNode(box, json, pChain, pid) {
    const type = this.getType(json);
    const isIterate = this.isIterate(json);
    const canIterate = this.canIterate(json);
    if (canIterate) {
      this.createObjectNode(box, type, json, pChain, pid);
    } else if (isIterate) {
      const bracket = this.createBracket(type);
      box.appendChild(bracket);
    } else {
      const valueNode = this.creatValueNode(type, json);
      box.appendChild(valueNode);
    }
  }

  createObjectNode(box, type, json, pChain, pid) {
    const startBracket = this.createStartBracket(type);
    box.appendChild(startBracket);

    this.creatPlaceholderNode(box, json);

    let length = Object.keys(json).length;
    for (var key in json) {
      if (Object.prototype.hasOwnProperty.call(json, key)) {
        const value = json[key];
        const id = this.random();
        const canComma = --length > 0;
        const jsonPath = pChain + "." + key;

        const node = this.createElement("div", {
          "data-node-id": id,
          "data-node-pid": pid,
          "json-path": jsonPath,
          style: `padding-left: 20px`,
          "data-type": this.getType(value),
          class: `json-formater-item ${
            this.isIterate(value) ? "json-formater-opened" : ""
          }`,
        });

        this.createKeyNode(node, key, value);

        this.createNode(node, value, jsonPath, id);

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
    const endBracket = this.createEndBracket(type);
    box.appendChild(endBracket);
  }

  createStartBracket(type) {
    const span = this.createElement("span", {
      class: `json-${type}-bracket`,
    });
    span.textContent = type === "array" ? "[" : "{";
    return span;
  }

  createEndBracket(type) {
    const span = this.createElement("span", {
      class: `json-${type}-bracket`,
    });
    span.textContent = type === "array" ? "]" : "}";
    return span;
  }

  createBracket(type) {
    const node = this.createElement("span", {
      class: `json-${type}-bracket`,
    });
    node.textContent = type === "array" ? "[]" : "{}";
    return node;
  }

  createKeyNode(node, key, value) {
    if (this.canIterate(value)) {
      const arrow = this.createElement("i", {
        class: "json-formater-arrow",
      });
      node.appendChild(arrow);
    }

    if (!/^\d+$/.test(key)) {
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

  creatValueNode(type, value) {
    const node = this.createElement("span", {
      class: `json-${type}`,
    });
    node.textContent = `${value}`;

    if (type === "string") {
      value = this.escape(value);
      node.textContent = `"${value}"`;
    }

    if (this.isUrl(value)) {
      node.textContent = "";
      const a = this.createElement("a", {
        target: "_blank",
        href: value,
      });
      a.textContent = `"${value}"`;
      node.appendChild(a);
    }

    if (this.isColor(value)) {
      const span = this.createElement("span", {
        class: "json-color",
        style: `background-color: ${value}`,
      });
      node.prepend(span);
    }

    return node;
  }

  creatPlaceholderNode(box, json) {
    const nodeId = box.dataset.nodeId;
    if (nodeId && nodeId !== "Root" && this.canIterate(json)) {
      const span = this.createElement("span", {
        class: "json-formater-placeholder",
      });
      box.appendChild(span);
    }
  }

  onShow(node) {
    const nodeId = node.dataset.nodeId;
    const desc = node.querySelector(
      `*[data-node-id=${nodeId}] > .json-formater-placeholder`
    );
    if (!desc) return;
    desc.innerHTML = null;
  }

  onHide(node) {
    const id = node.dataset.nodeId;
    const desc = node.querySelector(
      `*[data-node-id="${id}"] > .json-formater-placeholder`
    );
    if (!desc) return;

    desc.innerHTML = null;
    const type = node.dataset.type;
    const length = this.findChildren(node).length;
    const span = this.createElement("span");
    span.textContent = `${length}${length > 1 ? " items" : " item"}`;
    if (type === "object") {
      span.textContent = `${length}${length > 1 ? " keys" : " key"}`;
    }
    desc.appendChild(span);
  }

  nodes() {
    const arrows = this.$container.querySelectorAll(".json-formater-arrow");
    return Array.from(arrows).map((ele) =>
      this.closest(ele, ".json-formater-item")
    );
  }
}

export default JsonViewer;

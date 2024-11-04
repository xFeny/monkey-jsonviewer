import JsonFormat from "./JsonFormat";

const cssText = `
.json-tree-table {
  border-collapse: collapse;
  width: -webkit-fill-available;
}

.json-tree-table b {
  font-weight: normal;
}

.json-tree-table tr.selected,
.json-tree-table tr.selected td,
.json-tree-table tr.selected td b,
.json-tree-table tr.selected td a {
  color: #fff !important;
  background-color: #3875d7;
}

.json-tree-table tr:hover {
  background-color: #f0f9fe;
}

.json-tree-table tr td:first-child {
  width: 120px;
}

.dark-theme .json-tree-table tr:hover,
.dark-plus-theme .json-tree-table tr:hover {
  background-color: #353b48;
}
`;

class JsonToTable extends JsonFormat {
  constructor(options) {
    super(options);
  }

  render() {
    const { json, container } = this.options;

    this.$container =
      container instanceof HTMLElement
        ? container
        : document.querySelector(container);

    const style = this.createElement("style");
    style.textContent = cssText;
    document.head.appendChild(style);

    this.$table = this.createElement("table");
    this.$table.setAttribute("class", "json-tree-table");

    this.createNode(json, 1, "Root", "Root");

    this.$container.innerHTML = "";
    this.$container.appendChild(this.$table);
  }

  /**
   * 创建节点
   * @param {Object} json
   * @param {Boolean} isRoot 是否根节点
   * @param {Number} depth 递归层级
   * @param {String} pChain 上级json-path
   */
  createNode(json, depth, pChain, parentId) {
    for (const key in json) {
      if (Object.prototype.hasOwnProperty.call(json, key)) {
        let value = json[key];
        const type = this.getType(value);
        const jsonPath = `${pChain}.${key}`;
        const args = { key, value, type, depth, jsonPath, parentId };

        const item = this.createItem(args);
        this.$table.appendChild(item);

        if (this.canIterate(value)) {
          const nodeId = item.dataset.nodeId;
          this.createNode(value, depth + 1, jsonPath, nodeId);
        }
      }
    }
  }

  createItem(args) {
    const { key, value, type, depth, jsonPath, parentId } = args;
    const id = this.random();
    const isIterate = this.isIterate(value);
    const canIterate = this.canIterate(value);

    const node = this.createElement("tr", {
      "data-type": type,
      "data-node-id": id,
      "data-node-pid": parentId,
      class: "json-formater-item json-formater-opened",
    });

    const leftNode = this.createLeftNode(key, value, depth, jsonPath);
    node.appendChild(leftNode);

    if (!isIterate) {
      const rightNode = this.createRightNode(type, value);
      node.appendChild(rightNode);
    }

    if (isIterate && !canIterate) {
      const rightNode = this.createEmptyRightNode(type);
      node.appendChild(rightNode);
    }

    return node;
  }

  createLeftNode(key, value, depth, jsonPath) {
    const node = this.createElement("td", {
      "json-path": jsonPath,
      colspan: this.canIterate(value) ? 2 : 0,
      style: `padding-left: ${depth * 20}px`,
    });

    const b = this.createElement("b", {
      class: "json-key",
    });
    b.textContent = `${key}`;
    node.appendChild(b);

    const colon = this.createElement("span", {
      class: "json-colon",
    });
    colon.textContent = ":";
    node.appendChild(colon);

    if (this.canIterate(value)) {
      const icon = this.createElement("span", {
        class: "json-formater-arrow",
      });
      node.prepend(icon);

      const span = this.createElement("span", {
        class: "json-formater-placeholder",
      });
      node.appendChild(span);
    }
    return node;
  }

  createRightNode(type, value) {
    const node = this.createElement("td", {
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

  createEmptyRightNode(type) {
    const node = this.createElement("td", {
      class: `json-${type}-bracket`,
    });
    node.textContent = type === "array" ? "[]" : "{}";
    return node;
  }

  bindEvent() {
    super.bindEvent();

    this.addEvent("click", ".json-formater-placeholder", (e) => {
      const node = this.closest(e.currentTarget, "tr");
      this.show(node);
    });

    this.addEvent("mousedown", "table tr", function (event) {
      const { tagName } = event.target;
      if (tagName === "A" || tagName === "SPAN" || event.ctrlKey) {
        return;
      }

      Array.from(document.querySelectorAll(".selected"))
        .filter((ele) => ele !== this)
        .forEach((ele) => ele.classList.remove("selected"));
      this.classList.toggle("selected");
    });
  }

  onShow(node) {
    const desc = node.querySelector(".json-formater-placeholder");
    if (!desc) return;
    desc.innerHTML = null;
  }

  onHide(node) {
    const type = node.dataset.type;
    const desc = node.querySelector(".json-formater-placeholder");
    if (!desc) return;

    const length = this.findChildren(node).length;
    let textNode = document.createTextNode(type === "object" ? "{" : "[");
    desc.appendChild(textNode);
    const span = this.createElement("span");
    span.textContent = `${length}${length > 1 ? " items" : " item"}`;
    if (type === "object") {
      span.textContent = `${length}${length > 1 ? " keys" : " key"}`;
    }
    desc.appendChild(span);
    textNode = document.createTextNode(type === "object" ? "}" : "]");
    desc.appendChild(textNode);
  }
}

export default JsonToTable;

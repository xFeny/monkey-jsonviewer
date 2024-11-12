import Utils from "../Utils";
import JsonFormat from "./JsonFormat";

const cssText = `
.json-tree-table {
  border-collapse: collapse;
  width: -webkit-fill-available;
}

.json-tree-table tr.selected * {
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
    this.$container = Utils.query(container);
    this.$container.innerHTML = "";
    const style = this.createElement("style");
    style.textContent = cssText;
    document.head.appendChild(style);
    this.$table = this.createElement("table", {
      class: "json-tree-table",
    });
    this.createNode(json, 1, "Root", "Root");
    this.$container.appendChild(this.$table);
  }

  createNode(json, depth, path, pid) {
    for (const key in json) {
      if (Object.prototype.hasOwnProperty.call(json, key)) {
        let value = json[key];
        const type = this.getType(value);
        const JSONPath = this.JSONPath(path, key);
        const args = { key, value, type, depth, JSONPath, pid };

        const item = this.createItem(args);
        this.$table.appendChild(item);
        if (this.canIterate(value)) {
          const nodeId = item.dataset.nodeId;
          this.createNode(value, depth + 1, JSONPath, nodeId);
        }
      }
    }
  }

  createItem(args) {
    const { key, value, type, depth, JSONPath, pid } = args;
    const id = this.random();
    const isIterate = this.isIterate(value);
    const canIterate = this.canIterate(value);

    const node = this.createElement("tr", {
      "data-type": type,
      "data-node-id": id,
      "data-node-pid": pid,
      class: "json-formater-item json-formater-opened",
    });

    const leftNode = this.createLeftNode(key, value, depth, JSONPath);
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

  createLeftNode(key, value, depth, JSONPath) {
    const node = this.createElement("td", {
      JSONPath,
      colspan: this.canIterate(value) ? 2 : 0,
      style: `padding-left: ${depth * 20}px`,
    });

    const b = this.createElement("span", {
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

      const copy = this.createElement("span", {
        title: "复制",
        class: "json-formater-copy",
      });
      copy.json = value;
      node.appendChild(copy);

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
    this.addEvent("mousedown", "table tr", function (event) {
      const { tagName, className } = event.target;
      if (
        event.ctrlKey ||
        tagName === "A" ||
        (tagName === "SPAN" && className !== "json-key")
      ) {
        return;
      }
      const filter = Utils.queryAll(".selected").filter((ele) => ele !== this);
      Utils.removeClass(filter, "selected");
      Utils.toggleClass(this, "selected");
    });
  }

  onShow(node) {
    const desc = Utils.query(".json-formater-placeholder", node);
    if (!desc) return;
    desc.innerHTML = null;
  }

  onHide(node) {
    const type = node.dataset.type;
    const desc = Utils.query(".json-formater-placeholder", node);
    if (!desc) return;
    if (desc.innerHTML) return;

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

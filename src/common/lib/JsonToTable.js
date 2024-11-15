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
    options.style = JsonFormat.STYLE.table;
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

    // JSON key
    const keyNode = this.createKeyNode(key, value, depth, JSONPath);
    node.appendChild(keyNode);
    // JSON value
    const td = this.createElement("td");
    if (!isIterate) {
      td.appendChild(this.creatValueNode(type, value));
      node.appendChild(td);
    }
    // empty bracket
    if (isIterate && !canIterate) {
      td.appendChild(this.createBracket(type));
      node.appendChild(td);
    }
    return node;
  }

  createKeyNode(key, value, depth, JSONPath) {
    const node = this.createElement("td", {
      JSONPath,
      colspan: this.canIterate(value) ? 2 : 0,
      style: `padding-left: ${depth * 20}px`,
    });

    const k = this.createElement("span", {
      class: "json-key",
    });
    k.textContent = `${key}`;
    node.appendChild(k);

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
}

export default JsonToTable;

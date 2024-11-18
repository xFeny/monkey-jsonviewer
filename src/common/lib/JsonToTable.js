import Utils from "../Utils";
import JsonFormat from "./JsonFormat";

class JsonToTable extends JsonFormat {
  constructor(options) {
    options.style = JsonFormat.STYLE.table;
    super(options, "table", "json-tree-table");
  }

  createNode(table, json, path, pid, depth) {
    for (const key in json) {
      if (Object.prototype.hasOwnProperty.call(json, key)) {
        let value = json[key];
        const type = this.getType(value);
        const JSONPath = this.JSONPath(path, key);
        const args = { key, value, type, depth, JSONPath, pid };

        const item = this.createItem(args);
        table.appendChild(item);
        if (this.canIterate(value)) {
          const nodeId = item.dataset.nodeId;
          this.createNode(table, value, JSONPath, nodeId, depth + 1);
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
      class: `json-formater-item${
        this.canIterate(value) ? " json-formater-opened" : ""
      }`,
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

      const placeholder = this.creatPlaceholder(value);
      node.appendChild(placeholder);
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

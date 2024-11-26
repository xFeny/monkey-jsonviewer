import Utils from "../Utils";
import JsonFormat from "./JsonFormat";

class JsonToTable extends JsonFormat {
  constructor(options) {
    options.style = JsonFormat.STYLE.TABLE;
    super(options, "table", "json-tree-table");
  }

  createNode(table, json, path, pid, depth) {
    json = this.keySort(json);
    for (const key in json) {
      if (Object.prototype.hasOwnProperty.call(json, key)) {
        let value = json[key];
        const type = Utils.getType(value);
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

    const node = Utils.createElement("tr", {
      "data-type": type,
      "data-node-id": id,
      "data-node-pid": pid,
      class: `json-formater-item${this.canIterate(value) ? " json-formater-opened" : ""}`,
    });

    // JSON key
    const keyNode = this.createKeyNode(key, value, depth, JSONPath);
    node.appendChild(keyNode);
    // JSON value
    const td = Utils.createElement("td");
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
    const node = Utils.createElement("td", {
      JSONPath,
      colspan: this.canIterate(value) ? 2 : 0,
      style: `padding-left: ${depth * 20}px`,
    });

    const span = Utils.createElement("span", { class: "json-key" });
    span.textContent = `${key}`;
    node.appendChild(span);

    const colon = Utils.createElement("span", { class: "json-colon" });
    colon.textContent = ":";
    node.appendChild(colon);

    this.creatOtherNodes(node, value);
    return node;
  }

  bindEvent() {
    super.bindEvent();
    Utils.addEvent("mousedown", "table tr", function (event) {
      const { tagName, className } = event.target;
      if (event.ctrlKey || tagName === "A" || (tagName === "SPAN" && className !== "json-key")) {
        return;
      }
      const filter = Utils.queryAll(".selected").filter((ele) => ele !== this);
      Utils.removeClass(filter, "selected");
      Utils.toggleClass(this, "selected");
    });
  }
}

export default JsonToTable;

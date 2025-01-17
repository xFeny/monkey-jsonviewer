import Utils from "../Utils";
import JsonFormat from "./JsonFormat.js";

class JsonToTable extends JsonFormat {
  constructor(options) {
    options.style = JsonFormat.STYLE.TABLE;
    super(options, "table", "json-tree-table");
  }

  createNode(table, json, path, pid, depth) {
    json = this.keySort(json);
    // 创建文档片段
    const fragment = document.createDocumentFragment();
    const customElement = Utils.createElement("wrapper", { id: pid });
    for (const key in json) {
      if (Object.prototype.hasOwnProperty.call(json, key)) {
        let value = json[key];
        const type = Utils.getType(value);
        const JSONPath = this.JSONPath(path, key);
        const args = { key, value, type, depth, JSONPath, pid };

        const item = this.createItem(args);
        // 将元素添加到文档片段
        fragment.appendChild(item);
        if (this.canIterate(value)) {
          const nodeId = item.dataset.nodeId;
          // 传递 fragment 而不是 table 进行递归调用
          this.createNode(fragment, value, JSONPath, nodeId, depth + 1);
        }
      }
    }
    // 最后将文档片段添加到 table 元素中
    customElement.appendChild(fragment);
    table.appendChild(customElement);
  }

  createItem(args) {
    const { key, value, type, depth, JSONPath, pid } = args;
    const id = this.random();
    const isIterate = this.isIterate(value);
    const canIterate = this.canIterate(value);

    const node = Utils.createElement("tr", {
      path: JSONPath,
      "data-type": type,
      "data-node-id": id,
      "data-node-pid": pid,
      class: `json-item${canIterate ? " collapsible expanded" : ""}`,
    });

    // JSON key
    const keyNode = this.createKeyNode(key, value, depth);
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

  createKeyNode(key, value, depth) {
    const node = Utils.createElement("td", {
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

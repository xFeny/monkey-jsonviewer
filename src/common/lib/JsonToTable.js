import Utils from "../Utils";
import JsonFormat from "./JsonFormat.js";

class JsonToTable extends JsonFormat {
  constructor(options) {
    options.style = JsonFormat.STYLE.TABLE;
    super(options, "table", "json-tree-table");
  }

  createNode(table, json, path, pid, depth) {
    json = this.keySort(json);
    const fragment = document.createDocumentFragment();
    const wrapper = Utils.createElement("wrapper", { id: pid });

    const entries = Object.entries(json);
    for (const [key, value] of entries) {
      const id = this.random();
      const type = Utils.getType(value);
      const JSONPath = this.JSONPath(path, key);
      const hasNext = this.hasNext(value);
      const isIterator = this.isIterator(value);
      const args = { id, key, value, type, depth, JSONPath, pid, hasNext, isIterator };

      const item = this.createItem(args);
      fragment.appendChild(item);
      if (hasNext) this.createNode(fragment, value, JSONPath, id, depth + 1);
    }

    wrapper.appendChild(fragment);
    table.appendChild(wrapper);
  }

  createItem(args) {
    const { id, key, value, type, depth, JSONPath, pid, hasNext, isIterator } = args;
    const node = Utils.createElement("tr", {
      path: JSONPath,
      "data-type": type,
      "data-node-id": id,
      "data-node-pid": pid,
      class: `json-item${hasNext ? " collapsible expanded" : ""}`,
    });

    // JSON key
    const keyNode = this.createKeyNode(key, value, depth, hasNext);
    node.appendChild(keyNode);
    // JSON value
    const td = Utils.createElement("td");
    if (!isIterator) td.appendChild(this.creatValueNode(type, value));
    // empty bracket
    if (isIterator && !hasNext) td.appendChild(this.createBracket(type));
    node.appendChild(td);
    return node;
  }

  createKeyNode(key, value, depth, hasNext) {
    const node = Utils.createElement("td", { colspan: hasNext ? 2 : 0, style: `padding-left: ${depth * 20}px` });
    node.appendChild(Utils.createElement("span", { class: "json-key" }, `${key}`));
    node.appendChild(Utils.createElement("span", { class: "json-colon" }, ":"));
    this.creatOtherNodes(node, value);
    return node;
  }

  bindEvent() {
    super.bindEvent();
    Utils.addEvent("mousedown", "table tr", function (e) {
      const { tagName, className } = e.target;
      if (e.ctrlKey || tagName === "A" || (tagName === "SPAN" && className !== "json-key")) return;
      const filter = Utils.queryAll(".selected").filter((el) => el !== this);
      Utils.removeClass(filter, "selected");
      Utils.toggleClass(this, "selected");
    });
  }
}

export default JsonToTable;

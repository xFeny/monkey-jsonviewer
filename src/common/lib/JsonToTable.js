import Utils from "../Utils";
import JsonFormat from "./JsonFormat.js";

class JsonToTable extends JsonFormat {
  constructor(options) {
    options.style = JsonFormat.STYLE.TABLE;
    super(options, "table", "json-tree-table");
  }

  buildNode(fragment, json, parentPath = this.Root, parentId = this.Root, nodeDepth = 1) {
    const wrapper = Utils.createElement("wrapper", { id: parentId });
    this.iterateJson(json, parentId, parentPath, "tr", (data) => {
      const { id, key, value, type, path, hasNext, element } = data;
      // JSON key
      element.appendChild(this.createKeyNode(key, value, nodeDepth, hasNext));
      // JSON value
      if (!hasNext) {
        const td = Utils.createElement("td");
        td.appendChild(this.creatValueNode(type, value));
        element.appendChild(td);
      }
      wrapper.appendChild(element);
      // 如果可迭代，继续往下迭代
      if (hasNext) this.buildNode(wrapper, value, path, id, nodeDepth + 1);
    });
    fragment.appendChild(wrapper);
  }

  createKeyNode(key, value, nodeDepth, hasNext) {
    const paddingLeft = nodeDepth * 20;
    const node = Utils.createElement("td", { style: `padding-left: ${paddingLeft}px` });
    if (hasNext) node.setAttribute("colspan", 2);
    node.appendChild(Utils.createElement("span", { class: "json-key" }, `${key}`));
    node.appendChild(Utils.createElement("span", { class: "json-colon" }, ":"));
    this.creatExtraNodes(node, value);
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

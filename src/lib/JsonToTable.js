const cssText = `
.json-tree-table {
  margin-left: 20px;
  border-collapse: collapse;
  width: -webkit-fill-available;
}

.json-tree-table b {
  font-weight: normal;
  margin-right: 0.15em;
}

.json-tree-table tr.selected,
.json-tree-table tr.selected td,
.json-tree-table tr.selected td b,
.json-tree-table tr.selected td a{
    color: #fff !important;
    background-color: #3875d7;
}

.json-tree-table tr:hover {
  background-color: #f0f9fe;
}

.json-tree-table tr td:first-child {
  width: 120px;
}

.json-tree-table-arrow {
  width: 0;
  opacity: 0.2;
  display: inline-block;
}

.json-tree-table-arrow:hover {
  opacity: 0.35;
}

.json-tree-table-arrow::before {
  width: 0;
  height: 0;
  left: -13px;
  content: "";
  cursor: pointer;
  position: relative;
  border-style: solid;
  display: inline-block;
  vertical-align: middle;
  transform: rotate(90deg);
  border-width: 5px 0 5px 8px;
  transition: transform 0.3s ease;
  border-color: transparent transparent transparent currentColor;
}

.json-tree-table-closed .json-tree-table-arrow::before {
  transform: rotate(0deg);
}

.json-tree-table-placeholder{
  color: #ccc;
  cursor: pointer;
  font-size: 12px;
  margin-left: 0.5em;
}

.json-tree-table-placeholder span:hover{
  text-decoration: underline;
}
`;

const DEFAULTS = {
  json: null,
  container: null,
  onCollapse: null,
  onExpand: null,
  expander: null,
  collapser: null,
};

class JsonToTable {
  constructor(options) {
    this.options = Object.assign(DEFAULTS, options);
    if (!options.container) {
      throw new Error("Container: dom element is required");
    }

    if (!options.json) {
      throw new Error("json: json is required");
    }

    if (typeof options.json !== "object") {
      throw new Error("json: Need to use JSON.parse conversion");
    }

    this.render();
    this.bindEvent();
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

    this.createNode(json, 0, "Root", "Root");

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
      let value = json[key];
      const type = this.getType(value);
      const jsonPath = `${pChain}.${key}`;

      const item = this.createItem(key, value, type, depth, jsonPath, parentId);
      this.$table.appendChild(item);

      if (this.canIterate(value)) {
        const nodeId = item.dataset.nodeId;
        this.createNode(value, depth + 1, jsonPath, nodeId);
      }
    }
  }

  createItem(key, value, type, depth, jsonPath, parentId) {
    const id = key + "_" + Math.random();
    const isIterate = this.isIterate(value);
    const canIterate = this.canIterate(value);

    const node = this.createElement("tr", {
      "data-type": type,
      "data-node-id": id,
      "data-node-pid": parentId,
      class: "json-tree-table-opened",
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

    const textNode = document.createTextNode(":");
    node.appendChild(textNode);

    if (this.canIterate(value)) {
      const icon = this.createElement("span", {
        class: "json-tree-table-arrow",
      });
      node.prepend(icon);

      const span = this.createElement("span", {
        class: "json-tree-table-placeholder",
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
    this.addEvent(`click`, this.options.expander, () => {
      this.expandAll();
    });

    this.addEvent(`click`, this.options.collapser, () => {
      this.collapseAll();
    });

    this.addEvent("click", ".json-tree-table-arrow", (e) => {
      const node = this.closest(e.currentTarget, "tr");
      if (this.hasClass(node, "json-tree-table-opened")) {
        this.hide(node);
      } else {
        this.show(node);
      }
    });

    this.addEvent("click", ".json-tree-table-placeholder", (e) => {
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

  expandAll() {
    this.nodes().forEach((node) => {
      this.show(node);
    });
  }

  collapseAll() {
    this.nodes().forEach((node) => {
      this.hide(node);
    });
  }

  show(node) {
    this.removeClass(node, "json-tree-table-closed");
    this.addClass(node, "json-tree-table-opened");
    this.showDescs(node);
    this.onShow(node);
  }

  onShow(node) {
    const placeholder = node.querySelector(".json-tree-table-placeholder");
    if (!placeholder) {
      return;
    }

    placeholder.innerHTML = null;
    const { onExpand } = this.options;
    if (onExpand) onExpand(node, this);
  }

  showDescs(node) {
    let children = this.findChildren(node);
    children.forEach((child) => {
      child.style.display = null;
      if (this.hasClass(child, "json-tree-table-opened")) {
        this.showDescs(child);
      }
    });
  }

  hide(node) {
    this.removeClass(node, "json-tree-table-opened");
    this.addClass(node, "json-tree-table-closed");
    this.hideDescs(node);
    this.onHide(node);
  }

  onHide(node) {
    const type = node.dataset.type;
    const placeholder = node.querySelector(".json-tree-table-placeholder");
    if (!placeholder) {
      return;
    }

    const length = this.findChildren(node).length;
    let content = `[ <span>${length}${
      length > 1 ? " items" : " item"
    }</span> ]`;
    if (type === "object") {
      content = `{ <span>${length}${length > 1 ? " keys" : " key"}</span> }`;
    }
    placeholder.innerHTML = content;

    const { onCollapse } = this.options;
    if (onCollapse) onCollapse(node, this);
  }

  hideDescs(node) {
    const children = this.findChildren(node);
    children.forEach((child) => {
      child.style.display = "none";
      this.hideDescs(child);
    });
  }

  findChildren(node) {
    const pid = node.dataset.nodeId;
    return this.$container.querySelectorAll(
      `tr[data-node-pid="${pid}"]:not(.hidden)`
    );
  }

  findByID(id) {
    return this.$container.querySelector(`tr[data-node-id="${id}"]`);
  }

  openByID(id) {
    this.show(this.findByID(id));
  }

  closeByID(id) {
    this.hide(this.findByID(id));
  }

  addEvent(event, selector, fn) {
    document.body.querySelectorAll(selector).forEach((el) => {
      el.addEventListener(event, fn);
    });
  }

  closest(element, selector) {
    while (element) {
      if (element.matches(selector)) {
        return element;
      }
      element = element.parentElement;
    }
    return null;
  }

  hasClass(element, clas) {
    return element.classList.contains(clas);
  }

  removeClass(element, clas) {
    element.classList.remove(clas);
    return this;
  }

  addClass(element, clas) {
    element.classList.add(clas);
    return this;
  }

  nodes() {
    return this.$container.querySelectorAll("tr[data-node-id]");
  }

  /**
   * 创建元素
   * @param {String} name 元素名称
   * @param {Object} attributes 属性
   */
  createElement(name, attributes) {
    const element = document.createElement(name);
    this.setAttributes(element, attributes);
    return element;
  }

  /**
   * 设置属性
   * @param {HTMLElement} element 元素
   * @param {Object} attributes 属性
   */
  setAttributes(element, attributes) {
    if (!attributes) {
      return;
    }

    for (const name in attributes) {
      const value = attributes[name];
      if (value) element.setAttribute(name, value);
    }
  }

  /**
   * 获取数据的类型
   * @param {Object} value
   * @return 返回类型 number、object、array、string、null等
   */
  getType(value) {
    return Object.prototype.toString
      .call(value)
      .match(/\s(.+)]/)[1]
      .toLowerCase();
  }

  isIterate(value) {
    const type = this.getType(value);
    return ["array", "object"].includes(type);
  }

  /**
   * 是否可迭代
   * @param {*} value
   * @returns
   */
  canIterate(value) {
    if (!this.isIterate(value)) {
      return false;
    }

    let len = Object.keys(value).length;
    return len > 0;
  }

  /**
   * 是否为Url
   * @param {*} str
   * @returns
   */
  isUrl(str) {
    const regexp =
      /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return regexp.test(str);
  }
  /**
   * 转义
   * @param {*} str
   * @returns
   */
  escape(str) {
    return str
      .replace(/\t/g, "\\t")
      .replace(/\n/g, "\\n")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  isColor(colorString) {
    const hexCodeRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    const rgbRegex = /^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/;
    const rgbaRegex =
      /^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(0|1|0\.\d+)\s*\)$/;

    return (
      hexCodeRegex.test(colorString) ||
      rgbRegex.test(colorString) ||
      rgbaRegex.test(colorString)
    );
  }
}

export default JsonToTable;

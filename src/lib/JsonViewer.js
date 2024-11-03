class JsonViewer {
  constructor(options) {
    const defaults = {
      json: null,
      theme: "default",
      container: null,
      onExpand: null,
      expander: null,
      collapser: null,
      onCollapse: null,
    };

    this.options = Object.assign(defaults, options);
    if (!options.container) {
      throw new Error("Container: dom element is required");
    }

    if (!options.json) {
      throw new Error("json: json is required");
    }

    this.render();
    this.bind();
    this.setTheme(this.options.theme);
  }

  setTheme(theme) {
    const classList = document.body.classList;
    classList.forEach((clas) => {
      if (clas.includes("theme")) {
        classList.remove(clas);
      }
    });
    classList.add(`${theme}-theme`);
  }

  render() {
    const { json, container } = this.options;

    this.$container =
      container instanceof HTMLElement
        ? container
        : document.querySelector(container);

    this.$box = this.createElement("div");
    this.$box.setAttribute("class", `json-view-formater`);

    this.createNode(this.$box, json, "Root", "Root");

    this.$container.appendChild(this.$box);
  }

  createNode(box, json, pChain, pid) {
    const type = this.getType(json);
    switch (type) {
      case "array":
      case "object":
        let length = Object.keys(json).length;
        if (length > 0) {
          this.createObjectNode(box, type, json, pChain, pid);
        } else {
          const emptyNode = this.createEmptyNode(type);
          box.appendChild(emptyNode);
        }
        break;
      default:
        const valueNode = this.creatValueNode(type, json);
        box.appendChild(valueNode);
        break;
    }
  }

  createObjectNode(box, type, json, pChain, pid) {
    const startBracket = this.createStartBracket(type);
    box.appendChild(startBracket);

    if (pChain !== "Root" && this.canIterate(json)) {
      const span = this.createElement("span", {
        class: "json-formater-placeholder",
      });

      span.addEventListener("click", () => {
        this.show(box);
      });
      box.appendChild(span);
    }

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
          style: `padding-left: 24px`,
          "data-type": this.getType(value),
          class: this.isIterate(value) ? "json-formater-opened" : null,
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

  createBracket() {
    const span = this.createElement("span", {
      class: `json-${type}-bracket`,
    });
    span.textContent = type === "array" ? "[]" : "{}";
    return span;
  }

  createKeyNode(node, key, value) {
    if (this.canIterate(value)) {
      const arrow = this.createElement("span", {
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

  createEmptyNode(type) {
    const node = this.createElement("span", {
      class: `json-${type}-bracket`,
    });
    node.textContent = type === "array" ? "[]" : "{}";
    return node;
  }

  bind() {
    this.addEvent(this.options.expander, `click`, () => {
      this.expandAll();
    });

    this.addEvent(this.options.collapser, `click`, () => {
      this.collapseAll();
    });

    const { onExpand, onCollapse } = this.options;
    this.addEvent(".json-formater-arrow", "click", (e) => {
      const node = e.currentTarget.parentElement;
      if (this.hasClass(node, "json-formater-opened")) {
        this.hide(node);
        if (onCollapse) onCollapse(node, this);
      } else {
        this.show(node);
        if (onExpand) onExpand(node, this);
      }
    });
  }

  expandAll() {
    this.nodes().forEach((node) => {
      this.show(node.parentElement);
    });
  }

  collapseAll() {
    this.nodes().forEach((node) => {
      this.hide(node.parentElement);
    });
  }

  show(node) {
    this.removeClass(node, "json-formater-closed");
    this.addClass(node, "json-formater-opened");
    this.showDescs(node);
    this.onShow(node);
  }

  onShow(node) {
    const nodeId = node.dataset.nodeId;
    const length = this.findChildren(node).length;

    const placeholder = node.querySelector(
      `*[data-node-id*=${nodeId}] > .json-formater-placeholder`
    );
    if (!placeholder) {
      return;
    }

    placeholder.textContent = "";
  }

  showDescs(node) {
    let children = this.findChildren(node);
    children.forEach((child) => {
      child.style.display = null;
    });
  }

  hide(node) {
    this.removeClass(node, "json-formater-opened");
    this.addClass(node, "json-formater-closed");
    this.hideDescs(node);
    this.onHide(node);
  }

  onHide(node) {
    const type = node.dataset.type;
    const nodeId = node.dataset.nodeId;
    const length = this.findChildren(node).length;

    const placeholder = node.querySelector(
      `*[data-node-id*=${nodeId}] > .json-formater-placeholder`
    );
    if (!placeholder) {
      return;
    }

    placeholder.textContent = `${length}${length > 1 ? " items " : " item "}`;
    if (type === "object") {
      placeholder.textContent = `${length}${length > 1 ? " keys " : " key "}`;
    }
  }

  hideDescs(node) {
    const children = this.findChildren(node);
    children.forEach((child) => {
      child.style.display = "none";
    });
  }

  findChildren(node) {
    const pid = node.dataset.nodeId;
    return this.$container.querySelectorAll(
      `*[data-node-pid="${pid}"]:not(.hidden)`
    );
  }

  findByID(id) {
    return this.$container.querySelector(`*[data-node-id="${id}"]`);
  }

  openByID(id) {
    this.show(this.findByID(id));
  }

  closeByID(id) {
    this.hide(this.findByID(id));
  }

  addEvent(selector, event, fn) {
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
    return this.$container.querySelectorAll(".json-formater-arrow");
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
      if (value) element.setAttribute(name, attributes[name]);
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

  random() {
    let randomString = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }
    return randomString;
  }
}

export default JsonViewer;

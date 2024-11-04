class JsonFormat {
  DEFAULTS = {
    json: null,
    style: "table",
    theme: "default",
    container: null,
    expander: null,
    onExpand: null,
    collapser: null,
    onCollapse: null,
  };

  constructor(options) {
    this.options = Object.assign(this.DEFAULTS, options);
    if (!options.container) {
      throw new Error("Container: dom element is required");
    }

    if (!options.json) {
      throw new Error("json: json is required");
    }

    this.render();
    this.bindEvent();
    this.setTheme(this.options.theme);
  }
  render() {}

  setTheme(theme) {
    const classList = document.body.classList;
    classList.forEach((clas) => {
      if (clas.includes("theme")) {
        classList.remove(clas);
      }
    });
    classList.add(`${theme}-theme`);
  }

  bindEvent() {
    this.addEvent(`click`, this.options.expander, () => {
      this.expandAll();
    });

    this.addEvent(`click`, this.options.collapser, () => {
      this.collapseAll();
    });

    this.addEvent("click", ".json-formater-placeholder", (e) => {
      const node = this.closest(e.currentTarget, ".json-formater-item");
      this.show(node);
    });

    const { onExpand, onCollapse } = this.options;
    this.addEvent("click", ".json-formater-arrow", (e) => {
      const node = this.closest(e.currentTarget, ".json-formater-item");
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
      this.show(node);
    });
  }

  collapseAll() {
    this.nodes().forEach((node) => {
      this.hide(node);
    });
  }

  show(node) {
    this.removeClass(node, "json-formater-closed");
    this.addClass(node, "json-formater-opened");
    this.showDescs(node);
    this.onShow(node);
  }

  showDescs(node) {
    let children = this.findChildren(node);
    children.forEach((child) => {
      child.style.display = null;
      if (this.hasClass(child, "json-formater-opened")) {
        if (this.options.style === "table") this.showDescs(child);
      }
    });
  }

  onShow(node) {}

  hide(node) {
    this.removeClass(node, "json-formater-opened");
    this.addClass(node, "json-formater-closed");
    this.hideDescs(node);
    this.onHide(node);
  }

  hideDescs(node) {
    const children = this.findChildren(node);
    children.forEach((child) => {
      child.style.display = "none";
      if (this.options.style === "table") this.hideDescs(child);
    });
  }

  onHide(node) {}

  findChildren(node) {
    const pid = node.dataset.nodeId;
    return this.$container.querySelectorAll(`*[data-node-pid="${pid}"]`);
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

  nodes() {
    return this.$container.querySelectorAll("*[data-node-id]");
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

export default JsonFormat;

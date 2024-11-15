import Utils from "../Utils";

class JsonFormat {
  static STYLE = {
    table: "table",
    viewer: "viewer",
  };

  DEFAULTS = {
    json: null,
    style: null,
    theme: "default",
    container: null,
    expander: null,
    onExpand: null,
    collapser: null,
    onCollapse: null,
  };

  constructor(options) {
    this.options = Object.assign(this.DEFAULTS, options);
    if (!options.container) throw new Error("Container is required");
    if (!options.json) throw new Error("json is required");
    this.render();
    this.bindEvent();
    this.setTheme(this.options.theme);
  }

  render() {}

  setTheme(theme) {
    const classList = document.body.classList;
    classList.forEach((clas) => {
      if (clas.includes("theme")) classList.remove(clas);
    });
    classList.add(`${theme}-theme`);
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

  createBracket(type) {
    const node = this.createElement("span", {
      class: `json-${type}-bracket`,
    });
    node.textContent = Object.is(type, "array") ? "[]" : "{}";
    return node;
  }

  bindEvent() {
    const { expander, collapser, onExpand, onCollapse } = this.options;
    if (expander) this.addEvent(`click`, expander, () => this.expandAll());
    if (collapser) this.addEvent(`click`, collapser, () => this.collapseAll());

    this.addEvent("click", ".json-formater-copy", (e) => {
      const target = e.currentTarget;
      const className = "success";
      if (!target.json || Utils.hasClass(target, className)) return;
      Utils.setClipboard(Utils.stringify(target.json, null, 2));
      Utils.addClass(target, className);
      setTimeout(() => Utils.removeClass(target, className), 1500);
    });

    this.addEvent("click", ".json-formater-placeholder", (e) => {
      const node = this.closest(e.currentTarget, ".json-formater-item");
      this.show(node);
    });

    this.addEvent("click", ".json-formater-arrow", (e) => {
      const node = this.closest(e.currentTarget, ".json-formater-item");
      if (Utils.hasClass(node, "json-formater-opened")) {
        this.hide(node);
        if (onCollapse) onCollapse(node, this);
      } else {
        this.show(node);
        if (onExpand) onExpand(node, this);
      }
    });
  }

  expandAll() {
    this.nodes().forEach((node) => this.show(node));
  }

  collapseAll() {
    this.nodes().forEach((node) => this.hide(node));
  }

  show(node) {
    Utils.removeClass(node, "json-formater-closed");
    Utils.addClass(node, "json-formater-opened");
    this.showDescs(node);
    this.onShow(node);
  }

  showDescs(node) {
    let children = this.findChildren(node);
    children.forEach((child) => {
      Utils.show(child, null);
      if (
        this.options.style === JsonFormat.STYLE.table &&
        Utils.hasClass(child, "json-formater-opened")
      ) {
        this.showDescs(child);
      }
    });
  }

  onShow(node) {
    const nodeId = node.dataset.nodeId;
    const selector = `*[data-node-id=${nodeId}] .json-formater-placeholder`;
    const desc = Utils.query(selector, node);
    if (!desc) return;
    desc.innerHTML = null;
  }

  hide(node) {
    Utils.removeClass(node, "json-formater-opened");
    Utils.addClass(node, "json-formater-closed");
    this.hideDescs(node);
    this.onHide(node);
  }

  hideDescs(node) {
    const children = this.findChildren(node);
    children.forEach((child) => {
      Utils.hide(child);
      if (this.options.style === JsonFormat.STYLE.table) this.hideDescs(child);
    });
  }

  onHide(node) {
    const id = node.dataset.nodeId;
    const selector = `*[data-node-id="${id}"] .json-formater-placeholder`;
    const desc = Utils.query(selector, node);
    if (!desc) return;
    if (desc.innerHTML) return;

    const type = node.dataset.type;
    const length = this.findChildren(node).length;
    const span = this.createElement("span");
    span.textContent = `${length}${length > 1 ? " items" : " item"}`;
    if (Object.is(type, "object")) {
      span.textContent = `${length}${length > 1 ? " keys" : " key"}`;
    }
    desc.appendChild(span);

    if (this.options.style === JsonFormat.STYLE.table) {
      let text = document.createTextNode(Object.is(type, "object") ? "{" : "[");
      desc.prepend(text);
      text = document.createTextNode(Object.is(type, "object") ? "}" : "]");
      desc.appendChild(text);
    }
  }

  findChildren(node) {
    const pid = node.dataset.nodeId;
    return Utils.queryAll(`*[data-node-pid="${pid}"]`, this.$container);
  }

  findByID(id) {
    return Utils.query(`*[data-node-id="${id}"]`, this.$container);
  }

  openByID(id) {
    this.show(this.findByID(id));
  }

  closeByID(id) {
    this.hide(this.findByID(id));
  }

  nodes() {
    const arrows = Utils.queryAll(".json-formater-arrow", this.$container);
    return arrows.map((ele) => this.closest(ele, ".json-formater-item"));
  }

  createElement(name, attrs) {
    return Utils.createElement(name, attrs);
  }

  addEvent(type, selector, fn) {
    Utils.queryAll(selector).forEach((el) => el.addEventListener(type, fn));
  }

  closest(element, selector) {
    while (element) {
      if (element.matches(selector)) return element;
      element = element.parentElement;
    }
    return null;
  }

  JSONPath(path, key) {
    if (this.isNumber(key)) return `${path}[${key}]`;
    if (key.includes(".")) return `${path}["${key}"]`;
    return `${path}.${key}`;
  }

  isNumber(str) {
    return /^\d+$/.test(str);
  }

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

  canIterate(value) {
    if (!this.isIterate(value)) return false;
    return Object.keys(value).length > 0;
  }

  isUrl(str) {
    const regexp =
      /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return regexp.test(str);
  }

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

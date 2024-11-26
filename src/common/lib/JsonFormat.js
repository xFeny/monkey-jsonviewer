import Utils from "../Utils";

const SORTED = { ASC: "ASC", DESC: "DESC" };
const STYLE = { TABLE: "table", VIEWER: "viewer" };
class JsonFormat {
  static STYLE = STYLE;
  DEFAULTS = {
    sort: null,
    json: null,
    style: null,
    theme: "default",
    container: null,
    expander: null,
    onExpand: null,
    collapser: null,
    onCollapse: null,
  };

  constructor(options, tag, clazz) {
    this.options = Object.assign(this.DEFAULTS, options);
    if (!options.container) throw new Error("Container is required");
    if (!options.json) throw new Error("json is required");
    this.render(tag, clazz);
    this.bindEvent();
    this.setTheme(this.options.theme);
  }

  render(tag, clazz) {
    this.$container = Utils.query(this.options.container);
    this.$container.innerHTML = "";
    const box = Utils.createElement(tag, { class: clazz });
    this.createNode(box, this.options.json, "Root", "Root", 1);
    this.$container.appendChild(box);
  }

  setTheme(theme) {
    const classList = document.body.classList;
    classList.forEach((clas) => {
      if (clas.includes("theme")) classList.remove(clas);
    });
    classList.add(`${theme}-theme`);
  }

  keySort(json) {
    const { sort } = this.options;
    if (sort === null) return json;
    if (Array.isArray(json)) return json;
    const entries = Object.entries(json);
    const asc = ([prev], [next]) => prev.localeCompare(next);
    const desc = ([prev], [next]) => next.localeCompare(prev);
    const result = Object.is(SORTED.ASC, sort) ? entries.sort(asc) : entries.sort(desc);
    return Object.fromEntries(result);
  }

  sorted() {
    if (this.options.sort === null) {
      this.options.sort = SORTED.ASC;
      this.reload();
      return "升序";
    }
    if (SORTED.ASC === this.options.sort) {
      this.options.sort = SORTED.DESC;
      this.reload();
      return "降序";
    }
    if (SORTED.DESC === this.options.sort) {
      this.options.sort = null;
      this.reload();
      return "排序";
    }
  }

  reload() {
    const box = this.$container.firstChild;
    box.innerHTML = null;
    this.createNode(box, this.options.json, "Root", "Root", 1);
    this.$container.appendChild(box);
    this.bindEvent();
  }

  creatValueNode(type, value) {
    const node = Utils.createElement("span", { class: `json-${type}` });
    node.textContent = `${value}`;

    if (Object.is("string", type)) {
      value = this.escape(value);
      node.textContent = `"${value}"`;
    }

    if (this.isUrl(value)) {
      node.textContent = "";
      const a = Utils.createElement("a", { target: "_blank", href: value });
      a.textContent = `"${value}"`;
      node.appendChild(a);
    }

    if (this.isColor(value)) {
      const span = Utils.createElement("span", {
        class: "json-color",
        style: `background-color: ${value}`,
      });
      node.prepend(span);
    }
    return node;
  }

  creatOtherNodes(node, value) {
    if (!this.canIterate(value)) return;
    const arrow = Utils.createElement("span", { class: "json-formater-arrow" });
    node.prepend(arrow);

    const copy = Utils.createElement("span", { title: "复制", class: "json-formater-copy" });
    copy.json = value;
    node.appendChild(copy);

    const placeholder = this.creatPlaceholder(value);
    node.appendChild(placeholder);
  }

  creatPlaceholder(json) {
    const placeholder = Utils.createElement("span", { class: "json-formater-placeholder" });

    const type = Utils.getType(json);
    const length = Object.keys(json).length;
    const span = Utils.createElement("span");
    span.textContent = `${length}${length > 1 ? " items" : " item"}`;
    if (Object.is(type, "object")) {
      span.textContent = `${length}${length > 1 ? " keys" : " key"}`;
    }
    placeholder.appendChild(span);

    if (STYLE.TABLE === this.options.style) {
      let text = document.createTextNode(Object.is(type, "object") ? "{" : "[");
      placeholder.prepend(text);
      text = document.createTextNode(Object.is(type, "object") ? "}" : "]");
      placeholder.appendChild(text);
    }
    return placeholder;
  }

  createBracket(type) {
    const node = Utils.createElement("span", { class: `json-${type}-bracket` });
    node.textContent = Object.is(type, "array") ? "[]" : "{}";
    return node;
  }

  bindEvent() {
    const { expander, collapser, onExpand, onCollapse } = this.options;
    if (expander) this.addEvent(`click`, expander, () => this.expandAll());
    if (collapser) this.addEvent(`click`, collapser, () => this.collapseAll());

    this.addEvent("click", ".json-formater-copy", (e) => {
      const className = "success";
      const target = e.currentTarget;
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
    Utils.addClass(node, "json-formater-opened");
    Utils.removeClass(node, "json-formater-closed");
    this.showDescs(node);
    this.showAfter(node);
  }

  showDescs(node) {
    const children = this.findChildren(node);
    if (children.length === 0) return;
    children.forEach((child) => {
      Utils.show(child);
      const hasClass = Utils.hasClass(child, "json-formater-opened");
      const isTable = Object.is(STYLE.TABLE, this.options.style);
      if (isTable && hasClass) this.showDescs(child);
    });
  }

  showAfter(node) {
    Utils.hide(this.queryPlaceholder(node));
  }

  hide(node) {
    Utils.addClass(node, "json-formater-closed");
    Utils.removeClass(node, "json-formater-opened");
    this.hideDescs(node);
    this.hideAfter(node);
  }

  hideDescs(node) {
    const children = this.findChildren(node);
    if (children.length === 0) return;
    children.forEach((child) => {
      Utils.hide(child);
      const isTable = Object.is(STYLE.TABLE, this.options.style);
      if (isTable) this.hideDescs(child);
    });
  }

  hideAfter(node) {
    Utils.show(this.queryPlaceholder(node));
  }

  queryPlaceholder(node) {
    const id = node.dataset.nodeId;
    const selector = `*[data-node-id="${id}"] .json-formater-placeholder`;
    return Utils.query(selector, node);
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

  isIterate(value) {
    const type = Utils.getType(value);
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

  isColor(str) {
    const hexCodeRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    const rgbRegex = /^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/;
    const rgbaRegex = /^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(0|1|0\.\d+)\s*\)$/;
    return hexCodeRegex.test(str) || rgbRegex.test(str) || rgbaRegex.test(str);
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

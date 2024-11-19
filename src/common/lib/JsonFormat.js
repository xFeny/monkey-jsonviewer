import Utils from "../Utils";

class JsonFormat {
  static STYLE = {
    table: "table",
    viewer: "viewer",
  };

  static SORT = {
    ASC: "ASC",
    DESC: "DESC",
  };

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
    const box = this.createElement(tag, { class: clazz });
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
    const ASC = JsonFormat.SORT.ASC;
    if (sort == null) return json;
    if (Array.isArray(json)) return json;
    const entries = Object.entries(json);
    const asc = ([prev], [next]) => prev.localeCompare(next);
    const desc = ([prev], [next]) => next.localeCompare(prev);
    const result = Object.is(ASC, sort) ? entries.sort(asc) : entries.sort(desc);
    return Object.fromEntries(result);
  }

  sort() {
    if (this.options.sort === null) {
      this.options.sort = JsonFormat.SORT.ASC;
      this.reload();
      return "升序";
    }
    if (this.options.sort === JsonFormat.SORT.ASC) {
      this.options.sort = JsonFormat.SORT.DESC;
      this.reload();
      return "降序";
    }
    if (this.options.sort === JsonFormat.SORT.DESC) {
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

  creatPlaceholder(json) {
    const placeholder = this.createElement("span", {
      class: "json-formater-placeholder",
    });

    const type = this.getType(json);
    const length = Object.keys(json).length;
    const span = this.createElement("span");
    span.textContent = `${length}${length > 1 ? " items" : " item"}`;
    if (Object.is(type, "object")) {
      span.textContent = `${length}${length > 1 ? " keys" : " key"}`;
    }
    placeholder.appendChild(span);

    if (JsonFormat.STYLE.table === this.options.style) {
      let text = document.createTextNode(Object.is(type, "object") ? "{" : "[");
      placeholder.prepend(text);
      text = document.createTextNode(Object.is(type, "object") ? "}" : "]");
      placeholder.appendChild(text);
    }
    return placeholder;
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
    this.showAfter(node);
  }

  showDescs(node) {
    const children = this.findChildren(node);
    if (children.length === 0) return;
    children.forEach((child) => {
      Utils.show(child);
      const isTable = Object.is(JsonFormat.STYLE.table, this.options.style);
      const hasClass = Utils.hasClass(child, "json-formater-opened");
      if (isTable && hasClass) this.showDescs(child);
    });
  }

  showAfter(node) {
    const nodeId = node.dataset.nodeId;
    const selector = `*[data-node-id=${nodeId}] .json-formater-placeholder`;
    const desc = Utils.query(selector, node);
    if (desc) Utils.hide(desc);
  }

  hide(node) {
    Utils.removeClass(node, "json-formater-opened");
    Utils.addClass(node, "json-formater-closed");
    this.hideDescs(node);
    this.hideAfter(node);
  }

  hideDescs(node) {
    const children = this.findChildren(node);
    if (children.length === 0) return;
    children.forEach((child) => {
      Utils.hide(child);
      const isTable = Object.is(JsonFormat.STYLE.table, this.options.style);
      if (isTable) this.hideDescs(child);
    });
  }

  hideAfter(node) {
    const id = node.dataset.nodeId;
    const selector = `*[data-node-id="${id}"] .json-formater-placeholder`;
    const desc = Utils.query(selector, node);
    if (desc) Utils.show(desc);
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
    const regexp = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
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
    const rgbaRegex = /^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(0|1|0\.\d+)\s*\)$/;

    return hexCodeRegex.test(colorString) || rgbRegex.test(colorString) || rgbaRegex.test(colorString);
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

  splitArray(arr, num) {
    const result = [];
    const partSize = Math.ceil(arr.length / num);
    let start = 0;
    for (let i = 0; i < num; i++) {
      const end = Math.min(start + partSize, arr.length);
      const slice = arr.slice(start, end);
      if (slice.length !== 0) result.push(slice);
      start = end;
    }
    return result;
  }
}

export default JsonFormat;

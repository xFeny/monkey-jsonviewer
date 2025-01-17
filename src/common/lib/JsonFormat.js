import Utils from "../Utils";

const SORTED = { ASC: "ASC", DESC: "DESC" };
const STYLE = { TABLE: "table", VIEWER: "viewer" };
class JsonFormat {
  static STYLE = STYLE;
  Root = "Root";
  DEFAULTS = {
    sort: null,
    json: null,
    style: null,
    container: null,
    theme: "default",
  };

  constructor(options, tag, clazz) {
    this.options = Object.assign(this.DEFAULTS, options);
    if (!options.container) throw new Error("Container is required");
    if (!options.json) throw new Error("json is required");
    this.render(tag, clazz);
    this.setTheme(this.options.theme);
    this.bindEvent();
  }

  render(tag, clazz) {
    this.$container = Utils.query(this.options.container);
    this.$container.innerHTML = "";
    const box = Utils.createElement(tag, { class: clazz });
    this.createNode(box, this.options.json, this.Root, this.Root, 1);
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
    box.innerHTML = "";
    this.createNode(box, this.options.json, this.Root, this.Root, 1);
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

  creatOtherNodes(node, json) {
    if (!this.canIterate(json)) return;
    node.prepend(this.creatArrowElement());
    node.appendChild(this.creatCopyElement(json));
    node.appendChild(this.creatPlaceholder(json));
  }

  creatArrowElement() {
    return Utils.createElement("span", { class: "json-formater-arrow" });
  }

  creatCopyElement(json) {
    const copy = Utils.createElement("span", { title: "复制", class: "json-formater-copy" });
    copy.json = json;
    return copy;
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
    this.addEvent("click", ".json-formater-copy", (e) => {
      const className = "success";
      const target = e.currentTarget;
      if (!target.json || Utils.hasClass(target, className)) return;
      Utils.setClipboard(Utils.stringify(target.json, null, 2));
      Utils.addClass(target, className);
      setTimeout(() => Utils.removeClass(target, className), 1500);
    });

    this.addEvent("click", ".json-formater-placeholder", (e) => {
      const node = Utils.closest(e.currentTarget, ".json-formater-item");
      this.show(node);
    });

    this.addEvent("click", ".json-formater-arrow", (e) => {
      const node = Utils.closest(e.currentTarget, ".json-formater-item");
      const isExpand = Utils.hasClass(node, "json-formater-opened");
      isExpand ? this.hide(node) : this.show(node);
    });
  }

  expandAll() {
    const nodes = this.nodes();
    for (const node of nodes) {
      if (Utils.hasClass(node, "json-formater-closed")) this.show(node);
    }
  }

  collapseAll() {
    const nodes = this.nodes();
    for (const node of nodes) {
      if (Utils.hasClass(node, "json-formater-opened")) this.hide(node);
    }
  }

  show(node) {
    this.showDescs(node);
    Utils.hide(this.getPlaceNode(node));
    Utils.addClass(node, "json-formater-opened");
    Utils.removeClass(node, "json-formater-closed");
  }

  hide(node) {
    this.hideDescs(node);
    Utils.show(this.getPlaceNode(node));
    Utils.addClass(node, "json-formater-closed");
    Utils.removeClass(node, "json-formater-opened");
  }

  showDescs(node) {
    const queue = [node];
    while (queue.length > 0) {
      const currentNode = queue.shift();
      const children = this.findChildren(currentNode);
      if (children.length === 0) continue;
      for (const child of children) {
        Utils.removeClass(child, "hidden");
        const hasClass = Utils.hasClass(child, "json-formater-opened");
        if (hasClass) queue.push(child);
      }
    }
  }

  hideDescs(node) {
    const path = Utils.attr(node, "path");
    const selector = `*[path^='${path}']:not(*[path='${path}']):not(*[class*='hidden'])`;
    const children = Utils.queryAll(selector, this.$container);
    if (children.length === 0) return;
    for (const child of children) Utils.addClass(child, "hidden");
  }

  getPlaceNode(node) {
    return Utils.query(`*[data-node-id="${node.dataset.nodeId}"] .json-formater-placeholder`, node);
  }

  findChildren(node) {
    return Utils.queryAll(`*[data-node-pid="${node.dataset.nodeId}"]`, this.$container);
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
    return arrows.map((ele) => Utils.closest(ele, ".json-formater-item"));
  }

  addEvent(type, selector, fn) {
    Utils.queryAll(selector).forEach((el) => el.addEventListener(type, fn));
  }

  JSONPath(path, key) {
    if (this.isNumber(key)) return `${path}[${key}]`;
    if (key.includes(".")) return `${path}["${key}"]`;
    return `${path}.${key}`;
  }

  isNumber(str) {
    return /^\d+$/.test(str);
  }

  isIterate(data) {
    const type = Utils.getType(data);
    return ["array", "object"].includes(type);
  }

  canIterate(data) {
    if (!this.isIterate(data)) return false;
    return Object.keys(data).length > 0;
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

  isColor(str) {
    const hexCodeRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    const rgbRegex = /^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/;
    const rgbaRegex = /^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(0|1|0\.\d+)\s*\)$/;
    return hexCodeRegex.test(str) || rgbRegex.test(str) || rgbaRegex.test(str);
  }

  random() {
    let randomStr = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomStr += characters.charAt(randomIndex);
    }
    return randomStr;
  }
}

export default JsonFormat;

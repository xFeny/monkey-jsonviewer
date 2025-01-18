import Utils from "../Utils";

const SORTED = { NONE: "none", ASC: "ASC", DESC: "DESC" };
const STYLE = { TABLE: "table", VIEWER: "viewer" };
class JsonFormat {
  static STYLE = STYLE;
  Root = "Root";
  DEFAULTS = {
    json: null,
    style: null,
    container: null,
    theme: "default",
    sort: SORTED.NONE,
  };

  sortEnum = {
    [SORTED.NONE]: { value: SORTED.ASC, text: "升序" },
    [SORTED.ASC]: { value: SORTED.DESC, text: "降序" },
    [SORTED.DESC]: { value: SORTED.NONE, text: "排序" },
  };

  constructor(options, tag, clazz) {
    this.tag = tag;
    this.clazz = clazz;
    this.options = Object.assign(this.DEFAULTS, options);
    if (!options.container) throw new Error("Container is required");
    if (!options.json) throw new Error("json is required");
    this.setTheme(this.options.theme);
    this.render(tag, clazz);
  }

  render(tag, clazz) {
    this.$container = Utils.query(this.options.container);
    this.$container.innerHTML = "";
    const wrapper = Utils.createElement(tag, { class: clazz });
    const fragment = document.createDocumentFragment();
    this.createNode(fragment, this.options.json, this.Root, this.Root, 1);
    wrapper.appendChild(fragment);
    this.$container.appendChild(wrapper);
    this.bindEvent();
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
    if (Array.isArray(json)) return json;
    if (sort === SORTED.NONE) return json;
    const entries = Object.entries(json);
    const asc = ([prev], [next]) => prev.localeCompare(next);
    const desc = ([prev], [next]) => next.localeCompare(prev);
    const result = Object.is(SORTED.ASC, sort) ? entries.sort(asc) : entries.sort(desc);
    return Object.fromEntries(result);
  }

  sorted() {
    const sort = this.sortEnum[this.options.sort];
    this.options.sort = sort.value;
    this.render(this.tag, this.clazz);
    return sort.text;
  }

  creatValueNode(type, value) {
    const node = Utils.createElement("span", { class: `json-${type}` }, `${value}`);

    if (Object.is("string", type)) {
      value = this.escape(value);
      node.textContent = `"${value}"`;
    }

    if (this.isUrl(value)) {
      node.textContent = "";
      const a = Utils.createElement("a", { target: "_blank", href: value }, `"${value}"`);
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
    if (!this.hasNext(json)) return;
    node.prepend(this.creatArrowNode());
    node.appendChild(this.creatCopyNode(json));
    node.appendChild(this.creatDescNode(json));
  }

  creatArrowNode() {
    return Utils.createElement("span", { class: "json-arrow" });
  }

  creatCopyNode(json) {
    const copy = Utils.createElement("span", { title: "复制", class: "json-copy" });
    copy.json = json;
    return copy;
  }

  creatDescNode(json) {
    const desc = Utils.createElement("span", { class: "json-desc" });

    const type = Utils.getType(json);
    const length = Object.keys(json).length;
    const span = Utils.createElement("span");
    span.textContent = `${length}${length > 1 ? " items" : " item"}`;
    if (Object.is(type, "object")) {
      span.textContent = `${length}${length > 1 ? " keys" : " key"}`;
    }
    desc.appendChild(span);

    if (STYLE.TABLE === this.options.style) {
      let text = document.createTextNode(Object.is(type, "object") ? "{" : "[");
      desc.prepend(text);
      text = document.createTextNode(Object.is(type, "object") ? "}" : "]");
      desc.appendChild(text);
    }
    return desc;
  }

  createBracket(type) {
    const node = Utils.createElement("span", { class: `json-${type}-bracket` });
    node.textContent = Object.is(type, "array") ? "[]" : "{}";
    return node;
  }

  bindEvent() {
    this.addEvent("click", ".json-copy", (e) => {
      const target = e.target;
      const className = "success";
      if (!target.json || Utils.hasClass(target, className)) return;
      Utils.addClass(target, className);
      Utils.setClipboard(Utils.stringify(target.json, null, 2));
      setTimeout(() => Utils.removeClass(target, className), 1500);
    });

    this.addEvent("click", ".json-arrow", (e) => {
      const node = Utils.closest(e.target, ".json-item");
      const expanded = Utils.hasClass(node, "expanded");
      expanded ? this.collapse(node) : this.expand(node);
    });

    this.addEvent("click", ".json-desc", (e) => this.expand(Utils.closest(e.target, ".json-item")));
  }

  expandAll() {
    this.nodes().forEach((node) => this.expand(node));
  }

  collapseAll() {
    this.nodes().forEach((node) => this.collapse(node));
  }

  expand(node) {
    this.toggleDescs(node, false);
    Utils.hide(this.descNode(node));
    Utils.addClass(node, "expanded");
    Utils.removeClass(node, "collapsed");
  }

  collapse(node) {
    this.toggleDescs(node, true);
    Utils.show(this.descNode(node));
    Utils.addClass(node, "collapsed");
    Utils.removeClass(node, "expanded");
  }

  toggleDescs(node, hidden) {
    const target = Utils.query(`#${node.dataset.nodeId}`);
    hidden ? Utils.addClass(target, "hidden") : Utils.removeClass(target, "hidden");
  }

  descNode(node) {
    return Utils.query(`*[data-node-id="${node.dataset.nodeId}"] .json-desc`, node);
  }

  findChildren(node) {
    return Utils.queryAll(`*[data-node-pid="${node.dataset.nodeId}"]`, this.$container);
  }

  findByID(id) {
    return Utils.query(`*[data-node-id="${id}"]`, this.$container);
  }

  expandByID(id) {
    this.expand(this.findByID(id));
  }

  collapseByID(id) {
    this.collapse(this.findByID(id));
  }

  nodes() {
    return Utils.queryAll(".collapsible", this.$container);
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

  isIterator(data) {
    const type = Utils.getType(data);
    return ["array", "object"].includes(type);
  }

  hasNext(data) {
    if (!this.isIterator(data)) return false;
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

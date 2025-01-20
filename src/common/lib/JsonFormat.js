import Utils from "../Utils";

const STYLE = Object.freeze({ TABLE: "table", VIEWER: "viewer" });
const SORTED = Object.freeze({ NONE: "none", ASC: "ASC", DESC: "DESC" });
class JsonFormat {
  static STYLE = STYLE;
  Root = "Root";
  DEFAULTS = { json: null, style: null, container: null, theme: "default", sort: SORTED.NONE };
  // 排序枚举
  SORT_ENUM = Object.freeze({
    [SORTED.NONE]: { value: SORTED.ASC, text: "升序" },
    [SORTED.ASC]: { value: SORTED.DESC, text: "降序" },
    [SORTED.DESC]: { value: SORTED.NONE, text: "排序" },
  });
  // 括号
  BRACKET = Object.freeze({
    array: { START: "[", END: "]", FULL: "[]" },
    object: { START: "{", END: "}", FULL: "{}" },
  });

  constructor(options, tag, clazz) {
    this.tag = tag;
    this.clazz = clazz;
    this.options = Object.assign(this.DEFAULTS, options);
    if (!options.container) throw new Error("Container is required");
    if (!options.json) throw new Error("json is required");
    this.container = Utils.query(options.container);
    this.setTheme(this.options.theme);
    this.render(tag, clazz);
  }

  render(tag, clazz) {
    this.container.innerHTML = "";
    const wrapper = Utils.createElement(tag, { class: clazz });
    const fragment = document.createDocumentFragment();
    this.buildNode(fragment, this.options.json);
    wrapper.appendChild(fragment);
    this.container.appendChild(wrapper);
    this.bindEvent();
  }

  buildNode() {
    throw new Error("此方法必须由子类实现具体功能");
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
    const sort = this.SORT_ENUM[this.options.sort];
    this.options.sort = sort.value;
    this.render(this.tag, this.clazz);
    return sort.text;
  }

  iterateJson(json, parentId, parentPath, tagName, callback) {
    const entries = Object.entries(this.keySort(json));
    const entryCount = entries.length;
    const lastIndex = entryCount - 1;
    for (let index = 0; index < entryCount; index++) {
      const id = Utils.random();
      const [key, value] = entries[index];
      const type = Utils.getType(value);
      const hasNext = this.hasNext(value);
      const notLast = !Object.is(index, lastIndex);
      const path = this.spliceJsonPath(parentPath, key);
      // JSON Item Element
      const element = Utils.createElement(tagName, { path, "data-node-id": id, "data-node-pid": parentId });
      if (hasNext) element.setAttribute("class", "collapsible expanded");
      // 回调函数
      callback.call(this, { id, key, value, type, path, hasNext, element, notLast });
    }
  }

  creatValueNode(type, value) {
    if (this.isIterator(value)) return this.createBracket(type);
    // create value element
    const node = Utils.createElement("span", { class: `json-${type}` });
    if (this.isUrl(value)) {
      const link = Utils.createElement("a", { target: "_blank", href: value }, `"${value}"`);
      node.appendChild(link);
      return node;
    }
    // 基本数据类型
    node.textContent = Object.is("string", type) ? Utils.stringify(value) : `${value}`;
    if (this.isColor(value)) {
      const span = Utils.createElement("span", { class: "json-color", style: `background-color: ${value}` });
      node.prepend(span);
    }
    return node;
  }

  creatExtraNodes(node, json) {
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
    const type = Utils.getType(json);
    const desc = Utils.createElement("span", { class: "json-desc" });

    const count = Object.keys(json).length;
    const span = Utils.createElement("span");
    span.textContent = `${count} ${type === "object" ? (count > 1 ? "keys" : "key") : count > 1 ? "items" : "item"}`;
    desc.appendChild(span);

    if (STYLE.TABLE === this.options.style) {
      desc.insertAdjacentText("afterbegin", this.BRACKET[type].START);
      desc.insertAdjacentText("beforeend", this.BRACKET[type].END);
    }
    return desc;
  }

  createBracket(type) {
    return Utils.createElement("span", { type, class: `json-bracket` }, this.BRACKET[type].FULL);
  }

  bindEvent() {
    this.addEvent("click", ".json-copy", (e) => {
      const target = e.target;
      const className = "success";
      if (!target.json || Utils.hasClass(target, className)) return;
      Utils.setClipboard(Utils.stringify(target.json, null, 2));
      setTimeout(() => Utils.removeClass(target, className), 1500);
      Utils.addClass(target, className);
    });

    this.addEvent("click", ".json-arrow", (e) => {
      const node = Utils.closest(e.target, ".collapsible");
      const expanded = Utils.hasClass(node, "expanded");
      expanded ? this.collapse(node) : this.expand(node);
    });

    this.addEvent("click", ".json-desc", (e) => this.expand(Utils.closest(e.target, ".collapsible")));
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
    return Utils.queryAll(`*[data-node-pid="${node.dataset.nodeId}"]`, this.container);
  }

  findByID(id) {
    return Utils.query(`*[data-node-id="${id}"]`, this.container);
  }

  expandByID(id) {
    this.expand(this.findByID(id));
  }

  collapseByID(id) {
    this.collapse(this.findByID(id));
  }

  nodes() {
    return Utils.queryAll(".collapsible", this.container);
  }

  addEvent(type, selector, fn) {
    Utils.queryAll(selector).forEach((el) => el.addEventListener(type, fn));
  }

  spliceJsonPath(path, key) {
    if (this.isNumber(key)) return `${path}[${key}]`;
    if (key.includes(".")) return `${path}["${key}"]`;
    return `${path}.${key}`;
  }

  isNumber(str) {
    return /^\d+$/.test(str);
  }

  isIterator(data) {
    return ["array", "object"].includes(Utils.getType(data));
  }

  hasNext(data) {
    return this.isIterator(data) ? Object.keys(data).length > 0 : false;
  }

  isUrl(str) {
    const regexp = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return regexp.test(str);
  }

  isColor(str) {
    const rgbRegex = /^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/;
    const hexRegex = /^#([A-Fa-f0-9]{8}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    const rgbaRegex = /^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(0|1|0\.\d+)\s*\)$/;
    return hexRegex.test(str) || rgbRegex.test(str) || rgbaRegex.test(str);
  }
}

export default JsonFormat;

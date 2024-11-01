/**
 * options: {
 *   id: null, 设置table的id
 *   json: null, JSON 数据
 *	 container: null, append容器
 * }
 * @param {Object} options
 */
class JsonToTable {
  constructor(options) {
    this.nodes = new Array();
    const defaults = {
      id: null,
      json: null,
      container: null,
    };

    this.options = Object.assign(defaults, options);
    if (!options.container) {
      throw new Error("Container: dom element is required");
    }

    if (!options.json) {
      throw new Error("json: json is required");
    }

    this.generated();
  }

  generated() {
    const { id, json, container } = this.options;

    const $container =
      container instanceof HTMLElement
        ? container
        : document.querySelector(container);

    this.createNode(json, 0, "Root", "Root");

    const table = this.createElement("table");
    if (id) table.setAttribute("id", id);

    for (let i in this.nodes) {
      table.appendChild(this.nodes[i]);
    }

    $container.appendChild(table);
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
      this.nodes.push(item);

      if (this.canIterate(value)) {
        const nodeId = item.dataset.nodeId;
        this.createNode(value, depth + 1, jsonPath, nodeId);
      }
    }
  }

  /**
   * 创建tr
   */
  createItem(key, value, type, depth, jsonPath, parentId) {
    const id = key + "_" + Math.random();
    const isIterate = this.isIterate(value);
    const canIterate = this.canIterate(value);

    const node = this.createElement("tr", {
      "data-type": type,
      "data-node-id": id,
      "data-node-pid": parentId,
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

  /**
   * 创建第一个td
   */
  createLeftNode(key, value, depth, jsonPath) {
    const node = this.createElement("td", {
      "json-path": jsonPath,
      colspan: this.canIterate(value) ? 2 : 0,
      style: `padding-left: ${depth * 20}px`,
    });

    const b = this.createElement("b", {
      class: "json-key",
    });
    b.innerText = `${key}`;
    node.appendChild(b);

    const textNode = document.createTextNode(":");
    node.appendChild(textNode);

    if (this.canIterate(value)) {
      const span = this.createElement("span", {
        class: "json-placeholder",
      });
      node.appendChild(span);
    }
    return node;
  }

  /**
   * 创建第二个td
   */
  createRightNode(type, value) {
    const node = this.createElement("td", {
      class: `json-${type}`,
    });
    node.innerText = `${value}`;

    if (type === "string") {
      value = this.escape(value);
      node.innerText = `"${value}"`;
    }

    if (this.isUrl(value)) {
      node.innerText = "";
      const a = this.createElement("a", {
        target: "_blank",
        href: value,
      });
      a.innerText = `"${value}"`;
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
      class: type === "array" ? "json-array-bracket" : "json-object-bracket",
    });
    node.innerText = type === "array" ? "[]" : "{}";
    return node;
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
      element.setAttribute(name, attributes[name]);
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

if (typeof module != "undefined") {
  module.exports = JsonToTable;
}

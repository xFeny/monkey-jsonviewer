import JSONbig from "json-bigint";

const JSON = JSONbig({ useNativeBigInt: true });
NodeList.prototype.filter = Array.prototype.filter;
NodeList.prototype.some = Array.prototype.some;
NodeList.prototype.map = Array.prototype.map;

export default {
  isImg: function (str) {
    const regexp =
      /\.(ico|bmp|gif|jpg|jpeg|png|svg|webp|GIF|JPG|PNG|WEBP|SVG)([\w#!:.?+=&%@!\-\/])?/i;
    return regexp.test(str);
  },
  isJSON: function (str) {
    try {
      JSON.parse(str);
      return true;
    } catch (e) {
      console.log("is not json");
      return false;
    }
  },
  parse: function (text, reviver) {
    return JSON.parse(text, reviver);
  },
  stringify: function (value, replacer, space) {
    return JSON.stringify(value, replacer, space);
  },
  getType: function (v) {
    return Object.prototype.toString
      .call(v)
      .match(/\s(.+)]/)[1]
      .toLowerCase();
  },
  getPrototype: function (val) {
    return Object.prototype.toString.call(val).match(/\s(.+)]/)[1];
  },
  findMaxKeysObject: function (arr) {
    let maxKeysCount = 0;
    let maxKeysObject;
    for (const obj of arr) {
      const keysCount = Object.keys(obj).length;
      if (keysCount > maxKeysCount) {
        maxKeysCount = keysCount;
        maxKeysObject = obj;
      }
    }
    return maxKeysObject;
  },
  randomColor: (opacity) => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
  },
  downloadText: function (content, filename) {
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  },
  matchJsonp: function (rawText) {
    const tokens = rawText.match(/^([^\s(]*)\s*\(([\s\S]*)\)\s*;?$/);
    if (tokens && tokens[1] && tokens[2]) {
      return {
        rawText: tokens[2],
        jsonpFun: tokens[1],
      };
    }

    return {
      rawText,
      jsonpFun: null,
    };
  },
  debounce: function (fn, delay = 300) {
    let timer;
    return function () {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, arguments), delay);
    };
  },
  setClipboard: function (text) {
    if (GM_setClipboard) {
      GM_setClipboard(text);
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    } else {
      let textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "absolute";
      textArea.style.opacity = 0;
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand("copy");
      textArea.remove();
    }
  },
  addEvent: function (eventType, selector, callback) {
    const types = eventType.split(" ");
    if (!selector) {
      new Error("selector is required");
    }

    types.forEach((type) => {
      function handler(event) {
        let target = event.target;
        if (!target.matches) return;

        while (!target.matches(selector)) {
          target = target.parentNode;
          if (!target || !target.matches) return;
        }

        Object.defineProperty(event, "currentTarget", {
          configurable: true,
          get: function () {
            return target;
          },
        });

        const returnValue = callback.call(target, event);
        if (returnValue === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        event.stopImmediatePropagation();
      }
      document.addEventListener(type, handler, true);
    });
  },
  isVisible: function (ele) {
    const style = getComputedStyle(ele);
    const display = style.display;
    const visibility = style.visibility;
    const hasWidth = ele.offsetWidth > 0;
    const hasHeight = ele.offsetHeight > 0;
    return (
      !Object.is(display, "none") &&
      !Object.is(visibility, "hidden") &&
      hasWidth &&
      hasHeight
    );
  },
  createElement: function (name, attrs) {
    const element = document.createElement(name);
    if (attrs) this.attr(element, attrs);
    return element;
  },
  attr: function (ele, attrs, value) {
    if (!ele) return;
    if (typeof attrs === "object") {
      for (const name in attrs) {
        if (Object.prototype.hasOwnProperty.call(attrs, name)) {
          ele.setAttribute(name, attrs[name]);
        }
      }
      return;
    }
    if (value === undefined) return ele.getAttribute(attrs);
    if (!value) return ele.removeAttribute(attrs);
    ele.setAttribute(attrs, value);
  },
  query: function (selector, context) {
    const ctx = context || document;
    if (selector instanceof HTMLElement) return selector;
    return ctx.querySelector(selector);
  },
  queryAll: function (selector, context) {
    const ctx = context || document;
    if (selector instanceof HTMLElement) {
      return new NodeList(selector);
    }
    if (selector instanceof NodeList) {
      return selector;
    }
    return ctx.querySelectorAll(selector);
  },
  addClass(ele, className) {
    if (!ele) return;
    if (ele instanceof HTMLElement) {
      return ele.classList.add(className);
    }
    if (ele instanceof NodeList || ele instanceof Array) {
      ele.forEach((el) => this.addClass(el, className));
    }
  },
  removeClass(ele, className) {
    if (!ele) return;
    if (ele instanceof HTMLElement) {
      const classList = ele.classList;
      if (className === undefined) {
        while (classList.length > 0) {
          classList.remove(classList.item(0));
        }
        return;
      }
      return classList.remove(className);
    }
    if (ele instanceof NodeList || ele instanceof Array) {
      ele.forEach((el) => this.removeClass(el, className));
    }
  },
  toggleClass: function (ele, className) {
    if (!ele) return;
    this.hasClass(ele, className)
      ? this.removeClass(ele, className)
      : this.addClass(ele, className);
  },
  hasClass(ele, className) {
    if (!ele) return false;
    if (ele instanceof HTMLElement) {
      return ele.classList.contains(className);
    }
    if (ele instanceof NodeList) {
      return ele.some((el) => this.hasClass(el, className));
    }
  },
  show: function (ele, value) {
    const style = ele.style;
    if (style.display !== "none") return;
    if (value !== undefined) return (style.display = value);
    const defaultDisplay = ele.defaultDisplay;
    if (!Object.is(defaultDisplay, "none")) {
      return (style.display = defaultDisplay);
    }
    style.display = "block";
  },
  hide: function (ele) {
    if (!ele.defaultDisplay) {
      const display = getComputedStyle(ele).display;
      ele.defaultDisplay = display;
    }
    ele.style.display = "none";
  },
};

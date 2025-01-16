import JSONbig from "json-bigint";
const JSON = JSONbig({ useNativeBigInt: true });

NodeList.prototype.filter = Array.prototype.filter;
NodeList.prototype.some = Array.prototype.some;
NodeList.prototype.map = Array.prototype.map;

function getDefaultDisplay(ele) {
  let display = ele.defaultDisplay;
  const doc = ele.ownerDocument;

  if (display) return display;
  const temp = doc.body.appendChild(doc.createElement(ele.nodeName));
  display = getComputedStyle(temp).display;
  temp.parentNode.removeChild(temp);
  if (display === "none") display = "block";
  ele.defaultDisplay = display;
  return display;
}

export default {
  isImg(str) {
    const regexp = /\.(ico|bmp|gif|jpg|jpeg|png|svg|webp|GIF|JPG|PNG|WEBP|SVG)([\w#!:.?+=&%@!\-\/])?/i;
    return regexp.test(str);
  },
  isJSON(str) {
    try {
      JSON.parse(str);
      return true;
    } catch (e) {
      return false;
    }
  },
  parse(text, reviver) {
    return JSON.parse(text, reviver);
  },
  stringify(value, replacer, space) {
    return JSON.stringify(value, replacer, space);
  },
  isObject(o) {
    return Object.is(typeof o, "object");
  },
  getType(o) {
    return this.getPropType(o).toLowerCase();
  },
  getPropType(o) {
    return Object.prototype.toString.call(o).match(/\s(.+)]/)[1];
  },
  findMaxKeysObject(arr) {
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
  downloadText(content, filename) {
    const blob = new Blob([content], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    this.createElement("a", { href: url, download: filename }).click();
    URL.revokeObjectURL(url);
  },
  matchJsonp(rawText) {
    const tokens = rawText.match(/^([^\s(]*)\s*\(([\s\S]*)\)\s*;?$/);
    if (tokens && tokens[1] && tokens[2]) {
      return { rawText: tokens[2], jsonpFun: tokens[1] };
    }
    return { rawText, jsonpFun: null };
  },
  debounce(fn, delay = 300) {
    let timer;
    return function () {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, arguments), delay);
    };
  },
  setClipboard(text) {
    if (GM_setClipboard) {
      GM_setClipboard(text);
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    } else {
      console.error("复制内容失败");
    }
  },
  addEvent(eventType, selector, callback) {
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
          get() {
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
  isVisible(ele) {
    return !!(ele.offsetWidth || ele.offsetHeight || ele.getClientRects().length);
  },
  createElement(name, attrs) {
    const element = document.createElement(name);
    if (attrs) this.attr(element, attrs);
    return element;
  },
  attr(ele, attrs, value) {
    if (!ele) return;
    if (typeof attrs === "object") {
      for (const name in attrs) ele.setAttribute(name, attrs[name]);
      return;
    }
    if (value === undefined) return ele.getAttribute(attrs);
    if (value === false || value === null) return ele.removeAttribute(attrs);
    ele.setAttribute(attrs, value);
  },
  query(selector, context) {
    const ctx = context || document;
    if (selector instanceof HTMLElement) return selector;
    return ctx.querySelector(selector);
  },
  queryAll(selector, context) {
    const ctx = context || document;
    if (selector instanceof HTMLElement) return new NodeList(selector);
    if (selector instanceof NodeList) return selector;
    return ctx.querySelectorAll(selector);
  },
  closest(element, selector) {
    while (element) {
      if (element.matches(selector)) return element;
      element = element.parentElement;
    }
    return null;
  },
  addClass(ele, className) {
    if (!ele) return;
    if (ele instanceof HTMLElement) return ele.classList.add(className);
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
  toggleClass(ele, className) {
    if (!ele) return;
    this.hasClass(ele, className) ? this.removeClass(ele, className) : this.addClass(ele, className);
  },
  hasClass(ele, className) {
    if (!ele) return false;
    if (ele instanceof HTMLElement) return ele.classList.contains(className);
    if (ele instanceof NodeList) {
      return ele.some((el) => this.hasClass(el, className));
    }
  },
  show(ele) {
    if (!ele) return;
    const style = ele.style;
    const display = getComputedStyle(ele).display;
    if (style.display === "none") style.display = "";
    if (style.display === "" && display === "none") {
      style.display = getDefaultDisplay(ele);
    }
  },
  hide(ele) {
    if (ele.defaultDisplay === undefined) {
      const computedDisplay = getComputedStyle(ele).display;
      if (!Object.is(computedDisplay, "none")) {
        ele.defaultDisplay = computedDisplay;
      }
    }
    ele.style.display = "none";
  },
};

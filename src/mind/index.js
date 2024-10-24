import $ from "jquery";
import tippy from "tippy.js";
import jsMind from "jsmind";
import "jsmind/screenshot";
import "jsmind/style/jsmind.css";
import Utils from "../common/Utils";

export default {
  isFirst: true,
  /**
   * JSON数据转换为jsMind所需要的数据结构
   * @param {*} json JSON 数据
   * @returns
   */
  convert: function (json) {
    const children = [];
    if (typeof json === "object") {
      for (const key in json) {
        let val = json[key],
          isArray = Array.isArray(val);

        const type = Utils.getPrototype(val);
        if (isArray && val.length > 0) {
          val = Utils.findMaxKeysObject(val);
        }

        children.push({
          isArray,
          chain: key,
          id: key + "_" + Math.random(),
          topic: `${key}<span class="datatype">${type}</span>`,
          children: this.convert(val),
        });
      }
    }
    return children;
  },
  /**
   * 脑图节点调用链
   * @param {*} node 脑图节点对象
   * @returns
   */
  mindChain: function (node) {
    let chain = node.data.chain;
    if (!node.parent) {
      return chain;
    }

    const parent = node.parent,
      parentChain = this.mindChain(parent);
    chain = parent.data.isArray
      ? `${parentChain}[i].${chain}`
      : `${parentChain}.${chain}`;
    return chain;
  },
  /**
   * 显示脑图
   * @param {*} json JSON 数据
   * @returns
   */
  show: function (json) {
    let isArr = Array.isArray(json);
    if (isArr) {
      if (typeof json[0] !== "object") {
        layer.msg("数据结构无法生成脑图", { time: 1000 });
        return this;
      }
      json = Utils.findMaxKeysObject(json);
    }

    if (!this.isFirst) {
      return this;
    }

    unsafeWindow.GLOBAL_JSMIND.show({
      meta: {
        version: "1.0",
        name: "JSON脑图",
        author: "1220301855@qq.com",
      },
      format: "node_tree",
      /* 数据内容 */
      data: {
        id: "root",
        topic: "Response",
        direction: "left",
        children: this.convert(json),
        chain: isArr ? "Response[i]" : "Response",
      },
    });
    this.isFirst = false;
    return this;
  },
  /**
   * 脑图节点事件
   * @returns
   */
  event: function () {
    const jsonMind = this;
    $("jmnode").on("dblclick mouseover", function (event) {
      const that = $(this),
        node = unsafeWindow.GLOBAL_JSMIND.get_node(that.attr("nodeid"));
      if (!node.parent) {
        return;
      }

      if (event.type === "dblclick") {
        GM_setClipboard(jsonMind.mindChain(node));
        layer.msg("节点路径复制成功", { time: 1500 });
      } else {
        const content = `<b>节点路径（双击复制）</b><br/>${jsonMind.mindChain(
          node
        )}`;
        tippy(this, {
          content,
          duration: 800,
          allowHTML: true,
          theme: "layer",
        }).show();
      }
    });
    return this;
  },
  init: function (json) {
    if (!unsafeWindow.GLOBAL_JSMIND) {
      unsafeWindow.GLOBAL_JSMIND = new jsMind({
        mode: "side",
        editable: false,
        container: "jmContainer",
        view: {
          hmargin: 50, // 思维导图距容器外框的最小水平距离
          vmargin: 50, // 思维导图距容器外框的最小垂直距离
          engine: "svg", // 思维导图各节点之间线条的绘制引擎
          draggable: true, // 当容器不能完全容纳思维导图时，是否允许拖动画布代替鼠标滚动
          support_html: false,
          line_color: "#C4C9D0",
        },
        zoom: {
          // 配置缩放
          min: 0.1, // 最小的缩放比例
          max: 2.1, // 最大的缩放比例
          step: 0.1, // 缩放比例间隔
        },
        layout: {
          vspace: 7, // 节点之间的垂直间距
          hspace: 150, // 节点之间的水平空间
        },
      });
    }

    this.show(json).event();
  },
};

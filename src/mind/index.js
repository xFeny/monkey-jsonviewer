import $ from "jquery";
import Utils from "../core/Utils";
import jsMind from "jsmind";
import "jsmind/screenshot";
import "jsmind/style/jsmind.css";

export default {
  isFirst: true,
  // JSON数据转换为jsMind所需要的数据结构
  convert: function (json) {
    const children = [];
    if (typeof json === "object") {
      for (const key in json) {
        let val = json[key],
          isArray = Array.isArray(val);

        if (isArray && val.length > 0) {
          val = Utils.findMaxKeysObject(val);
        }

        const type = Object.prototype.toString.call(val).match(/\s(.+)]/)[1];
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
  // 脑图节点调用链
  mindChain: function (node) {
    let chain = node.data.chain;
    if (!node.parent) {
      return chain;
    }

    const parent = node.parent,
      parentChain = this.mindChain(parent);
    chain = parent.data.isArray
      ? `${parentChain}[0].${chain}`
      : `${parentChain}.${chain}`;
    return chain;
  },
  //  显示脑图
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
        name: "JSON脑图",
        author: "1220301855@qq.com",
        version: "1.0",
      },
      format: "node_tree",
      /* 数据内容 */
      data: {
        id: "root",
        topic: "Response",
        direction: "left",
        children: this.convert(json),
        chain: isArr ? "Response[0]" : "Response",
      },
    });
    this.isFirst = false;
    return this;
  },
  // 脑图节点事件
  event: function () {
    const jsonMind = this;
    $("jmnode").on("dblclick mouseover mouseout", function (event) {
      const that = $(this),
        node = unsafeWindow.GLOBAL_JSMIND.get_node(that.attr("nodeid"));
      if (!node.parent) {
        return;
      }

      switch (event.type) {
        case "dblclick":
          GM_setClipboard(jsonMind.mindChain(node));
          layer.msg("节点路径复制成功", { time: 1500 });
          break;
        case "mouseover":
          const s = `<b>节点路径（双击复制）</b><br/>${jsonMind.mindChain(node)}`;
          layer.tips(s, that, {
            time: 0,
            tips: [2, "#2e59a7"],
          });
          break;
        default:
          layer.closeAll();
          break;
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

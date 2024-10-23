export default {
  /**
   * 检查字符串是否为URL
   * @param {*} str 字符串
   * @returns
   */
  isUrl: function (str) {
    const regexp =
      /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return regexp.test(str);
  },

  /**
   * 检查是否为图片链接
   * @param {*} str 字符串
   * @returns
   */
  isImg: function (str) {
    const regexp =
      /\.(ico|bmp|gif|jpg|jpeg|png|svg|webp|GIF|JPG|PNG|WEBP|SVG)([\w#!:.?+=&%@!\-\/])?/i;
    return regexp.test(str);
  },
  /**
   * 是否为json格式的内容
   * @param {*} str 字符串
   * @returns
   */
  isJSON: function (str) {
    try {
      JSON.parse(str);
      return true;
    } catch (e) {
      console.log("is not json");
      return false;
    }
  },
  /**
   * 获取数据类型，全小写
   * @param {*} v
   * @returns
   */
  getType: function (v) {
    return Object.prototype.toString
      .call(v)
      .match(/\s(.+)]/)[1]
      .toLowerCase();
  },
  /**
   * 获取数据类型
   * @param {*} val
   * @returns
   */
  getPrototype: function (val) {
    return Object.prototype.toString.call(val).match(/\s(.+)]/)[1];
  },
  /**
   * 获取数组中对象key最多的对象
   * @param {*} arr 对象数组
   * @returns
   */
  findMaxKeysObject: function (arr) {
    let maxKeysCount = 0,
      maxKeysObject;
    for (const obj of arr) {
      const keysCount = Object.keys(obj).length;
      if (keysCount > maxKeysCount) {
        maxKeysCount = keysCount;
        maxKeysObject = obj;
      }
    }
    return maxKeysObject;
  },
  /**
   * 随机rgb颜色
   * @param {*} opacity 透明度
   * @returns
   */
  randomColor: (opacity) => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
  },
  /**
   * 下载文本内容
   * @param {*} content 文本内容
   * @param {*} filename 文件名
   */
  downloadText: function (content, filename) {
    // 创建一个 Blob 对象，包含要下载的文本内容
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();

    URL.revokeObjectURL(url);
  },
  /**
   * JSONP 数据处理
   * @param {*} rawText 字符串
   * @returns
   */
  jsonpMatch: function (rawText) {
    let tokens = rawText.match(/^([^\s(]*)\s*\(([\s\S]*)\)\s*;?$/);
    if (tokens && tokens[1] && tokens[2]) {
      return {
        raw: tokens[2],
        jsonpFun: tokens[1],
      };
    }

    return {
      raw: rawText,
      jsonpFun: null,
    };
  },
};

export default {
  // 检查字符串是否为URL
  isUrl: function (string) {
    const regexp =
      /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return regexp.test(string);
  },

  // 检查是否是图片链接
  isImg: function (pathImg) {
    // var regexp = /^(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?\/([\w#!:.?+=&%@!\-\/])*\.(gif|jpg|jpeg|png|GIF|JPG|PNG)([\w#!:.?+=&%@!\-\/])?/;
    const regexp =
      /\.(ico|bmp|gif|jpg|jpeg|png|svg|webp|GIF|JPG|PNG|WEBP|SVG)([\w#!:.?+=&%@!\-\/])?/i;
    return regexp.test(pathImg);
  },
  // 检验内容是否是json格式的内容
  isJSON: function (str) {
    try {
      JSON.parse(str);
      return true;
    } catch (e) {
      console.log("is not json");
      return false;
    }
  },
  // 获取数据类型
  getType: function (value) {
    return Object.prototype.toString
      .call(value)
      .match(/\s(.+)]/)[1]
      .toLowerCase();
  },
  // 获取数组中对象key最多的对象
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
  // 随机rgb颜色
  randomColor: (opacity) => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
  },
  /**
   * 是否满足JSON
   * @returns
   */
  isJSONDocument: function (contentType) {
    const docType = [
      "application/vnd.api+json",
      "application/javascript",
      "application/json",
      "text/javascript",
      "text/plain",
      "text/json",
    ];
    if (!docType.includes(contentType)) {
      return false;
    }
    return true;
  },
};

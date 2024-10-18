import $ from "jquery";

export default {
  /**
   * 切换主题色
   * @param {*} theme  主题色：default、light、dark、dark_plus
   * @returns
   */
  changeTheme: function (theme) {
    GM_setValue("theme", theme);
    this.setTheme();
    return this;
  },
  /**
   * 设置主题
   * @returns
   */
  setTheme: function () {
    const theme = GM_getValue("theme") || "default";
    $("body").removeClass().addClass(theme);
    return this;
  },
  init: function () {
    const that = this;
    that.setTheme();

    window.addEventListener("message", function (event) {
      const { data } = event;
      if (!data) {
        return;
      }

      const { type, value } = data;
      if (type === "theme") {
        that.changeTheme(value);
      }
    });
  },
};

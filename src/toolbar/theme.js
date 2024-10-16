import $ from "jquery";

export default {
  // 切换主题
  changeTheme: function (value) {
    GM_setValue("theme", value);
    this.setTheme();
    return this;
  },
  // 设置主题
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

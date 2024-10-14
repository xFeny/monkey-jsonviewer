import $ from "jquery";

export default {
  // 切换主题
  changeTheme: function () {
    const that = this;
    $(".theme select").on("change", function (e) {
      const val = $(e.target).val();
      GM_setValue("theme", val);
      that.setTheme();
    });
    return this;
  },
  // 设置主题
  setTheme: function () {
    const theme = GM_getValue("theme") || "default";
    $("body").removeClass().addClass(theme);
    $(".theme select").val(theme);
    return this;
  },
  init: function () {
    this.setTheme().changeTheme();
  },
};

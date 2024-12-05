export default {
  changeTheme(theme) {
    GM_setValue("theme", theme) & this.setTheme();
  },
  setTheme() {
    const theme = GM_getValue("theme") || "default";
    unsafeWindow.JSON_FORMATER.setTheme(theme);
  },
};

import tabs from "./tabs";
import theme from "./theme";
import tools from "./tools";
import handleBar from "./handleBar";

tabs.init();
theme.setTheme();
handleBar.init();
window.addEventListener("message", function (event) {
  const { data } = event;
  if (!data) return;
  const { type, value } = data;
  if (!type && !value) return;
  if (Object.is(type, "tools")) return tools[value]();
  if (Object.is(type, "theme")) return theme.changeTheme(value);
});

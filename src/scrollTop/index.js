import tippy from "tippy.js";
import Utils from "../common/Utils";
import "./scroll-top.scss";

const scroll = Utils.createElement("div", { class: "scroll-top" });
document.body.appendChild(scroll);
tippy(scroll, { theme: "scroll", placement: "left", content: "返回顶部" });
const $container = Utils.query(".container");
$container.addEventListener("scroll", (e) => (e.target.scrollTop > 500 ? Utils.show(scroll) : Utils.hide(scroll)));
scroll.addEventListener("click", () => ($container.scrollTop = 0));

import Utils from "../common/Utils";
import "./scroll-top.css";

const scroll = Utils.createElement("div", {
  class: "scroll-top",
});
document.body.appendChild(scroll);
const $container = Utils.query(".container");
$container.addEventListener("scroll", function () {
  this.scrollTop > 500 ? Utils.show(scroll) : Utils.hide(scroll);
});
scroll.addEventListener("click", function () {
  $container.scrollTop = 0;
});

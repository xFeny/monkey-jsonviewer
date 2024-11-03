import "./scroll-top.css";

const scroll = document.createElement("div");
scroll.setAttribute("class", "scroll-top");
document.body.appendChild(scroll);

const style = scroll.style;

const $container = document.querySelector(".container");
$container.addEventListener("scroll", function () {
  this.scrollTop > 500 ? (style.display = "block") : (style.display = "none");
});

scroll.addEventListener("click", function () {
  $container.scrollTop = 0;
});

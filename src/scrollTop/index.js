import $ from "jquery";
import "./scroll-top.css";

const $body = $(document.body);
const $container = $(".tabs-container");
$body.append('<div class="scroll-top"></div>');
// 滚动监听
$container.on("scroll", function () {
  const scrollTop = $(this).scrollTop();
  const scrollElment = $(".scroll-top");
  scrollTop > 500 ? scrollElment.fadeIn() : scrollElment.fadeOut();
});

// 滚动回顶部
$body.on("click", ".scroll-top", function () {
  $container.animate({ scrollTop: "0" }, 1000);
});

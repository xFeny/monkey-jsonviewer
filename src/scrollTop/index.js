import $ from "jquery";
import "./style.css";

$(document.body)
  .append('<div class="scroll-top"></div>')
  .find(".tabs-container")
  .on("scroll", function (e) {
    const scrollTop = $(this).scrollTop();
    scrollTop > 500 ? $(".scroll-top").fadeIn() : $(".scroll-top").fadeOut();
  })
  .parents()
  .find(".scroll-top")
  .on("click", function () {
    $(".tabs-container").animate(
      {
        scrollTop: "0",
      },
      1000
    );
  });

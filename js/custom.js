(function ($) {
  "use strict";

  // PRE LOADER
  $(window).on("load", function () {
    $(".preloader").delay(750).fadeOut("slow"); // Плавное исчезновение с задержкой
  });

  // NAVBAR
  $(".navbar").headroom();

  $(".navbar-collapse a").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  $(".slick-slideshow").slick({
    autoplay: true,
    infinite: true,
    arrows: false,
    fade: true,
    dots: false,
  });

  $(".slick-testimonial").slick({
    arrows: false,
    dots: true,
  });

  $(".slick-partners").slick({
    infinite: true,
    autoplay: true,
    speed: 300,
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
})(window.jQuery);

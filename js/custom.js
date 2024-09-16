(function ($) {
  "use strict";

  // PRE LOADER
  $(window).load(function () {
    $(".preloader").delay(500).slideUp("slow"); // set duration in brackets
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

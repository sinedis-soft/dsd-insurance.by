(function ($) {
  "use strict";

  // PRE LOADER
  $(window).on("load", function () {
    $(".preloader").delay(750).fadeOut("slow");
  });

  // NAVBAR
  $(".navbar").headroom();

  $(".navbar-collapse a").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  $(".slick-slideshow").slick({
    autoplay: true,
    autoplaySpeed: 3000,
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

const allSection = document.querySelectorAll(".section--hidden");

const revealSection = function (entries, observer) {
  if (window.innerWidth <= 768) {
    allSection[0]?.classList.remove("section--hidden");
  }

  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSection.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

dsdinsur_admin

admin
DSD2022!admin
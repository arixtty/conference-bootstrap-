$(document).ready(function() {
  $(".owl-carousel").owlCarousel();
});

$(".carousel-img").owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 1
    },
    768: {
        items: 2
      },
    960: {
      items: 3
    }
  }
});

$(".carousel-quotes").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  dots: false,
  autoplay: false,
  items: 1
});

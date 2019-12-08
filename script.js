$(document).ready(function() {
  $(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
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

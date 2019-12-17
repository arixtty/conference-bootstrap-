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


function isInViewport(node) {
  var rect = node.getBoundingClientRect()
  return (
    (rect.height > 0 || rect.width > 0) &&
    rect.bottom >= 0 &&
    rect.right >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

$(window).scroll(function() {
  var scrolled = $(window).scrollTop()
  $('.parallax').each(function(index, element) {
    var initY = $(this).offset().top
    var height = $(this).height()
    var endY  = initY + $(this).height()

    // Check if the element is in the viewport.
    var visible = isInViewport(this)
    if(visible) {
      var diff = scrolled - initY
      var ratio = Math.round((diff / height) * 100)
      $(this).css('background-position','center ' + parseInt(-(ratio * 1.5)) + 'px')
    }
  })
})
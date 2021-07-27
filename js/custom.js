//menu toggle
$('.menu-toggle').on('click', function (e) {
  $('body').toggleClass("active-responsive-menu");
});


// Slick Slider
$('.hero-slider-wrap').slick({
  infinite: true,
  dots: false,
  arrows: false,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

//magnific-popup

$('.open-popup-link').magnificPopup({
  type: 'inline',
  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});



//sticky
$(document).on("scroll", function () {
  if ($(document).scrollTop()) {
    $('.header-wrapper').addClass('active_sticky');
  }
  else {
    $('.header-wrapper').removeClass('active_sticky');
  }
})


// Hide header on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.header-wrapper').outerHeight();

$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 0);

function hasScrolled() {
  var st = $(this).scrollTop();

  // Make scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta)
    return;

  // If scrolled down and past the navbar, add class .nav-up.
  if (st > lastScrollTop && st > 0) {
    // Scroll Down
    $('.header-wrapper').removeClass('nav-down').addClass('nav-up');
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $('.header-wrapper').removeClass('nav-up').addClass('nav-down');
    }
  }

  lastScrollTop = st;
}

//back-to-top
$(window).scroll(function () {
  if ($(this).scrollTop()) {
    $('.back-top-arrow').fadeIn();
    $(".back-top-arrow").css("opacity", "1");
    $(".back-top-arrow").css("visibility", "visible");
  } else {
    $('.back-top-arrow').fadeOut();
  }
});

//spinner loader

$(window).on('load', function () {
  $(".spinner-wrapper").css("opacity", "0");
  $(".spinner-wrapper").css("transition", "0.5s ease");
  $(".spinner-wrapper").css("z-index", "-1");
  // $("body").css("overflow", "auto");
  // animation wow // after preloader wow.js will start
  new WOW().init();
});

var counted = 0;
$(window).scroll(function () {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function () {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum: countTo
      },

        {

          duration: 2000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

});


/*======================================================*/
// Init Skrollr
/*======================================================*/
var s;
$(window).on('load resize orientationChange', function () {
  if ($(window).width() >= 1200) {
    s = skrollr.init({
      forceHeight: false,
      render: function (data) {
      },
      mobileCheck: function () {
        //hack - forces mobile version to be off
        return false;
      }
    });
  } else {
    if (s === 'undefined') {
      s.destroy();
    }
  }
});

            // 



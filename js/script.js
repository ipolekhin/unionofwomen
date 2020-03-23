"use strict";


(function() {
  // Вариант если JS не работает
  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');
  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.remove('main-nav--opened');
      navMain.classList.add('main-nav--closed');
    }
  });

  // Карусель 'События и мероприятия'
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    autoWidth: true,
    items: 2,
    loop: true,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
      },
      577: {
        autoplay:false,
      },
      991: {
        items: 2,
      }
    }
  });
})();

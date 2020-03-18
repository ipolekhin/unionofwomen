"use strict";

$(function() {
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
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true
      },
      577: {
        autoplay:false,
      },
      991: {
        items: 2,
      }
    }
  });
});



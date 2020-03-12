"use strict";

$(function() {
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    autoWidth: true,
    center: true,
    items: 3,
    loop: true,
    nav: false,
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

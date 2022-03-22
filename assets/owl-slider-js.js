$(document).ready(function() {
  $('.home_product_slider').owlCarousel({
    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        responsive:false
      },
        400: {
        items: 2,
        nav: true
      },
      540: {
        items: 3,
        nav: true
      },
      768: {
        items: 4,
        nav: true
      },
      1000: {
        items: 5,
        nav: true,
        loop: false,
        margin: 20
      }
    }
  });
});
$(document).ready(function() {
  $('.owl-carousel_prdct').owlCarousel({
    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items:3,
        nav: true
      },
      480: {
        items: 2,
        nav: false
      },
      680: {
        items: 3,
        nav: false
      },
      1000: {
        items: 3,
        nav: true,
        loop: false,
        margin: 20
      }
    }
  });
});
$(document).ready(function() {
  $('.modal_product').owlCarousel({
    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      480: {
        items: 2,
        nav: false
      },
      680: {
        items: 3,
        nav: false
      },
      1000: {
        items: 3,
        nav: true,
        loop: false,
        margin: 20
      }
    }
  });
});

$( window ).load(function() {
  $("#recently-viewed-products").owlCarousel({
    loop:true,
    autoPlay: true,

    autoplayTimeout: 3000,
    //navigation : true,
    nav: true,
    items:1     
  });
});

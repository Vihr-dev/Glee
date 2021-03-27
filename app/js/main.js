$(function () {

  $('.top-product__product-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false
  });

  var containerMix1 = document.querySelector('[data-ref="week"]');
  var containerMix2 = document.querySelector('[data-ref="new"]');
  var config = {
    controls: {
      scope: 'local'
    }
  };
  

  var mixer1 = mixitup(containerMix1, config);
  var mixer = mixitup(containerMix2, config);

});
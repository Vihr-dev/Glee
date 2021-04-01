$(function () {

  $('.icon-btn--menu').on('click', function () {
    $('.header__inner').toggleClass('header__inner--active');
  }); 

  $('.top-product__list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false
  });

  $('.partner__list').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 1500

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
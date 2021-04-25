$(function () {

  $('.related-product__slider').slick({
    slidesToShow: 4,
    prevArrow: '<button type="button" class="slick-btn slick-prev"><svg class="slick-svg"><use xlink:href="images/sprite.svg#arrow-l"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><svg class="slick-svg"><use xlink:href="images/sprite.svg#arrow-r"></use></svg></button>',
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1
      }
    }
  ]
  })

  $('.tabs__link').on('click', function (e) {
    e.preventDefault();
    $('.tabs__link').removeClass('tabs__link--active');
    $(this).addClass('tabs__link--active');

    $('.tabs__content-item').removeClass('tabs__content-item--active');
    $($(this).attr('href')).addClass('tabs__content-item--active');
  })

  $('.photo-slide__min').slick({
    asNavFor: '.photo-slide__main',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    responsive: [{
      breakpoint: 769,
      settings: {
        vertical: false,
      }
    }]
  });

  $('.photo-slide__main').slick({
    draggable: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    sNavFor: '.photo-slide__min'
  });

  $('.filter-shop__btn').on('click', function () {
    $('.shop__inner').removeClass('shop__inner--active');
  })

  $('.shop-setings__btn').on('click', function () {
    $('.shop-setings__btn').removeClass('shop-setings__btn--active');
    $(this).addClass('shop-setings__btn--active');
  });

  $('.btn-list').on('click', function () {
    $('.shop-cards__item').addClass('product-card--row');
  });

  $('.btn-grid').on('click', function () {
    $('.shop-cards__item').removeClass('product-card--row');
  });

  $('.shop-setings__select, .product__numb').styler();

  $(".recent-product__star").rateYo({
    rating: 3.6,
    numStars: 5,
    starWidth: "12px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true
  });

  $(".shop-cards__star").rateYo({
    rating: 3.6,
    numStars: 5,
    starWidth: "20px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true
  });

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    grid: false,
    min: 0.00,
    max: 1000.00,
    from: 200.00,
    to: 800.00,
    step: 0.01,
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    }
  });


  $('.icon-btn--menu').on('click', function () {
    $('.header__inner').toggleClass('header__inner--active');
  });

  $('.shop-setings__pop-up').on('click', function () {
    $('.shop__inner').toggleClass('shop__inner--active');
  });

  $('.blog__pop-up').on('click', function () {
    $('.blog__inner').toggleClass('blog__inner--active');
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
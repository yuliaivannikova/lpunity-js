$(document).ready(function () {
  $(".single-item").slick();
  $(".my-slider").slick({
    centerMode: true,
    centerPadding: "98px",
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: true,
    dotsClass: "slider__dots",
    nextArrow: '<i class="material-icons slick-next"> <div class="iconSlider1">Вперед</div> arrow_forward</i>',
    prevArrow: '<i class="material-icons slick-prev"> arrow_back <div class="iconSlider">Назад</div></i>',
    pauseOnHover: true,
    responsive: [{
        breakpoint: 992,
        settings: {
          arrows: false,
          autoplay: false,
          centerMode: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow: 1,
          autoplay: false,
        }
      }
    ]
  });


});


$(document).ready(function () {
  $(".block3__gallery").slick({
    slidesToShow: 1,
    arrows: true,
    dots: true,
    dotsClass: "slider__dots",
    nextArrow: '<i class="material-icons slider1-next"> arrow_forward</i>',
    prevArrow: '<i class="material-icons slider1-prev"> arrow_back</i>',
    pauseOnHover: true,
    responsive: [{
        breakpoint: 992,
        settings: {
          arrows: true,
          centerMode: false,
          dots: false,
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow: 1,

        }
      }
    ]
  });
});
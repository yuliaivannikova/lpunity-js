$(document).ready(function () {
  $(".single-item").slick();
  $(".my-slider").slick({
    centerMode: true,
    centerPadding: "98px",
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    arrows: true,
    dots: true,
    dotsClass: "slider__dots",
    nextArrow: '<i class="material-icons slick-next"> <div class="iconSlider1">Вперед</div> arrow_forward</i>',
    prevArrow: '<i class="material-icons slick-prev"> arrow_back <div class="iconSlider">Назад</div></i>',
    pauseOnHover: true,
    responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1
        }
      }
    ]
  });


  //   $(".my-slider").css("border", "solid 1px red");
});
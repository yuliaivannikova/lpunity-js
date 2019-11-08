$(document).ready(function() {
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
    nextArrow:
      '<button > <img src="./img/img12.png" alt="img" class="next"></button>',
    prevArrow:
      '<button > <img src="./img/img13.png" alt="img" class="prev"></button>',
    pauseOnHover: true,
    responsive: [
      {
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

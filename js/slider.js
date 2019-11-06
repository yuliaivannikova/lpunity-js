$(document).ready(function () {


    $('.single-item').slick();

    $('.my-slider').slick({
        centerMode: true,
        centerPadding: '120px',
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        useTransform: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});
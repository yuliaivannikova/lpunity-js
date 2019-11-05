window.onload = function (e) {
    var btn_prev = document.querySelector('.slider__arrow--prev');
    var btn_next = document.querySelector('.slider__arrow--next');

    var images = document.querySelectorAll('.block4__img');

    var i = 0;


    btn_next.onclick = function () {
        images[i].style.display = 'none';
        i = i + 1;


        if (i >= images.length) {
            i = 0;
        }

        images[i].style.display = 'block';
    }

    btn_prev.onclick = function () {
        images[i].style.display = 'none';
        i = i - 1;


        if (i < 0) {
            i = images.length - 1;
        }

        images[i].style.display = 'block';
    }
}
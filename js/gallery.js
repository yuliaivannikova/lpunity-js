window.onload = function () {

    var images = document.querySelectorAll('.block4__img');

    var slider = new Slider(images);
    document.querySelector('.slider__arrow--prev').onclick = function () {
        slider.prev();
    }

    var slider = new Slider(images);
    document.querySelector('.slider__arrow--next').onclick = function () {
        slider.next();
    }

    // var images2 = document.querySelectorAll('.block3__imgSlide');

    // var slider2 = new Slider(images2);
    // document.querySelector('.slider__arrow--block3-prev').onclick = function () {
    //     slider2.prev();
    // }

    // var slider2 = new Slider(images2);
    // document.querySelector('.slider__arrow--block3-next').onclick = function () {
    //     slider2.next();
    // }

}

function Slider(images) {
    this.images = images;
    this.i = 0;

    this.prev = function () {
        this.images[this.i].style.display = 'none';


        this.i--;
        if (this.i < 0) {
            this.i = this.images.length - 1;
        }
        this.images[this.i].style.display = 'block';


    }

    this.next = function () {
        this.images[this.i].style.display = 'none';


        this.i++;
        if (this.i >= images.length) {
            this.i = 0;
        }
        this.images[this.i].style.display = 'block';



    }
}





// var images = document.querySelectorAll('.block4__img');
// var prev = document.querySelector('.slider__arrow--prev');
// var next = document.querySelector('.slider__arrow--next');
// var i = 0;

// prev.onclick = function () {
//     images[i].className = '';
//     i--;

//     if (i < 0) {
//         i = images.length - 1;
//     }
//     images[i].className = 'block4__img--showed';
// }


// next.onclick = function () {
//     images[i].className = '';
//     i++;

//     if (i >= images.length) {
//         i = 0;
//     }
//     images[i].className = 'block4__img--showed';
// }
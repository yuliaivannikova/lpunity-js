$(function () {
    var open = $('.nav__burger'),
        menu = $('.nav__barlist'),
        close = $('.nav__close');

    open.on('click', function () {
        menu.toggleClass('nav__barlist--active');
    });
    close.on('click', function () {
        menu.toggleClass('nav__barlist--active');
    })
});
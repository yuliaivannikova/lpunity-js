$(function () {
    var scrollIcon = $(".copyright__top");
    scrollIcon.on('click', function () {
        var top = 0;
        $('html,body').animate({
            scrollTop: top
        }, 2000)
    });

});
$(function(){

    $('.photo__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="images/left1.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/right1.svg" alt=""></button>'
    });

    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();
    });

});
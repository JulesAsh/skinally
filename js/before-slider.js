$(window).load(function() {
    $(".before-after").twentytwenty({
        before_label:'Без скинали', // Set a custom before label
        after_label:'Со скинали' // Set a custom after label
    });
    $('.before__slider').slick({
        draggable: false,
        dots: true,
        dotsClass: 'before__slider-dots',
        prevArrow: $('.arrow-left'),
        nextArrow: $('.arrow-right')
    });
    $('.menu-button').on('click', function(){
        $('.menu').toggleClass('menu__active');
    });

});
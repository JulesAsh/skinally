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
    // показывает карту
    var reviews= $('.reviews');
    var reviewsTop = reviews.offset().top;
    $(window).bind('scroll', function(){
        var windowTop = $(this).scrollTop();
        if (windowTop > reviewsTop) {
            $('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A6a3800b4d9f1cd0405a0fb143e2aeeddc662b2fff91310b04536011baf4344bc&amp;width=100%25&amp;height=410&amp;lang=ru_RU&amp;scroll=false"></script>'
            )
            $(window).unbind('scroll');
        }
    })

});
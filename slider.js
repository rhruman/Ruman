$(document).ready(function () {
    $('.owl-one-banner').owlCarousel({
        items: 1,
        loop: true,
        autoplayTimeout: 10000,
        autoplay: true,
        dots: true,
        animateIn:"animate__fadeIn",   
        animateOut:"animate__fadeOut",       

    });

    $('.owl-third').owlCarousel({
        items: 2,
        loop: true,
        autoplayTimeout: 6000,
        autoplay: true,
        dots: true,
        nav: false,
        mouseDrag: true,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            }
        }

    });
});
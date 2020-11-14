/*-----------------------------------------------------------------
  Carousel
-------------------------------------------------------------------*/

// Testimonials
$('.section-item-3').each(function() {
    var carousel = new Swiper('.section-item-3', {
        slidesPerView: 2,
        spaceBetween: 30,
        //loop: true,
        grabCursor: true,
        watchOverflow: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        autoplay: {
            delay: 5000,
        },
        breakpoints: {
            991: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        }
    });
});

// Clients
$('.js-carousel-clients').each(function() {
    var carousel = new Swiper('.js-carousel-clients', {
        slidesPerView: 4,
        spaceBetween: 30,
        //loop: true,
        grabCursor: true,
        watchOverflow: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            580: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });
});

$('.message a').click(function() {
    $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
});
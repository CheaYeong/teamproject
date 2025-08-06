var swiper = new Swiper(".citySwiper", {
        rewind: true,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            767: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        }
    });




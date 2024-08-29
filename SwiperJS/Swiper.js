const swiperEl = document.querySelector('swiper-container')
Object.assign(swiperEl, {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 2000,
  },
  loop: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});
swiperEl.initialize();

const swiperEls = document.querySelector('.mySwiper.bike')
Object.assign(swiperEls, {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});
swiperEls.initialize();
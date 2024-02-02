var cardSwiper = new Swiper(".swiper.is-slider-about.is-image", {
  effect: "cards",
  grabCursor: false,
  loop: true,
  keyboard: true,
  navigation: {
    nextEl: ".arrow.is-right",
    prevEl: ".arrow.is-left",
  },
});
var contentSwiper = new Swiper(".swiper.is-slider-about.is-content", {
  effect: "fade",
  fadeEffect: {
    crossfade: true,
  },
  grabCursor: false,
  followFinger: false,
  loop: true,
});

cardSwiper.controller.control = contentSwiper;
contentSwiper.controller.control = cardSwiper;

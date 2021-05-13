/* #Sticky Gallery
================================================== */
new Swiper(".sticky-gallery .swiper-container", {
  spaceBetween: 8,
  speed: 500,
  slidesPerView: 1,
  pagination: {
    el: ".sticky-gallery .swiper-pagination",
  },
  navigation: {
    nextEl: ".sticky-gallery .swiper-button-next",
    prevEl: ".sticky-gallery .swiper-button-prev",
  },
});
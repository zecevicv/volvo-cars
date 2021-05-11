/* #Style Swiper
================================================== */
if (window.innerWidth > 479) {
  new Swiper(".main-page .style .swiper-container", {
    spaceBetween: 8,
    speed: 500,
    slidesPerView: 1,
    pagination: {
      el: ".main-page .style .swiper-pagination.fraction",
      type: "fraction",
    },
    navigation: {
      nextEl: ".main-page .style .swiper-button-next",
      prevEl: ".main-page .style .swiper-button-prev",
    },
  });
} else {
  new Swiper(".main-page .style .swiper-container", {
    spaceBetween: 8,
    speed: 300,
    slidesPerView: 1,
    pagination: {
      el: ".main-page .style .swiper-pagination.dots",
    },
  });
}

/* #Level Swiper
================================================== */
new Swiper(".main-page .level .swiper-container", {
  breakpoints: {
    0: {
      spaceBetween: 15,
      slidesPerView: 1.1,
      allowTouchMove: true,
    },
    480: {
      spaceBetween: 25,
      slidesPerView: 2,
      allowTouchMove: false,
    }
  }
});

/* #Color Swiper
================================================== */
if (window.innerWidth > 479) {
  new Swiper(".main-page .color .swiper-container", {
    spaceBetween: 8,
    speed: 500,
    slidesPerView: 1,
    pagination: {
      el: ".main-page .color .swiper-pagination.fraction",
      type: "fraction",
    },
    navigation: {
      nextEl: ".main-page .color .swiper-button-next",
      prevEl: ".main-page .color .swiper-button-prev",
    },
  });
} else {
  new Swiper(".main-page .color .swiper-container", {
    spaceBetween: 8,
    speed: 300,
    slidesPerView: 1,
    pagination: {
      el: ".main-page .color .swiper-pagination.dots",
    },
  });
}

/* #Wheels Swiper
================================================== */
if (window.innerWidth > 479) {
  new Swiper(".main-page .wheels .swiper-container", {
    spaceBetween: 8,
    speed: 500,
    slidesPerView: 1,
    pagination: {
      el: ".main-page .wheels .swiper-pagination.fraction",
      type: "fraction",
    },
    navigation: {
      nextEl: ".main-page .wheels .swiper-button-next",
      prevEl: ".main-page .wheels .swiper-button-prev",
    },
  });
} else {
  new Swiper(".main-page .wheels .swiper-container", {
    spaceBetween: 8,
    speed: 300,
    slidesPerView: 1,
    pagination: {
      el: ".main-page .wheels .swiper-pagination.dots",
    },
  });
}

/* #Exterior Img Swiper
================================================== */
if (window.innerWidth > 479) {
  new Swiper(".main-page .exterior .img .swiper-container", {
    spaceBetween: 8,
    speed: 500,
    slidesPerView: 1,
    pagination: {
      el: ".main-page .exterior .img .swiper-pagination.fraction",
      type: "fraction",
    },
    navigation: {
      nextEl: ".main-page .exterior .img .swiper-button-next",
      prevEl: ".main-page .exterior .img .swiper-button-prev",
    },
  });
} else {
  new Swiper(".main-page .exterior .img .swiper-container", {
    spaceBetween: 8,
    speed: 300,
    slidesPerView: 1,
    pagination: {
      el: ".main-page .exterior .img .swiper-pagination.dots",
    },
  });
}

/* #Exterior Text Swiper
================================================== */
new Swiper(".main-page .exterior .text .swiper-container", {
  breakpoints: {
    0: {
      spaceBetween: 15,
      slidesPerView: 1.5,
      centerSlides: false,
      allowTouchMove: true,
    },
    480: {
      spaceBetween: 15,
      slidesPerView: 3,
      centerSlides: true,
      allowTouchMove: false,
    },
    740: {
      spaceBetween: 25,
      slidesPerView: 3,
      centerSlides: true,
      allowTouchMove: false,
    }
  }
});

/* #Interior Swiper
================================================== */
if (window.innerWidth > 479) {
  new Swiper(".main-page .interior .swiper-container", {
    spaceBetween: 8,
    speed: 500,
    slidesPerView: 1,
    pagination: {
      el: ".main-page .interior .swiper-pagination.fraction",
      type: "fraction",
    },
    navigation: {
      nextEl: ".main-page .interior .swiper-button-next",
      prevEl: ".main-page .interior .swiper-button-prev",
    },
  });
} else {
  new Swiper(".main-page .interior .swiper-container", {
    spaceBetween: 8,
    speed: 300,
    slidesPerView: 1,
    pagination: {
      el: ".main-page .interior .swiper-pagination.dots",
    },
  });
}
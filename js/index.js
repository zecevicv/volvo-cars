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

/* #Option Loader
================================================== */
const circleOptions = document.querySelectorAll('.option');

if (circleOptions) {
  circleOptions.forEach((option) => {
    option.addEventListener('click', (e) => {
      option.classList.add('loading');
      setTimeout(function () {
        option.classList.remove('loading');
      }, 1000);
    });
  });
}

/* #ScrollSpy
================================================== */

/* #Accordion
================================================== */
const accordion = document.querySelector('.accordion');
const collapsibles = document.querySelectorAll('.collapsible');

accordion.addEventListener('click', (e) => {
  if (e.target.closest('.collapse-toggler')) {
    e.preventDefault();

    const collapsible = e.target.closest('.collapsible');
    const collapse = collapsible.querySelector('.collapse');
    const img = collapse.querySelectorAll('.img');

    collapsibles.forEach((coll) => {
      if (coll.classList.contains('show') && coll != collapsible) {
        collCollapse = coll.querySelector('.collapse');

        coll.classList.remove('show');
        gsap.to(collCollapse, {
          height: '0'
        });
      }
    });

    collapsible.classList.toggle('show');

    if (collapsible.classList.contains('show')) {
      gsap.to(collapse, {
        height: 'auto',
        duration: .4,
        ease: 'power1.inOut'
      });
      gsap.from(img, {
        opacity: 0,
        duration: .5,
        stagger: .05
      });
    } else {
      gsap.to(collapse, {
        height: '0'
      });
    }
  }
});

/* #Popup
================================================== */
const popupToggler = document.querySelector('.popup-toggler');
const popupClose = document.querySelector('.popup-close');

// TL
const popupTl = gsap.timeline({paused: true});
popupTl
  .set('.popup', { display: 'block' })
  .from('.popup', { 'background-color': 'transparent' })
  .to('.popup-content', { y: 0 })
  .set('body', { overflow: 'hidden' });

popupToggler.addEventListener('click', (e) => {
  e.preventDefault();
  popupTl.play();
});

popupClose.addEventListener('click', (e) => {
  e.preventDefault();
  popupTl.reverse();
});
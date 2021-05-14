/* #Header Scroll
================================================== */
let scrollPos = 0;
const header = document.querySelector('.header');
const headerTop = document.querySelector('.header-top');
const headerBottom = document.querySelector('.header-bottom');

if (headerTop && headerBottom) {
  window.addEventListener('scroll', (e) => {
    if (window.scrollY > 0 && (document.body.getBoundingClientRect()).top < scrollPos) {
      header.classList.add('hide-top');
      header.classList.add('show-bottom');
    } else if (window.scrollY > 0 && (document.body.getBoundingClientRect()).top > scrollPos) {
      header.classList.add('show-bottom');
      header.classList.remove('hide-top');
    }
  
    if (window.scrollY == 0) {
      header.classList.remove('hide-top');
      header.classList.remove('show-bottom');
    }
  
    scrollPos = (document.body.getBoundingClientRect()).top;
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
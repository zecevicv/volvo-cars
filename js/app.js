/* #Header Scroll
================================================== */
let scrollPos = 0;
const header = document.querySelector('.header');
const headerTop = document.querySelector('.header-top');
const headerBottom = document.querySelector('.header-bottom');

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
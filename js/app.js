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

/* #Header Dropdown
================================================== */
const dropdown = document.querySelector('.header .dropdown');

if (dropdown) {
  const dropdownMenu = dropdown.querySelector('.dropdown-menu');
  const body = document.querySelector('body');
  
  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.header') 
    &&
    !e.target.closest('.popup') 
    &&
    !document.querySelector('.popup.show')
    &&
    document.querySelector('.header .dropdown.show')
    ) {
      dropdown.classList.remove('show');
      gsap.set('body', {overflow: 'visible'});
      gsap.to(dropdownMenu, {height: '0'});
      body.classList.remove('overlay');
    }
  });
  
  // Open/close on Toggler click
  dropdown.addEventListener('click', (e) => {
    if (e.target.closest('.dropdown-toggler')) {
    
      dropdown.classList.toggle('show');
  
      if (dropdown.classList.contains('show')) {
        gsap.set('body', {overflow: 'hidden'});
        gsap.to(dropdownMenu, {height: 'auto'});
        body.classList.add('overlay');
      } else {
        gsap.set('body', {overflow: 'visible'});
        gsap.to(dropdownMenu, {height: '0'});
        body.classList.remove('overlay');
      }
    }
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
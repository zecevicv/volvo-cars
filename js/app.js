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

/* #ScrollSpy
================================================== */

/* #Option Loader
================================================== */
const circleOptions = document.querySelectorAll('.option');

circleOptions.forEach((option) => {
  option.addEventListener('click', (e) => {
    option.classList.add('loading');
    setTimeout(function () {
      option.classList.remove('loading');
    }, 1000);
  });
});

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
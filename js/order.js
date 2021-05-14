/* #Overview Dropdown
================================================== */
const overviewToggler = document.querySelector('.overview-toggler');
const overviewDropdown = document.querySelector('.overview');

overviewToggler.addEventListener('click', (e) => {
  overviewDropdown.classList.toggle('show');
  overviewToggler.classList.toggle('show');

  if (overviewDropdown.classList.contains('show')) {
    gsap.set(overviewDropdown, {overflow: 'auto'});
    gsap.to(overviewDropdown, {height: '100%', duration: .4, ease: 'power1.inOut'});
    gsap.set('body', {overflow: 'hidden'});
  } else {
    gsap.set('body', {overflow: 'visible'});
    gsap.to(overviewDropdown, {height: '0', duration: .4, ease: 'power1.inOut'});
    gsap.set(overviewDropdown, {overflow: 'hidden'});
  }
});

/* #Form
================================================== */
const inputs = document.querySelectorAll('form input[type="text"]');
const selects = document.querySelectorAll('form select');

inputs.forEach((input) => {
  input.addEventListener('input', (e) => {
    if (input.value) {
      input.closest('.field').classList.add('touched');
    } else {
      input.closest('.field').classList.remove('touched');
    }
  });
});

selects.forEach((select) => {
  select.addEventListener('change', (e) => {
    select.closest('.field').classList.add('touched');

    if (select.value == '') {
      select.closest('.field').classList.remove('touched');
    } else {
      select.closest('.field').classList.add('touched');
    }
  });
});
const open_btn = document.querySelector('.open');
const close_btn = document.querySelector('.close');
const mobile_nav = document.querySelector('.mobile-nav');

open_btn.addEventListener('click', () => {
  open_btn.style.display = 'none';
  close_btn.style.display = 'inline';
  mobile_nav.style.display = 'block';
});

close_btn.addEventListener('click', () => {
  open_btn.style.display = 'inline';
  close_btn.style.display = 'none';
  mobile_nav.style.display = 'none';
});

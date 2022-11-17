const btnHamurger = document.querySelector('#hamburger');
const header = document.querySelector('.header')

btnHamurger.addEventListener('click', () => {
  console.log('Open Menu');

  if(header.classList.contains('open')){
    header.classList.remove('open');
  }
  else {
    header.classList.add('open');
  }
});
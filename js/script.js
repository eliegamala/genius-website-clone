const menuIcon = document.querySelector('.menu-icon');
const bottomheader = document.querySelector('.bottom__header');
menuIcon.addEventListener('click', ()=>{
  bottomheader.classList.toggle('active');
})


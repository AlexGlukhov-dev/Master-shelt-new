const menuBtn = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const square = document.querySelector('.square');
const menuOverlay =  document.querySelector('.menu-overlay');

menuBtn.addEventListener('click', () => {
  menuOverlay.classList.toggle('visible');
  navLinks.classList.toggle('open');
  navLinks.classList.contains('open') ?
    square.style.background = '#aaadbe' :
    square.style.background = '#0025fe';
  links.forEach(link => {
    link.classList.toggle('fade');
  });
});

links.forEach(link => link.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    square.style.background = '#0025fe';
    menuOverlay.classList.toggle('visible');
    links.forEach(link => {
      link.classList.toggle('fade');
    });
})
)

menuOverlay.addEventListener('click', (e) => {
 menuOverlay.classList.toggle('visible');
 navLinks.classList.toggle('open');
 square.style.background = '#0025fe';
  links.forEach(link => {
    link.classList.toggle('fade');
  });
})

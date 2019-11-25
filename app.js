const hamburger = document.querySelector ('.hamburger');
const navLinks = document.querySelector ('.nav-links');
const links = document.querySelectorAll ('.nav-links li');
const container = document.querySelector ('.header-container');

hamburger.addEventListener ('click', () => {
  navLinks.classList.toggle ('open');
  if (container.style.display === 'none') {
    container.style.display = 'block';
  } else {
    container.style.display = 'none';
  }
});

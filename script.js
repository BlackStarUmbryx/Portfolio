const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const bars = document.getElementById('bars');
const xmark = document.getElementById('xmark');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  
  if (navMenu.classList.contains('active')) {
    bars.style.display = "none";
    xmark.style.display = "block";
  }
  else {
    xmark.style.display = "none";
    bars.style.display = "block";
  }
});
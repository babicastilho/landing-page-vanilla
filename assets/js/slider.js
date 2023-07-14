//slider
const slides = document.querySelectorAll('.slider .slide');
const buttons = document.querySelectorAll('.slider .slide-button');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });

  buttons.forEach((button, i) => {
    button.classList.toggle('active', i === index);
  });
}

function goToSlide(index) {
  currentSlide = index;
  showSlide(currentSlide);
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    goToSlide(index);
  });
});

// Mostrar o primeiro slide inicialmente
showSlide(currentSlide);

// Trocar de slide automaticamente a cada 10 segundos
setInterval(nextSlide, 10000);
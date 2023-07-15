const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const prevArrow = document.querySelector('.arrow.prev');
const nextArrow = document.querySelector('.arrow.next');

let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });

  indicators.forEach((indicator, i) => {
    indicator.classList.toggle('active', i === index);
  });
}

function goToNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function goToPrevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

function autoChangeSlide() {
  goToNextSlide();
}

let interval = setInterval(autoChangeSlide, 7000);

prevArrow.addEventListener('click', () => {
  clearInterval(interval);
  goToPrevSlide();
  interval = setInterval(autoChangeSlide, 7000);
});

nextArrow.addEventListener('click', () => {
  clearInterval(interval);
  goToNextSlide();
  interval = setInterval(autoChangeSlide, 7000);
});

indicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    clearInterval(interval);
    currentIndex = i;
    showSlide(currentIndex);
    interval = setInterval(autoChangeSlide, 7000);
  });
});

showSlide(currentIndex);

// Função para rolar suavemente até a âncora
function scrollToAnchor(anchor) {
  const target = document.querySelector(anchor);
  if (target) {
    const offsetTop = target.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
}

// Função para adicionar o comportamento de rolagem suave aos links de âncora
function addSmoothScrollBehavior() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const anchor = link.getAttribute('href');
      scrollToAnchor(anchor);
    });
  });
}

// Chama a função para adicionar o comportamento de rolagem suave aos links de âncora
addSmoothScrollBehavior();


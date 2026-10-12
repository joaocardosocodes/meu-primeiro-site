// Efeito de texto digitando
const typedText = document.getElementById("typed-text");
const phrases = ["desenvolvedor em formação", "aprendiz de JavaScript", "criador de ideias"];
let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const phrase = phrases[phraseIndex];

  if (typedText) {
    typedText.textContent = phrase.substring(0, charIndex);
  }

  let delay = deleting ? 45 : 85;

  if (!deleting && charIndex < phrase.length) {
    charIndex++;
  } else if (deleting && charIndex > 0) {
    charIndex--;
  } else if (!deleting) {
    deleting = true;
    delay = 1200;
  } else {
    deleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    delay = 350;
  }

  window.setTimeout(typeEffect, delay);
}

typeEffect();

// Alternar entre tema escuro e claro
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

function updateThemeButton() {
  const isLight = document.body.classList.contains("light-theme");
  if (themeIcon) themeIcon.textContent = isLight ? "🌙" : "☀️";
  if (themeToggle) {
    themeToggle.setAttribute(
      "aria-label",
      isLight ? "Ativar tema escuro" : "Ativar tema claro"
    );
  }
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    updateThemeButton();
  });
}
updateThemeButton();

// Mostrar elementos suavemente quando entram na tela
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("visible"));
}

// Atualizar automaticamente o ano no rodapé
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// === Scroll Reveal de secciones ===
const sections = document.querySelectorAll("section");

function revealSections() {
  const trigger = window.innerHeight * 0.85;

  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top;
    if (top < trigger) {
      section.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

// === Typing animation ===
const typingElement = document.querySelector(".typing");
const words = ["Desarrollador Web", "Creativo Digital", "Apasionado por la Tecnología"];
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function type() {
  const word = words[wordIndex];
  typingElement.textContent = word.substring(0, letterIndex);

  if (isDeleting) {
    letterIndex--;
    if (letterIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  } else {
    letterIndex++;
    if (letterIndex === word.length + 1) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  }

  setTimeout(type, isDeleting ? 50 : 150);
}

window.addEventListener("load", type);

// === Particles.js config ===
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ff4b2b" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ff4b2b",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      out_mode: "out",
    },
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
    },
    modes: {
      repulse: { distance: 100 },
      push: { particles_nb: 4 },
    },
  },
  retina_detect: true,
});

// === VanillaTilt para tarjetas ===
VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.2,
});

// === Botón Scroll To Top ===
const scrollBtn = document.getElementById("scroll-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// === Dark Mode Toggle ===
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

function setTheme(mode) {
  body.classList.toggle("light", mode === "light");
  localStorage.setItem("theme", mode);
}

toggleBtn.addEventListener("click", () => {
  const current = body.classList.contains("light") ? "dark" : "light";
  setTheme(current);
  toggleBtn.innerHTML =
    current === "dark"
      ? '<i class="fas fa-moon"></i>'
      : '<i class="fas fa-sun"></i>';
});

// Cargar tema guardado
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    setTheme(savedTheme);
    toggleBtn.innerHTML =
      savedTheme === "dark"
        ? '<i class="fas fa-moon"></i>'
        : '<i class="fas fa-sun"></i>';
  }
});

// === FORMULARIO FUNCIONAL EMAILJS ===
const form = document.getElementById("contact-form");
const statusMsg = document.getElementById("form-status");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  statusMsg.textContent = "Enviando...";

  emailjs
    .sendForm("service_plsqz2y", "template_27fh3hb", this, "8kbPAmLZNB-yESGhj")
    .then(
      () => {
        statusMsg.textContent = "Mensaje enviado correctamente ✅";
        form.reset();
      },
      (err) => {
        statusMsg.textContent = "Error al enviar. Intenta más tarde.";
        console.error(err);
      }
    );
});


// === CONTADORES ANIMADOS (sin bloqueo por counted) ===
const counters = document.querySelectorAll(".counter");

function isVisible(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top < window.innerHeight &&
    rect.bottom >= 0
  );
}

function animateCounters() {
  counters.forEach((counter) => {
    if (
      isVisible(counter) &&
      !counter.classList.contains("counted")
    ) {
      const target = +counter.getAttribute("data-target");
      const speed = 20;

      const updateCount = () => {
        const count = +counter.innerText;
        if (count < target) {
          counter.innerText = Math.ceil(count + (target - count) / speed);
          setTimeout(updateCount, 30);
        } else {
          counter.innerText = target;
        }
      };

      counter.classList.add("counted");
      updateCount();
    }
  });
}

window.addEventListener("scroll", animateCounters);
window.addEventListener("load", () => setTimeout(animateCounters, 500));
document.addEventListener("DOMContentLoaded", () => setTimeout(animateCounters, 500));



// === ALERTA DE AGRADECIMIENTO AL FINAL ===
let thankYouShown = false;
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
    !thankYouShown
  ) {
    alert("¡Gracias por visitar mi portfolio! 🚀");
    thankYouShown = true;
  }
});

// === MODO PRESENTACIÓN ===
document.getElementById("presentation-mode").addEventListener("click", () => {
  const sections = document.querySelectorAll("main section");
  let delay = 500;

  window.scrollTo({ top: 0, behavior: "smooth" });

  sections.forEach((section, i) => {
    setTimeout(() => {
      section.scrollIntoView({ behavior: "smooth" });
    }, delay * (i + 1));
  });

  setTimeout(() => {
    alert("¡Gracias por ver la presentación! 🙌");
  }, delay * (sections.length + 2));
});

// === Intro animada: quitar después de unos segundos ===
window.addEventListener("load", () => {
    setTimeout(() => {
      const intro = document.getElementById("intro-overlay");
      if (intro) intro.style.display = "none";
    }, 3500);
  });
  
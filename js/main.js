// Fecha y hora del webinar (Año, Mes (0-11), Día, Hora, Minuto, Segundo)
const webinarDate = new Date(2024, 2, 1, 10, 0, 0); // 1 de Marzo de 2024 a las 10:00 AM

// Función para actualizar el contador
function updateCountdown() {
  const now = new Date().getTime();
  const distance = webinarDate - now;

  // Cálculos para días, horas, minutos y segundos
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Mostrar el contador en la página
  document.getElementById("countdown").innerHTML = `
           <div>${days} <br> días</div>
           <div>${hours} <br> horas</div>
           <div>${minutes} <br> minutos</div>
           <div>${seconds} <br> segundos</div>
       `;

  // Si la cuenta regresiva ha terminado, mostrar un mensaje
  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "¡El webinar ha comenzado!";
  }
}

// Actualizar el contador cada segundo
const timer = setInterval(updateCountdown, 1000);

// Actualizar el contador de inmediato para evitar el retraso inicial
updateCountdown();




const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container img", {
  duration: 1000,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content h3", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__content .about__grid", {
  ...scrollRevealOption,
  delay: 2000,
});

// contact container
ScrollReveal().reveal(".contact__image img", {
  ...scrollRevealOption,
  origin: "left",
});

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
});




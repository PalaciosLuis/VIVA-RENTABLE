// // Fecha y hora del webinar (Año, Mes (0-11), Día, Hora, Minuto, Segundo)
// const webinarDate = new Date(2024, 2, 16, 19, 0, 0); // 1 de Marzo de 2024 a las 10:00 AM

// // Función para actualizar el contador
// function updateCountdown() {
//   const now = new Date().getTime();
//   const distance = webinarDate - now;

//   // Cálculos para días, horas, minutos y segundos
//   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Mostrar el contador en la página
//   document.getElementById("countdown").innerHTML = `
//            <div>${days} </div>
//            <div>${hours} </div>
//            <div>${minutes} </div>
//            <div>${seconds} </div>
//        `;

//   // Si la cuenta regresiva ha terminado, mostrar un mensaje
//   if (distance < 0) {
//     clearInterval(timer);
//     document.getElementById("countdown").innerHTML = "¡El webinar ha comenzado!";
//   }
// }

// // Actualizar el contador cada segundo
// const timer = setInterval(updateCountdown, 1000);

// // Actualizar el contador de inmediato para evitar el retraso inicial
// updateCountdown();



start()

const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    item.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});








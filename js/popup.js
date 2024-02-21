
//========= ANIMACIONES ===============

// function animation(id,anima){
//   window.addEventListener('scroll', function() {
//     var elemento = document.getElementById(id);
//     var posicion = elemento.getBoundingClientRect().top;
//     var alturaDeLaPantalla = window.innerHeight;
  
//     // Si el elemento está más abajo de la mitad de la pantalla
//     if (posicion < alturaDeLaPantalla / 1.4) {
//         elemento.classList.add(anima);
//     } else {
//         elemento.classList.remove(anima);
//     }
//   });

// }
// animation('elemento','wobble-vertical-right')
// animation('elemento1','wobble-vertical-right')
// animation('letras','blur-in')



// animation('elemento2','scale-up-horizontal-left')
// animation('elemento3','scale-up-horizontal-right')
// animation('elemento4','shake-left-right')
// animation('elemento6','scale-up-horizontal-left')






//================POPUP=============================
  
  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById('popup').style.display = 'block';
    }, 60000); // Muestra el popup después de 10 segundos (10000 milisegundos)
  });
  
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }
  //=======================================================
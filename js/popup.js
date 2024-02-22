
function imagen3d(id) {
const el = document.getElementById(id);
const heigth = el.clientHeight;
const width = el.clientWidth;

el.addEventListener('mousemove', (evt) => {
  const { layerX, layerY } = evt;

  const yRotation = (
    (layerX - width / 2) / width
  ) * 20

  const xRotation = (
    (layerY - heigth / 2) / heigth
  ) * 20

  const string = `perspective(1000px) rotateX(${-xRotation}deg) rotateY(${yRotation}deg)`;
  el.style.transform = string;
});

el.addEventListener('mouseleave', () => {
  el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';
});

}

imagen3d('poster');
imagen3d('poster1');


//================POPUP=============================

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById('popup').style.display = 'block';
  }, 60000); // Muestra el popup después de 10 segundos (10000 milisegundos)

  // Agregar event listener para el botón de cerrar el popup
  var closeButton = document.getElementById('closeButton');
  closeButton.addEventListener('click', closePopup);

});

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}



//=======================================================


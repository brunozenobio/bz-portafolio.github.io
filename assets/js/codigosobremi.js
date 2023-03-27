const btnImagen = document.querySelector('.btnImagen');
const imagenPopup = document.querySelector('.imagenPopup');
const imagen = document.querySelector(".imagen");

const rutasImagenes = ['./assets/images/JavaScrip.png', './assets/images/c++.png', './assets/images/pythonforDS.png','./assets/images/pythonDatEst.png','./assets/images/pyhtonforBeg.png','./assets/images/Php.png'];

const imagenNavegacion = document.querySelector('.imagenNavegacion');
let imagenActual = 0; // Índice de la imagen actual

// Crear un botón por cada imagen en el array
const btnAnterior = document.createElement('button');
const btnSiguiente = document.createElement('button');




btnAnterior.className='btnSiguiente'
btnSiguiente.className='btnAnterior';



  imagenNavegacion.appendChild(btnSiguiente);
  imagenNavegacion.appendChild(btnAnterior);
btnAnterior.addEventListener('click', function() {
  imagenActual = (imagenActual - 1 + rutasImagenes.length) % rutasImagenes.length; // Calcular el índice de la imagen anterior
  mostrarImagen(imagenActual);
});

btnSiguiente.addEventListener('click', function() {
  imagenActual = (imagenActual + 1) % rutasImagenes.length; // Calcular el índice de la siguiente imagen
  mostrarImagen(imagenActual);
});
  


btnImagen.addEventListener('click', function() {
  imagenPopup.style.display = 'block';
  mostrarImagen(imagenActual);
});

imagenNavegacion.addEventListener('click', function(evento) {
  if (evento.target.matches('.btnNavegacion')) {
    imagenActual = parseInt(evento.target.dataset.indice);
    mostrarImagen(imagenActual);
  }
});

function mostrarImagen(indice) {
  imagen.src = rutasImagenes[indice];
  actualizarBotonesNavegacion();
}




const cerrarBtn = document.querySelector('.cerrarBtn');

cerrarBtn.addEventListener('click', function() {
  imagenPopup.style.display = 'none';
});




const btnImagen2 = document.querySelector('.btnImagen2');
const imagenPopup2 = document.querySelector('.imagenPopup2');
const imagen2 = document.querySelector(".imagen2");
btnImagen2.addEventListener('click', function() {
  imagenPopup2.style.display = 'block';
  

});



const cerrarBtn2 = document.querySelector('.cerrarBtn2');

cerrarBtn2.addEventListener('click', function() {
  imagenPopup2.style.display = 'none';
  
});

const btnImagen3 = document.querySelector('.btnImagen3');
const imagenPopup3 = document.querySelector('.imagenPopup3');
const imagen3 = document.querySelector(".imagen3");
btnImagen3.addEventListener('click', function() {
  imagenPopup3.style.display = 'block';
  

});



const cerrarBtn3 = document.querySelector('.cerrarBtn3');

cerrarBtn3.addEventListener('click', function() {
  imagenPopup3.style.display = 'none';
  
});

const btnImagen4 = document.querySelector('.btnImagen4');
const imagenPopup4 = document.querySelector('.imagenPopup4');
const imagen4 = document.querySelector(".imagen4");
btnImagen4.addEventListener('click', function() {
  imagenPopup4.style.display = 'block';
  

});



const cerrarBtn4 = document.querySelector('.cerrarBtn4');

cerrarBtn4.addEventListener('click', function() {
  imagenPopup4.style.display = 'none';
  
});

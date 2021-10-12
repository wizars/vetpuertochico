//# sourceURL=VetScripts.js


/*******************************/
/*         CARRUSEL            */
/*******************************/


// script para los botones de atras y adelante 
var tiempo = 3000;
var slideIndex = 1;
showDivs(slideIndex);
carousel();

document.querySelector("span.boton_slide.atras").addEventListener('click', () => { showDivs(slideIndex - 1) });
document.querySelector("span.boton_slide.alante").addEventListener('click', () => { showDivs(slideIndex + 1); });

// muestra la imagen adecuada y oculta las otras
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("fotos_slide");
  slideIndex = n;
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    document.getElementById('b' + (i + 1).toString()).checked = false;
    document.getElementById('frase' + (i + 1).toString()).style.display = "none";


  }
  x[slideIndex - 1].style.display = "block";
  document.getElementById('b' + slideIndex.toString()).checked = true;
  document.getElementById('frase' + slideIndex.toString()).style.display = "block";


}
// Avanza el carrusel con el tiempo
function carousel() {
  var i;
  var x = document.getElementsByClassName("fotos_slide");
  var b = document.getElementsByClassName("bolita");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    document.getElementById('b' + (i + 1).toString()).checked = false;
    document.getElementById('frase' + (i + 1).toString()).style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  document.getElementById('b' + slideIndex.toString()).checked = true;
  document.getElementById('frase' + slideIndex.toString()).style.display = "block";

  setTimeout(carousel, tiempo); // Change image every 2 seconds
}




/*******************************/
/*           MENU              */
/*******************************/

//Añadimos el evento click al span que forma el boton del menu
document.querySelector("span.boton_menu").addEventListener('click', ToggleMenu);

/* muestra el icono de menu o el de cerrar */
function ToggleMenu() {

  // cambiamos el simbolo del boton
  document.querySelector("span.boton_menu").classList.toggle('btn_cerrar')

  if (window.matchMedia('only screen and  (max-width: 768px)').matches) {

    //MODO MOVIL
    //Menu pequeño desplegable, mostramos u ocultamos cambiando max-height

    //Nos aseguramos de limpiar lode cambios del modo Tablet
    document.getElementById("menu").style.maxWidth = "100%";

    if (document.getElementById("menu").style.maxHeight == "100%") {
      document.querySelector(".menu").style.maxHeight = "0";
      document.querySelector("span.boton_menu").innerHTML = 'menu';

    } else {
      document.querySelector("span.boton_menu").innerHTML = 'close';
      document.getElementById("menu").style.maxHeight = "100%";
    }

  }
  else if (window.matchMedia('only screen and (min-width: 768px) and (max-width: 1024px)').matches) {

    //MODO TABLET    
    //Menu lateral desplegabe,  mostramos u ocultamos cambiando max-width

    //Nos aseguramos de limpiar los cambios del modo movil
    document.getElementById("menu").style.maxHeight = "100%";

    if (document.getElementById("menu").style.maxWidth == "100%") {
      document.getElementById("menu").style.maxWidth = "0";
      document.querySelector("span.boton_menu").innerHTML = 'menu';

    } else {
      document.getElementById("menu").style.maxWidth = "100%";
      document.querySelector("span.boton_menu").innerHTML = 'close';

    }


  }
}



/*******************************/
/*         ACORDEON            */
/*******************************/

// Menu acordeon desplegable   

const accordion = document.getElementsByClassName('bloque_servicio');

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('abierto')

  })
}


/*******************************/
/*         VISOR            */
/*******************************/

//añadimos los eventos de click a las imagenes
const galeria = document.querySelectorAll('.galeria img');
const visor = document.querySelector('#visor');
var indice_visor = 1;

// evento para cerrar el visor al hace click en la foto o su marco
document.querySelector('.contenedor_foto').addEventListener('click', function () {
   visor.style.display = 'none' ;
   document.querySelector('body').style.overflow='initial';

  })

// eventos para los botones de pasar foto
document.querySelector('#visor_alante').addEventListener('click', () => { Visor(1) })
document.querySelector('#visor_atras').addEventListener('click', () => { Visor(-1) })

// evento para mostrar la foto adecuada al hacer click
for (i = 0; i < galeria.length; i++) {
  galeria[i].addEventListener('click', function () {
    document.querySelector('#foto_completa').src = this.dataset.src
    visor.style.display = 'flex'
    document.querySelector('#titulo_foto').innerHTML = this.alt;
    document.querySelector('body').style.overflow='hidden';
  })
}

// funcion que para pasar las fotos
function Visor(n) {
  indice_visor = indice_visor + n;
  if (indice_visor > galeria.length) { indice_visor = 1; }
  if (indice_visor < 1) { indice_visor = galeria.length; }
  var foto_activa = galeria[indice_visor - 1];
  document.querySelector('#foto_completa').src = foto_activa.dataset.src;
  document.querySelector('#titulo_foto').innerHTML = foto_activa.alt;
}


/* 
-bocadillo para el icono de whatsapp
  - replantear donde poner lo del whatsapp, quiza sacarlo del menu normla en modo movil tmb y q siempre sea flotante en la esquina de abajo con un bocadillo q se abre al principio o cuando hace hover sobre el icono de whatsapp
-animaciones bien hechas cuando se abre el menu o alguna otra pollada
- tema de las comillas de la frase en la clinica, en mi movil estaba mal dimensionado y quedan un poco cortadas por arriba las comillas, posicionar relativamente?

-lazy loadin y optimizacion de las imagenes de carrusel
-iconos de servicios
- responsive en modo movil de los servicio y quiza algo distinto en modo tablet

*/
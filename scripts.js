//# sourceURL=VetScripts.js



/*******************************/
/*     BURBUJA WHATSAPP        */
/*******************************/
var boton = document.getElementById("boton_whatsapp");
var burbuja = document.getElementById("burbuja_whatsapp");

boton.addEventListener('mouseover', AbreBurbuja);
boton.addEventListener('mouseout', CierraBurbuja);
document.addEventListener('DOMContentLoaded', AbreBurbuja)
document.addEventListener('click', CierraBurbuja)

function AbreBurbuja(){
  burbuja.style.animationName = "expand-bounce";
  burbuja.style.animationDuration = "0.25s"
}

function CierraBurbuja(){

  burbuja.style.animationName = "shrink";
  burbuja.style.animationDuration = "0.1s";
}




/*******************************/
/*           MENU              */
/*******************************/

var btn_menu = document.querySelector("span.boton_menu");
var menu = document.getElementById("menu");

//Añadimos el evento click al span que forma el boton del menu
btn_menu.addEventListener('click', ToggleMenu);

/* muestra el icono de menu o el de cerrar */
function ToggleMenu() {


  if (window.matchMedia('only screen and  (max-width: 1024px)').matches) {

    //MODO MOVIL
    //Menu pequeño desplegable, mostramos u ocultamos cambiando max-height  
    if (menu.style.maxHeight == "100%") {
      menu.style.maxHeight = "0px";
      btn_menu.innerHTML = 'menu';
    } else {
      menu.style.maxHeight = "100%";
      btn_menu.innerHTML = 'close'

    }
  }
}




/*******************************/
/*           VISOR             */
/*******************************/

//añadimos los eventos de click a las imagenes
const galeria = document.querySelectorAll('.galeria img');
const visor = document.querySelector('#visor');
var indice_visor = 1;

// evento para cerrar el visor al hace click en la foto o su marco
document.querySelector('.contenedor_foto').addEventListener('click', function () {
  visor.style.display = 'none';
  document.querySelector('body').style.overflow = 'initial';

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
    document.querySelector('body').style.overflow = 'hidden';
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




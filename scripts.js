//# sourceURL=VetScripts.js


/*******************************/
/*         CARRUSEL            */
/*******************************/


// script para los botones de atras y adelante 
var tiempo = 3000;
var slideIndex = 1;
showDivs(slideIndex);
carousel();

document.querySelector("span.boton_slide.atras").addEventListener('click', () => { showDivs(slideIndex + 1) }, false);
document.querySelector("span.boton_slide.alante").addEventListener('click', function () { showDivs(slideIndex + 1); });

function sld_atras() { PlusDivs(-1); }
function sld_alante() { PlusDivs(1); }

// Avanza a la siguiente imagen
function plusDivs(n) {
  showDivs(slideIndex + n);
}

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
const foto_completa = document.querySelector('#foto_completa');
visor.addEventListener('click',function(){this.style.display='none'})

for (i = 0; i < galeria.length; i++) {
  galeria[i].addEventListener('click', function () {
    foto_completa.src = this.dataset.src
    visor.style.display = 'block'
  }
  )

}


/*
function AbreVisor(img){
img.src=img.dataset.src
}
*/

/*
$(".galeria img").click(function(){
  $("#full-image").attr("src", $(this).attr("src"));
  $('#visor').show();
});

$("#visor .close").click(function(){
  $('#visor').hide();
});
*/

/*******************************/
/*         LAZY            */
/*******************************/

document.addEventListener("DOMContentLoaded", function () {
  var lazyloadImages = document.querySelectorAll("img.lazy");
  var lazyloadThrottleTimeout;

  function lazyload() {
    if (lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }

    lazyloadThrottleTimeout = setTimeout(function () {
      var scrollTop = window.pageYOffset;
      lazyloadImages.forEach(function (img) {
        if (img.offsetTop < (window.innerHeight + scrollTop)) {
          img.src = img.dataset.src;
          img.classList.remove('lazy');
        }
      });
      if (lazyloadImages.length == 0) {
        document.removeEventListener("scroll", lazyload);
        window.removeEventListener("resize", lazyload);
        window.removeEventListener("orientationChange", lazyload);
      }
    }, 20);
  }

  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});
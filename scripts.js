//# sourceURL=VetScripts.js

// script para los botones de atras y adelante 
var tiempo = 300000;
var slideIndex = 1;
/*showDivs(slideIndex);
carousel();

function plusDivs(n) {
  showDivs(slideIndex + n);
}

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
    document.getElementById('frase'+(i+1).toString()).style.display="none";


  }
  x[slideIndex - 1].style.display = "block";
  document.getElementById('b' + slideIndex.toString()).checked = true;
  document.getElementById('frase'+slideIndex.toString()).style.display="block";


}

function carousel() {
  var i;
  var x = document.getElementsByClassName("fotos_slide");
  var b = document.getElementsByClassName("bolita");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    document.getElementById('b' + (i + 1).toString()).checked = false;
    document.getElementById('frase'+(i+1).toString()).style.display="none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  document.getElementById('b' + slideIndex.toString()).checked = true;
  document.getElementById('frase'+slideIndex.toString()).style.display="block";

  setTimeout(carousel, tiempo); // Change image every 2 seconds
}


*/


// Scripts de java para desplegar el menu 


function Abrir() {

  if (window.matchMedia('only screen and  (max-width: 768px)').matches) {

    // MODO MOVIL
    // Menu pequeño desplegable, mostramos u ocultamos cambiando max-height

    if (document.getElementById("menu").style.maxHeight == "100%") {
      document.querySelector(".menu").style.maxHeight = "0";
      document.querySelector(".btn_menu").style.display="block";
      document.querySelector(".btn_cerrar").style.display="none";
      
    } else {
      document.getElementById("menu").style.maxHeight = "100%";
      document.querySelector(".btn_menu").style.display="none";
      document.querySelector(".btn_cerrar").style.display="block";
    }

    // Nos aseguramos de limpiar lode cambios del modo Tablet
    document.getElementById("menu").style.maxWidth = "100%";

  }
  else if (window.matchMedia('only screen and (min-width: 768px) and (max-width: 1024px)').matches) {

    // MODO TABLET    
    // Menu lateral desplegabe,  mostramos u ocultamos cambiando max-width

    if (document.getElementById("menu").style.maxWidth == "100%") {
      document.getElementById("menu").style.maxWidth = "0";
    } else {
      document.getElementById("menu").style.maxWidth = "100%";
    }
    
    // Nos aseguramos de limpiar los cambios del modo movil
    document.getElementById("menu").style.maxHeight = "100%";

  }
}

function Cerrar() {
  document.getElementById("menu").style.display = "none";
}

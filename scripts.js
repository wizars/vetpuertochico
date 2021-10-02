//# sourceURL=VetScripts.js

// script para los botones de atras y adelante 

var slideIndex = 1;
showDivs(slideIndex);
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

  }
  x[slideIndex - 1].style.display = "block";
  document.getElementById('b' + slideIndex.toString()).checked = true;

}

function carousel() {
  var i;
  var x = document.getElementsByClassName("fotos_slide");
  var b = document.getElementsByClassName("bolita");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    document.getElementById('b' + (i + 1).toString()).checked = false
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  document.getElementById('b' + slideIndex.toString()).checked = true;
  setTimeout(carousel, 3000); // Change image every 2 seconds
}





// Scripts de java para desplegar el menu 


function Abrir() {
  if (document.getElementById("menu").style.display == "none") {
    document.getElementById("menu").style.display = "flex";
  } else {
    document.getElementById("menu").style.display = "none";
  }
}

function Cerrar() {
  document.getElementById("menu").style.display = "none";
}

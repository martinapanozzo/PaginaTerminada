document.querySelector(".bars__menu"). addEventListener("click", animatebars);

var linea1__bars=document.querySelector(".linea1__bars-menu");
var linea2__bars=document.querySelector(".linea2__bars-menu");
var linea3__bars=document.querySelector(".linea3__bars-menu");

function animatebars (){
    linea1__bars.classList.toggle(".activelinea__bars-menu");
    linea2__bars.classList.toggle(".activelinea__bars-menu");
    linea3__bars.classList.toggle(".activelinea__bars-menu");
}
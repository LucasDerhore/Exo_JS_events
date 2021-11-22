// ## Fonctionalité 1 ##

let footerCounter = 0;
document
  .getElementsByTagName("footer")[0]
  .addEventListener("click", function () {
    footerCounter++;
    console.log(`Click number ${footerCounter}`);
  });

// ## Fonctionalité 2 ##

let menu = document.getElementById("navbarHeader");
let button = document.querySelector(".navbar-toggler-icon");

button.addEventListener("click", () => {
  menu.classList.toggle("collapse");
});

// ## Fonctionalité 3 ##

let card = document.getElementsByClassName("card-body")[0];
let button1 = document.querySelector(".btn-outline-secondary");

button1.addEventListener("click", () => {
  card.style.color = "red";
});

// ## Fonctionalité 4 ##

let secondcard = document.getElementsByClassName("card-body")[1];
let button2 = document.getElementsByClassName("btn-outline-secondary")[1];

button2.addEventListener("click", () => {
  secondcard.style.color == "green"
    ? (secondcard.style.color = "black")
    : (secondcard.style.color = "green");
});

// ## Fonctionalité 5 ##

let navbar = document.getElementsByClassName("navbar")[0];

navbar.addEventListener("dblclick", () => {
  document.styleSheets[0].disabled == true
    ? (document.styleSheets[0].disabled = false)
    : (document.styleSheets[0].disabled = true);
});

// ## Fonctionalité 6 ##
let cards = document.getElementsByClassName("card");
let button_view = document.getElementsByClassName("btn-success");

for (let i = 0; i < cards.length; i++) {
  button_view[i].addEventListener("mouseover", () => {
    cards[i].getElementsByClassName("card-text")[0].style.display == "none"
      ? (cards[i].getElementsByClassName("card-text")[0].style.display =
          "block")
      : (cards[i].getElementsByClassName("card-text")[0].style.display =
          "none");

    cards[i].getElementsByClassName("card-img-top")[0].style.width == "20%"
      ? (cards[i].getElementsByClassName("card-img-top")[0].style.width =
          "100%")
      : (cards[i].getElementsByClassName("card-img-top")[0].style.width =
          "20%");
  });
}

// ## Fonctionalité 7 ##

let jumbotron = document.getElementsByClassName("jumbotron")[0];
let grey = document.getElementsByTagName("a")[5];

grey.addEventListener("click", () => {
  let pos = document.getElementsByClassName("col-md-4")[5];
  console.log(pos);
  let first = document.getElementsByClassName("col-md-4")[0];
  console.log(first);

  document.getElementsByClassName("row")[1].insertBefore(pos, first);
});

// ## Fonctionalité 8 ##

let defaut = document.getElementsByTagName("a")[4];

defaut.addEventListener(
  "click",
  (event) => {
    console.log("Le lien marche plus !");
    event.preventDefault();
  },
  false
);

defaut.addEventListener("click", () => {
  let sec = document.getElementsByClassName("col-md-4")[0];
  console.log(sec);
  let last = document.getElementsByClassName("col-md-4")[6];
  console.log(last);

  document.getElementsByClassName("row")[1].insertBefore(sec, last);
});

// ## Fonctionalité 9 ##

let logo = document.getElementsByTagName("strong")[0];
let logotrue = false;

logo.addEventListener("click", () => {
  logotrue = true;
  console.log("Click click");
});

window.addEventListener("keydown", (event) => {
  console.log(event.keyCode);
  if (event.keycode == 65) {
    let column = document.getElementsByClassName("col-md-4");
    console.log(column);
  }

  /*elsif (event.keycode == 89) {

  }

  elsif (event.keycode == 80) {

  }

  elsif (event.keycode == 66) {

  }*/
});

/*
String.fromCharCode(65) returns "a"
String.fromCharCode(89) returns "y"
String.fromCharCode(80) returns "p"
String.fromCharCode(66) returns "b"
*/

/*
Indice 1 : L'event à utiliser est "keypress", appliqué au texte "JS & Events" (ou, mieux, à une div le contenant).

Indice 2 : Pour modifier le rendu visuel de toute la page, il faut que tu joues avec les classes de <body>.

Indice 3 : Pour mettre tout sur 4 colonnes, rajoute la classe col-4. Pour les placer au milieu ou à droite, rajoute la classe offset-md-4 ou offset-md-8.

Indice 4 : Pour éviter que les classes s'accumulent, et pour que chaque touche ait un comportement propre, retire toutes les classes du <body> à chaque fois qu'un "keypress" est détecté. Ensuite seulement tu rajoutes les classes nécessaires.
*/

/*
a = 65
y = 89
p = 80
b = 66
*/

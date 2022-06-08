function myFunction() {
    var x = document.getElementById("navbar");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
      x.style.height = "100vh";
    }
  } /*Ovenstående er fundet på w3schools*/

const burgerMenu = document.querySelector('.burger-menu');
const burgerShow = document.querySelector('nav');

burgerMenu.addEventListener("click", () => {
    burgerShow.classList.toggle("show-burger");
});

document.getElementById("bottom-left").addEventListener("mouseover", mouseOver);
document.getElementById("bottom-left").addEventListener("mouseout", mouseOut);

function mouseOver() {
document.getElementById("bottom-left").style.color = "white";
}

function mouseOut() {
  document.getElequerysementById("bottom-left").style.color = "black";
}

document.getElementById("bottom-right").addEventListener("mouseover", mouseOver);
document.getElementById("bottom-right").addEventListener("mouseout", mouseOut);

function mouseOver() {
document.getElementById("bottom-right").style.color = "white";
}

function mouseOut() {
  document.getElementById("bottom-right").style.color = "black";
}
 /*Ovenstående er fundet på w3schools*/ 
 /* Det er med til at give en hover effekt når musen køres over, virker kun på webversionen */
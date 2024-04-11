// script to make navbar sticky on scroll:
window.onscroll = function() {
  make_sticky()
};

var navbar = document.querySelector("nav");
var sticky = navbar.offsetTop;
const elementToMove = document.querySelector('h1');
const newParentElement = document.querySelector('header');

function make_sticky() {
  if (window.scrollY >= sticky + 5) {
    navbar.classList.add("sticky");
    newParentElement.appendChild(elementToMove);
  }
  else {
    navbar.classList.remove("sticky");
    document.querySelector('.logo').appendChild(elementToMove);
  }
}

// image carousel:
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function handleChange(checkbox) {
  if (checkbox.checked == true) {
    document.querySelector("#main").style.display = "none";
    document.querySelector("#logo").style.display = "none";
  }
  else {
    document.querySelector("#main").style.display = "block";
    document.querySelector("#logo").style.display = "block";
  }
}

var input = document.querySelector(".prev");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector(".prev").click();
  }
});

var input = document.querySelector(".next");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector(".next").click();
  }
});

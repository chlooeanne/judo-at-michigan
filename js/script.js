window.addEventListener("load", function() {
  let text = document.lastModified;
  document.getElementById("demo").innerHTML = text;
});

// collapsible menu:
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active2");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

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
    if (screen.width >= 768) {
      newParentElement.appendChild(elementToMove);
    }
    
  }
  else {
    navbar.classList.remove("sticky");
    if (screen.width >= 768) {
      document.querySelector('.logo').appendChild(elementToMove);
    }
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
    document.querySelector("footer").style.display = "none";
    document.querySelector("#current").style.color = "#FFCB05";
  }
  else {
    document.querySelector("#main").style.display = "block";
    document.querySelector("#logo").style.display = "block";
    document.querySelector("footer").style.display = "block";
    document.querySelector("#current").style.color = "white";
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


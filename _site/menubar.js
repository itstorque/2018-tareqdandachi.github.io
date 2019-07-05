// When the user scrolls the page, execute myFunction
window.onscroll = function() {darken_bar()};

// Get the navbar
var navbar = document.getElementById("navbar");

var contact_me = document.getElementById("contact_me_intro");

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function darken_bar() {

  if (window.pageYOffset >= 10) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled");
  }

  if (contact_me.getBoundingClientRect().top < 90){

    if (!(navbar.classList.contains("pop-default"))) {

      navbar.classList.add("pop")

    }

  } else {

    if (!(navbar.classList.contains("pop-default"))) {

      navbar.classList.remove("pop")

    }

  }

}

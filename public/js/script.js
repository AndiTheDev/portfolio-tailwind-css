// Navbar Fixed
window.onscroll = function() {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
}


// Hamburger Menu
const hamburgerBtn = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburgerBtn.addEventListener("click", function() { 
  // const nav = document.querySelector("nav");
  this.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden")
  // nav.classList.toggle("open");  // Toggle the 'open' class to show or hide the navigation menu
  // console.log('click');
});
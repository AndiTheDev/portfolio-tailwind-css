// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector(".to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.add("flex");
    toTop.classList.remove("hidden");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.add("hidden");
    toTop.classList.remove("flex");
  }
};

// Hamburger Menu
const hamburgerBtn = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburgerBtn.addEventListener("click", function () {
  // const nav = document.querySelector("nav");
  this.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
  // nav.classList.toggle("open");  // Toggle the 'open' class to show or hide the navigation menu
  // console.log('click');
});

// Close the menu outside the hamburger button
window.addEventListener("click", function (e) {
  if (e.target !== hamburgerBtn && !navMenu.contains(e.target)) {
    hamburgerBtn.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Darkmode Toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
  // darkToggle.checked
  //   ? html.classList.add("dark")
  //   : html.classList.remove("dark");
  // localStorage.setItem("dark-mode", darkToggle.checked ? "enabled" : "disabled");
});

// Change the toggle state according to the mode

localStorage.theme === "dark" ? (darkToggle.checked = true) : (darkToggle.checked = false);

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  if (navLinks.classList.contains("open")) {
    menuBtnIcon.classList.remove("ri-menu-line");
    menuBtnIcon.classList.add("ri-close-line");
  } else {
    menuBtnIcon.classList.remove("ri-close-line");
    menuBtnIcon.classList.add("ri-menu-line");
  }
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealoption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

scrollReveal().reveal(".header_image img",{
  ...scrollRevealoption,
  origin: "right",
});
scrollReveal().reveal(".header_content p",{
  ...scrollRevealoption,
  delay: 500,
});

const rotateButton = document.querySelector("#rotate");
const backButton = document.querySelector("#back");
const frontPage = document.querySelector("#front-wrapper");
const navButton = document.querySelector("#nav");

const navItems = document.querySelector("#nav-items");

rotateButton.onclick = function () {
  frontPage.style.transform = "rotate(-20deg)";
  navButton.style.transform =
    "rotate(-90deg) translateX(-50%) translateY(-50%) ";
  navItems.style.left = "0px";
};

backButton.onclick = function () {
  frontPage.style.transform = "rotate(0deg) ";
  navButton.style.transform =
    "rotate(0deg) translateX(-50%) translateY(-50%)  ";
  navItems.style.left = "-200px";
};

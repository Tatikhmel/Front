"use strict";

const overlay = document.querySelector(".overlay");

// Burger menu
const hamburgerItem = document.querySelector(".hamburger__line");
const menu = document.querySelector(".header__navigation");
const menuCloseItem = document.querySelector(".header__navigation-close-line");

function hamburgerMenu() {
  hamburgerItem.addEventListener("click", () => {
    menu.classList.add("header__navigation-active");
    overlay.classList.add("show");
  });
  menuCloseItem.addEventListener("click", () => {
    menu.classList.remove("header__navigation-active");
    overlay.classList.remove("show");
  });
  overlay.addEventListener("click", () => {
    menu.classList.remove("header__navigation-active");
    overlay.classList.remove("show");
  });
}

// hamburgerMenu();

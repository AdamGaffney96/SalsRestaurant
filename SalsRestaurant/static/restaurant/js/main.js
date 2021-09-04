console.log("Script loaded successfully.")

const ham = document.querySelector('.hamburger-icon');
const topLine = document.querySelector('.top');
const mid = document.querySelector('.mid');
const bot = document.querySelector('.bot');
const navMenu = document.querySelector('.nav-menu');
const viewMenu = document.querySelector('.view-menu-link');
const body = document.body;
const navItems = document.querySelectorAll('.nav-item');
console.log(navItems)
navItems.forEach((e) => e.firstElementChild.setAttribute("tabindex", "-1"));

ham.addEventListener("click", (e) => {
    if (topLine.style.transform) {
        topLine.style.transform = null;
        mid.style.transform = null;
        bot.style.transform = null;
        navMenu.style.height = null;
        body.style.overflowY = null;
        viewMenu.removeAttribute("tabindex");
        navItems.forEach((e) => e.firstElementChild.setAttribute("tabindex", "-1"));
    } else {
        topLine.style.transform = "rotate(-45deg)";
        bot.style.transform = "rotate(45deg)";
        mid.style.transform = "translateX(200%)";
        navMenu.style.height = "100%";
        body.style.overflowY = "hidden";
        viewMenu.setAttribute("tabindex", "-1");
        navItems.forEach((e) => e.firstElementChild.removeAttribute("tabindex"));
    }
})

ham.addEventListener("keydown", (e) => {
    if (e.keyCode != 13 && e.keyCode != 32) return
    if (topLine.style.transform) {
        topLine.style.transform = null;
        mid.style.transform = null;
        bot.style.transform = null;
        navMenu.style.height = null;
        body.style.overflowY = null;
        viewMenu.removeAttribute("tabindex");
        navItems.forEach((e) => e.firstElementChild.setAttribute("tabindex", "-1"));
    } else {
        topLine.style.transform = "rotate(-45deg)";
        bot.style.transform = "rotate(45deg)";
        mid.style.transform = "translateX(200%)";
        navMenu.style.height = "100%";
        body.style.overflowY = "hidden";
        viewMenu.setAttribute("tabindex", "-1");
        navItems.forEach((e) => e.firstElementChild.removeAttribute("tabindex"));
    }
})
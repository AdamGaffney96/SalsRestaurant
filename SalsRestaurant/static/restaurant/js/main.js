console.log("Script loaded successfully.")

const ham = document.querySelector('.hamburger-icon');
const topLine = document.querySelector('.top');
const mid = document.querySelector('.mid');
const bot = document.querySelector('.bot');
const navMenu = document.querySelector('.nav-menu');
const viewMenu = document.querySelector('.view-menu-link');
const body = document.body;

ham.addEventListener("click", (e) => {
    if (topLine.style.transform) {
        topLine.style.transform = null;
        mid.style.transform = null;
        bot.style.transform = null;
        navMenu.style.display = null;
        navMenu.style.transform = null;
        body.style.overflowY = null;
        viewMenu.removeAttribute("tabindex");

    } else {
        topLine.style.transform = "rotate(-45deg)";
        bot.style.transform = "rotate(45deg)";
        mid.style.transform = "translateX(200%)";
        navMenu.style.display = "block";
        navMenu.style.transform = "translateY(0)";
        body.style.overflowY = "hidden";
        viewMenu.setAttribute("tabindex", "-1");
    }
})

ham.addEventListener("keydown", (e) => {
    if (e.keyCode != 13 && e.keyCode != 32) return
    if (topLine.style.transform) {
        topLine.style.transform = null;
        mid.style.transform = null;
        bot.style.transform = null;
        navMenu.style.display = null;
        navMenu.style.transform = null;
        body.style.overflowY = null;
        viewMenu.removeAttribute("tabindex");
    } else {
        topLine.style.transform = "rotate(-45deg)";
        bot.style.transform = "rotate(45deg)";
        mid.style.transform = "translateX(200%)";
        navMenu.style.display = "block";
        navMenu.style.transform = "translateY(0)";
        body.style.overflowY = "hidden";
        viewMenu.setAttribute("tabindex", "-1");
    }
})
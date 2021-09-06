const ham = document.querySelector('.hamburger-icon');
const topLine = document.querySelector('.top');
const mid = document.querySelector('.mid');
const bot = document.querySelector('.bot');
const navMenu = document.querySelector('.nav-menu');
const pageLinks = document.querySelectorAll('.page-block-text');
const body = document.body;
const navItems = document.querySelectorAll('.nav-item');
const lightDarkButton = document.querySelector('.light-dark-container');
const basePreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
const lightPreference = localStorage.getItem("lightPreference") ? localStorage.getItem("lightPreference") : basePreference;
const moon = document.querySelector('.moon');
const sun = document.querySelector('.sun');

if (lightPreference == "dark") {
    lightDarkButton.firstElementChild.style.transform = "translateX(200%)";
    sun.style.display = "none";
    moon.style.display = null;
} else {
    moon.style.display = "none";
    sun.style.display = null;
}

navItems.forEach((e) => e.firstElementChild.setAttribute("tabindex", "-1"));

if (!localStorage.getItem("lightPreference")) {
    console.log("%cNo preference found, using default system preference.", "color: red; font-size: 16px;");
} else {
    localStorage.getItem("lightPreference") == "dark" ? body.classList.add("dark-mode") : body.classList.add("light-mode");
}

ham.addEventListener("click", (e) => {
    if (topLine.style.transform) {
        topLine.style.transform = null;
        mid.style.transform = null;
        bot.style.transform = null;
        navMenu.style.height = null;
        body.style.overflowY = null;
        pageLinks.forEach(e => e.firstElementChild.removeAttribute("tabindex"));
        navItems.forEach((e) => e.firstElementChild.setAttribute("tabindex", "-1"));
    } else {
        topLine.style.transform = "rotate(-45deg)";
        bot.style.transform = "rotate(45deg)";
        mid.style.transform = "translateX(200%)";
        navMenu.style.height = "100%";
        body.style.overflowY = "hidden";
        pageLinks.forEach(e => e.firstElementChild.setAttribute("tabindex", "-1"));
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
        pageLinks.forEach(e => e.firstElementChild.removeAttribute("tabindex"));
        navItems.forEach((e) => e.firstElementChild.setAttribute("tabindex", "-1"));
    } else {
        topLine.style.transform = "rotate(-45deg)";
        bot.style.transform = "rotate(45deg)";
        mid.style.transform = "translateX(200%)";
        navMenu.style.height = "100%";
        body.style.overflowY = "hidden";
        pageLinks.forEach(e => e.firstElementChild.setAttribute("tabindex", "-1"));
        navItems.forEach((e) => e.firstElementChild.removeAttribute("tabindex"));
    }
})

lightDarkButton.addEventListener('click', (e) => {
    if (lightDarkButton.firstElementChild.style.transform == "translateX(200%)") {
        lightDarkButton.firstElementChild.style.transform = null;
        body.classList.add("light-mode");
        body.classList.remove("dark-mode");
        moon.style.display = "none";
        sun.style.display = null;
        localStorage.setItem("lightPreference", "light");
    } else {
        lightDarkButton.firstElementChild.style.transform = "translateX(200%)";
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        sun.style.display = "none";
        moon.style.display = null;
        localStorage.setItem("lightPreference", "dark");
    }
})

console.log("Script loaded successfully.")
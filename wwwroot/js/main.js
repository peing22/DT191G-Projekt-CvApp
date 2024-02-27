"use strict";

// Funktion för att skrolla upp till toppen av en sida
window.scrollToTop = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
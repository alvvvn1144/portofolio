// =========================================================
// script.js — perilaku ringan untuk navbar mobile
// Tidak perlu diedit kecuali kamu mengubah struktur navbar.
// =========================================================

document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".navbar__toggle");
  var links = document.querySelector(".navbar__links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // Set tahun otomatis di footer
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

// Tilføj din JavaScript her
const root = document.querySelector("html");
const toggle = document.querySelector(".toggle input");

function toggleDarkMode() {
  root.classList.toggle("dark");
}

toggle.addEventListener("change", toggleDarkMode);

// Tilføj din JavaScript her
// Tilføj din JavaScript her
const root = document.querySelector(":root"); // Nu med querySelector
const toggle = document.querySelector(".toggle input");

function toggleDarkMode() {
  root.classList.toggle("dark");
}

toggle.addEventListener("change", toggleDarkMode);

// ELEMENTS
const button = document.getElementById("toggle-btn");
const img = document.getElementById("cafe-img");
const body = document.body;

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

/* DARK MODE + IMAGE TOGGLE */
if (button) {
  button.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    const isDark = body.classList.contains("dark-mode");

    img.src = isDark ? "./cafe-night.png" : "./cafe-day.png";

    button.textContent = isDark
      ? "Switch to Day Mode"
      : "Switch to Night Mode";
  });
}

/* MOBILE MENU */
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

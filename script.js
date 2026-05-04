// DARK MODE + IMAGE SWITCH
const button = document.getElementById("toggle-btn");
const img = document.getElementById("cafe-img");
const body = document.body;

if (button) {
  button.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    const dark = body.classList.contains("dark-mode");

    img.src = dark ? "cafe-night.png" : "cafe-day.png";

    button.textContent = dark
      ? "Switch to Day Mode"
      : "Switch to Night Mode";
  });
}

// HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// CONTACT FORM
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    msg.textContent = "Message sent successfully!";
    msg.style.color = "lightgreen";
    form.reset();
  });
}

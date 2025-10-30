const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

//toggle navigation

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});

//close nav items when clicked

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

//navigation smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", () => {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

//add background when scrolling

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (this.window.scrollY > 50) {
    header.style.background = "#000000";
    header.style.transition = "background 0.3s ease";
  } else {
    header.style.background = "transparent";
  }
});

const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const yearNode = document.getElementById("current-year");

if (navToggle && header) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    header.classList.toggle("is-open", !expanded);
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (!header || !navToggle) {
      return;
    }

    header.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

if (yearNode) {
  yearNode.textContent = new Date().getFullYear().toString();
}

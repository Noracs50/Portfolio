// Small animation for hero text
document.addEventListener("DOMContentLoaded", () => {
  const heroText = document.querySelector(".hero-text");
  heroText.style.opacity = 0;
  setTimeout(() => {
    heroText.style.transition = "opacity 2s";
    heroText.style.opacity = 1;
  }, 500);
});

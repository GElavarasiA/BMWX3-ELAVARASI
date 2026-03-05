const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

document.getElementById("knowMoreBtn").addEventListener("click", () => {
  alert("Redirecting to more details...");
});

document.getElementById("callBtn").addEventListener("click", () => {
  alert("Calling dealership...");
});
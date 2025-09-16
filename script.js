function showPage(page) {
  const pages = document.querySelectorAll(".page");
  pages.forEach((p) => (p.style.display = "none"));
  document.getElementById(page).style.display = "block";
}

// Show home by default
window.onload = function () {
  showPage("home");
};

// Prevent form submission (demo only)
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for contacting us!");
      form.reset();
    });
  }
});

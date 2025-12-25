const form = document.getElementById("newsletterForm");
const successBox = document.getElementById("successBox");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // 3D press effect
  form.querySelector("button").style.transform = "scale(0.95)";

  setTimeout(() => {
    form.style.display = "none";
    successBox.style.display = "block";
  }, 500);
});

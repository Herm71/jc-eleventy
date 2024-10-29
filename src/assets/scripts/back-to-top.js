// Show or hide the back-to-top button based on scroll position
window.addEventListener("scroll", function () {
  const height = window.scrollY;
  const topBtn = document.getElementById("topBtn");

  if (height > 100) {
    topBtn.style.display = "block";
    topBtn.style.opacity = 1; // For fade-in effect
  } else {
    topBtn.style.opacity = 0; // For fade-out effect
    setTimeout(() => {
      topBtn.style.display = "none";
    }, 300); // Optional fade-out delay
  }
});

// Scroll to top when the back-to-top button is clicked
document.addEventListener("DOMContentLoaded", function () {
  const topBtn = document.getElementById("topBtn");

  topBtn.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

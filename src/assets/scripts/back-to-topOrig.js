document.addEventListener("DOMContentLoaded", function () {
  const offset = 100;
  const duration = 500;
  const topButton = document.querySelector(".top-button");

  window.addEventListener("scroll", function () {
    if (window.scrollY < offset) {
      topButton.style.transition = `opacity ${duration}ms`;
      topButton.style.opacity = 0;
    } else {
      topButton.style.transition = `opacity ${duration}ms`;
      topButton.style.opacity = 1;
    }
  });

  topButton.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
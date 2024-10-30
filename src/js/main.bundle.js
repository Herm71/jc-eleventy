(() => {
  // src/assets/scripts/test.js
  console.log("loaded properly");

  // src/assets/scripts/theme-switch.js
  var darkModeState = false;
  var button = document.querySelector(".theme-switch-btn");
  var useDark = window.matchMedia("(prefers-color-scheme: dark)");
  function toggleDarkMode(state) {
    document.documentElement.classList.toggle("dark-mode", state);
  }
  function setDarkModeLocalStorage(state) {
    localStorage.setItem("dark-mode", state);
  }
  toggleDarkMode(localStorage.getItem("dark-mode") == "true");
  useDark.addListener((evt) => toggleDarkMode(evt.matches));
  button.addEventListener("click", () => {
    darkModeState = !darkModeState;
    toggleDarkMode(darkModeState);
    setDarkModeLocalStorage(darkModeState);
  });

  // src/assets/scripts/toggle.js
  document.querySelector(".nav-toggle").addEventListener("click", function() {
    document.querySelector(".nav").classList.toggle("active");
  });

  // src/assets/scripts/back-to-top.js
  window.addEventListener("scroll", function() {
    const height = window.scrollY;
    const topBtn = document.getElementById("topBtn");
    if (height > 100) {
      topBtn.style.display = "block";
      topBtn.style.opacity = 1;
    } else {
      topBtn.style.opacity = 0;
      setTimeout(() => {
        topBtn.style.display = "none";
      }, 300);
    }
  });
  document.addEventListener("DOMContentLoaded", function() {
    const topBtn = document.getElementById("topBtn");
    topBtn.addEventListener("click", function(event) {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });
})();

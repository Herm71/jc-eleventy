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
  document.addEventListener("DOMContentLoaded", function() {
    const offset = 100;
    const speed = 250;
    const duration = 500;
    const topButton = document.querySelector(".topbutton");
    window.addEventListener("scroll", function() {
      if (window.scrollY < offset) {
        topButton.style.transition = `opacity ${duration}ms`;
        topButton.style.opacity = 0;
      } else {
        topButton.style.transition = `opacity ${duration}ms`;
        topButton.style.opacity = 1;
      }
    });
    topButton.addEventListener("click", function(event) {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });
})();

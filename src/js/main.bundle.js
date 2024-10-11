(() => {
  // src/assets/scripts/test.js
  console.log("loaded properly");
  var darkModeState = false;
  var button = document.querySelector(".test-btn");
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

  // src/assets/scripts/theme-switch.js
  function isLight() {
    return localStorage.getItem("light-mode");
  }
  function toggleRootClass() {
    document.querySelector(":root").classList.toggle("light");
  }
  function toggleLocalStorageItem() {
    if (isLight()) {
      localStorage.removeItem("light-mode");
    } else {
      localStorage.setItem("light-mode", "set");
    }
  }
  if (isLight()) {
    toggleRootClass();
  }
  document.querySelector(".theme-icon").addEventListener("click", () => {
    toggleLocalStorageItem();
    toggleRootClass();
  });
})();

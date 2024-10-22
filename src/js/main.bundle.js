(() => {
  // src/assets/scripts/test.js
  console.log("loaded properly");

  // src/assets/scripts/toggle.js
  document.querySelector(".nav-toggle").addEventListener("click", function() {
    document.querySelector(".nav").classList.toggle("active");
  });
})();

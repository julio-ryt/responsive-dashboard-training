(function () {
  document
    .querySelector(".mobile-menu button")
    .addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(".sidebar").style.display = "block";
    });

  document
    .querySelector(".sidebar-close button")
    .addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(".sidebar").style.display = "none";
    });
})();

// var open = document.getElementById("open");
// var menu = document.getElementById("menu");
// var close = document.getElementById("close");

// menu.style.display = "none";

// open.addEventListener("click", function () {
//   menu.style.display = "block";
// });

// close.addEventListener("click", function () {
//   menu.style.display = "none";
// });

const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

// add event listeners
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

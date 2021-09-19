var open = document.getElementById("open");
var menu = document.getElementById("menu");
var close = document.getElementById("close");

menu.style.display = "hidden";

open.addEventListener("click", function () {
  if (menu.style.display === "hidden") {
    menu.style.display = "block";
  }
});

close.addEventListener("click", function () {
  if (menu.style.display === "block") {
    menu.style.display = "hidden";
  }
});

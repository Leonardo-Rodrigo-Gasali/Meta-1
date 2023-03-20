const navItem = document.querySelector("header .navbar-contenedor nav");
const items = document.querySelectorAll("header .navbar-contenedor nav ul a");
const abrirIcon = document.querySelector(".abrir-icon-bar");
const cierreIcon = document.querySelector(".cierre-icon");
const overlay = document.querySelector(".overlay");

items.forEach((item) => {
  item.addEventListener("click", () => {
    items.forEach((item) => {
      item.classList.remove("activo");
    });
  });
  item.addEventListener("click", () => {
    item.classList.add("activo");
  });
});

abrirIcon.addEventListener("click", () => {
  navItem.classList.toggle("activo");
  overlay.classList.toggle("activo");
});

cierreIcon.addEventListener("click", () => {
  navItem.classList.toggle("activo");
  overlay.classList.toggle("activo");
});

overlay.addEventListener("click", () => {
  navItem.classList.toggle("activo");
  overlay.classList.toggle("activo");
});
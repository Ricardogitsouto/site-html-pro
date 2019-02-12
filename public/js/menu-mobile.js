"use strict";

(function () {
  var icon_hamburger = document.querySelector(".menu-hamburger");
  var menu_responsivo = document.querySelector(".menu-responsivo");
  var a_menu_responsivo = document.querySelectorAll(".menu-responsivo a");
  var menu_aberto = false;
  icon_hamburger.addEventListener("click", function () {
    !menu_aberto ? alteraMenu("310px", "block", true) : alteraMenu("0", "none", false);
  });

  function alteraMenu(altura, position, aberto) {
    menu_responsivo.style.height = altura;
    menu_aberto = aberto;
    a_menu_responsivo.forEach(function (a) {
      a.style.display = position;
    });
  }
})();
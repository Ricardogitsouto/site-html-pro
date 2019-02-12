"use strict";

(function () {
  var itens_conquistas = document.querySelectorAll(".item-conquistas");
  var conquistas = [180, 300, 120, 500]; // console.log(conquistas);

  var repetir = 0;

  while (repetir != 4) {
    conta(conquistas[repetir], repetir);
    repetir++;
  }

  function conta(conquista, n) {
    var cont = 0;
    setInterval(function () {
      cont++;

      if (cont <= conquista) {
        itens_conquistas[n].textContent = cont;
      } else {
        myStopFunction();
      }
    }, 20);

    function myStopFunction() {
      clearInterval(conta);
    }
  }

  ;
})();
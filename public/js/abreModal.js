"use strict";

var abreModal = function abreModal() {
  var modal = document.querySelector('.modal-fechado');
  var cardsDestinos = document.querySelectorAll('.dest');
  var fecha_modal = document.querySelector(".fechar-modal");
  var modal_interno = document.querySelector(".box-interno-modal");
  var titulo_modal = document.querySelector(".titulo-modal");
  var paragrafo_modal = document.querySelector(".paragrafo-modal");
  var texto_do_modal = document.querySelector(".texto");
  var img_funfo_modal;
  var destaques_cards = document.querySelectorAll(".dtq");
  var destino_destaque_cards = [cardsDestinos, destaques_cards]; // Função que cria o conteudo do Modal

  var insereTexto = function insereTexto(titulo, paragrafo) {
    return "\n            <div class=\"box-interno-modal-box-txt\">\n                        <h2 class=\"titulo-modal\">".concat(titulo, "</h2>\n                        <p class=\"paragrafo-modal\">").concat(paragrafo, "</p>\n                </div>\n            ");
  }; // Função que dispara evento ao clicar nos cards destino e destaque


  destino_destaque_cards.forEach(function (x) {
    x.forEach(function (n) {
      n.addEventListener("click", function () {
        modal.className = "modal-aberto"; // Pega a url do  fundo backgroung-image do elemento clicado

        img_funfo_modal = window.getComputedStyle(n, null).backgroundImage;
        modal_interno.style.backgroundImage = img_funfo_modal; // Pegar o texto do card desdino---

        var a = n.children[2].children[0].textContent;
        var b = n.children[2].children[1].textContent; // Insere o texto do card no modal

        modal_interno.innerHTML = insereTexto(a, b);
      });
    }); // Evento que fecha modal

    fecha_modal.addEventListener("click", function () {
      return modal.className = "modal-fechado";
    });
  });
};
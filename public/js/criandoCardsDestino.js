"use strict";

(function () {
  var section_destinos = document.querySelector(".grid-destinos");
  var btn = document.querySelector(".carregar-mais-destinos");
  var objct_card = [{
    "texto_titulo": "Primeiro Titulo",
    "texto_paragrafo": "Primeiro Paragrafo",
    "url_image": "./imgs/destino-2.jpg"
  }, {
    "texto_titulo": "Segundo Titulo",
    "texto_paragrafo": "Segundo Paragrafo",
    "url_image": "./imgs/destino-3.jpg"
  }, {
    "texto_titulo": "Segundo Titulo",
    "texto_paragrafo": "Segundo Paragrafo",
    "url_image": "./imgs/destino-4.jpg"
  }, {
    "texto_titulo": "Segundo Titulo",
    "texto_paragrafo": "Segundo Paragrafo",
    "url_image": "./imgs/destino-5.jpg"
  }, {
    "texto_titulo": "Segundo Titulo",
    "texto_paragrafo": "Segundo Paragrafo",
    "url_image": "./imgs/destino-6.jpg"
  }, {
    "texto_titulo": "Segundo Titulo",
    "texto_paragrafo": "Segundo Paragrafo",
    "url_image": "./imgs/destino-7.jpg"
  }, {
    "texto_titulo": "Segundo Titulo",
    "texto_paragrafo": "Segundo Paragrafo",
    "url_image": "./imgs/destino-8.jpg"
  }, {
    "texto_titulo": "Segundo Titulo",
    "texto_paragrafo": "Segundo Paragrafo",
    "url_image": "./imgs/destino-4.jpg"
  }, {
    "texto_titulo": "Segundo Titulo",
    "texto_paragrafo": "Segundo Paragrafo",
    "url_image": "./imgs/destino-4.jpg"
  }, {
    "texto_titulo": "Segundo Titulo",
    "texto_paragrafo": "Segundo Paragrafo",
    "url_image": "./imgs/destino-4.jpg"
  }, {
    "texto_titulo": "Segundo Titulo",
    "texto_paragrafo": "Segundo Paragrafo",
    "url_image": "./imgs/destino-4.jpg"
  }, {
    "texto_titulo": "Segundo Titulo",
    "texto_paragrafo": "Segundo Paragrafo",
    "url_image": "./imgs/destino-4.jpg"
  }, {
    "texto_titulo": "Segundo Titulo",
    "texto_paragrafo": "Segundo Paragrafo",
    "url_image": "./imgs/destino-4.jpg"
  }, {
    "texto_titulo": "Segundo Titulo",
    "texto_paragrafo": "Segundo Paragrafo",
    "url_image": "./imgs/destino-4.jpg"
  }, {
    "texto_titulo": "Segundo Titulo",
    "texto_paragrafo": "Segundo Paragrafo",
    "url_image": "./imgs/destino-4.jpg"
  }, {
    "texto_titulo": "Segundo Titulo",
    "texto_paragrafo": "Segundo Paragrafo",
    "url_image": "./imgs/destino-4.jpg"
  }, {
    "texto_titulo": "Segundo Titulo",
    "texto_paragrafo": "Segundo Paragrafo",
    "url_image": "./imgs/destino-4.jpg"
  }, {
    "texto_titulo": "Segundo Titulo",
    "texto_paragrafo": "Segundo Paragrafo",
    "url_image": "./imgs/destino-4.jpg"
  }, {
    "texto_titulo": "Segundo Titulo",
    "texto_paragrafo": "Segundo Paragrafo",
    "url_image": "./imgs/destino-4.jpg"
  }, {
    "texto_titulo": "Segundo Titulo",
    "texto_paragrafo": "Segundo Paragrafo",
    "url_image": "./imgs/destino-4.jpg"
  }, {
    "texto_titulo": "Segundo Titulo",
    "texto_paragrafo": "Segundo Paragrafo",
    "url_image": "./imgs/destino-4.jpg"
  }];

  function criaCard(titulo, paragrafo, url) {
    var cards = "<div class=\"destino dest\"  style=\"background-image: url(".concat(url, ")\">\n                        <button class=\"button-destino-card\">barcos</button>\n\n                        <div class=\"fundo-blur\"></div>\n                        <div class=\"texto\">\n                        <h3>").concat(titulo, "</h3>\n                            <span>").concat(paragrafo, "</span>\n                        </div>\n                    </div>");
    section_destinos.innerHTML += cards;
    abreModal();
  }

  var numCards = 9;
  btn.addEventListener("click", function () {
    section_destinos.innerHTML = "";
    numCards += 3;

    for (var a = 0; a < numCards; a++) {
      var element = objct_card[a];
      criaCard(element.texto_titulo, element.texto_paragrafo, element.url_image);
    }
  });

  for (var x = 0; x < numCards; x++) {
    var element = objct_card[x];
    criaCard(element.texto_titulo, element.texto_paragrafo, element.url_image);
  }
})();
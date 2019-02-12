(function() {

    let section_destinos = document.querySelector(".grid-destinos");
    let btn = document.querySelector(".carregar-mais-destinos");



    let objct_card =[{
        "texto_titulo":"Primeiro Titulo",
        "texto_paragrafo":"Primeiro Paragrafo",
        "url_image":"./imgs/destino-2.jpg"
    },
    {
        "texto_titulo":"Segundo Titulo",
        "texto_paragrafo":"Segundo Paragrafo",
        "url_image":"./imgs/destino-3.jpg"
    },
    {
        "texto_titulo":"Segundo Titulo",
        "texto_paragrafo":"Segundo Paragrafo",
        "url_image":"./imgs/destino-4.jpg"
    },
    {
        "texto_titulo":"Segundo Titulo",
        "texto_paragrafo":"Segundo Paragrafo",
        "url_image":"./imgs/destino-5.jpg"
    },
    {
        "texto_titulo":"Segundo Titulo",
        "texto_paragrafo":"Segundo Paragrafo",
        "url_image":"./imgs/destino-6.jpg"
    },
    {
        "texto_titulo":"Segundo Titulo",
        "texto_paragrafo":"Segundo Paragrafo",
        "url_image":"./imgs/destino-7.jpg"
    },
    {
        "texto_titulo":"Segundo Titulo",
        "texto_paragrafo":"Segundo Paragrafo",
        "url_image":"./imgs/destino-8.jpg"
    },
    {
        "texto_titulo":"Segundo Titulo",
        "texto_paragrafo":"Segundo Paragrafo",
        "url_image":"./imgs/destino-4.jpg"
    },
    {
        "texto_titulo":"Segundo Titulo",
        "texto_paragrafo":"Segundo Paragrafo",
        "url_image":"./imgs/destino-4.jpg"
    },
    {
        "texto_titulo":"Segundo Titulo",
        "texto_paragrafo":"Segundo Paragrafo",
        "url_image":"./imgs/destino-4.jpg"
    },
    {
        "texto_titulo":"Segundo Titulo",
        "texto_paragrafo":"Segundo Paragrafo",
        "url_image":"./imgs/destino-4.jpg"
    },
    {
        "texto_titulo":"Segundo Titulo",
        "texto_paragrafo":"Segundo Paragrafo",
        "url_image":"./imgs/destino-4.jpg"
    },
    {
        "texto_titulo":"Segundo Titulo",
        "texto_paragrafo":"Segundo Paragrafo",
        "url_image":"./imgs/destino-4.jpg"
    },
    {
        "texto_titulo":"Segundo Titulo",
        "texto_paragrafo":"Segundo Paragrafo",
        "url_image":"./imgs/destino-4.jpg"
    },
    {
        "texto_titulo":"Segundo Titulo",
        "texto_paragrafo":"Segundo Paragrafo",
        "url_image":"./imgs/destino-4.jpg"
    },
    {
        "texto_titulo":"Segundo Titulo",
        "texto_paragrafo":"Segundo Paragrafo",
        "url_image":"./imgs/destino-4.jpg"
    },
    {
        "texto_titulo":"Segundo Titulo",
        "texto_paragrafo":"Segundo Paragrafo",
        "url_image":"./imgs/destino-4.jpg"
    },
    {
        "texto_titulo":"Segundo Titulo",
        "texto_paragrafo":"Segundo Paragrafo",
        "url_image":"./imgs/destino-4.jpg"
    },
    {
        "texto_titulo":"Segundo Titulo",
        "texto_paragrafo":"Segundo Paragrafo",
        "url_image":"./imgs/destino-4.jpg"
    },
    {
        "texto_titulo":"Segundo Titulo",
        "texto_paragrafo":"Segundo Paragrafo",
        "url_image":"./imgs/destino-4.jpg"
    },
    {
        "texto_titulo":"Segundo Titulo",
        "texto_paragrafo":"Segundo Paragrafo",
        "url_image":"./imgs/destino-4.jpg"
    }];
    
    function criaCard(titulo,paragrafo,url){
        var cards =
                    `<div class="destino dest"  style="background-image: url(${url})">
                        <button class="button-destino-card">barcos</button>

                        <div class="fundo-blur"></div>
                        <div class="texto">
                        <h3>${titulo}</h3>
                            <span>${paragrafo}</span>
                        </div>
                    </div>`

        section_destinos.innerHTML += cards;
        abreModal();
    }

        var numCards = 9;
        btn.addEventListener("click",()=>{
            section_destinos.innerHTML = "";
            numCards+= 3;

            for (let a = 0; a < numCards; a++) {
                
                const element = objct_card[a];
                criaCard(element.texto_titulo,element.texto_paragrafo,element.url_image);           
           }
            
        })

        
         for (let x = 0; x < numCards; x++) {
             const element = objct_card[x];
             criaCard(element.texto_titulo,element.texto_paragrafo,element.url_image);           
        }



})()
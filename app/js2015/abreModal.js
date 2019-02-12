
var abreModal = function abreModal(){
    let modal = document.querySelector('.modal-fechado');
    let cardsDestinos = document.querySelectorAll('.dest');
    let fecha_modal = document.querySelector(".fechar-modal");
    let modal_interno =  document.querySelector(".box-interno-modal");
    let titulo_modal = document.querySelector(".titulo-modal");
    let paragrafo_modal = document.querySelector(".paragrafo-modal");
    let texto_do_modal = document.querySelector(".texto");   
    let img_funfo_modal;

    let destaques_cards = document.querySelectorAll(".dtq");
    
    let destino_destaque_cards = [cardsDestinos,destaques_cards];
    
   
    

    // Função que cria o conteudo do Modal
        let insereTexto = (titulo,paragrafo)=>{
            return `
            <div class="box-interno-modal-box-txt">
                        <h2 class="titulo-modal">${titulo}</h2>
                        <p class="paragrafo-modal">${paragrafo}</p>
                </div>
            `
        }
    // Função que dispara evento ao clicar nos cards destino e destaque
    destino_destaque_cards.forEach(function(x){
        

        x.forEach((n)=>{
            n.addEventListener("click",()=>{
                modal.className ="modal-aberto";

                // Pega a url do  fundo backgroung-image do elemento clicado
                img_funfo_modal = window.getComputedStyle(n, null).backgroundImage;


                modal_interno.style.backgroundImage = img_funfo_modal;

                // Pegar o texto do card desdino---
                let a = n.children[2].children[0].textContent;
                let b = n.children[2].children[1].textContent;

                // Insere o texto do card no modal
                modal_interno.innerHTML = insereTexto(a,b);

            });
        })
        // Evento que fecha modal
        fecha_modal.addEventListener("click",()=> modal.className ="modal-fechado");
    })
}


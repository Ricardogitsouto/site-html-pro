    let secao_destino = document.querySelector(".destinos").offsetTop;
    let secao_destaque = document.querySelector(".destaque").offsetTop;
    let secao_testemunhas = document.querySelector(".secao-testemunhas").offsetTop;
    let links_menu = document.querySelectorAll(".item-menu");
    
    

    // ------------------------------------------------------------------------
// Variavel para rolar  a tela ao ser clicado no item do menu mobile
    let item_menu_mobile = document.querySelectorAll(".item-menu-mobile");
 
    
    rolaTela(item_menu_mobile);
    rolaTela(links_menu);
    
    function rolaTela(array_link){
        array_link.forEach(function(clicado){
            clicado.addEventListener("click",()=>{
                    if (clicado == array_link[0]) {
                        window.scroll({
                            top: secao_destino,
                            behavior: 'smooth'
                        });
                    }
                    else if (clicado == array_link[1]) {
                        window.scroll({
                            top: secao_destaque,
                            behavior: 'smooth'
                        });
                    }
                    else if (clicado == array_link[2]) {
                        window.scroll({
                            top: secao_testemunhas,
                            behavior: 'smooth'
                        });
                    }
            })
        })
    }




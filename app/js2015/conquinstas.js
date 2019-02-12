(function(){

    let itens_conquistas = document.querySelectorAll(".item-conquistas");

    let conquistas = [180,300,120,500];

    // console.log(conquistas);
   

    let repetir=0;

   while(repetir!=4){
    conta(conquistas[repetir],repetir);
    repetir++;
   }

   

    function conta(conquista,n){
    let cont = 0;
    setInterval(() => {
        cont++;
        if(cont <= conquista){
            itens_conquistas[n].textContent = cont;                   
        }else{
            myStopFunction();
        }

    }, 20);

    function myStopFunction() {
        clearInterval(conta);
      }

    };


})()

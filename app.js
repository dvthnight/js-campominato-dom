const buttonPlay = document.getElementById("play");
const difficoltà = document.getElementById("difficoltà");


const inizioGioco = ()=>{
    const scelta = difficoltà.value;
    console.log(scelta);

    let colonna;
    let riga;

    switch (scelta) {
        case "1":
            riga = colonna = 10;
            
            break;
    
        case "2":
            riga = colonna = 9;
            
            break;

        case "3":
            riga = colonna = 7;
            
    }

    let griglia = colonna * riga;

    console.log(griglia);

    const contenitore = document.querySelector(".container");
    

    contenitore.innerHTML = "";

    function grigliaIterazione(event){
        const elementoGriglia = event.target;
        console.log(event.target.innerHTML);

        if(bombe.includes(parseInt(elementoGriglia.innerHTML) )){
            elementoGriglia.classList.add("bomba");
            alert("Hai perso la partita");
            contenitore.removeEventListener("click", grigliaIterazione);
        }else{
            elementoGriglia.classList.add("quad_click");

        }
        
    }

    contenitore.addEventListener("click", grigliaIterazione);
    
    
    

    for(let i=0; i<griglia; i++){
        const cella = document.createElement("div");
        cella.style.width = `calc(100% / ${colonna})`;
        cella.classList.add("quadratino");
        cella.append(i+1);
        contenitore.append(cella);

        // console.log(cella.innerHTML);
          

        // cella.addEventListener("click", function(){
        //     cella.classList.add("quad_click");
        // })
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); 
      }

      let bombe = [];

      const nBombe = 16;

      for(let i=0; i<nBombe; i++){
          const nRandom = getRandomInt(1,griglia);
          if(bombe.includes(nRandom)==false){
              bombe[i]=nRandom;
          } else{
              i--;
          }
      }

    console.log(bombe);

    

}

buttonPlay.addEventListener("click",inizioGioco);
    



function refresh(){
    window.location.reload("Refresh")
  }
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

    function grigliaInterazione(event){
        console.log(event.target);
        const elementoGriglia = event.target;
        elementoGriglia.classList.add("quad_click");
    }

    contenitore.addEventListener("click", grigliaInterazione);

    for(let i=0; i<griglia; i++){
        const cella = document.createElement("div");
        cella.style.width = `calc(100% / ${colonna})`;
        cella.classList.add("quadratino");
        cella.append(i+1);
        contenitore.append(cella);

        // cella.addEventListener("click", function(){
        //     cella.classList.add("quad_click");
        // })
    }



}

buttonPlay.addEventListener("click",inizioGioco)
    




function refresh(){
    window.location.reload("Refresh")
  }
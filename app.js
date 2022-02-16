const buttonPlay = document.getElementById("play");
const difficoltà = document.getElementById("difficoltà");


buttonPlay.addEventListener("click",function(){
    const scelta = difficoltà.value;
    console.log(scelta);

    let colonna;
    let riga;

    switch (scelta) {
        case "1":
            riga = 10;
            colonna = 10;
            break;
    
        case "2":
            riga = 9;
            colonna = 9;
            break;

        case "3":
            riga = 7;
            colonna = 7;
    }

    let griglia = colonna * riga;

    console.log(griglia);

    const contenitore = document.querySelector(".container");
    

    for(let i=0; i<griglia; i++){
        const cella = document.createElement("div");
        cella.style.width = `calc(100% / ${colonna})`;
        cella.classList.add("quadratino");
        cella.append(i+1);
        contenitore.append(cella);

        cella.addEventListener("click", function(){
            cella.classList.add("quad_click");
        })
    }



})


function refresh(){
    window.location.reload("Refresh")
  }
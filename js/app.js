let btnOscuro = document.querySelector(".btnOscuro");
let body = document.querySelector("body");
let firma = document.querySelector(".firma");
let modoOscuro = true;



// function cambiar Modo Color

btnOscuro.addEventListener("click", function(){
    body.classList.toggle("modoOscuro");
    modoOscuro = !modoOscuro;
    if(modoOscuro){
        firma.setAttribute("src", "img/firma_moscuro.png")  
    }else{
        firma.setAttribute("src", "img/firma_mclaro.png")  
    }
})




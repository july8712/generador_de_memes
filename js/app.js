let btnOscuro = document.querySelector(".btnOscuro");
let body = document.querySelector("body");
let firma = document.querySelector(".firma");
let modoOscuro = true;
let btnTexto = document.querySelector(".seccionTxt");
let btnImg = document.querySelector(".seccionImg");
let seccionImg = document.querySelector("#imagen");
let seccionTxt = document.querySelector("#texto");
let btn_secundary = document.querySelector(".btn_secundary");
let etiquetaBody = document.querySelector("body");



// function cambiar Modo Color

btnOscuro.addEventListener("click", function(){
    body.classList.toggle("modoOscuro");
    modoOscuro = !modoOscuro;
    if(modoOscuro){
        firma.setAttribute("src", "img/firma_moscuro.png") 
        btnOscuro.innerHTML = "Modo Claro"; 
        btn_secundary.style.backgroundColor = "#c8c2f2";
        etiquetaBody.style.backgroundColor = "#27274d";
    }else{
        firma.setAttribute("src", "img/firma_mclaro.png")  
        btnOscuro.innerHTML = "Modo Oscuro";
        btn_secundary.style.backgroundColor = "#c49ee3";
        etiquetaBody.style.backgroundColor = "#e0d2f0";

    }
})

// Función Cambio de contenido Aside

btnTexto.addEventListener("click", function(){
    seccionTxt.style.display = "block";
    seccionImg.style.display = "none";
});

btnImg.addEventListener("click", function(){
    seccionTxt.style.display = "none";
    seccionImg.style.display = "block";
});



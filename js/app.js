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
// textos del meme
const textSuperior = document.querySelector("#textSuperior");
const textInferior = document.querySelector("#textInferior");
const topText = document.querySelector("#topText");
const infText = document.querySelector("#infText");
//variables tipo range

const rangeBrillo = document.querySelector("#brillo");

//Variables de imagen

const url = document.querySelector("#url");
const memeImg = document.querySelector("#memeImg");
console.log(url.target)

//función generador de imagen

url.addEventListener("input", (event)=>{
    const rutaImg = event.target.value;
    memeImg.style.backgroundImage = `url('${rutaImg}')`;
})

//Ejemplo de filtro del profe
// const points = document.getElementById('points');
// const range = document.getElementById('range');
// const img = document.getElementById('img');


// points.addEventListener('input', (event) => {
//   const valorActual = event.target.value;
//   range.innerHTML = `El valor actual es: ${valorActual}%`
//   img.style.filter = `brightness(${valorActual}%)`
// })

//Funciones de cambiar texto Superior e Inferior

textSuperior.addEventListener("input", (event)=>{
    const valorActual = event.target.value;
    topText.innerHTML = valorActual;
})

textInferior.addEventListener("input", (event)=>{
    const valorActual = event.target.value;
    infText.innerHTML = valorActual;
})

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



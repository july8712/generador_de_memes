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
let activoInf = false;
let activoSup = false;
// textos del meme
const textSuperior = document.querySelector("#textSuperior");
const textInferior = document.querySelector("#textInferior");
const topText = document.querySelector("#topText");
const infText = document.querySelector("#infText");
const fuente = document.querySelector("#fuente");
const tamanioText = document.querySelector("#tamanioText");
const colorTexto = document.querySelector("#colorTexto");
const fondoTextoMeme = document.querySelectorAll(".textoMeme");
const colorFondo = document.querySelector("#colorFondo");
const sinTextoSup = document.querySelector("#sinTextoSup");
const sinTextoInf = document.querySelector("#sinTextoInf");
//variables tipo range

const rangeBrillo = document.querySelector("#brillo");

//Variables de imagen

const url = document.querySelector("#url");
const memeImg = document.querySelector("#memeImg");
let tamanioImg = memeImg.clientHeight;

console.log(tamanioImg);
// ********************************* función generador de imagen **************************************

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

//*************************** Funciones de texto ******************************

//Escritura en el HTML

textSuperior.addEventListener("input", (event)=>{
    const valorActual = event.target.value;
    topText.innerHTML = valorActual;
})

textInferior.addEventListener("input", (event)=>{
    const valorActual = event.target.value;
    infText.innerHTML = valorActual;
})

// Cambio de tipografía

fuente.addEventListener("change", (event)=>{
    const eleccionTipo = event.target.value;

    switch (eleccionTipo) {
    case "arial":
        topText.style.fontFamily = "arial";
        infText.style.fontFamily = "arial";
        break;
    case "arialBlack":
        topText.style.fontFamily = "Arial Black, Arial Bold, Gadget, sans-serif";
        infText.style.fontFamily = "Arial Black, Arial Bold, Gadget, sans-serif";
        break;
    case "american":
        topText.style.fontFamily = "american"
        infText.style.fontFamily = "american";
        break;
    case "andaleMono":
        topText.style.fontFamily = "Andale Mono, AndaleMono, monospace";
        infText.style.fontFamily = "andale mono, AndaleMono, monospace";
        break;
    case "comicSans":
        topText.style.fontFamily = "Comic Sans MS", "Comic Sans, cursive";
        infText.style.fontFamily = "Comic Sans MS", "Comic Sans, cursive";
        break;
    case "helvetica":
        topText.style.fontFamily = "helvetica";
        infText.style.fontFamily = "helvetica";
        break;
    case "impact":
        topText.style.fontFamily = "impact";
        infText.style.fontFamily = "impact";
        break;
    case "verdana":
        topText.style.fontFamily = "verdana";
        infText.style.fontFamily = "verdana";
        break;
    case "timeNewRoman":
        topText.style.fontFamily = "time new Roman"
        infText.style.fontFamily = "time new Roman";
        break;
    default:
        topText.style.fontFamily = "Work Sans";
        infText.style.fontFamily = "Work Sans";
        break;
    }
})

// Cambio de tamaño de tipografía

tamanioText.addEventListener("change", (event)=>{
    const tamanio = event.target.value;
    topText.style.fontSize = `${tamanio}px`;
    infText.style.fontSize = `${tamanio}px`;
})

// Función de cambio de color en la tipografía

colorTexto.addEventListener("change", (event)=>{
    const color = event.target.value;
    topText.style.color = color;
    infText.style.color = color;
})

// Función de cambio de color de fondo de la tipografía

colorFondo.addEventListener("change", (event)=>{
    const colorFondo = event.target.value;
    fondoTextoMeme[0].style.backgroundColor = colorFondo;
    fondoTextoMeme[1].style.backgroundColor = colorFondo;
})

// Función "sin texto"

sinTextoSup.addEventListener("change", (event)=>{
    activoSup = !activoSup;
    if (activoSup) {
        fondoTextoMeme[0].style.display = "none";
        tamanioImg = tamanioImg + 95;
        console.log(tamanioImg)
        memeImg.style.height = `${(tamanioImg)}px`;
    }else{
        fondoTextoMeme[0].style.display = "flex";
        tamanioImg = tamanioImg - 95;
        console.log(tamanioImg)
        memeImg.style.height = `${tamanioImg}px`;
    }
})

sinTextoInf.addEventListener("change", (event)=>{
    activoInf = !activoInf;
    if (activoInf) {
        fondoTextoMeme[1].style.display = "none";
        tamanioImg = tamanioImg + 95;
        console.log(tamanioImg)
        memeImg.style.height = `${(tamanioImg)}px`;
    }else{
        fondoTextoMeme[1].style.display = "flex";
        tamanioImg = tamanioImg - 95;
        console.log(tamanioImg)
        memeImg.style.height = `${tamanioImg}px`;
    }
})

//************************** function cambiar Modo Color *****************************

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

//************************* Función Cambio de contenido Aside *************************

btnTexto.addEventListener("click", function(){
    seccionTxt.style.display = "block";
    seccionImg.style.display = "none";
});

btnImg.addEventListener("click", function(){
    seccionTxt.style.display = "none";
    seccionImg.style.display = "block";
});



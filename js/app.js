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
let activoTransparent = false;
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
const fondoTransparente = document.querySelector("#fondoTransparente");
let colorFondoText ="white";
const interlineado = document.querySelector("#interlineado");
const espaciado = document.querySelector("#espaciado");
const contNinguno = document.querySelector("#contNinguno");
const contClaro = document.querySelector("#contClaro");
const contOscuro = document.querySelector("#contOscuro");
const alIzquierda = document.querySelector(".fa-align-left");
const alCentro = document.querySelector(".fa-align-center");
const alDerecha = document.querySelector(".fa-align-right");
//variables tipo range

const rangeBrillo = document.querySelector("#brillo");
const rangeOpacidad = document.querySelector("#opacidad")
const rangeContraste = document.querySelector("#contraste");
const rangeDesenfoque = document.querySelector("#desenfoque");
const rangeEDG = document.querySelector("#edg");
const rangeSepia = document.querySelector("#sepia");
const rangeHue = document.querySelector("#hue");
const rangeSaturacion = document.querySelector("#saturacion");
const rangeNegativo = document.querySelector("#negativo")

//Variables de imagen

const url = document.querySelector("#url");
const memeImg = document.querySelector("#memeImg");
let tamanioImg = memeImg.clientHeight;
let tamanioParrafoSup = topText.clientHeight;

console.log(tamanioParrafoSup);
// ********************************* función generador de imagen **************************************

url.addEventListener("input", (event)=>{
    const rutaImg = event.target.value;
    memeImg.style.backgroundImage = `url('${rutaImg}')`;
})

// ************************************* Filtros Range **************************************************

// Brillo

rangeBrillo.addEventListener('input', (event) => {
  const valorActual = event.target.value;
  memeImg.style.filter = `brightness(${valorActual})`;
})

// Opacidad

rangeOpacidad.addEventListener('input', (event) => {
  const valorActual = event.target.value;
  memeImg.style.filter = `opacity(${valorActual})`;
})

// Contraste

rangeContraste.addEventListener('input', (event) => {
  const valorActual = event.target.value;
  memeImg.style.filter = `contrast(${valorActual}%)`;
})

// Desenfoque

rangeDesenfoque.addEventListener('input', (event) => {
  const valorActual = event.target.value;
  memeImg.style.filter = `blur(${valorActual}px)`;
})

//Escala de GRISES

rangeEDG.addEventListener('input', (event) => {
  const valorActual = event.target.value;
  memeImg.style.filter = `grayscale(${valorActual}%)`;
})

// Sepia 

rangeSepia.addEventListener('input', (event) => {
  const valorActual = event.target.value;
  memeImg.style.filter = `sepia(${valorActual}%)`;
})

// HUE

rangeHue.addEventListener('input', (event) => {
  const valorActual = event.target.value;
  memeImg.style.filter = `hue-rotate(${valorActual}deg)`;
})

// Saturación

rangeSaturacion.addEventListener('input', (event) => {
  const valorActual = event.target.value;
  memeImg.style.filter = `saturate(${valorActual}%)`;
})

// Negativo

rangeNegativo.addEventListener('input', (event) => {
  const valorActual = event.target.value;
  memeImg.style.filter = `invert(${valorActual})`;
})

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

// Función cambio de Interlineado

interlineado.addEventListener("change", (event)=>{
    const interlineadoTexto = event.target.value;
    topText.style.lineHeight = interlineadoTexto;
    infText.style.lineHeight = interlineadoTexto;
})

// Función cambio de Espaciado

espaciado.addEventListener("change", (event)=>{
    const espaciadoTexto = event.target.value;
    topText.style.padding = `${espaciadoTexto}px 50px`;
    infText.style.padding = `${espaciadoTexto}px 50px`;
    console.log(topText.clientHeight);
})

//Funcion de Alineación de texto

alIzquierda.addEventListener("click", (event)=>{
    event.preventDefault();
    topText.style.textAlign = "left";
    infText.style.textAlign = "left";
})

alCentro.addEventListener("click", (event)=>{
    event.preventDefault();
    topText.style.textAlign = "center";
    infText.style.textAlign = "center";
})

alDerecha.addEventListener("click", (event)=>{
    event.preventDefault();
    topText.style.textAlign = "right";
    infText.style.textAlign = "right";
})

// Función de cambio de color en la tipografía

colorTexto.addEventListener("change", (event)=>{
    const color = event.target.value;
    topText.style.color = color;
    infText.style.color = color;
})

// Función de cambio de color de fondo de la tipografía

colorFondo.addEventListener("change", (event)=>{
    colorFondoText = event.target.value;
    fondoTextoMeme[0].style.backgroundColor = colorFondoText;
    fondoTextoMeme[1].style.backgroundColor = colorFondoText;
})

// Función "sin texto"

sinTextoSup.addEventListener("change", (event)=>{
    activoSup = !activoSup;
    tamanioImg = tamanioImg + topText.clientHeight;
    if (activoSup && activoTransparent == false) {
        fondoTextoMeme[0].style.display = "none";
        tamanioImg = tamanioImg + topText.clientHeight;
        console.log("Sin fondo transparente el texto es de " +tamanioImg)
        memeImg.style.height = `${tamanioImg}px`;
    }else if(activoSup && activoTransparent){
        fondoTextoMeme[0].style.display = "none";
        console.log("El fondo transparente sin texto es de " + tamanioImg)
        memeImg.style.height = `${(memeImg.height + topText.clientHeight)}px`;
    }
    else{
        fondoTextoMeme[0].style.display = "block";
        tamanioImg = tamanioImg + topText.clientHeight;
        console.log("Fondo es de " +tamanioImg)
        memeImg.style.height = `${tamanioImg}px`;
    }
})

sinTextoInf.addEventListener("change", (event)=>{
    activoInf = !activoInf;
    tamanioImg = tamanioImg + infText.clientHeight;
    if (activoInf && activoTransparent == false) {
        fondoTextoMeme[1].style.display = "none";
        tamanioImg = tamanioImg + infText.clientHeight;
        console.log("Sin fondo transparente el texto es de " +tamanioImg)
        memeImg.style.height = `${tamanioImg}px`;
    }else if(activoInf && activoTransparent){
        fondoTextoMeme[1].style.display = "none";
        console.log("El fondo transparente sin texto es de " + tamanioImg)
        memeImg.style.height = `${(memeImg.height + infText.clientHeight)}px`;
    }else{
        fondoTextoMeme[1].style.display = "block";
        tamanioImg = tamanioImg + infText.clientHeight;
        console.log(tamanioImg)
        memeImg.style.height = `${tamanioImg}px`;
    }
})

//fondo Transparente

fondoTransparente.addEventListener("change", (event)=>{
    activoTransparent = !activoTransparent;
    console.log(colorFondoText)
    if (activoTransparent) {
        fondoTextoMeme[0].style.backgroundColor = "transparent";
        fondoTextoMeme[1].style.backgroundColor = "transparent";
        fondoTextoMeme[0].style.position = "absolute";
        fondoTextoMeme[1].style.position = "absolute";
        fondoTextoMeme[0].style.top = 0;
        fondoTextoMeme[0].style.left = 0;
        fondoTextoMeme[1].style.bottom = 0;
        fondoTextoMeme[1].style.left = 0;
        memeImg.style.height = `${tamanioImg + infText.clientHeight + infText.clientHeight}px`;
        activoTransparent = true;
        console.log("El tamaño con fondo transparente es de "+memeImg.clientHeight)
    }else{
        fondoTextoMeme[0].style.backgroundColor = colorFondoText;
        fondoTextoMeme[1].style.backgroundColor = colorFondoText;
        fondoTextoMeme[0].style.position = "static";
        fondoTextoMeme[1].style.position = "static";
        memeImg.style.height = `${tamanioImg}px`;
        activoTransparent = false;
        console.log("El tamaño sin fondo transparente es de "+memeImg.clientHeight)
    }
})

//Función Contorno de texto

contNinguno.addEventListener("click", (event)=>{
    event.preventDefault();
    topText.style.textShadow = `none`;
    infText.style.textShadow = `none`;
})

contClaro.addEventListener("click", (event)=>{
    event.preventDefault();
    topText.style.textShadow = `3px 2px 2px rgba(255,252,226,0.5)`;
    infText.style.textShadow = `3px 2px 2px rgba(255,252,226,0.5)`;
})

contOscuro.addEventListener("click", (event)=>{
    event.preventDefault();
    topText.style.textShadow = `3px 2px 2px rgba(0,0,0,0.5)`;
    infText.style.textShadow = `3px 2px 2px rgba(0,0,0,0.5)`;
})


//************************** function cambiar Modo Color *****************************

btnOscuro.addEventListener("click", function(){
    body.classList.toggle("modoOscuro");
    modoOscuro = !modoOscuro;
    if(modoOscuro){
        firma.setAttribute("src", "img/firma_moscuro.png") 
        btnOscuro.innerHTML = '<i class="far fa-lightbulb button-icon-text" aria-hidden="true"></i>Modo Claro'; 
        btn_secundary.style.backgroundColor = "#c8c2f2";
        etiquetaBody.style.backgroundColor = "#27274d";
    }else{
        firma.setAttribute("src", "img/firma_mclaro.png")  
        btnOscuro.innerHTML = '<i class="far fa-lightbulb button-icon-text" aria-hidden="true"></i>Modo Oscuro';
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



let btnOscuro = document.querySelector(".btnOscuro");
let body = document.querySelector("body");
let aside = document.querySelector("#aside")
let meme = document.querySelector("#meme");
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
const btnRestablecerFiltros = document.querySelector("#btnRestablecerFiltros")
const btnAsideClose = document.querySelector("#btnAsideClose")
const contFirma = document.querySelector("#contFirma")
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
const rangeNegativo = document.querySelector("#negativo");
const range = document.querySelectorAll(".range");

// Variables de modos de imagen
const inputColor = document.querySelector("#inputColor")
const modosImagen = document.querySelector("#modos")

//Variables de imagen

const url = document.querySelector("#url");
const fileIMG = document.querySelector("#fileIMG");
let fileIMGName = document.querySelector('#fileIMGName')
const quitarFileIMGLabel = document.querySelector("#quitarFileIMGLabel");
const memeImg = document.querySelector("#memeImg");
let tamanioImg = memeImg.clientHeight;
let tamanioParrafoSup = topText.clientHeight;



window.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth < 959) {
        aside.style.transition = "none"
        aside.classList.add('cerrado')
        setTimeout(() => {
            aside.style.removeProperty("transition")
        }, 1);
    }
})


// ********************************* función generador de imagen **************************************

url.addEventListener("input", (event)=>{
    const rutaImg = event.target.value;
    memeImg.style.backgroundImage = `url('${rutaImg}')`;
})

// Importar imagen de forma local

if (fileIMG.files.length == 0) {
    fileIMG.addEventListener("change", (event)=>{
        const fileRutaImg = URL.createObjectURL(event.target.files[0])
        memeImg.style.backgroundImage = `url('${fileRutaImg}')`
        fileIMGName.innerText = fileIMG.files[0].name
        fileIMGName.style.visibility = 'visible'
        fileIMGLabel.style.display = "none"
        quitarFileIMGLabel.style.display = "block"
    })
}
// Quitar la imagen importada de forma local

quitarFileIMGLabel.addEventListener('click', () => {
    memeImg.style.backgroundImage = '';
    fileIMG.value = "";
    fileIMGName.style.visibility = 'hidden'
    fileIMGLabel.style.display = "block"
    quitarFileIMGLabel.style.display = "none"
})


// ************************************* Filtros Range **************************************************

const filtrosRange = () => {
    memeImg.style.filter = `brightness(${rangeBrillo.value}) opacity(${rangeOpacidad.value}) 
                            blur(${rangeDesenfoque.value}px) contrast(${rangeContraste.value}%) grayscale(${rangeEDG.value}%) 
                            hue-rotate(${rangeHue.value}deg) sepia(${rangeSepia.value}%) saturate(${rangeSaturacion.value}%) 
                            invert(${rangeNegativo.value})`
}
rangeBrillo.addEventListener('change', filtrosRange)
rangeOpacidad.addEventListener('change', filtrosRange)
rangeDesenfoque.addEventListener('change', filtrosRange)
rangeContraste.addEventListener('change', filtrosRange)
rangeEDG.addEventListener('change', filtrosRange)
rangeHue.addEventListener('change', filtrosRange)
rangeSepia.addEventListener('change', filtrosRange)
rangeSaturacion.addEventListener('change', filtrosRange)
rangeNegativo.addEventListener('change', filtrosRange)

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
        memeImg.style.height = `${tamanioImg}px`;
    }else if(activoSup && activoTransparent){
        fondoTextoMeme[0].style.display = "none";
        memeImg.style.height = `${(memeImg.height + topText.clientHeight)}px`;
    }
    else{
        fondoTextoMeme[0].style.display = "block";
        tamanioImg = tamanioImg + topText.clientHeight;
        memeImg.style.height = `${tamanioImg}px`;
    }
})

sinTextoInf.addEventListener("change", (event)=>{
    activoInf = !activoInf;
    tamanioImg = tamanioImg + infText.clientHeight;
    if (activoInf && activoTransparent == false) {
        fondoTextoMeme[1].style.display = "none";
        tamanioImg = tamanioImg + infText.clientHeight;
        memeImg.style.height = `${tamanioImg}px`;
    }else if(activoInf && activoTransparent){
        fondoTextoMeme[1].style.display = "none";
        memeImg.style.height = `${(memeImg.height + infText.clientHeight)}px`;
    }else{
        fondoTextoMeme[1].style.display = "block";
        tamanioImg = tamanioImg + infText.clientHeight;
        memeImg.style.height = `${tamanioImg}px`;
    }
})

//fondo Transparente

fondoTransparente.addEventListener("change", (event)=>{
    activoTransparent = !activoTransparent;
    tamanioImg = memeImg.clientHeight;

    if (activoTransparent) {
        fondoTextoMeme[0].style.backgroundColor = "transparent";
        fondoTextoMeme[1].style.backgroundColor = "transparent";
        fondoTextoMeme[0].style.position = "absolute";
        fondoTextoMeme[1].style.position = "absolute";
        fondoTextoMeme[0].style.top = 0;
        fondoTextoMeme[0].style.left = 0;
        fondoTextoMeme[1].style.bottom = 0;
        fondoTextoMeme[1].style.left = 0;
        memeImg.style.height = `${tamanioImg + infText.clientHeight + topText.clientHeight}px`;
        activoTransparent = true;
    }else{
        fondoTextoMeme[0].style.backgroundColor = colorFondoText;
        fondoTextoMeme[1].style.backgroundColor = colorFondoText;
        fondoTextoMeme[0].style.position = "static";
        fondoTextoMeme[1].style.position = "static";
        memeImg.style.height = `${tamanioImg}px`;
        activoTransparent = false;
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
        for(let i = 0; i < range.length; i++){
            range[i].style.backgroundColor = "#7d7fc1";
        }
    }else{
        firma.setAttribute("src", "img/firma_mclaro.png")  
        btnOscuro.innerHTML = '<i class="far fa-lightbulb button-icon-text" aria-hidden="true"></i>Modo Oscuro';
        btn_secundary.style.backgroundColor = "#c49ee3";
        etiquetaBody.style.backgroundColor = "#e0d2f0";
        url.style.backgroundColor = "#ffffff";
        modos.style.backgroundColor = "#ffffff";
        for(let i = 0; i < range.length; i++){
            range[i].style.backgroundColor = "#9f52aa";
        }
        
    }
})

//************************* Función Cambio de contenido Aside *************************

btnTexto.addEventListener("click", function(){
    seccionTxt.style.display = "block";
    seccionImg.style.display = "none";
    if (aside.classList.contains("cerrado")) {
        aside.classList.remove("cerrado");
        contFirma.style.justifyContent = 'end'
    }
});

btnImg.addEventListener("click", function(){
    seccionTxt.style.display = "none";
    seccionImg.style.display = "block";
    if (aside.classList.contains("cerrado")) {
        aside.classList.remove("cerrado");
    }
});


//************************* Modos de imagen - Input Color *************************

inputColor.addEventListener("input", (e) => {
    let colorElegido = e.target.value;
    memeImg.style.backgroundColor = colorElegido
})

//************************* Modos de imagen - Select Modo *************************

modosImagen.addEventListener("change", (e) => {
    let modoElegido = e.target.value
    switch (modoElegido) {
        case 'ninguno':
            memeImg.style.backgroundBlendMode = 'unset'
            break;
        case 'aclarar':
            memeImg.style.backgroundBlendMode = 'lighten'
            break;
        case 'oscurecer':
            memeImg.style.backgroundBlendMode = 'darken'
            break;
        case 'diferencia':
            memeImg.style.backgroundBlendMode = 'difference'
            break;
        case 'luminocidad':
            memeImg.style.backgroundBlendMode = 'luminosity'
            break;
        case 'multiplicar':
            memeImg.style.backgroundBlendMode = 'multiply'
            break;
    
        default:
            memeImg.style.backgroundBlendMode = 'unset'
            break;
    }
})

//************************* Función Restablecer Filtros *************************

btnRestablecerFiltros.addEventListener('click', () => {
    memeImg.style.filter = 'none';
    rangeBrillo.value = 1
    rangeOpacidad.value = 1 
    rangeContraste.value = 100
    rangeDesenfoque.value = 0
    rangeEDG.value = 0
    rangeSepia.value = 0 
    rangeHue.value = 0
    rangeSaturacion.value = 100 
    rangeNegativo.value = 0
})


//************************* Función Descargar Meme *************************

const btnDescargarMeme = document.querySelector("#btnDescargarMeme");

btnDescargarMeme.addEventListener('click', () => {
    domtoimage.toBlob(meme).then(function (blob) {

        console.log(blob)

        saveAs(blob, 'meme.jpg');
    })
})

//************************* Funcionabilidad del aside responsive *************************
window.addEventListener('resize', () => {
    if (window.innerWidth > 960) {
        if (aside.classList.contains('cerrado')) {
            aside.classList.remove('cerrado')
        }
    }
})

btnAsideClose.addEventListener('click', () => {
    aside.classList.add('cerrado')
})
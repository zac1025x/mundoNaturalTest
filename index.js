// Codigo Scol revel
// window.sr = ScrollReveal();

// sr.reveal("ul", {
//     duration: 3000,
//     origin: "buttom"
    
// });


//codigo del header estatico
window.addEventListener("scroll", function(){
    var header = document.querySelector("nav");
    header.classList.toggle("abajo",window.scrollY>0);
})

var counter = 1;
setInterval(function(){
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
},5000);

// El slider de productos 
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})


// Links de las categorias
let btnAmazon1 = document.getElementById("btnAmazon");

btnAmazon1.addEventListener("click",amazonLink);

function amazonLink()
{
    location.href = "https://www.amazon.com/-/es/", target="_blank";
}


// empezamos con la escritura automatica
const typed = new Typed(".typed",{
    strings: [
    "<i>Salud</i>" ,
    "<i>Belleza</i>", 
    "<i>Bienestar</i>"
    ],
    stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '.', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});

var galeria = new Array(
    ["src/galeria/img1.jpg"],
    ["src/galeria/img2.jpg"],
    ["src/galeria/img3.jpg"],
    ["src/galeria/img4.jpg"],
    ["src/galeria/img5.jpeg"],
    ["src/galeria/img6.jpeg"],
);
var contador = 0;

function carrusel() {
    contador++
    const img = document.getElementById("galeria-index");
    img.style.opacity = "0";
    setTimeout(() => {
        img.style.opacity = "1";
        img.src = galeria[contador % galeria.length][0];
    }, 1000);
}

onload=function() {
    carrusel();
    this.setInterval(carrusel,5000)
}

const btnHot = document.querySelector('a#btnHot');
const btnCold = document.querySelector('a#btnCold');
const btnPostres = document.querySelector('a#btnPostres');
const btnPaquetes = document.querySelector('a#btnPaquetes');

const hot = document.querySelector('ul#hot');
const cold = document.querySelector('ul#cold');
const postres = document.querySelector('ul#postres');
const paquetes = document.querySelector('ul#paquetes-menu');

btnHot.addEventListener('click', () => {
    hot.classList.value = 'hot active';
    cold.classList.value = 'cold';
    postres.classList.value = 'postres';
    paquetes.classList.value = 'paquetes-menu';
});

btnCold.addEventListener('click', () => {
    cold.classList.value = 'cold active';
    hot.classList.value = 'hot';
    postres.classList.value = 'postres';
    paquetes.classList.value = 'paquetes-menu';
});

btnPostres.addEventListener('click', () => {
    postres.classList.value = 'postres active';
    hot.classList.value = 'hot';
    cold.classList.value = 'cold';
    paquetes.classList.value = 'paquetes-menu';
});

btnPaquetes.addEventListener('click', () => {
    paquetes.classList.value = 'paquetes-menu active';
    hot.classList.value = 'hot';
    cold.classList.value = 'cold';
    postres.classList.value = 'postres';
});
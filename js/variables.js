const opciones = document.getElementById("opciones")
const botonJuega = document.getElementById("o6")
const listaItems = document.querySelector("#opciones")
const listaItemsElegidos = document.querySelector('#listaItemsElegidos');
const botonCambiar = document.getElementById("botonCambiar")
const randIndex = Math.floor(Math.random() * 6) + 1;
const enemigoRandom = document.getElementById("enemigoRandom")
const random = (enemigo) => enemigo.id == 20;
enemigo = enemigos.filter(random)
let enemigoStats = $(".enemigo")
let hit = $('.health-bar').find('.hit')
let hitBtn = $("#listaItemsElegidos"),
    hBar = $('.health-bar'),
        bar = $('.health-bar').find('.bar');

botonCambiar.addEventListener("click", vaciarLista)
listaItems.addEventListener('click', agregarItem);




let itemsElegidos;


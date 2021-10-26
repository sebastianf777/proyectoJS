const opciones = document.getElementById("opciones")
const botonJuega = document.getElementById("o6")
const listaItems = document.querySelector("#opciones")
const listaItemsElegidos = document.querySelector('#listaItemsElegidos');
const botonCambiar = document.getElementById("botonCambiar")
botonCambiar.addEventListener("click", vaciarLista)
listaItems.addEventListener('click', agregarItem);
const randIndex = Math.floor(Math.random() * 6) + 1;
const enemigoRandom = document.getElementById("enemigoRandom")
const random = (enemigo) => enemigo.id == randIndex;
enemigo = enemigos.filter(random)

let itemsElegidos;


const cambiarEmpezar = () => {
    itemsElegidos.length == 3 ? $("#empezar").show() : null
}
const cambiarEmpezar2 = () => {
    $("#empezar").hide()
}
const empezarB = () => {
    itemsElegidos.length == 3 ? $(".opt6").prepend(`<button id="empezar">Empezar</button>`) : $(".opt6").prepend(`<button id="empezar" class="toggleD">Empezar</button>`)
}


document.addEventListener('DOMContentLoaded', () => {
    const itemsStorage = JSON.parse(localStorage.getItem('itemsElegidos'));
    itemsElegidos = itemsStorage || [];

    actualizarLista();
    renderProducts(armas);
    empezarB();
    itemsElegidos.length != 3 ? $("#botonCambiar").hide() : $("#botonCambiar").show()
    $("#empezar").click(function(){
        generarEnemigo(enemigo)
    })
});

function actualizarStorage() {

    localStorage.setItem('itemsElegidos', JSON.stringify(itemsElegidos));
}

function renderProducts(listadoOpciones) {
    opciones.innerHTML = ''

    listadoOpciones.forEach(producto => {
        const html = `
            <div>
                <img src="${producto.imagen}" class="">

                <div class="info-card">
                    <h4>${producto.nombre}</h4>
                    <p class="precio">${producto.daño}</p>
                    <a href="#" class="agregar-item" data-id="${producto.id}">Elegir</a>
                </div>
            </div>
        `
        // listaProductos.innerHTML = listaProductos.innerHTML + html;
        opciones.innerHTML += html;
    });
}

function actualizarLista() {
    listaItemsElegidos.innerHTML = '';

    itemsElegidos.forEach(item => {
        const {
            imagen,
            nombre,
            daño,
            id
        } = item;
        $('#listaItemsElegidos')
            .append(`
              <div id="itemS${id}" class="itemS">
                      <img src="${imagen}" class="">
      
                      <div class="info-card">
                          <h4>${nombre}</h4>
                          <p class="precio">${daño}</p>
                          
                      </div>
                  </div>
              `);
    });
    if (itemsElegidos.length > 2) {
        botonJuega.classList.add("toggleD")

        opciones.classList.replace("toggleS", "toggleD")

    }
}

function agregarItem(e) {
    e.preventDefault();

    if (itemsElegidos.length <= 2) {

        if (e.target.classList.contains("agregar-item")) {
            const itemElegido = e.target.parentElement.parentElement;

            const itemAgregado = {
                imagen: itemElegido.querySelector('img').src,
                nombre: itemElegido.querySelector('h4').textContent,
                daño: itemElegido.querySelector('p').textContent,
                id: itemElegido.querySelector('a').dataset.id
            }

            //termina if
            const yaExiste = itemsElegidos.some(item => item.id === itemAgregado.id);

            if (yaExiste) {
                {
                    alert("Sólo puedes agregar un item del mismo tipo")
                }
            } else {
                itemsElegidos.push(itemAgregado);
            }
            actualizarLista();
            actualizarStorage();
            cambiarEmpezar();
        }
    }
}

function vaciarLista(e) {
    e.preventDefault();

    itemsElegidos = [];

    actualizarLista();
    actualizarStorage();
    cambiarEmpezar2()
    opciones.classList.replace("toggleD", "toggleS")
}


const boton6 = () => {

    renderProducts(armas);
    $("#botonCambiar").show()
    opciones.classList.replace("toggleD", "toggleS")
    botonJuega.classList.add("toggleD")
    const tituloH2 = document.createElement("h2")
    tituloH2.textContent = "Elige 3 armas"
    opciones.appendChild(tituloH2)

}


function generarEnemigo(listadoEnemigos){
    enemigoRandom.innerHTML = ''

    listadoEnemigos.forEach(enemigo => {
        const html = `
            <div class="enemigo">
                <img src="${enemigo.imagen}" class="">

                <div class="info-card">
                    <h4>${enemigo.nombre}</h4>
                    <p class="precio">${enemigo.daño}</p>
                    <p data-id="${enemigo.id}">nivel de dificultad ${enemigo.id}  </p>
                </div>
            </div>
        `
  
        enemigoRandom.innerHTML += html

})
$("#empezar").hide()
$("#botonCambiar").hide()
}

const opciones = document.getElementById("opciones")
const botonJuega = document.getElementById("o6")
const listaItems = document.querySelector("#opciones")
const listaItemsElegidos = document.querySelector('#listaItemsElegidos');

// const tablaItems = document.getElementById("listaItems")
let itemsElegidos;

function actualizarStorage() {
    // TODO
    localStorage.setItem('itemsElegidos', JSON.stringify(itemsElegidos));
}


document.addEventListener('DOMContentLoaded', () => {
    const itemsStorage = JSON.parse(localStorage.getItem('itemsElegidos'));

    itemsElegidos = itemsStorage || [];

    actualizarLista();
    // if(carritoStorage === null) {
    // 	carrito = [];
    // } else {
    // 	carrito = carritoStorage;
    // }

     renderProducts(armas);
    
    //  itemsElegidos.length >= 2 ? 
});
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
              <div id="item${id}">
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




            const yaExiste = itemsElegidos.some(item => item.id === itemAgregado.id);

            if (yaExiste) {
                // const nuevosItems = itemsElegidos.map(item => {
                {

                    // if (item.id === itemAgregado.id) {
                    alert("Sólo puedes agregar un item del mismo tipo")
                }
                //     return item;

                // });
                // itemsElegidos = [...nuevosItems];

            } else {

                itemsElegidos.push(itemAgregado);

            }
            actualizarLista();

            actualizarStorage();


            //     }else if(itemsElegidos.length == 3){
            // opciones.classList.replace("toggleS", "toggleD")





        }
    }
}
listaItems.addEventListener('click', agregarItem);

const boton6 = () => {


    





    
    // document.addEventListener('click', () => {
    //     const carritoStorage = JSON.parse(localStorage.getItem('carrito'));

    //     carrito = carritoStorage || [];
    //     // actualizarCarritoHTML();
    //     // if(carritoStorage === null) {
    //     // 	carrito = [];
    //     // } else {
    //     // 	carrito = carritoStorage;
    //     // }

    //     renderProducts(productos);
    // });
    renderProducts(armas);

    opciones.classList.replace("toggleD", "toggleS")
    botonJuega.classList.add("toggleD")
    const tituloH2 = document.createElement("h2")
    tituloH2.textContent = "Elige 3 armas"
    opciones.appendChild(tituloH2)

}

const botonCambiar = document.getElementById("botonCambiar")
botonCambiar.addEventListener("click", vaciarLista)

function vaciarLista(e) {
    e.preventDefault();
    // Vaciar el arreglo carrito;
    itemsElegidos = [];

    // Actualizar HTML del carrito
    actualizarLista();
    // Actualizar el storage del carrito
    actualizarStorage();
    opciones.classList.replace("toggleD", "toggleS")

}
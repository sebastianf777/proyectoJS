const opciones = document.getElementById("opciones")
const botonJuega = document.getElementById("o6")
const listaItems = document.querySelector("#opciones")
const listaItemsElegidos = document.querySelector('#listaItemsElegidos');
const botonCambiar = document.getElementById("botonCambiar")
const randIndex = Math.floor(Math.random() * 6) + 1;
const enemigoRandom = document.getElementById("enemigoRandom")
const random = (enemigo) => enemigo.id == randIndex;
enemigo = enemigos.filter(random)

botonCambiar.addEventListener("click", vaciarLista)
listaItems.addEventListener('click', agregarItem);






let itemsElegidos;





//CREACION DEL BOTON EMPEZAR
const empezarB = () => {
    itemsElegidos.length == 3 ? $(".opt6").prepend(`<button id="empezar">Empezar</button>`) : $(".opt6").prepend(`<button id="empezar" class="toggleD">Empezar</button>`)
}

///////////////////////////////////////////////////////////////
//CAMBIAR EMPEZAR SI APARECE O NO
const cambiarEmpezar = () => {
    itemsElegidos.length == 3 ? $("#empezar").show() : null
}
const cambiarEmpezar2 = () => {
    $("#empezar").hide()
}



document.addEventListener('DOMContentLoaded', () => {
    const itemsStorage = JSON.parse(localStorage.getItem('itemsElegidos'));
    itemsElegidos = itemsStorage || [];

    actualizarLista();
    renderProducts(armas);
    //crear boton empezar
    empezarB();
    //ocultar barra de vida
    $(".health-bar").hide()
    //crear funcion para el boton empezar
    $("#empezar").click(function () {
        generarEnemigo(enemigo)

    })
    //cargar o no el boton de cambiar items
    itemsElegidos.length != 3 ? $("#botonCambiar").hide() : $("#botonCambiar").show()

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
              <div id="${id}" data-daño=${daño} class="itemS">
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

const enemigoFunciones = () => {
    let hitBtn = $("#listaItemsElegidos"),
        reset = $('button.reset'),
        enemigoStats = $(".enemigo")
    hBar = $('.health-bar'),
        bar = hBar.find('.bar'),
        hit = hBar.find('.hit');

    hitBtn.on("click", function (e) {
        if (e.target.parentElement.dataset.daño == undefined) {
            $(".log").append(`<div>Haz clic en el arma!</div>`)
        } else {
            let statElegido = Number(e.target.parentElement.dataset.daño)
            // let statElegido = Number(e.target)                                                                     

            let total = enemigoStats.data('total'),
                value = enemigoStats.data('value');
            if (value < 0) {
                log("victoria!, enemigo derrotado!");
                return;
            }
            console.log(total)
            // max damage is essentially quarter of max life
            let damage = statElegido
            //   let damage = Math.floor(Math.random()*total);
            // damage = 100;
            let newValue = value - damage;
            // calculate the percentage of the total width
            let barWidth = (newValue / total) * 100;
            let hitWidth = (damage / value) * 100 + "%";

            // show hit bar and set the width
            hit.css('width', hitWidth);
            enemigoStats.data('value', newValue);

            setTimeout(function () {
                hit.css({
                    'width': '0'
                });
                bar.css('width', barWidth + "%");
            }, 500);
            //bar.css('width', total - value);

            log(value, damage, hitWidth);
        }

    });

    reset.on('click', function (e) {

        log("resetting health to 1000");
        $(".log").append(`<div class="lds-hourglass"></div>`)
        setTimeout(() => {
            $('.log').empty()
            enemigoStats.data('value', enemigoStats.data('total'));

            hit.css({
                'width': '0'
            });
            bar.css('width', '100%');
        }, 1000);

    });


    function log(_total, _damage, _hitWidth) {
        let log = $('.log');

        if (_damage !== undefined && _hitWidth !== undefined) {
            log.append(`<div class="logs">H:" + ${_total} +  D: + ${_damage} +  W: + ${_hitWidth} +  =  + (${_total} - ${_damage}) + </div>`);
        } else {
            log.append("<div>" + _total + "</div>");
        }
    };
}

function generarEnemigo(listadoEnemigos) {
    enemigoRandom.innerHTML = ''



    listadoEnemigos.forEach(enemigo => {
        const html = `
            <div class="enemigo" data-total="${enemigo.hp}" data-value="${enemigo.hp}">
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
    enemigoFunciones()
    $(".health-bar").fadeIn("slow")
    $("#empezar").hide()
    $("#botonCambiar").hide()
}
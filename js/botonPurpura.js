// const listaItemsElegidos = document.querySelector('#listaItemsElegidos');
// const randIndex = Math.floor(Math.random() * 6) + 1;
// const enemigoRandom = document.getElementById("enemigoRandom")
// const random = (enemigo) => enemigo.id == 20;
// enemigo = enemigos.filter(random)
$("#botonCambiar").on("click", vaciarLista)
$("#poderes").on('click', agregarItem);

let itemsElegidos;

//CREACION DEL BOTON EMPEZAR
const crearBotonEmpezar = () => {
    itemsElegidos.length == 3 ? $(".botonPurpuraContainer").prepend(`<div class="wrap"><button class="button" id="empezar">Empezar</button></div>`) :
        ($(".botonPurpuraContainer").prepend(`<div class="wrap"><button class="button" id="empezar" class="toggleD">Empezar</button></div>`), $("#empezar").hide() )
}

//FUNCION PARA MOSTRAR O NO EL BOTON EMPEZAR DEPENDIENDO SI HAY 3 PODERES ELEGIDOS

const cambiarEmpezar = () => {
    itemsElegidos.length == 3 ? $("#empezar").show() : null
}

//FUNCION PARA GUARDAR EN STORAGE

function actualizarStorage() {

    localStorage.setItem('itemsElegidos', JSON.stringify(itemsElegidos));
}

//FUNCION PARA RENDERIZAR PODERES A ELEGIR

function renderProducts(listadoOpciones) {
    // $("#poderes").innerHTML = ''

    listadoOpciones.forEach(producto => {
        // const html = 
        $("#poderes").append(`
            <div class="x">
                <img src="${producto.imagen}" class="imgItemS">

                <div class="x">
                    <h4>${producto.nombre}</h4>
                    <p class="x"data-daño="${producto.daño}">Daño base:${producto.daño} x1</p>
                    <a href="#" class="agregar-item" data-id="${producto.id}">Elegir</a>
                </div>
            </div>
        `)
        // listaProductos.innerHTML = listaProductos.innerHTML + html;
        // $("#poderes").innerHTML += html;
        // $("#poderes").html(html);

    });
}

//FUNCION PARA CARGAR DEL ITEMSELEGIDOS DEL STORAGE O DE LA SESION EN CURSO

function actualizarLista() {
    // listaItemsElegidos.innerHTML = '';
    $('#listaItemsElegidos').empty()
    itemsElegidos.forEach(item => {
        const {
            imagen,
            nombre,
            daño,
            id
        } = item;
        let dañoRandom = Math.floor(Math.random() * 100) * daño;


        $('#listaItemsElegidos')
            .append(`
              <div id="${id}" data-daño="${dañoRandom}" class="itemS">
                      <img src="${imagen}" class="imgItemS">
      
                      <div class="x">
                          <h4>${nombre}</h4>
                      </div>
                  </div>
              `);
    });
    if (itemsElegidos.length > 2) {
        $("#botonJuega").hide()
        $(".poderesAElegir").hide()

    }
}

//FUNCION PARA AGREGAR PODERES EN EL BOTON PURPURA

function agregarItem(e) {
    e.preventDefault();

    if (itemsElegidos.length <= 2) {

        if (e.target.classList.contains("agregar-item")) {
            const itemElegido = e.target.parentElement.parentElement;

            const itemAgregado = {
                imagen: itemElegido.querySelector('img').src,
                nombre: itemElegido.querySelector('h4').textContent,
                daño: itemElegido.querySelector('p').dataset.daño,
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

//FUNCION PARA VACIAR PODERES DEL BOTON PURPURA Y DEL STORAGE

function vaciarLista(e) {
    e.preventDefault();

    itemsElegidos = [];

    actualizarLista();
    actualizarStorage();
    $("#empezar").hide()
    $(".poderesAElegir").show();
}


const botonPurpura = () => {

    // renderProducts(poderes);
    $("#botonCambiar").show()
    $("poderesAElegir").show()
    $("#botonJuega").hide()


}



const enemigoFunciones = () => {
    let hitBtn = $("#listaItemsElegidos"),
        hBar = $('.health-bar'),
        bar = hBar.find('.bar');
    let hit = hBar.find('.hit')
    let enemigoStats

    hitBtn.on("click", function (e) {
        $(".enemigoYBarra").fadeOut(200)
        $(".enemigoYBarra").fadeIn(200)
        enemigoStats = $(".enemigo")

        if (e.target.parentElement.dataset.daño == undefined) {
            $(".log").append(`<div>Haz clic en el arma!</div>`)
        } else if (enemigoStats.data('value') < 0) {
            log("victoria!, enemigo derrotado!");
            $("#next").show()
        } else {
            const statElegido = Number(e.target.parentElement.dataset.daño)
            // let statElegido = Number(e.target)                                                                     

            const total = enemigoStats.data('total'),
                value = enemigoStats.data('value');

            // console.log(total)
            // max damage is essentially quarter of max life
            const damage = statElegido
            //   let damage = Math.floor(Math.random()*total);
            // damage = 100;
            const newValue = value - damage;
            // calculate the percentage of the total width
            const barWidth = (newValue / total) * 100;
            const hitWidth = (damage / value) * 100 + "%";

            // show hit bar and set the width
            hit.css('width', hitWidth);
            enemigoStats.data('value', newValue);

            setTimeout(function () {
                // console.log(e.target.parentElement.dataset.daño)
                hit.css({
                    'width': '0'
                });
                bar.css('width', barWidth + "%");

            }, 500);
            //bar.css('width', total - value);

            log(value, damage, hitWidth);

        }

    });




    function log(_total, _damage, _hitWidth) {
        let log = $('.log');

        if (_damage !== undefined && _hitWidth !== undefined && _total >= _total * 1 / 100) {
            log.prepend(`<div class="logs">Enemigo Hp ${_total}: <span class="enemigoDañado"> - ${_damage}</span></div>`);
            setTimeout(() => {
                log.children().last().remove();
            }, 500);
        } else {
            log.prepend(`<div class="enemigoDañado"> ${_total} Haz click en "NEXT" para continuar  </div>`);
        }
    };
}

function generarEnemigo(enemigo) {
    let hpEnemigo = Math.floor((Math.random() * 100) + 1) * 1000;

    $("#enemigoRandom").append(`
            <div class="enemigo" data-total="${hpEnemigo}" data-value="${hpEnemigo}">
                <img src="${enemigo.thumbnail.path}.${enemigo.thumbnail.extension}" class="imgEnemigo">

                <div class="info-card">

                    <h4 class="h4Enemigo">${enemigo.name}</h4>
                    
                    <ul class="ulEnemigo">
                    <p class="pEnemigo">Estadísticas:</p>
                    
                    <li>Hp: ${hpEnemigo}</li>
                    

                    </ul>
   
                </div>
            </div>
        `)
    /* <li>Daño: 10000</li>
                        <li>Nivel de dificultad: 10000</li> */

    $(".health-bar").fadeIn(500)
        .fadeOut(500)
        .fadeIn(500)
        .fadeOut(500)
        .fadeIn(1000);
    $("#empezar").hide();
    $("#botonCambiar").hide();
    $(".enemigoYBarra").fadeIn(500)
        .fadeOut(500)
        .fadeIn(500)
        .fadeOut(500)
        .fadeIn(1000);

}
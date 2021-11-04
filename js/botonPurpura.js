const opciones = document.getElementById("opciones")
const botonJuega = document.getElementById("o6")
const listaItems = document.querySelector("#opciones")
const listaItemsElegidos = document.querySelector('#listaItemsElegidos');
const botonCambiar = document.getElementById("botonCambiar")
const randIndex = Math.floor(Math.random() * 6) + 1;
const enemigoRandom = document.getElementById("enemigoRandom")
const random = (enemigo) => enemigo.id == 20;
enemigo = enemigos.filter(random)



botonCambiar.addEventListener("click", vaciarLista)
listaItems.addEventListener('click', agregarItem);




let itemsElegidos;





//CREACION DEL BOTON EMPEZAR
const empezarB = () => {
    itemsElegidos.length == 3 ? $(".botonPurpuraContainer").prepend(`<div><button id="empezar">Empezar</button></div>`) : $(".botonPurpuraContainer").prepend(`<div><button id="empezar" class="toggleD">Empezar</button></div>`)
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
    //cambiar margin cuando se inicia la web de enemigoYBarra
    $(".enemigoYBarra").css({
        "margin": "0px"
    })
    //ocultar div del enemigo
    $(".enemigoYBarra").hide()
    //ocultar log
    $(".log").hide()
    //crear funcion para el boton empezar


    // $.ajax({
    //     url: 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=3941cce6bcf01110d3c19f39e662bffc&hash=ffbd7e41ef8d1adac6c011225ed3ddee',
    //     method: "GET",
    //     dataType: 'json',
    //     success: function (data) {

            

    //     },
    //     error: function (xhr, status, error) {
    //         console.log(error);
    //     }
    // });
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
                      <img src="${imagen}" class="imgItemS">
      
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


const botonPurpura = () => {

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
            const statElegido = Number(e.target.parentElement.dataset.daño)
            // let statElegido = Number(e.target)                                                                     

            const total = enemigoStats.data('total'),
                value = enemigoStats.data('value');
            if (value < 0) {
                log("victoria!, enemigo derrotado!");
                return;
            }
            console.log(total)
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

        setTimeout(() => {
            $("#enemigoRandom").empty()
            $(".health-bar").hide()

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
            log.prepend(`<div class="logs">H:" + ${_total} +  D: + ${_damage} +  W: + ${_hitWidth} +  =  + (${_total} - ${_damage}) + </div>`);
        } else {
            log.prepend("<div>" + _total + "</div>");
        }
    };
}

function generarEnemigo(enemigo) {

    // listadoEnemigos.forEach(enemigo => {

        //  let power = Number(enemigo.powerstats.power);
        //  let durability = Number(enemigo.powerstats.durability)
        // let speed = Number(enemigo.powerstats.speed)
        // let intelligence = Number(enemigo.powerstats.intelligence)
        // let strength = Number(enemigo.powerstats.strength)
        // let combat = Number(enemigo.powerstats.combat)

        $("#enemigoRandom").append(`
            <div class="enemigo" data-total="10000" data-value="10000">
                <img src="${enemigo.thumbnail.path}.${enemigo.thumbnail.extension}" class="imgEnemigo">

                <div class="info-card">

                    <h4 class="h4Enemigo">${enemigo.name}</h4>
                    
                    <ul class="ulEnemigo">
                    <p class="pEnemigo">Estadísticas:</p>
                    
                    <li>Hp: 10000</li>
                    <li>Daño: 10000</li>
                    <li>Nivel de dificultad: 10000</li>

                    </ul>
   
                </div>
            </div>
        `)
        // $("#enemigoRandom").append(`
        //     <div class="enemigo" data-total="${durability * intelligence}" data-value="${durability * intelligence}">
        //         <img src="${enemigo.images.sm}" class="imgEnemigo">

        //         <div class="info-card">

        //             <h4 class="h4Enemigo">${enemigo.name}</h4>
                    
        //             <ul class="ulEnemigo">
        //             <p class="pEnemigo">Estadísticas:</p>
                    
        //             <li>Hp: ${durability * intelligence}</li>
        //             <li>Daño: ${combat * power}</li>
        //             <li>Nivel de dificultad: ${power + durability + speed + intelligence + strength + combat}</li>

        //             </ul>
   
        //         </div>
        //     </div>
        // `)
    //  }
//    )


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
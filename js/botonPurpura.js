$("#botonCambiar").on("click", vaciarLista)
$("#poderes").on('click', agregarItem);

let itemsElegidos;

//CREACION DEL BOTON EMPEZAR
const crearBotonEmpezar = () => {
    itemsElegidos.length == 3 ? $(".botonPurpuraContainer").prepend(`<div class="wrap"><button class="button" id="empezar">Empezar</button></div>`) :
        ($(".botonPurpuraContainer").prepend(`<div class="wrap"><button class="button" id="empezar" class="toggleD">Empezar</button></div>`), $("#empezar").hide())
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
            <div>
                

                <div class="grupo${producto.grupo}">
                <img src="${producto.imagen}" class="imgItemS agregar-item">

                    <h4>${producto.nombre}</h4>
                    <p class="x"data-daño="${producto.daño}">Daño base:${producto.daño} x1</p>
                    <h5 data-id="${producto.id}">Id = ${producto.id}</h5>
                    <h6 data-type="${producto.type}"> Daño tipo:${producto.type}</h6>
                </div>
            </div>
        `)

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
            type,
            daño,
            id
        } = item;
        let dañoRandom = Math.floor(Math.random() * 100) * daño;


        $('#listaItemsElegidos')
            .append(`
              <div id="${id}" data-daño="${dañoRandom}" data-type="${type}" class="itemS">
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
                id: itemElegido.querySelector('h5').dataset.id,
                type: itemElegido.querySelector('h6').dataset.type

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
    enemigosDerrotados < 10 ? $(".grupo2").hide() : $(".grupo2").show();
    itemsElegidos = [];
    actualizarLista();
    actualizarStorage();

    $("#empezar").hide()
    $(".poderesAElegir").show();
}


const botonPurpura = () => {

    // renderProducts(poderes);
    $("#enemigoRandom").empty();
    $("#botonCambiar").show();
    $("poderesAElegir").show();
    $("#botonJuega").hide();


}



const enemigoFunciones = () => {
    let hitBtn = $("#listaItemsElegidos"),
        hBar = $('.health-bar'),
        bar = hBar.find('.bar');
    let hit = hBar.find('.hit')
    let enemigoStats
    // const types = ["earth", "fire", "energy", "electricity", "water", "poison"]

    hitBtn.on("click", function (e) {
        // $(".enemigoYBarra").fadeOut(200)
        // $(".enemigoYBarra").fadeIn(200)
        enemigoStats = $(".enemigo")

        if (e.target.parentElement.dataset.daño == undefined) {
            $(".log").append(`<div>Haz clic en el arma!</div>`)
        } else if (enemigoStats.data('value') < 0) {
            log("victoria!, enemigo derrotado!");
            $("#next").show()
        } else {
            const statElegido = Number(e.target.parentElement.dataset.daño)
            const tipoDePoder = e.target.parentElement.dataset.type
            // el stat elegido del poder a usar y el tipo                                                                    

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
            console.log(barWidth)
            console.log(hitWidth)


            // show hit bar and set the width
            hit.css('width', hitWidth);
            enemigoStats.data('value', newValue);
            let i = 0
            i = Math.ceil(barWidth);
            setTimeout(function () {
                // console.log(e.target.parentElement.dataset.daño)
                hit.css({
                    'width': '0'
                });
                bar.css('width', barWidth + "%");


                switch (tipoDePoder) {

                    case "poison":
                        i++

                        console.log(i);
                        let poisonEffect = "opacity( 0." + (i) + ")"
                        let poisonEffect2 = "hue-rotate(" + i + "deg)"

                        return $(".imgEnemigo").css("filter", poisonEffect + poisonEffect2)
                                              
                                               .css("border", "2px solid green"),
                            $(".gradientEnemy").css("background", "url(./img/poisonGif.gif)")


                        break;
                    case "fire":
                        let fire = "opacity( 0." + (i) + ")"

                        return $(".imgEnemigo").css("filter", fire)
                                               .css("border", "2px solid red"),
                            $(".gradientEnemy").css("background", "url(./img/magicFire.webp)")

                        break;
                    case "water":
                        let water = "opacity( 0." + (i) + ")"
                        return $(".imgEnemigo").css("filter", water)
                                               .css("border", "2px solid red"),
                            $(".gradientEnemy").css("background", "url(./img/waterGif.gif)")

                            break;
                    case "electricity":
                        let electricity = "opacity( 0." + (i) + ")"

                        return $(".imgEnemigo").css("filter", electricity)
                                               .css("border", "2px solid yellow"),
                            $(".gradientEnemy").css("background", "url(./img/sparkEffect.webp)")
                        break;
                    case "energy":
                        let energy = "opacity( 0." + (i) + ")"

                        return $(".imgEnemigo").css("filter", energy)
                                               .css("border", "2px solid white"),
                            $(".gradientEnemy").css("background", "url(./img/energyEffect.gif)")
                        break;
                        case "earth":
                        let earth = "opacity( 0." + (i) + ")"

                        return $(".imgEnemigo").css("filter", earth)
                                               .css("border", "2px solid brown"),
                            $(".gradientEnemy").css("background", "url(./img/earthEffect.webp)")
                        break;
                    default:
                        break;
                }
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

        .fadeIn(1000);
    $("#empezar").hide();
    $("#botonCambiar").hide();
    $(".enemigoYBarra").fadeIn(100)
        .fadeOut(100)
        .fadeIn(100);

}
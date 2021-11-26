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
            <div class="poderDiv${producto.grupo}">
                

                <div class="grupo${producto.grupo}">
                <img src="${producto.imagen}" class="imgItemS agregar-item">
                <p class="x"data-daño="${producto.daño}"></p>
                <h5 data-id="${producto.id}"></h5>
                <h6 data-type="${producto.type}"></h6>
                    <h4>${producto.nombre}</h4>
                    
                </div>
                <img src="https://img.icons8.com/nolan/64/lock-2.png" class="imgItemS toggleD">

            </div>
        `)

    });
}

//DEJO COMENTADO PARA FUTURAS ACTUALIZACIONES
// <p class="x"data-daño="${producto.daño}">Daño base:${producto.daño} x1</p>
// <h5 data-id="${producto.id}">Id = ${producto.id}</h5>
// <h6 data-type="${producto.type}"> Daño tipo:${producto.type}</h6>


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
    if (enemigosDerrotados >= 20) {
        $("#listaItemsElegidos div").removeClass("itemS").addClass("item")
        $("body").css("background", "url(./img/fondo3.gif)")
            .css("background-repeat", "no-repeat")
            .css("background-position", "bottom")
            .css("background-size", "cover")
        $("nav").css("opacity", "0.4")
        $(".gradientLogs2").fadeOut()
        $(".puntuacionGradient2").css("opacity", "0.8")
        $(".botonRojoContainer2").css("opacity", "0.8")

    } else if (enemigosDerrotados >= 10) {
        $("#listaItemsElegidos").addClass("container");
        $("body").css("background", "url(./img/fondo2.gif)")
            .css("background-repeat", "no-repeat")
            .css("background-position", "bottom")
            .css("background-size", "cover");
        $(".botonPurpuraContainer").addClass("botonPurpuraContainer2")
        $(".botonPurpuraContainer2").removeClass("botonPurpuraContainer")
        $(".botonRojoContainer").addClass("botonRojoContainer2")
        $(".botonRojoContainer2").removeClass("botonRojoContainer")
        $(".botonRojoContainer2").css("border-radius", "200px");
        $(".gradientLogs").addClass("gradientLogs2")
        $(".gradientLogs2").removeClass("gradientLogs")
        // $(".gradientLogs2").css("border-radius", "200px");
        // $(".log").css("width", "200px");
        $(".gradientEnemy").addClass("gradientEnemy2")
        $(".gradientEnemy2").removeClass("gradientEnemy")
        $(".gradientEnemy2").css("border-radius", "200px");
        $(".puntuacionGradient").addClass("puntuacionGradient2")
        $(".puntuacionGradient2").removeClass("puntuacionGradient")
        $("#botonCambiar").css("margin", "0")
        $("#empezar").css("margin", "0")

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
    $("#listaItemsElegidos").show();
    enemigosDerrotados < 10 ? $(".grupo2").hide() : $(".grupo2").show();
    enemigosDerrotados < 20 ? $(".grupo3").hide() : $(".grupo3").show();
    itemsElegidos = [];
    // actualizarLista();
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

    hitBtn.on("click", function (e) {

        enemigoStats = $(".enemigo")

       
        if (e.target.parentElement.dataset.daño == undefined) {
            $(".log").append(`<div>Haz clic en el arma!</div>`)
            setTimeout(() => {
                $(".log").children("div").remove()
    
            }, 500);

        } else if (enemigoStats.data('value') < 0) {

            enemigosDerrotados >= 29 ? null : $(".log").append(`<div>Victoria! click en next para la siguiente ronda!</div>`)
            $("#listaItemsElegidos").hide()
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
                            $(".enemigoYBarra").css("background", "url(./img/poisonGif.gif)"),
                            enemigosDerrotados >= 20 ? $(".botonPurpuraContainer2").css("background", "url(./img/poisonGif.gif)") : null;


                        break;
                    case "fire":
                        let fire = "opacity( 0." + (i) + ")"

                        return $(".imgEnemigo").css("filter", fire)
                            .css("border", "2px solid red"),
                            $(".enemigoYBarra").css("background", "url(./img/magicFire.webp)"),
                            enemigosDerrotados >= 20 ? $(".botonPurpuraContainer2").css("background", "url(./img/magicFire.webp)") : null;

                        break;
                    case "water":
                        let water = "opacity( 0." + (i) + ")"
                        return $(".imgEnemigo").css("filter", water)
                            .css("border", "2px solid blue"),
                            $(".enemigoYBarra").css("background", "url(./img/waterGif.gif)"),
                            enemigosDerrotados >= 20 ? $(".botonPurpuraContainer2").css("background", "url(./img/waterGif.gif)") : null;

                        break;
                    case "electricity":
                        let electricity = "opacity( 0." + (i) + ")"

                        return $(".imgEnemigo").css("filter", electricity)
                            .css("border", "2px solid yellow"),
                            $(".enemigoYBarra").css("background", "url(./img/sparkEffect.webp)"),
                            enemigosDerrotados >= 20 ? $(".botonPurpuraContainer2").css("background", "url(./img/sparkEffect.webp)") : null;

                        break;
                    case "energy":
                        let energy = "opacity( 0." + (i) + ")"

                        return $(".imgEnemigo").css("filter", energy)
                            .css("border", "2px solid white"),
                            $(".enemigoYBarra").css("background", "url(./img/energyEffect.gif)"),
                            enemigosDerrotados >= 20 ? $(".botonPurpuraContainer2").css("background", "url(./img/energyEffect.gif)") : null;

                        break;
                    case "earth":
                        let earth = "opacity( 0." + (i) + ")"

                        return $(".imgEnemigo").css("filter", earth)
                            .css("border", "2px solid brown"),
                            $(".enemigoYBarra").css("background", "url(./img/earthEffect.webp)"),
                            enemigosDerrotados >= 20 ? $(".botonPurpuraContainer2").css("background", "url(./img/earthEffect.webp)") : null;

                        break;
                    case "telekinesis":
                        let telekinesis = "opacity( 0." + (i) + ")"

                        return $(".imgEnemigo").css("filter", telekinesis)
                            .css("border", "2px solid grey"),
                            $(".enemigoYBarra").css("background", "url(./img/telekineticBalls.webp)"),
                            enemigosDerrotados >= 20 ? $(".botonPurpuraContainer2").css("background", "url(./img/telekineticBalls.webp)") : null;

                        break;
                    case "dimensional":
                        let dimensional = "opacity( 0." + (i) + ")"

                        return $(".imgEnemigo").css("filter", dimensional)
                            .css("border", "2px solid orange"),
                            $(".enemigoYBarra").css("background", "url(./img/dimensionBreaking.gif)"),
                            enemigosDerrotados >= 20 ? $(".botonPurpuraContainer2").css("background", "url(./img/dimensionBreaking.gif)") : null;
                        break;
                    case "death":
                        let death = "opacity( 0." + (i) + ")"

                        return $(".imgEnemigo").css("filter", death)
                            .css("border", "2px solid black"),
                            $(".enemigoYBarra").css("background", "url(./img/death.gif)"),
                            enemigosDerrotados >= 20 ? $(".botonPurpuraContainer2").css("background", "url(./img/death.gif)") : null;

                        break;
                    default:
                        break;
                }
            }, 500);


            log(value, damage, hitWidth);
            setTimeout(() => {
                $(".log").children(".logs").remove()
    
            }, 500);


        }

    });




    function log(_total, _damage, _hitWidth) {
        let log = $('.log');

        if (_damage !== undefined && _hitWidth !== undefined && _total >= _total * 1 / 100) {
            log.prepend(`<div class="logs">Enemigo Hp ${_total}: <span class="enemigoDañado"> - ${_damage}</span></div>`);
            
        } else if (_total === undefined) {
            log.prepend(`<div class="enemigoDañado"> Haz click en "EMPEZAR" para continuar  </div>`);
            setTimeout(() => {
                $(".log").children("div").remove()
    
            }, 500);
        } else {
            log.prepend(`<div class="enemigoDañado"> ${_total} Haz click en "NEXT" para continuar  </div>`);
            setTimeout(() => {
                $(".log").children("div").remove()
    
            }, 500);
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
                    <p class="pEnemigo"></p>
                    
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
//BIENVENIDA

$(document).ready(function () {

    $("#bienvenida").append(`<h2 id="h2A">En este minijuego el objetivo es bajarle la vida a los personajes y rematarlos con 3 habilidades iniciales (luego vas a ir desbloqueando más a medida que derrotes cierta cantidad de personajes). Los personajes son débiles o fuertes a ciertas habilidades de forma aleatoria, debes hallar la mejor habilidad para derrotarlo y usarla en el menor tiempo posible!</h2>
    <div><img class="imgBienvenida" src="https://img.icons8.com/nolan/64/arrow.png"/ alt="flecha hacia derecha"></div>`)
    $("#bienvenida").append(`<h2 id=h2B>Para empezar elige tu avatar haciendo click en "AVATAR" (es sólo una imagen de perfil con imágenes a elegir aleatorias y no afecta en nada el juego xD), luego elige 3 habilidades en "ELEGIR PODERES", y finalmente darle click al boton "EMPEZAR".</h2>
        <div><img class="imgBienvenida2" src="https://img.icons8.com/nolan/64/return.png"/></div>`)

    function bienvenida2() {
        $(".imgBienvenida").hide()
        $("#h2A").hide()
        $(".imgBienvenida2").show()
        $("#h2B").show()
    }

    $(".imgBienvenida").click(function () {
        bienvenida2()

    })
    $(".imgBienvenida2").click(function () {
        $(".imgBienvenida").show()
        $("#h2A").show()
        $(".imgBienvenida2").hide()
        $("#h2B").hide()

    })


    function bienvenida() {
        $(".imgBienvenida").hide()
        $("#h2A").hide()
        $(".imgBienvenida2").hide()
        $("#h2B").hide()
        setTimeout(() => {
            $("#h2Inicial").hide()

            $(".imgBienvenida").show()
            $("#h2A").show()

        }, 4000);
    }


    bienvenida()
});
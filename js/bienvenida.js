//BIENVENIDA

$(document).ready(function () {
    



    $("#bienvenida").append(`<div class ="mensaje0"><div class="creditosLinks"><h2 id="h2Inicial">¡Bienvenido a mi proyecto de JavaScript para Coderhouse!</h2>
    <div class="textoImg"><p>- Para las imágenes y nombres, usé la siguiente api:</p> <span><a href="https://developer.marvel.com/" target="_blank"><img src="img/marvelLogo.png"></a></span></div><div class="textoImg"><p>- Fue creado como proyecto final para:</p>
     <span><a href="https://www.coderhouse.com/" target="_blank"><img src="https://res.cloudinary.com/hdsqazxtw/image/upload/v1559681445/logo_coderhouse_3_bllxal.png" alt="coderhouse logo"></a></span></div><div class="textoImg"><p>- Los gifs fueron obtenidos en:</p> <span><a href="https://pislices.ca/" target="_blank"><img src="img/pi-logo.png"></a></span> </div><div class="textoImg"><p>- Página web y minijuego desarrollados por mi Sebastian Fontana:</p> <span><a href="https://github.com/sebastianf777?tab=repositories" target="_blank"><img class="img-zf" src="img/logo-zf.png" alt="logo-zf"></a></span></div> </div><div class="botones"><img class="salir" src="https://img.icons8.com/nolan/64/x.png"/></div>`)

    $("#bienvenida").append(`<div class ="mensaje1"><div class="instrucciones1"><p id="pA">En este minijuego el objetivo es bajarle la vida a los personajes y rematarlos con 3 habilidades iniciales (luego vas a ir desbloqueando más a medida que avances de ronda). Los personajes son débiles o fuertes a ciertas habilidades de forma aleatoria, debes hallar la mejor habilidad para derrotarlos y usarla en el menor tiempo posible!</p><div><img src="./img/instrucciones1.jpg" alt="instrucciones1"><img src="./img/instrucciones1b.jpg" alt="instrucciones1b"></div><p>A medida que el personaje atacado tenga menos vida, su imagen irá desapareciendo. Los daños ocasionados se muestran con color rojo</p></div>
    <div class="botones"><img class="salir" src="https://img.icons8.com/nolan/64/x.png"/><img class="imgBienvenida" src="https://img.icons8.com/nolan/64/arrow.png"/ alt="flecha hacia derecha"></div></div>`)
    $("#bienvenida").append(`<div class ="mensaje2"><div class="instrucciones2"><p id=pB>Para empezar elige tu avatar haciendo click en "AVATAR" (es sólo una imagen de perfil con opciones disponibles aleatorias y no afecta en nada el juego xD), luego elige 3 habilidades en "ELEGIR PODERES", y finalmente dale click al boton "EMPEZAR".</p><div><img src="./img/instrucciones2.png" alt="instrucciones2"><img src="./img/instrucciones2b.png" alt="instrucciones2b"></div></div>
        <div class="botones"><img class="salir" src="https://img.icons8.com/nolan/64/x.png"/><div><img class="imgBienvenida21" src="https://img.icons8.com/nolan/64/arrow-pointing-left.png"/><img class="imgBienvenida2" src="https://img.icons8.com/nolan/64/arrow.png"/></div></div></div>`)
    $("#bienvenida").append(`<div class ="mensaje3"><div class="instrucciones3"><p id=pC>Las habilidades se desbloquean en las rondas 10 y 20 por ahora; pasas de ronda cada vez que haces click en next, que se aparece cuando rematas a tu enemigo una vez que no tiene más vida</p><div><img class ="instrucciones3" src="./img/instrucciones3.png" alt="instrucciones3"><img class ="instrucciones3b" src="./img/instrucciones3b.png" alt="instrucciones3b"></div><p>A medida que avances de rondas y cuando desbloqueas habilidades, pueden pasar cosas inesperadas :P</p></div>
        <div class="botones"><img class="salir" src="https://img.icons8.com/nolan/64/x.png"/><div><img class="imgBienvenida32" src="https://img.icons8.com/nolan/64/arrow-pointing-left.png"/><img class="imgBienvenida3" src="https://img.icons8.com/nolan/64/return.png"/></div></div></div>`)
$(".creditosLinks").append(`<div id="ocultoA" class="textoImg"><p>- Contenido bloqueado hasta la ronda 20</p> <span><a><img src="https://img.icons8.com/nolan/64/lock-2.png" alt="candado"></a></span></div>`)
$(".creditosLinks").append(`<div id="ocultoB" class="textoImg"><p>- Canciones usadas:</p> <span><a href="https://youtube.com/playlist?list=PLHqdM0dcXy9FthGvgl6gWYsqLdca5kRwV" target="_blank"><img src="https://img.icons8.com/plasticine/100/000000/youtube.png" alt="candado"></a></span></div>`)



    function bienvenida2() {
        $(".mensaje1").hide()
        $(".mensaje2").show()
    }

    function bienvenida3() {
        $(".mensaje3").hide()
        $(".mensaje1").show()
    }

    function bienvenida21() {
        $(".mensaje2").hide()
        $(".mensaje1").show()
    }

    function bienvenida32() {
        $(".mensaje3").hide()
        $(".mensaje2").show()
    }
    $(".imgBienvenida").click(function () {
        bienvenida2()
    })
    $(".imgBienvenida3").click(function () {
        bienvenida3()
    })
    $(".imgBienvenida2").click(function () {
        $(".mensaje3").show()
        $(".mensaje2").hide()
    })
    $(".imgBienvenida21").click(function () {
        bienvenida21()

    })
    $(".imgBienvenida32").click(function () {
        bienvenida32()

    })
    $(".salir").click(function () {
        $("#bienvenidaArticle").fadeOut()
    })
    $(".instrucciones").click(function () {
        $("#bienvenidaArticle").fadeIn()
        $(".mensaje0").hide()
    $(".mensaje1").show()
    })
    $(".créditos").click(function () {
        $("#bienvenidaArticle").fadeIn()
    $(".mensaje0").show()
    $(".mensaje1, .mensaje2, .mensaje3").hide()
    

    })
    function bienvenida() {
        $(".mensaje1").hide()
        // $("#pA").hide()
        $(".mensaje2").hide()
        // $("#pB").hide()
        $(".mensaje3").hide()
        // $("#pC").hide()
        setTimeout(() => {
            $(".mensaje0").hide()

            $(".mensaje1").show()
            // $("#pA").show()

        }, 4000);
    }


    bienvenida()
});
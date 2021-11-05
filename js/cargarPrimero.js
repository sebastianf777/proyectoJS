document.addEventListener('DOMContentLoaded', () => {
    const itemsStorage = JSON.parse(localStorage.getItem('itemsElegidos'));
    itemsElegidos = itemsStorage || [];

    actualizarLista();
    renderProducts(poderes);
    //crear boton empezar
    empezarB();
    //ocultar barra de vida
    $(".health-bar").hide()
    //cambiar margin cuando se inicia la web de enemigoYBarra
    $(".enemigoYBarra").css({
        "margin": "0px"
    })
    //ocultar next
    $("#next").hide()
    //ocultar div de los avatars
    $(".espacioClass").hide()
    //ocultar div del enemigo
    $(".enemigoYBarra").hide()
    //ocultar puntuacion y resultados
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
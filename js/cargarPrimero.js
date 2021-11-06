

   
document.addEventListener('DOMContentLoaded', () => {
    const itemsStorage = JSON.parse(localStorage.getItem('itemsElegidos'));
    itemsElegidos = itemsStorage || [];
    
   
    actualizarLista();
    renderProducts(poderes);
    //crear boton empezar
    crearBotonEmpezar();
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
    //ocultar poderes a elegir
    $(".poderesAElegir").hide()
    //ocultar log
    $(".log").hide()
    //crear funcion para el boton empezar

    itemsElegidos.length != 3 ? $("#botonCambiar").hide() : $("#botonCambiar").show()

});
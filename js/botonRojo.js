//BOTON ROJO "ELIGE TU AVATAR"

let avatarElegido = []

function renderAvatars(listadoAvatars) {

    $("#botonPurpura").hide()
    listadoAvatars.forEach(avatar => {
        $("#espacioAvatars").append(`
                <div>
                    <img src="${avatar.thumbnail.path}.${avatar.thumbnail.extension}" class="heroAvatar">
                </div>
            `)
        // listaProductos.innerHTML = listaProductos.innerHTML + html;
        // opciones.innerHTML += html;
    });

}


function elegirAvatar(e) {
    e.preventDefault();

    if (e.target.classList.contains("heroAvatar")) {
        const avatarAElegir = e.target;


        const itemAgregado = {
            imagen: avatarAElegir.getAttribute("src"),
        }
        $("#botonRojoDiv").empty()
        $("#botonRojoDiv").append(`
                <img src="${itemAgregado.imagen}" class="imgAvatar"></img>`)
        $("#botonPurpura").show()
        $("#espacioAvatars").hide()
        // avatarElegido.push(itemAgregado) ;
        $(".imgAvatar").click(function (e) {
            
            $("#botonPurpura").hide()


            $("#espacioAvatars").show()

            elegirAvatar(e)

        })

    } 
    // actualizarLista();
    // actualizarStorage();
    // cambiarEmpezar();
}



//BOTON ROJO "ELIGE TU AVATAR"



// const botonACrear = document.getElementById("botonACrear")
// const sectionE = document.getElementById("espacio")

// const cambiarClase = () => {
//     sectionE.classList.replace("toggleD", "espacioClass");
//     botonACrear.removeChild(botonACrear.lastChild)
//     $(".botonPurpuraContainer").hide()

// }

// const crearBoton = () => {
//     const boton = document.createElement("button");
//     boton.textContent = "Quieres cambiar de Avatar?"
//     botonACrear.appendChild(boton);
//     boton.id = "botonNuevo";
//     boton.addEventListener("click", cambiarClase);



// }

//  $( document ).ready(function() {
//     listaDeAvatars = []

//     $(".heroAvatar").click(function () {
//         elegirAvatar()
//     })
//  });
let avatarElegido = []

function renderAvatars(listadoAvatars) {

    $(".botonPurpuraContainer").hide()
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
        $(".botonRojoContainer").empty()
        $(".botonRojoContainer").append(`
                <img src="${itemAgregado.imagen}" class="imgAvatar"></img>`)
        $(".botonPurpuraContainer").show()
        $("#espacioAvatars").hide()
        // avatarElegido.push(itemAgregado) ;
        $(".imgAvatar").click(function (e) {
            
            $(".botonPurpuraContainer").hide()


            $("#espacioAvatars").show()

            elegirAvatar(e)

        })

    } 
    // actualizarLista();
    // actualizarStorage();
    // cambiarEmpezar();
}



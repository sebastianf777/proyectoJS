//BOTON 5 ELIGE

const botonACrear = document.getElementById("botonACrear")
const sectionE = document.getElementById("espacio")

const cambiarClase = () => {
    sectionE.classList.replace("toggleD", "espacioClass");
    botonACrear.removeChild(botonACrear.lastChild)
}

const crearBoton = () => {
    const boton = document.createElement("button");
    boton.textContent = "Quieres cambiar de Animal?"
    botonACrear.appendChild(boton);
    boton.id = "botonNuevo";
    boton.addEventListener("click", cambiarClase);
    

}

const boton5 = () => {
    const o5 = document.getElementById("o5")
    o5.classList.add("toggleD")
    sectionE.textContent = "Elige tu animal favorito!"

    let counter = 1;
    for (var i = 0; i < 3; i++) {
        const block = document.createElement('div');
        block.id = "idE" + (counter++);
        sectionE.appendChild(block);
        block.classList.add("divE")
    }

    const imagen1 = document.getElementById("idE1")
    const imagen2 = document.getElementById("idE2")
    const imagen3 = document.getElementById("idE3")

    imagen1.innerHTML = "<img src=img/1.svg width=150px>"
    imagen2.innerHTML = "<img src=img/2.svg width=150px>"
    imagen3.innerHTML = "<img src=img/3.svg width=150px>"


    let imagenes = [{
            img: "img/1.svg "
        },
        {
            img: "img/2.svg "
        },
        {
            img: "img/3.svg "
        }
    ]



    const divOpt1 = document.querySelector(".img5")

    const ponerImg1 = () => {
        divOpt1.src = imagenes[0].img;
        sectionE.classList.replace("espacioClass", "toggleD");
        crearBoton()
    }
    const ponerImg2 = () => {
        divOpt1.src = imagenes[1].img;
        sectionE.classList.replace("espacioClass", "toggleD")
        crearBoton()

    }
    const ponerImg3 = () => {
        divOpt1.src = imagenes[2].img;
        sectionE.classList.replace("espacioClass", "toggleD")
        crearBoton()

    }


    imagen1.addEventListener("click", ponerImg1)
    imagen2.addEventListener("click", ponerImg2)
    imagen3.addEventListener("click", ponerImg3)

}

// const botonCreado = document.querySelector("botonNuevo")
// botonCreado.addEventListener("click", boton5)
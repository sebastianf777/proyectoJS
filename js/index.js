// const Bienvenida = () => {
//   let nombre = prompt("¡Bienvenido! Señor o señora ...?");
//   while (nombre == "") {
//     alert("Por favor ingrese su nombre para poder continuar.\nA ver vamos de vuelta, una vez más :D");
//     nombre = prompt("Te llamas...?");
//   }
//   alert(nombre + " te doy la bienvenida a mi desafio para Coderhouse n°4 xD");
// }
// Bienvenida();


const userInput = document.getElementById('userInput');
const usuario = document.getElementById('usuario');

function updateValue(e) {
  usuario.textContent = e.target.value;
  userInput.style.display = "none";
}
userInput.addEventListener('change', updateValue);




const boton1 = () => {

  let signos = `
1 - Aries
2 - Tauro
3 - Géminis
4 - Cáncer
5 - Leo
6 - Virgo
7 - Libra
8 - Escorpio
9 - Sagitario
10 - Capricornio
11 - Acuario
12 - Piscis
0 - Finalizar`

  let menu = Number(prompt(
    ` Cada signo zodiacal tiene un elemento vinculado (agua, fuego, tierra y aire), elige el nº de tu signo para saber tu elemento:
  ${signos}
`));

  const menu2 = () => {
    menu = Number(prompt(
      ` ¿Deseas consultar por algún otro?
 ${signos}`
    ))
  }

  const respuesta = () => {
    while (menu != 0) {
      switch (menu) {
        case 1:
        case 5:
        case 9:
          alert(`El elemento de tu signo es FUEGO`);
          menu2();

          break;
        case 2:
        case 6:
        case 10:
          alert(`El elemento de tu signo es TIERRA`);
          menu2();
          break;
        case 3:
        case 7:
        case 11:
          alert(`El elemento de tu signo es AIRE`);
          menu2();
          break;
        case 4:
        case 8:
        case 12:
          alert(`El elemento de tu signo es AGUA`);
          menu2();
          break;
        default:
          menu = Number(prompt(
            `La opción ingresada es incorrecta
          ${signos}
      `));
          break;
      }
    }

  }
  respuesta();

}


const boton2 = () => {
  const adivinanza = () => {
    alert("¿Preparado para dos adivinanzas? O.o")
    alert(`Ahora la primera! (tienes 5 intentos):`);
    for (let i = 1;
      (i < 6); i++) {
      let intentos = 6;
      let respuestaAdiv = prompt(`Tenés ${intentos - i} intentos
Aquí va:
Blanca por dentro,
verde por fuera.
Si no sabes,
espera.
(son dos palabras y la primera es un artículo)`).toLowerCase();
      `${respuestaAdiv == `la pera` ? i = 5 && alert(`Bien ahí :D sigamos`) : alert(`Nooooope, 1 intento menos`)}`;
    }
    alert("La respuesta era la pera por si no acertaste")

  }
  adivinanza();

  //método 2

  const adivinanza2 = () => {

    for (let i = 1;
      (i < 6); i++) {
      let intentos = 6;

      let respuestaAdiv = prompt(
        `Tenés ${intentos - i} intentos
Ahora otra adivinanza e.e Tenés 5 intentos
Aquí va:
El roer es mi trabajo,
el queso mi aperitivo
y el gato ha sido siempre
mi más temido enemigo.
(son dos palabras la primera es un artículo)`).toLowerCase();
      `${respuestaAdiv == `el ratón` ? i = 5 && alert(`Bien ahí :D sigamos`) : alert(`Nooooope, 1 intento menos`)}`;
    }


    //     for (let i = 1;
    //       (i < 5) && (respuestaAdiv != "el ratón"); i++) {
    //       let intentos = 5;
    //       respuestaAdiv = prompt(`Tenés ${intentos - i} intentos
    //   El roer es mi trabajo,
    // el queso mi aperitivo
    // y el gato ha sido siempre
    // mi más temido enemigo.
    // (son dos palabras)`).toLowerCase();

    // }
    alert("La respuesta era el ratón!. Eso fue todo por hoy")
  }
  adivinanza2();
}


const boton3 = () => {


  function Resultados(res1, res2, res3) {
    this.res1 = res1;
    this.res2 = res2;
    this.res3 = res3;
  }

  const o3P = new Resultados(prompt(`Verdadero o Falso?:
  Cuando hace mucho frío un vasito de alcohol hace entrar en calor. `).toLowerCase(),
    prompt(`La mitad de dos más dos es tres`), prompt(`Francia es el segundo país más grande de Europa.`)
  );

  function Mostrar() {
    alert(`
    Las respuestas eran:
    - Falso
    https://verne.elpais.com/verne/2015/11/06/articulo/1446806286_013914.html
    - Verdadero
    Sí. La mitad de dos es 1 más 2 igual a tres.
    - Verdadero
    Si (y el primero es Rusia por si te lo preguntabas)

    Tus resultados fueron:
    - ${o3P.res1}
    - ${o3P.res2}
    - ${o3P.res3}`)

  }
  Mostrar()
}

const boton4 = () => {

  let lista = []

  function Datos(nombre, apellido, año) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.año = año;
  }

  lista.push(new Datos(`Carlos`, `García`, `1994`))
  lista.push(new Datos(`Juan`, `Ledesma`, `2014`))
  lista.push(new Datos(`Ignacio`, `Barrios`, `2000`))
  lista.push(new Datos(`Juan`, `Fonseca`, `2017`))
  lista.push(new Datos(`Luis`, `Bartolomeu`, `1991`))
  lista.push(new Datos(`Juan`, `Barrionuevo`, `1999`))
  lista.push(new Datos(`Lucas`, `Fagioli`, `2015`))
  lista.push(new Datos(`Gabiel`, `Roldán`, `2001`))
  lista.push(new Datos(`Oscar`, `Barrionuevo`, `1999`))
  lista.push(new Datos(`Alejandro`, `Toledo`, `1995`))


  let resultado1
  resultado1 = lista.filter((Datos) => Datos.nombre == "Juan" && Datos.año <= 2012)
  let resultado2
  resultado2 = lista.filter((Datos) => Datos.apellido == "Roldán" && Datos.año <= 2012)
  let resultado4

  const res4 = () => {
    let resultado4 = lista.sort(function (a, b) {
      if (a.nombre < b.nombre)
        return -1;
      if (a.nombre > b.nombre)
        return 1;
      return 0;
    })
    alert(JSON.stringify(resultado4))
  }

  const res5 = () => {
    let resultado5
    resultado5 = lista.sort(function (a, b) {
      if (a.apellido < b.apellido)
        return -1;
      if (a.apellido > b.apellido)
        return 1;
      return 0;

    })
    alert(JSON.stringify(resultado5))

  }
  const res6 = () => {
    let resultado6
    resultado6 = lista.sort((a, b) => b.año - a.año)
    alert(JSON.stringify(resultado6))
  }

  // items.sort(function (a, b) {
  //   if (a.name > b.name) {
  //     return 1;

  let opcion = prompt(`Eres un detective y estás consultando la base de datos del RNR (Registro Nacional de Reincidencia).
Estás investigando a 2 sospechosos, consigues dar con algunos de sus datos y sabes que el delito lo cometieron en el 2019.
Tu primer sospechoso se llama Juan. EL segundo se apellida Roldán,  Al entrar al sistema, decides:
1 - Filtrar por Nombre Juan y Año menor a 2012
2 - Filtrar por Apellido Roldán y Año menos a 2012
3 - Mostrar lista completa
4 - Ordenar por Nombre
5 - Ordenar por Apellido
6 - Ordenar por Año`)

  while (opcion >= 7) {
    alert("Por favor ingresa una de las opciones");
    opcion = prompt(
      `1 - Filtrar por Nombre Juan y Año menores a 2012
     2 - Filtrar por Apellido Roldán y Año menores a 2012
     3 - Mostrar lista completa
     4 - Ordenar por Nombre
     5 - Ordenar por Apellido
     6 - Ordenar por Año`)
  }

  opcion == 1 ? alert(JSON.stringify(resultado1)) : null
  opcion == 2 ? alert(JSON.stringify(resultado2)) : null
  opcion == 3 ? alert(JSON.stringify(lista)) : null
  opcion == 4 ? res4() : null
  opcion == 5 ? res5() : null
  opcion == 6 ? res6() : null

}


// let frases = []

// function palabras (p1, p2, p3){
//   this.res1 = p1;
//   this.res2 = p2;
//   this.res3 = p3;
// }

// frases.push(new palabras(prompt(`Los planetas son...`), prompt(`donde los seres vivos...`), prompt(`y...`)))
// frases.push(new palabras(prompt(`La vida es...`), prompt(`y deberiamos...`), prompt(`pero sobretodo...`)))

// alert(`Tus historias terminaron así` + frases)

// const cantPersonas = Number(prompt("Ingrese la cantidad de personas"));

// for (let i = 0; i < cantPersonas; i++) {
// 	const nombre = prompt(`Ingresa el nombre de la persona ${i + 1}`);
// 	const apellido = prompt(`Ingresa el apellido de la persona ${i + 1}`);
// 	const edad = prompt(`Ingresa el edad de la persona ${i + 1}`);
// 	const ciudad = prompt(`Ingresa el ciudad de la persona ${i + 1}`);

// 	const persona = new Persona(nombre, apellido, edad, ciudad);
// 	personas.push(persona);
// }

// alert(`Tus historias terminaron así $(frases)`)

// document.getElementById("o1").addEventListener("click", function() {
//   boton1();
// });
// document.getElementById("o2").addEventListener("click", function() {
//   boton2();
// });
// document.getElementById("o3").addEventListener("click", function() {
//   boton3();
// });
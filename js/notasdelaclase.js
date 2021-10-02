/* Arreglos */

// const persona = {
// 	nombre: "Luis",
// 	apellido: "Perez"
// }

const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

// const cambalache = ["Soy un texto", 34, true, { nombre: "Luis", apellido: "Perez" }, [1, 2, 3]];

// console.log(persona)
// console.log(diasSemana[0]);
// console.log(cambalache[3]);

// const personas = [];



// const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

// const dias2 = ["Monday", "Tuesday"];


// for (let i = 0; i < diasSemana.length; i++) {
// 	console.log(diasSemana[i]);
// }

/* Modificar un elemento */
// diasSemana[6] = "Sunday";

/* Agregar un elemento "al final" */
// diasSemana.push("Osvaldo");

/* Agregar un elemento "al principio"  */
// diasSemana.unshift("Primer dia");

/* Eliminar el último elemento del arreglo */
// diasSemana.pop();

/* Eliminar el primer elemento */
// diasSemana.shift();


// console.log(diasSemana);

// diasSemana.toString():

// const nuevosDias = diasSemana.concat(dias2);
// const nuevosDias = [...diasSemana, ...dias2]; // spread operator / rest operator (ES6)
// const nuevosDias = [ diasSemana[0], diasSemana[1], diasSemana[2], ..., dias2[0], dias2[1],...  ]
// console.log(nuevosDias);

/* Ejemplo 1 */

// const cantTareas = Number(prompt("Ingrese la cantidad"));

// let listaTareas = [];
// for (let i = 0; i < cantTareas; i++) {
// 	const tarea = prompt(`Ingrese la tarea ${i + 1}`);

// 	listaTareas.push(tarea);
// }

// console.table(listaTareas);


/* Ejemplo 2 */

class Persona {
	constructor(nombreParam, apellidoParam, edadParam, ciudadParam) {
		this.nombre = nombreParam;
		this.apellido = apellidoParam;
		this.edad = edadParam;
		this.ubicacion = {
			ciudad: ciudadParam
		}
		this.puntos = undefined;
		this.activo = true;
	}
	saludar() {
		console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`)
	}
}




// const cantPersonas = Number(prompt("Ingrese la cantidad de personas"));

// for (let i = 0; i < cantPersonas; i++) {
// 	const nombre = prompt(`Ingresa el nombre de la persona ${i + 1}`);
// 	const apellido = prompt(`Ingresa el apellido de la persona ${i + 1}`);
// 	const edad = prompt(`Ingresa el edad de la persona ${i + 1}`);
// 	const ciudad = prompt(`Ingresa el ciudad de la persona ${i + 1}`);

// 	const persona = new Persona(nombre, apellido, edad, ciudad);
// 	personas.push(persona);
// }

personas.push(new Persona("Juan", "Perez", 23, "Gral Roca"));
personas.push(new Persona("Luis", "Grande", 54, "Allen"));
personas.push(new Persona("Carlos", "Tevez", 14, "Neuquen"));
personas.push(new Persona("Enzo", "Perez", 87, "Cordoba"));
personas.push(new Persona("Leonel", "Messi", 32, "Buenos Aires"));

// console.log(personas);

// for (const persona of personas) {
// 	if (persona.nombre === "Enzo") {
// 		console.log("Existe un Enzo")
// 	}
// }

/* FOR EACH */
// personas.forEach((persona, index, arr) => {
// 	console.log(`Iteración ${index}`);
// 	console.log(persona);
// 	console.log(index);
// 	console.log(arr);
// 	console.log("==============");
// })

/* Encontrar UN SOLO elemento que cumpla una condición */
// const resultado = personas.find( persona => persona.nombre === "Martin" );

/* Encontrar TODOS los elementos que cumplan una condicion */
const resultado = personas.filter((persona) => persona.edad > 30);

// const nuevasPersonas = personas.map((persona) => {
// 	return persona.nombre + " " + persona.apellido;
// });

// console.log(resultado);
// console.log(nuevasPersonas);

// for (let i = 0; i < personas.length; i++) {
// 	console.log(personas[i])
// }

personas.indexOf();
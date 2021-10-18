//BOTON 4 INVESTIGA
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
  
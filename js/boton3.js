//BOTON 3 TRUE OR FALSE
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
      El alcohol da la sensación de calentarse por unos minutos, pero despues te cagas de frío (y no te das cuenta)
      lo saqué de aquí :v => https://verne.elpais.com/verne/2015/11/06/articulo/1446806286_013914.html
      - Verdadero
      Sí. La mitad de dos es 1, más 2 igual a tres.
      - Verdadero
     (Y el primero es Rusia por si te lo preguntabas)
  
      Tus resultados fueron:
      - ${o3P.res1}
      - ${o3P.res2}
      - ${o3P.res3}`)
  
    }
    Mostrar()
  }
  
//BOTON 1 -TU ELEMENTO
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
  
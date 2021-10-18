//BOTON 2 ADIVINANZAS
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
        `${respuestaAdiv == `la pera` ? i = 5 && alert(`Bien ahí :D sigamos`) : (i != 4 ? (i == 5 ? alert(`Será para la próxima :V`):alert(`Nooooope, 1 intento menos`)) : alert(`Último intento >_<`))}`;
  
      }
    }
    adivinanza();
  
    //método 2
  
    const adivinanza2 = () => {
  
      for (let i = 1;
        (i < 6); i++) {
        let intentos = 6;
        let respuestaAdiv = prompt(
          `Tenés ${intentos - i} intentos
  Ahora otra adivinanza e.e
  Aquí va:
  El roer es mi trabajo,
  el queso mi aperitivo
  y el gato ha sido siempre
  mi más temido enemigo.
  (son dos palabras la primera es un artículo y una lleva acento *-*)`).toLowerCase();
        `${respuestaAdiv == `el ratón` ? i = 5 && alert(`Bien ahí xD`) : (i != 4 ? (i == 5 ? alert(`Será para la próxima :V`):alert(`Nooooope, 1 intento menos`)) : alert(`Último intento >_<`))}`;
      }
  
      alert("Eso fue todo por esta sección. Gracias por participar :)")
    }
    adivinanza2();
  }
  
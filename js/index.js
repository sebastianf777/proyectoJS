//BIENVENIDA

const userInput = document.getElementById('userInput');
const usuario = document.getElementById('usuario');

function updateValue(e) {
  usuario.textContent = e.target.value;
  userInput.style.display = "none";
}
userInput.addEventListener('change', updateValue);







// Variables para almacenar la elección del jugador
let eleccionJugador;

// Seleccionar elementos del DOM
const botonInicio = document.getElementById("inicio");
const eleccionBotones = document.getElementById("eleccion-botones");
const botonPiedra = document.getElementById("piedra");
const botonPapel = document.getElementById("papel");
const botonTijera = document.getElementById("tijera");
const resultado = document.getElementById("resultado");

// Mostrar los botones de elección al presionar "Inicio"
botonInicio.addEventListener("click", function () {
    eleccionBotones.style.display = "block"; // Mostrar los botones
    resultado.textContent = ""; // Limpiar el resultado anterior
});

// Asignar la elección del jugador al presionar un botón
botonPiedra.addEventListener("click", function () {
    eleccionJugador = "piedra";
    mostrarEleccion();
});

botonPapel.addEventListener("click", function () {
    eleccionJugador = "papel";
    mostrarEleccion();
});

botonTijera.addEventListener("click", function () {
    eleccionJugador = "tijera";
    mostrarEleccion();
});

// Función para mostrar la elección del jugador
function mostrarEleccion() {
    resultado.textContent = "Elegiste: " + eleccionJugador;
    // Aquí puedes llamar a un método para comparar con la elección de la computadora
    compararElecciones(eleccionJugador);
}

// Método para comparar elecciones (simulación básica)
function compararElecciones(eleccionJugador) {
    const opciones = ["piedra", "papel", "tijera"];
    const eleccionComputadora = opciones[Math.floor(Math.random() * 3)];

    // Mostrar la elección de la computadora
    resultado.textContent += "\nLa computadora eligió: " + eleccionComputadora;

    // Determinar el resultado
    if (eleccionJugador === eleccionComputadora) {
        resultado.textContent += "\n¡Es un empate!";
    } else if (
        (eleccionJugador === "piedra" && eleccionComputadora === "tijera") ||
        (eleccionJugador === "papel" && eleccionComputadora === "piedra") ||
        (eleccionJugador === "tijera" && eleccionComputadora === "papel")
    ) {
        resultado.textContent += "\n¡Ganaste!";
    } else {
        resultado.textContent += "\n¡Perdiste!";
    }
}
// Agregar evento a los botones de gol
document.querySelectorAll('.gol').forEach(button => {
    button.addEventListener('click', function() {
        const row = this.closest('tr'); // Obtener la fila correspondiente
        updatePoints(row, 3); // Sumar 3 puntos por gol
    });
});

// Agregar evento a los botones de empate
document.querySelectorAll('.empate').forEach(button => {
    button.addEventListener('click', function() {
        const row = this.closest('tr'); // Obtener la fila correspondiente
        updatePoints(row, 1); // Sumar 1 punto por empate
    });
});
// Agregar evento a los botones de empate
document.querySelectorAll('.BORRAR').forEach(button => {
    button.addEventListener('click', function() {
        const row = this.closest('tr'); // Obtener la fila correspondiente
        updatePoints(row, -1); // Sumar 1 punto por empate
    });
});

// Actualiza los puntos de un equipo
function updatePoints(row, puntos) {
    const puntosCell = row.querySelector('.puntos');
    let currentPoints = parseInt(puntosCell.textContent);
    currentPoints += puntos; // Sumar los puntos
    puntosCell.textContent = currentPoints; // Actualizar la celda de puntos
}

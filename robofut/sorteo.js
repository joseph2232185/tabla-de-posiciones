// Equipos de ejemplo en 4 bombos
const bombos = [
    ["Real Madrid", "Barcelona", "Bayern Munich", "Chelsea"],
    ["Paris Saint-Germain", "Manchester City", "Liverpool", "Juventus"],
    ["Borussia Dortmund", "Atletico Madrid", "Inter Milan", "Sevilla"],
    ["RB Leipzig", "Ajax", "Porto", "Benfica"]
];

// Función para sortear los equipos
function sortearGrupos() {
    const grupos = [[], [], [], []]; // 4 grupos
    const gruposContainer = document.getElementById("groups");
    gruposContainer.innerHTML = ""; // Limpiar grupos anteriores

    for (let i = 0; i < bombos.length; i++) {
        let bombo = [...bombos[i]]; // Clonar el bombo
        for (let j = 0; j < 4; j++) { // Asignar un equipo a cada grupo
            const randomIndex = Math.floor(Math.random() * bombo.length);
            const equipo = bombo.splice(randomIndex, 1)[0];
            grupos[j].push(equipo);
        }
    }

    // Mostrar los grupos sorteados
    for (let i = 0; i < grupos.length; i++) {
        let groupDiv = document.createElement("div");
        groupDiv.classList.add("group");
        groupDiv.innerHTML = `<h3>Grupo ${String.fromCharCode(65 + i)}</h3>`;
        grupos[i].forEach(equipo => {
            groupDiv.innerHTML += `<p>${equipo}</p>`;
        });
        gruposContainer.appendChild(groupDiv);
    }
}

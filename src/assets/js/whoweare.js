document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".stat-number, .stat-percentage");

    counters.forEach(counter => {
        counter.innerText = "0"; // Iniciar en 0
        const updateCounter = () => {
            const target = +counter.getAttribute("data-target"); // Obtener número final
            const current = +counter.innerText.replace(/\D/g, ""); // Quitar cualquier carácter no numérico
            const increment = target / 100; // Incremento suave

            if (current < target) {
                counter.innerText = `${counter.classList.contains("stat-percentage") ? "⬆ " : ""}${Math.ceil(current + increment)}${counter.classList.contains("stat-percentage") ? "%" : ""}`;
                setTimeout(updateCounter, 20); // Ajusta la velocidad aquí (milisegundos)
            } else {
                counter.innerText = `${counter.classList.contains("stat-percentage") ? "⬆ " : ""}${target}${counter.classList.contains("stat-percentage") ? "%" : ""}`; // Asegurar valor final con flecha
            }
        };

        updateCounter(); // Iniciar animación
    });
});

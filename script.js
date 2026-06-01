document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todas las tarjetas del DOM
    const tarjetas = document.querySelectorAll('.tarjeta');
    
    // Asigna eventos de clic para interacción simple
    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener('click', () => {
            console.log("Seleccionado: " + tarjeta.innerText);
        });
    });
});

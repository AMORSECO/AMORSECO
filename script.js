// Este archivo ahora cumple su función de inicializar la interfaz
document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos todas las tarjetas para asegurar que el DOM esté listo
    const tarjetas = document.querySelectorAll('.tarjeta');
    
    tarjetas.forEach(tarjeta => {
        // Logica para interacción: muestra en consola qué sendero se eligió
        tarjeta.addEventListener('click', () => {
            console.log("Sendero seleccionado: " + tarjeta.innerText);
        });
    });
    console.log("Sistema de senderos inicializado correctamente.");
});

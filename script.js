function changeTrail(name, color) {
    const banner = document.getElementById('banner');
    const trailText = document.getElementById('trail-name');
    
    // Cambia el color de fondo y el nombre del sendero
    banner.style.backgroundColor = color;
    trailText.innerText = name;
}

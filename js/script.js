document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Efecto de cambio de fondo del Navbar al hacer Scroll
    const mainNavbar = document.getElementById('main-navbar');
    const scrollThreshold = 50; // Pixeles para empezar a cambiar

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            // Cuando el usuario ha bajado lo suficiente
            mainNavbar.style.backgroundColor = 'rgba(17, 17, 17, 0.9)'; // Negro semi-transparente
            mainNavbar.style.backdropFilter = 'blur(5px)'; // Efecto de desenfoque moderno
            mainNavbar.classList.add('shadow-lg'); // Sombra más pronunciada
        } else {
            // En la parte superior de la página
            mainNavbar.style.backgroundColor = '#111111'; // Color negro sólido original
            mainNavbar.style.backdropFilter = 'none';
            mainNavbar.classList.remove('shadow-lg');
        }
    });

    // 2. Mensaje en la consola para los desarrolladores
    console.log("%c✨ ÑAK'UTAS - Cabello Sano ✨", "font-family: 'Playfair Display', serif; font-size: 20px; color: #FFD700;");
    console.log("Desarrollo por: [Tu Nombre/Equipo]");
    
    // 3. Inicialización de Carrusel de Bootstrap (aunque data-bs-ride="carousel" lo hace automático)
    var myCarousel = document.getElementById('mainCarousel');
    if (myCarousel) {
        new bootstrap.Carousel(myCarousel, {
            interval: 5000, // Cambia de slide cada 5 segundos
            pause: 'hover' // Pausa cuando el mouse está sobre el carrusel
        });
    }

});
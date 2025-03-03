    // JavaScript para el menú móvil
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    menuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // JavaScript para el botón
    document.getElementById("servicesButton").addEventListener("click", () => {
      alert("Explora todos los servicios que ofrecemos en Grupo Marte Legal.");
    });

        document.getElementById('legalForm').addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Obtener valores
            let nombre = document.getElementById('nombre').value.trim();
            let correo = document.getElementById('correo').value.trim();
            let descripcion = document.getElementById('descripcion').value.trim();

            // Validaciones
            document.getElementById('errorNombre').classList.toggle('hidden', nombre !== '');
            document.getElementById('errorCorreo').classList.toggle('hidden', /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo));
            document.getElementById('errorDescripcion').classList.toggle('hidden', descripcion !== '');

            if (nombre !== '' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo) && descripcion !== '') {
                alert("Formulario enviado con éxito!");
                document.getElementById('legalForm').reset();
            }
        });



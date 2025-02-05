// =============================
// Espera a que el contenido del DOM esté completamente cargado
// =============================
document.addEventListener("DOMContentLoaded", function() {
    
    // =============================
    // Manejar el botón "Añadir a la cesta" en el modal
    // =============================
    document.getElementById('modal-button').addEventListener('click', function() {
        // Obtiene los atributos del botón que representan la imagen, el título y el precio del producto
        const productImage = this.getAttribute('data-image'); // Obtener la imagen del producto
        const productTitle = this.getAttribute('data-title'); // Obtener el título del producto
        const productPrice = this.getAttribute('data-price'); // Obtener el precio del producto

        // Crear un objeto del producto con sus propiedades
        const product = {
            image: productImage, // Asignar la imagen del producto
            title: productTitle, // Asignar el título del producto
            price: productPrice   // Asignar el precio del producto
        };

        // Obtener la cesta actual del localStorage o crear una nueva si no existe
        let cart = JSON.parse(localStorage.getItem('cart')) || []; // Si no hay cesta, inicializa como un array vacío

        // Añadir el producto a la cesta
        cart.push(product); // Añadir el nuevo producto al array de la cesta

        // Guardar la cesta actualizada en localStorage
        localStorage.setItem('cart', JSON.stringify(cart)); // Convertir la cesta a JSON y guardar

        // Cambiar el texto del botón y deshabilitarlo para evitar múltiples adiciones
        this.textContent = 'Agregado en la cesta'; // Cambia el texto del botón
        this.disabled = true; // Deshabilita el botón para que no se pueda añadir de nuevo
    });

    // =============================
    // Manejar el cierre del modal
    // =============================
    document.querySelector('.close-button').addEventListener('click', function() {
        const addButton = document.getElementById('modal-button'); // Selecciona el botón del modal
        
        // Restablecer el botón si estaba deshabilitado
        addButton.textContent = 'Añadir a la cesta'; // Restablece el texto del botón
        addButton.disabled = false; // Vuelve a habilitar el botón
    });

    // =============================
    // Restablecer el botón al abrir el modal
    // =============================
    document.getElementById('open-modal').addEventListener('click', function() {
        const addButton = document.getElementById('modal-button'); // Selecciona el botón del modal
        
        // Restablecer el botón al abrir el modal
        addButton.textContent = 'Añadir a la cesta'; // Restablece el texto del botón
        addButton.disabled = false; // Vuelve a habilitar el botón
    });
});

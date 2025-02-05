// =============================
// Función para abrir el modal con animación
// =============================
function openModal(image, title, price) {
    // Establecer la imagen, el título y el precio en el modal
    document.getElementById("modal-image").src = image; // Cambia la fuente de la imagen
    document.getElementById("modal-title").textContent = title; // Cambia el texto del título
    document.getElementById("modal-price").textContent = price; // Cambia el texto del precio
    
    // Guardar los datos del producto en atributos del botón
    const modalButton = document.getElementById('modal-button'); // Selecciona el botón del modal
    modalButton.setAttribute('data-image', image); // Añade la imagen como atributo
    modalButton.setAttribute('data-title', title); // Añade el título como atributo
    modalButton.setAttribute('data-price', price); // Añade el precio como atributo
    
    // Mostrar el fondo y el modal con animación
    document.getElementById("modal-background").style.display = "block"; // Muestra el fondo
    document.getElementById("modal").style.display = "block"; // Muestra el modal

    // Añadir la clase show para activar la animación
    setTimeout(function() {
        document.getElementById("modal-background").classList.add("show"); // Añade la clase para la animación del fondo
        document.getElementById("modal").classList.add("show"); // Añade la clase para la animación del modal
    }, 10); // Pequeño retraso para que la animación se vea bien
}

// =============================
// Función para cerrar el modal con animación
// =============================
function closeModal() {
    // Quitar la clase show para iniciar la animación inversa
    document.getElementById("modal-background").classList.remove("show"); // Elimina la clase para el fondo
    document.getElementById("modal").classList.remove("show"); // Elimina la clase para el modal
    
    // Esperar a que termine la animación para ocultarlo
    setTimeout(function() {
        document.getElementById("modal-background").style.display = "none"; // Oculta el fondo
        document.getElementById("modal").style.display = "none"; // Oculta el modal
    }, 500); // Tiempo de la animación
}

// =============================
// Cerrar modal al hacer clic en el botón de cierre
// =============================
document.querySelector(".close-button").onclick = function() {
    closeModal(); // Llama a la función de cerrar modal
}

// =============================
// Cerrar modal al hacer clic en el fondo oscuro
// =============================
document.getElementById("modal-background").onclick = function() {
    closeModal(); // Llama a la función de cerrar modal
}

// =============================
// Cerrar modal al presionar "Escape"
// =============================
window.onkeydown = function(event) {
    if (event.key === "Escape") {
        closeModal(); // Cierra el modal si se presiona "Escape"
    }
}

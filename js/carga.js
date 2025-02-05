// =============================
// Script para gestionar la pantalla de carga y la interacción con modales
// =============================

// Mostrar la pantalla de carga al iniciar
document.getElementById('loading').style.display = 'flex'; 
// Esta línea selecciona el elemento con el ID 'loading' y establece su estilo de visualización en 'flex',
// lo que lo hace visible al inicio de la carga de la página.

// Ocultar la pantalla de carga cuando todo esté cargado
window.addEventListener('load', function() {
    // Se añade un listener que espera el evento 'load' de la ventana. Este evento se activa
    // cuando toda la página, incluyendo imágenes y recursos, ha terminado de cargar.
    
    document.getElementById('loading').style.display = 'none'; 
    // Cuando se dispara el evento 'load', esta línea oculta la pantalla de carga estableciendo
    // su estilo de visualización en 'none', haciéndola invisible una vez que la carga ha terminado.
});

// Función para verificar si el click es dentro de un modal
function isClickOutsideModal(event) {
    // Esta función se utiliza para determinar si el clic se ha realizado fuera de un modal.
    
    return !event.target.closest('.modal'); 
    // La función 'closest' busca el elemento más cercano que coincida con el selector '.modal'.
    // Si el clic no está dentro del modal, la función devolverá 'true', indicando que
    // se ha hecho clic fuera del modal.
}

// Mostrar la pantalla de carga solo si no es interacción con un modal
document.querySelectorAll('a').forEach(link => {
    // Se seleccionan todos los elementos 'a' (enlaces) en el documento y se les aplica una función.
    
    link.addEventListener('click', function(event) {
        // Se añade un listener para el evento 'click' a cada enlace.
        
        // Si la función openModal devuelve verdadero, mostrar la pantalla de carga
        if (openModal(image, title, price)(event)) {
            // La función 'openModal' se llama con los parámetros 'image', 'title', y 'price'.
            // Si esta función indica que el modal se debe abrir (devuelve verdadero), se ejecuta
            // la siguiente línea:
            
            document.getElementById('loading').style.display = 'flex'; 
            // Esto muestra la pantalla de carga, estableciendo su estilo de visualización en 'flex'.
        }
    });
});

// Asegurarse de ocultar la pantalla de carga al cerrar el modal
document.querySelectorAll('.close-button').forEach(button => {
    // Se seleccionan todos los botones con la clase 'close-button' y se les aplica una función.
    
    button.addEventListener('click', function() {
        // Se añade un listener para el evento 'click' a cada botón de cierre.
        
        // Al cerrar el modal, ocultar la pantalla de carga
        document.getElementById('loading').style.display = 'none'; 
        // Cuando se hace clic en el botón de cierre, esta línea oculta la pantalla de carga
        // estableciendo su estilo de visualización en 'none'.
    });
});

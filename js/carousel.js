// =============================
// Script para gestionar un carrusel de imágenes de fondo
// =============================

// Selecciona todos los elementos con la clase 'background'
const backgrounds = document.querySelectorAll('.background'); 
// Esta línea almacena en la variable 'backgrounds' una lista de todos los elementos
// del DOM que tienen la clase 'background', lo que permite manipularlos más adelante.

let current = 1; 
// Inicializa una variable 'current' en 1, que representa el índice de la imagen que se muestra actualmente.

function showNextImage() {
    // Esta función se encarga de cambiar la imagen de fondo activa.
    
    backgrounds[current].classList.remove('active'); 
    // Se quita la clase 'active' de la imagen que actualmente está visible, 
    // lo que hace que desaparezca o se vuelva inactiva.

    current = (current + 1) % backgrounds.length; 
    // Se actualiza la variable 'current'. 
    // Se suma 1 a 'current' para pasar a la siguiente imagen. 
    // La operación % backgrounds.length es un operador de módulo que devuelve el residuo
    // de dividir 'current + 1' entre el número total de elementos en 'backgrounds'.
    // Esto significa que cuando 'current' alcanza el último índice, 'current + 1'
    // será igual a 'backgrounds.length'. En este caso, el resultado de la operación será 0,
    // reiniciando 'current' al índice 0, comenzando de nuevo desde el principio.

    backgrounds[current].classList.add('active'); 
    // Se añade la clase 'active' a la nueva imagen que ahora se mostrará, haciéndola visible.
}

// Cambia de imagen cada 4 segundos
setInterval(showNextImage, 4000); 
// Se establece un intervalo que ejecuta la función 'showNextImage' cada 4000 milisegundos (4 segundos),
// lo que provoca que la imagen de fondo cambie automáticamente en ese tiempo.

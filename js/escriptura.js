// =============================
// Efecto de escritura solo para las piezas
// =============================

// Selecciona todos los elementos con la clase 'pieza' y aplica la función a cada uno
document.querySelectorAll('.pieza').forEach(function(pieza) {
    // Selecciona el elemento que contiene el texto dentro de cada pieza
    const textElement = pieza.querySelector('.texto');
    const text = textElement.innerText; // Guarda el texto original en una variable
    textElement.innerText = ""; // Limpia el texto inicial del elemento

    // Añade un evento que se activa al pasar el ratón sobre la pieza
    pieza.addEventListener('mouseenter', function() {
        // Verifica si ya tiene la clase 'animado', si es así, no hace nada
        if (textElement.classList.contains('animado')) return;
        // Verifica si ya está en el proceso de escritura, si es así, no hace nada
        if (textElement.classList.contains('animando')) return;

        let index = 0; // Inicializa el índice para controlar el carácter a mostrar

        textElement.classList.add('animando'); // Añade la clase 'animando' para evitar que se sobreescriba el texto

        // Función interna que maneja la animación de escritura
        function type() {
            // Comprueba si el índice es menor que la longitud del texto
            if (index < text.length) {
                textElement.innerText += text.charAt(index); // Añade el carácter correspondiente al texto
                index++; // Incrementa el índice para el siguiente carácter
                setTimeout(type, 150); // Llama a la función de nuevo tras un intervalo para continuar la animación
            } else {
                textElement.style.opacity = "1"; // Asegura que el texto sea visible al finalizar la animación
                textElement.classList.add('animado'); // Añade la clase 'animado' para indicar que ya se animó el texto
            }
        }

        type(); // Inicia la animación de escritura
    });
});

// =============================
// Efecto de escritura para el texto de bienvenida
// =============================

// Selecciona el elemento que contiene el texto de bienvenida
const bienvenidaText = document.querySelector('.bienvenida');
const bienvenida = 'hazlo tu, hazlo tuyo'; // Define el texto que se mostrará en la bienvenida
bienvenidaText.innerText = ""; // Limpia el texto inicial del elemento
let index = 0; // Inicializa el índice para controlar el carácter a mostrar

// Función que maneja la animación de escritura del texto de bienvenida
function typeWelcome() {
    // Comprueba si el índice es menor que la longitud del texto
    if (index < bienvenida.length) {
        bienvenidaText.innerText += bienvenida.charAt(index); // Añade el carácter correspondiente al texto
        index++; // Incrementa el índice para el siguiente carácter
        setTimeout(typeWelcome, 150); // Llama a la función de nuevo tras un intervalo para continuar la animación
    }
}

// Iniciar la escritura al cargar la página
window.onload = typeWelcome; // Asigna la función a ejecutar cuando la página haya terminado de cargar

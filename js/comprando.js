// =============================
// Script para gestionar la cesta de compras
// =============================

// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el contenedor donde se mostrarán los productos de la cesta
    const cartItemsContainer = document.getElementById('cart-items');
    
    // Intenta obtener la cesta del almacenamiento local, o inicializa como un array vacío si no existe
    let cart = JSON.parse(localStorage.getItem('cart')) || []; 

    // Función para mostrar los productos en la cesta
    function displayCartItems() {
        cartItemsContainer.innerHTML = ''; // Limpia el contenedor antes de añadir nuevos productos

        // Si la cesta está vacía, muestra un mensaje
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="p">Tu cesta está vacía</p>';
        } else {
            // Recorre cada producto en la cesta y crea un elemento visual para cada uno
            cart.forEach((product, index) => {
                const productDiv = document.createElement('div'); // Crea un nuevo div para el producto
                productDiv.classList.add('cart-item'); // Añade la clase 'cart-item' al div
                
                // Define el contenido HTML del div del producto
                productDiv.innerHTML = `
                    <img src="${product.image}" alt="${product.title}" width="100"> 
                    <p>${product.title} - ${product.price}</p>
                    <button class="remove-button" data-index="${index}">Eliminar</button>
                `;
                // Añade el div del producto al contenedor de la cesta
                cartItemsContainer.appendChild(productDiv); 
            });
            updateTotalPrice(); // Actualiza el precio total al mostrar productos
        }
    }

    // Función para calcular y mostrar el total de la cesta
    function updateTotalPrice() {
        // Calcula el precio total utilizando reduce
        const totalPrice = cart.reduce((total, product) => {
            // Asegúrate de que el precio esté en el formato correcto
            const price = parseFloat(product.price.replace('€', '').replace(',', '.')); 
            return total + price; // Suma el precio del producto al total
        }, 0).toFixed(2); // Redondea a dos decimales

        // Muestra el total en el elemento correspondiente
        document.getElementById('total-price').textContent = `Total: ${totalPrice} €`; 
    }

    // Mostrar los productos al cargar la página
    displayCartItems(); 

    // Eliminar productos de la cesta
    cartItemsContainer.addEventListener('click', function(e) {
        // Verifica si el clic fue en un botón de eliminar
        if (e.target.classList.contains('remove-button')) {
            const index = e.target.getAttribute('data-index'); // Obtiene el índice del producto a eliminar
            cart.splice(index, 1); // Elimina el producto del array
            localStorage.setItem('cart', JSON.stringify(cart)); // Actualiza localStorage
            displayCartItems(); // Refresca la lista de productos
        }
    });

    // Realizando la compra
    document.getElementById('checkout-button').addEventListener('click', function() {
        // Si la cesta está vacía, muestra un mensaje de error
        if (cart.length === 0) {
            alert('Tu cesta está vacía. Añade productos antes de realizar la compra.');
        } else {
            // Pregunta al usuario si realmente desea realizar la compra
            const confirmPurchase = confirm('¿Estás seguro de que deseas realizar la compra?');

            // Si el usuario confirma la compra
            if (confirmPurchase) {
                // Simular la compra o redirigir a una página de pago
                localStorage.removeItem('cart'); // Vacía la cesta
                alert('¡Gracias por tu compra!');

                // Redirigir a la página de inicio después de unos segundos
                setTimeout(() => {
                    window.location.href = 'index.html'; // Cambia 'index.html' por la ruta a tu página de inicio
                });

                // Actualizar visualmente la lista de productos
                cartItemsContainer.innerHTML = ''; // Vacía el contenido
                document.getElementById('total-price').textContent = 'Total: 0€'; // Reiniciar el precio total
            }
            // Si el usuario cancela, no se hace nada más
        }
    });
});

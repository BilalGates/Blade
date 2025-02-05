// =============================
// Obtener el parámetro de la URL
// =============================

// Crea un objeto URLSearchParams a partir de la parte de búsqueda de la URL actual
const urlParams = new URLSearchParams(window.location.search);
// Obtiene el valor del parámetro 'filter' de la URL
const filterParam = urlParams.get('filter');

// Si hay un parámetro de filtro en la URL, aplicarlo
if (filterParam) {
    filterProducts(filterParam); // Llama a la función filterProducts con el valor del parámetro
}

// =============================
// Función para filtrar productos
// =============================
function filterProducts(type) {
    // Selecciona todos los elementos con la clase 'product'
    const products = document.querySelectorAll('.product');
    
    // Itera sobre cada producto
    products.forEach(product => {
        // Si el tipo de filtro es 'all', muestra todos los productos
        if (type === 'all') {
            product.style.display = 'block'; // Establece el estilo de visualización a 'block'
        } else {
            // Comprueba si el producto tiene la clase correspondiente al tipo de filtro
            if (product.classList.contains(type)) {
                product.style.display = 'block'; // Muestra el producto si contiene la clase
            } else {
                product.style.display = 'none'; // Oculta el producto si no contiene la clase
            }
        }
    });
}

// Lista inicial de productos con precios
const productos = [
    { nombre: 'Pan', precio: 1.5, comprado: false },
    { nombre: 'Leche', precio: 0.99, comprado: false },
    { nombre: 'Huevos', precio: 2.5, comprado: false },
    { nombre: 'Queso', precio: 3.0, comprado: false },
    { nombre: 'Jamón', precio: 2.7, comprado: false },
    { nombre: 'Cereal', precio: 4.0, comprado: false },
    { nombre: 'Mantequilla', precio: 1.8, comprado: false },
    { nombre: 'Yogur', precio: 0.8, comprado: false },
    { nombre: 'Jugo de Naranja', precio: 2.2, comprado: false },
    { nombre: 'Café', precio: 3.5, comprado: false }
];

// Función para mostrar la lista de productos
function mostrarLista() {
    console.log("Lista de productos:");
    productos.forEach((producto, indice) => {
        const estado = producto.comprado ? ' (comprado)' : '';
        console.log(`${indice + 1}. ${producto.nombre} - $${producto.precio}${estado}`);
    });
    console.log(`Total gastado: $${calcularTotal()}`);
}

// Función para agregar un producto a la lista
function agregarProducto(nombre, precio) {
    productos.push({ nombre, precio, comprado: false });
    console.log(`${nombre} agregado a la lista.`);
}

// Función para tachar un producto como comprado
function tacharProducto(indice) {
    if (indice > 0 && indice <= productos.length) {
        productos[indice - 1].comprado = true;
        console.log(`${productos[indice - 1].nombre} marcado como comprado.`);
    } else {
        console.log("Índice inválido. Intente nuevamente.");
    }
}

// Función para calcular el total gastado
function calcularTotal() {
    return productos
        .filter(producto => producto.comprado)
        .reduce((total, producto) => total + producto.precio, 0);
}

// Función principal para el simulador de lista de compras
function simuladorDeListaDeCompras() {
    let continuar = true;

    while (continuar) {
        mostrarLista();
        const eleccion = prompt(`Lista de productos:\n${productos.map((producto, indice) => `${indice + 1}. ${producto.nombre} - $${producto.precio}${producto.comprado ? ' (comprado)' : ''}`).join('\n')}\nTotal gastado: $${calcularTotal()}\n\nIngrese 'a' para agregar un producto a la lista, 't' para marcar un producto como comprado, o 's' para salir:`);

        switch (eleccion.toLowerCase()) {
            case 'a':
                const nombre = prompt("Ingrese el nombre del producto:");
                const precio = parseFloat(prompt("Ingrese el precio del producto:"));
                if (!isNaN(precio) && nombre) {
                    agregarProducto(nombre, precio);
                } else {
                    console.log("Entrada inválida. Intente nuevamente.");
                }
                break;
            case 't':
                const indice = parseInt(prompt("Ingrese el número del producto que desea marcar como comprado:"), 10);
                tacharProducto(indice);
                break;
            case 's':
                continuar = false;
                console.log("Saliendo del simulador de lista de compras.");
                break;
            default:
                console.log("Opción inválida. Intente nuevamente.");
                break;
        }
    }

    mostrarLista();  // Mostrar la lista final y el total gastado
}

// Iniciar el simulador de lista de compras
simuladorDeListaDeCompras();

export class Pedido {
    constructor() {
        this.productos = [
            { 
                nombre: "Monitor UltraWide 34' Curved", 
                precio: 450.99, 
                // Ruta corregida con punto y barra (./)
                img: "src/assets/monitor.avif"
            },
            { 
                nombre: "Teclado Mecánico RGB", 
                precio: 125.50, 
                // Imagen temporal para que no salga error
                img: "https://cdn-icons-png.flaticon.com/512/808/808477.png" 
            },
            { 
                nombre: "Mouse Gamer inalámbrico (x2)", 
                precio: 118.00, 
                // Imagen temporal para que no salga error
                img: "https://cdn-icons-png.flaticon.com/512/689/689304.png" 
            }
        ];
        this.estado = "PREPARANDO ENVÍO";
    }

    get subtotal() {
        // Suma todos los precios del carrito
        return this.productos.reduce((acc, p) => acc + p.precio, 0);
    }
}
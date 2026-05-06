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
                img: "./src/assets/teclado.jpg" 
            },
            { 
                nombre: "Mouse Gamer inalámbrico", 
                precio: 118.00, 
                // Imagen temporal para que no salga error
                img: "./src/assets/mouse.webp" 
            }
        ];
        this.estado = "PREPARANDO ENVÍO";
    }

    get subtotal() {
        // Suma todos los precios del carrito
        return this.productos.reduce((acc, p) => acc + p.precio, 0);
    }
}
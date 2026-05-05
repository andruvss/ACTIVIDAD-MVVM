import { Pedido } from '../model/Pedido.js';
import { Estrategias } from '../strategy/EstrategiasPago.js';

export class PedidoViewModel {
    constructor() {
        this.pedido = new Pedido();
        this.estrategiaActual = 'normal';
    }

    render() {
        const listaUI = document.getElementById('lista-productos');
        
        // Verificamos que listaUI existe para evitar errores en consola
        if (!listaUI) return;

        listaUI.innerHTML = this.pedido.productos.map(p => `
            <div class="producto-card" style="display: flex; align-items: center; gap: 15px; background: #161b22; margin: 10px 0; padding: 12px; border-radius: 8px; border: 1px solid #30363d;">
                
                <img src="${p.img}" 
                     alt="${p.nombre}" 
                     onerror="this.src='https://via.placeholder.com/60?text=Error'"
                     style="width: 60px; height: 60px; object-fit: contain; border-radius: 4px; background: #0d1117;">
                
                <div style="flex-grow: 1;">
                    <div style="font-weight: bold; color: #f0f6fc;">${p.nombre}</div>
                    <div style="color: #58a6ff; font-weight: bold;">$${p.precio.toFixed(2)}</div>
                </div>
            </div>
        `).join('');

        const totalFinal = Estrategias[this.estrategiaActual](this.pedido.subtotal);
        
        // Usamos textContent por seguridad y manejo de IDs
        document.getElementById('total-monto').textContent = `$${totalFinal.toFixed(2)}`;
        document.getElementById('estado-texto').textContent = this.pedido.estado;
    }

    setMetodoPago(metodo) {
        this.estrategiaActual = metodo;
        this.render();
    }

    confirmarPedido() {
        this.pedido.estado = "PAGO PROCESADO ✅";
        this.render();
    }
}
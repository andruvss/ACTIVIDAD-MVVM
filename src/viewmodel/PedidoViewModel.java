package viewmodel;

import model.Pedido;
import observer.PedidoObserver; 
import java.util.ArrayList;
import java.util.List;

public class PedidoViewModel {
    
    // Referencia al Modelo
    private Pedido pedido;
    
    // Lista de observadores (la Vista se suscribirá aquí)
    private List<PedidoObserver> observadores;

    public PedidoViewModel(Pedido pedido) {
        this.pedido = pedido;
        this.observadores = new ArrayList<>();
    }

    public void suscribirObservador(PedidoObserver observador) {
        observadores.add(observador);
    }

    private void notificarCambio(String mensaje) {
        for (PedidoObserver obs : observadores) {
            // Suponiendo que tu interfaz PedidoObserver tiene un método llamado "actualizar"
            obs.actualizar(mensaje); 
        }
    }

    public void agregarProducto(String nombre, double precio, int cantidad) {
        try {
            // El ViewModel delega la lógica de negocio al Modelo
            pedido.agregarProducto(nombre, precio, cantidad);
            
            // Si sale bien, notifica a la vista
            notificarCambio("Producto agregado: " + nombre + " | Total actualizado: $" + pedido.getTotal());
        } catch (IllegalArgumentException e) {
            // Requerimiento de seguridad: Captura la validación y avisa a la vista
            notificarCambio("ERROR de validación: " + e.getMessage());
        }
    }

    public void actualizarEstadoPedido(String nuevoEstado) {
        pedido.setEstado(nuevoEstado);
        notificarCambio("El estado del pedido se ha actualizado a: [" + nuevoEstado.toUpperCase() + "]");
    }


    public double getTotal() {
        return pedido.getTotal();
    }

    public String getEstado() {
        return pedido.getEstado();
    }

    public List<String> getListaProductos() {
        return pedido.getProductos();
    }
}
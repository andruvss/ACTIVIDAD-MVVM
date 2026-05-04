package model;

import java.util.ArrayList;
import java.util.List;

public class Pedido {
    private int id;
    private List<String> productos;
    private double total;
    private String estado; // Creado, Pagado, Enviado, etc.

    public Pedido(int id) {
        this.id = id;
        this.productos = new ArrayList<>();
        this.total = 0.0;
        this.estado = "Creado";
    }

    // REQUERIMIENTO DE SEGURIDAD: Validar montos y cantidades
    public void agregarProducto(String nombre, double precio, int cantidad) {
        if (precio < 0 || cantidad <= 0) {
            throw new IllegalArgumentException("La cantidad y el precio deben ser positivos.");
        }
        this.productos.add(nombre + " (x" + cantidad + ")");
        this.total += (precio * cantidad);
    }

    // Getters
    public String getEstado() { return estado; }
    public void setEstado(String estado) { this.estado = estado; }
    public double getTotal() { return total; }
    public List<String> getProductos() { return productos; }
}
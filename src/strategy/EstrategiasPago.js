export const Estrategias = {
    normal: (monto) => monto,
    transferencia: (monto) => monto * 0.90, // Aplica 10% de descuento
    tarjeta: (monto) => monto * 1.05        // Aplica 5% de recargo
};
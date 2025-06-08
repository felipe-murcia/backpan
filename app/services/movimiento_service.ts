import Movimiento from '#models/movimiento';
import Producto from '#models/producto';
  
export class MovimientoService {
    // Your code here
    async all() {
      return await Movimiento.all()
    }
  
    async get() {
      return await Movimiento.query()
        .preload('producto')
        .orderBy('created_at', 'desc');
    }
  
    async create(data: Movimiento) {

      try {
        
        let res = Movimiento.create(data)
        // Actualizar la cantidad del producto
        // dependiendo del tipo de movimiento (ingreso o salida)
        const product = await Producto.find(data.productoId);

        if (data.tipo) {
          // Ingreso
          product!.cantidad = product!.cantidad + data.cantidad
          product!.save();
        }
        else {
          // Salida
          product!.cantidad = product!.cantidad - data.cantidad
          product!.save();
        }
        console.log('finalizado')
        return res;

      } catch (error) {
        console.error('Error creating movimiento:', error)
        throw new Error('Error creating movimiento')
      }
    }
}
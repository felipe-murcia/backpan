import Orden from '#models/orden';
import { inject } from '@adonisjs/core';
import { MovimientoService } from './movimiento_service.js';
import { ProductoService } from './producto_service.js';
import Producto from '#models/producto';
import Movimiento from '#models/movimiento';

@inject()
export class OrdenService {

  constructor(
    protected  productoService: ProductoService, 
    protected movimientoService: MovimientoService
  ) { }
 
  async all() {
    return await Orden.all()
  }

  async getByAvalaible() {
    return await Orden.query()
      .preload('producto')
      .preload('receta')
      .orderBy('created_at', 'desc');
  }

  async getById(id: any) {
    const res = await Orden.find(id)
    return res
  }

  async create(data: Orden) {
    return await Orden.create(data)
  }

  async destroy(id: any) {
    const post = await Orden.find(id)
    return await post!.delete()
  }

  async update(id: any, body: Orden) {
    
    const data = await Orden.find(id)
    data!.recetaId = body.recetaId
    data!.productoId = body.productoId
    data!.estado = body.estado
    data!.cantidadInicial = body.cantidadInicial
    data!.cantidadFinal = body.cantidadFinal
    data!.observacion = body.observacion
    let res = await data!.save();
    
    // crea un registro de movimiento
    const dataMovt = new Movimiento();
    dataMovt.cantidad = body.cantidadFinal;
    dataMovt.concepto = 'PRODUCCION';
    dataMovt.tipo = true;
    dataMovt.productoId = body.productoId;
    
    this.movimientoService.create(dataMovt)
 
    // actualiza el inventario de producto
    const product = await Producto.find(body.productoId)
    product!.cantidad = product!.cantidad+body.cantidadFinal
    product!.save()

    return res;
  }
}
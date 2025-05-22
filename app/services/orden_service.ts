import Orden from '#models/orden';

export class OrdenService {
 
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
    return await data!.save()
  }
}
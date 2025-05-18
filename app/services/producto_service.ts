import Producto from '#models/producto'

export class ProductoService {
  // Your code here
  async all() {
    return await Producto.all()
  }

  async getByAvalaible() {
    return await Producto.query().orderBy('nombre', 'asc')
  }

  async getById(id: any) {
    const res = await Producto.find(id)
    return res
  }

  async create(data: Producto) {
    return await Producto.create(data)
  }

  async destroy(id: any) {
    const post = await Producto.find(id)
    return await post!.delete()
  }

  async update(id: any, body: Producto) {
    
    const post = await Producto.find(id)

    post!.nombre = body.nombre
    post!.precio = body.precio
    post!.cantidad = body.cantidad
    post!.disponible = body.disponible
    post!.observacion = body.observacion
    return await post!.save()
  }
}

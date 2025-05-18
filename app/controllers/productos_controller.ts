
import type { HttpContext } from "@adonisjs/core/http"
import { inject } from "@adonisjs/core";
import { ProductoService } from "#services/producto_service";

@inject()
export default class ProductosController {

    constructor(protected  productoService: ProductoService) {}

    index() {
      return this. productoService.all()
    }

    get() {
        return this. productoService.getByAvalaible()
    }

    async create({ request, response }: HttpContext) {
        try {            
            const body:any = request.body()
            console.info(body)
            const res = await this. productoService.create(body) 
            return response.json(res)
        } catch (error) {
            console.log(error)
            return response.status(500).json({ message: 'Internal server error', error: error.message })
        }
    } 

    async show({ params, response }: HttpContext){
        const id = params.id
        const res = await this. productoService.getById(id)  
        if(!res) return response.json({ message: 'Not found data'})
        return response.json(res)
    }

    async update({ request, params, response }: HttpContext){
        const id = params.id
        const body:any = request.body()
        const res = await this. productoService.update(id,body)  
        return response.json(res)
    }

    async delete({ params, response }: HttpContext){
        const id = params.id 
        await this. productoService.destroy(id)  
        return response.json({ success: true })
    }

}
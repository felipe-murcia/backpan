
import type { HttpContext } from "@adonisjs/core/http"
import { inject } from "@adonisjs/core";
import { OrdenService } from "#services/orden_service";

@inject()
export default class OrdenesController {
  constructor(private ordenService: OrdenService) {}

  async index({ response }: HttpContext) {
    const ordenes = await this.ordenService.getByAvalaible();
    return response.json(ordenes);
  }

  async show({ params, response }: HttpContext) {
    const orden = await this.ordenService.getById(params.id);
    if (!orden) {
      return response.notFound();
    }
    return response.json(orden);
  }
  
  async create({ request, response }: HttpContext) { 
    try {
          const body:any = request.body()
          console.info(body)
          const res = await this.ordenService.create(body) 
          return response.json(res)
      } catch (error) {
          console.log(error)
          return response.status(500).json({ message: 'Internal server error', error: error.message })
      }
  }
    
  async update({ params, request, response }: HttpContext) {
    try {
      const body:any = request.body()
      console.info(body)
      const orden = await this.ordenService.update(params.id, body);
      return response.json(orden)
    } catch (error) {
        console.log(error)
        return response.status(500).json({ message: 'Internal server error', error: error.message })
    }
  }
/*
  async destroy({ params, response }: HttpContext) {
    const orden = await this.ordenService.destroy(params.id);
    if (!orden) {
      return response.notFound();
    }
    return response.noContent();
  }
    */
}
// import type { HttpContext } from '@adonisjs/core/http'
import type { HttpContext } from "@adonisjs/core/http"
import { inject } from "@adonisjs/core";
import { MovimientoService } from "#services/movimiento_service";

@inject()
export default class MovimientosController {

    constructor(private movimientoService: MovimientoService) {}

    async index({ response }: HttpContext) {
        const movimiento = await this.movimientoService.get();
        console.log('perfecto')
        if (!movimiento) {
          return response.notFound();
        }
        return response.json(movimiento);
      }
      
      async create({ request, response }: HttpContext) { 
        try {
              const body:any = request.body()
              console.info(body)
              const res = await this.movimientoService.create(body) 
              return response.json(res)
          } catch (error) {
              console.log(error)
              return response.status(500).json({ message: 'Internal server error', error: error.message })
          }
      }

}
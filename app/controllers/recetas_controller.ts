// import type { HttpContext } from '@adonisjs/core/http'

import { HttpContext } from "@adonisjs/core/http"
import { inject } from "@adonisjs/core";
import { RecetaService } from "#services/receta_service";

@inject()
export default class RecetasController {

    constructor(protected  recetaService: RecetaService) {}

    index() {
      return this. recetaService.all()
    }

    get() {
        return this. recetaService.getByAvalaible()
    }

    async create({ request, response }: HttpContext) {
        try {            
            const body:any = request.body()
            const res = await this. recetaService.create(body) 
            return response.json(res)
        } catch (error) {
            console.log(error)
            return response.status(500).json({ message: 'Internal server error', error: error.message })
        }
    } 

    async show({ params, response }: HttpContext){
        const id = params.id
        const res = await this. recetaService.getById(id)  
        if(!res) return response.json({ message: 'Not found data'})
        return response.json(res)
    }

    async update({ request, params, response }: HttpContext){
        const id = params.id
        const body:any = request.body()
        const res = await this. recetaService.update(id,body)  
        return response.json(res)
    }

    async delete({ params, response }: HttpContext){
        const id = params.id 
        await this. recetaService.destroy(id)  
        return response.json({ success: true })
    }

}
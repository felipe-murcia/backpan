
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
  /*
  async create({ request, response }: HttpContext) {
    const orden = await this.ordenService.create(request.body);
    return response.created(orden);
  }

  async update({ params, request, response }: HttpContext) {
    const orden = await this.ordenService.update(params.id, request.body);
    if (!orden) {
      return response.notFound();
    }
    return response.json(orden);
  }

  async destroy({ params, response }: HttpContext) {
    const orden = await this.ordenService.destroy(params.id);
    if (!orden) {
      return response.notFound();
    }
    return response.noContent();
  }
    */
}
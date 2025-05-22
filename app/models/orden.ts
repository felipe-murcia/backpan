import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column  } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Producto from '#models/producto'
import Receta from '#models/receta'

export default class Orden extends BaseModel {

  public static table = 'ordenes'

  @column({ isPrimary: true })
  declare id: number

  @column({ columnName:'producto_id' })
  declare productoId: number

  @belongsTo(() => Producto )
  declare producto: BelongsTo<typeof Producto>

  @column({ columnName:'receta_id' })
  declare recetaId: number

  @belongsTo(() => Receta )
  declare receta: BelongsTo<typeof Receta>

  @column({ columnName:'estado' })
  declare estado: string

  @column({ columnName:'cantidad_inicial' })
  declare cantidadInicial: number

  @column({ columnName:'cantidad_final' })
  declare cantidadFinal: number

  @column({ columnName:'observacion' })
  declare observacion: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime  

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
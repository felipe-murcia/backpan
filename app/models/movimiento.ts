import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Producto from './producto.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Movimiento extends BaseModel {

  public static table = 'movimientos'

  @column({ isPrimary: true })
  declare id: number

  @column({ columnName:'concepto' })
  declare concepto: string

  @column({ columnName:'producto_id' })
  declare productoId: number

  @belongsTo(() => Producto )
  declare producto: BelongsTo<typeof Producto>

  @column({ columnName:'tipo' })
  declare tipo: boolean

  @column({ columnName:'cantidad' })
  declare cantidad: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
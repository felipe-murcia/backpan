import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Producto extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

    @column({ columnName:'nombre' })
  declare nombre: string
  
  @column({ columnName:'precio' })
  declare precio: number

  @column({ columnName:'cantidad' })
  declare cantidad: number

  @column({ columnName:'disponible' })
  declare disponible: boolean

  @column({ columnName:'observacion' })
  declare observacion: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
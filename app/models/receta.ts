import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Receta extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({ columnName:'nombre' })
  declare nombre: string
  
  @column({ columnName:'temperatura' })
  declare temperatura: number
  
  @column({ columnName:'tiempo' })
  declare tiempo: number

  @column({ columnName:'con_picada' })
  declare conPicada: boolean

  @column({ columnName:'picada' })
  declare picada: number

  @column({ columnName:'observacion' })
  declare observacion: string

  @column({ columnName:'cantidad' })
  declare cantidad: number

  @column({ columnName:'ingredientes' })
  declare ingredientes: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
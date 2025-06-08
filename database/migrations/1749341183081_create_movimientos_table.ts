import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'movimientos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('concepto').notNullable().defaultTo('AJUSTE')
      table.integer('cantidad').notNullable().defaultTo(0)
      table.boolean('tipo').notNullable().defaultTo(true) // true for ingreso, false for salida
      table
        .integer('producto_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('productos')
        .onDelete('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
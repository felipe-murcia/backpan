import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  
  protected tableName = 'ordenes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('producto_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('productos')
        .onDelete('CASCADE')
      table
        .integer('receta_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('recetas')
        .onDelete('CASCADE')
      table.integer('estado').notNullable()
      table.integer('cantidad_inicial').notNullable()
      table.integer('cantidad_final')
      table.string('observacion', 500)
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
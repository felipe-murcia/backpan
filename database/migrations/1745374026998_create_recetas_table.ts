import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'recetas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nombre').notNullable()
      table.integer('temperatura').notNullable()
      table.integer('tiempo').notNullable()
      table.boolean('conPicada').notNullable()
      table.integer('picada').notNullable()
      table.string('observacion', 500).notNullable()
      table.integer('cantidad').notNullable()
      table.text('ingredientes').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
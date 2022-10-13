import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'clientes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('nome', 100).notNullable()
      table.string('cpf', 11).notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

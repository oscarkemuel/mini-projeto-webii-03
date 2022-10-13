import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'produtos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('descricao')
      table.decimal('preco')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

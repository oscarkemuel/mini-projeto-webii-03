import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'estoques'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('produto_id').unsigned().references('id').inTable('produtos').onDelete('CASCADE').unique()
      table.integer('quantidade').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

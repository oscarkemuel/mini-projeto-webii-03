import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'item_pedidos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('pedido_id').unsigned().references('id').inTable('pedidos').onDelete('CASCADE')
      table.integer('produto_id').unsigned().references('id').inTable('pedidos').onDelete('CASCADE')
      table.integer('quantidade')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

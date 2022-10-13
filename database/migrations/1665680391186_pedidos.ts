import BaseSchema from '@ioc:Adonis/Lucid/Schema'

enum StatusEnum {
  REALIZADO,
  CANCELADO
}

export default class extends BaseSchema {
  protected tableName = 'pedidos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('cliente_id').unsigned().references('id').inTable('clientes').onDelete('CASCADE')
      table.date('data_pedido')
      table.decimal('total')
      table.enum('status', [StatusEnum.REALIZADO, StatusEnum.CANCELADO])
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Pedido from './Pedido'
import Produto from './Produto'

export default class ItemPedido extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public quantidade: number

  @column({ columnName: 'pedido_id' })
  public pedidoId: number

  @belongsTo(() => Pedido, {
    foreignKey: 'pedidoId',
  })
  public pedido: BelongsTo<typeof Pedido>

  @column({ columnName: 'produto_id' })
  public produtoId: number

  @belongsTo(() => Produto, {
    foreignKey: 'produtoId',
  })
  public produto: BelongsTo<typeof Produto>
}

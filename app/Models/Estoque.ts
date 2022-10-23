import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Produto from './Produto'

export default class Estoque extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public produtoId: number

  @belongsTo(() => Produto, {
    foreignKey: 'produtoId',
  })
  public produto: BelongsTo<typeof Produto>

  @column()
  public quantidade: number
}

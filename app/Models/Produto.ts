import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Estoque from './Estoque'

export default class Produto extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public descricao: string

  @column()
  public preco: number

  @hasOne(() => Estoque, {
    foreignKey: 'produtoId',
    serializeAs: 'estoque'
  })
  public estoque: HasOne<typeof Estoque>
}

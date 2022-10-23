import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Pedido from './Pedido'

export default class Cliente extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public cpf: string

  @hasMany(() => Pedido, {
    foreignKey: 'clienteId',
    serializeAs: 'pedidos'
  })
  public pedidos: HasMany<typeof Pedido>
}

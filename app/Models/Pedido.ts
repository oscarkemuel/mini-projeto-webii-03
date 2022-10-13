import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Cliente from './Cliente'
import ItemPedido from './ItemPedido'

export enum StatusEnum {
  REALIZADO,
  CANCELADO
}

export default class Pedido extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public dataPedido: DateTime

  @column()
  public total: number

  @column()
  public status: StatusEnum

  @column({ columnName: 'cliente_id' })
  public clienteId: number

  @belongsTo(() => Cliente, {
    foreignKey: 'clienteId',
  })
  public cliente: BelongsTo<typeof Cliente>

  @hasMany(() => ItemPedido, {
    foreignKey: 'pedidoId',
  })
  public itens: HasMany<typeof ItemPedido>
}

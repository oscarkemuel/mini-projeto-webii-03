import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ItemPedido extends BaseModel {
  @column({ isPrimary: true })
  public id: number
}

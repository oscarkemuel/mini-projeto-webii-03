import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreatePedidoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    clienteId: schema.number(),
    total: schema.number(),
    itens: schema.array().members(schema.object().members({
        produtoId: schema.number(),
        quantidade: schema.number(),
    }))
  })

  public messages: CustomMessages = {}
}

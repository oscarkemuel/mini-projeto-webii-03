import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreatePedidoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    clienteId: schema.number( [rules.exists({ table: 'clientes', column: 'id' })] ),
    itens: schema.array().members(schema.object().members({
        produtoId: schema.number(),
        quantidade: schema.number()
    }))
  })

  public messages: CustomMessages = {
    'clienteId.exists': 'Cliente não encontrado',
    'itens.*.quantidade.range': 'Quantidade deve ser maior que 0'
  }
}

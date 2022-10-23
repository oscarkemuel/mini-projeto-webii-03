import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateEstoqueValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    produto_id: schema.number([
      rules.exists({ table: 'produtos', column: 'id' }),
      rules.unique({ table: 'estoques', column: 'produto_id' })
    ]),
    quantidade: schema.number(),
  })

  public messages: CustomMessages = {
    'produto_id.exists': 'Produto não encontrado',
    'produto_id.unique': 'Estoque para esse Produto já cadastrado',
  }
}

import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateEstoqueValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    produto_id: schema.number([
      rules.exists({ table: 'produtos', column: 'id' }),
    ]),
    quantidade: schema.number(),
  })

  public messages: CustomMessages = {}
}

import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateProdutoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    preco: schema.number(),
    descricao: schema.string()
  })

  public messages: CustomMessages = {}
}

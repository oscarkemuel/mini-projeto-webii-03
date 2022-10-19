import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateAllProdutoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    preco: schema.number(),
    descricao: schema.string()
  })
  
  public messages: CustomMessages = {}
}

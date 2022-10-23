import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ProdutoService from 'App/Services/ProdutoService'
import CreateProdutoValidator from 'App/Validators/CreateProdutoValidator'
import UpdateAllProdutoValidator from 'App/Validators/UpdateAllProdutoValidator'

export default class ProdutosController {
  public produtoService = new ProdutoService()

  public async save({ request, response }: HttpContextContract) {
    const { descricao, preco } = await request.validate(CreateProdutoValidator)

    const produto = await this.produtoService.save(descricao, preco)

    return response.created({produto})
  }

  public async update({ params, request, response }: HttpContextContract) {
    const { id } = params
    const { descricao, preco } = await request.validate(UpdateAllProdutoValidator)

    await this.produtoService.update(id, descricao, preco)

    return response.noContent()
  }

  public async updatePartial({ params, request, response }: HttpContextContract) {
    const { id } = params
    const { descricao, preco } = request.only(['descricao', 'preco'])

    await this.produtoService.updatePartial(id, {descricao, preco})

    return response.noContent()
  }

  public async delete({ params, response }: HttpContextContract) {
    const { id } = params

    await this.produtoService.delete(id)

    return response.noContent()
  }

  public async getById({ params, response }: HttpContextContract) {
    const { id } = params

    const produto = await this.produtoService.getById(id)

    return response.ok({produto})
  }

  public async getAll({ response }: HttpContextContract) {
    const produtos = await this.produtoService.getAll()

    return response.ok({produtos})
  }
}

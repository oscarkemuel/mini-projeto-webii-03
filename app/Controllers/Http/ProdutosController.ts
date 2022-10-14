import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ProdutoService from 'App/Services/ProdutoService'

export default class ProdutosController {
  public produtoService = new ProdutoService()

  public async save({ request, response }: HttpContextContract) {
    const { descricao, preco } = request.all()

    const produto = await this.produtoService.save(descricao, preco)

    return response.created(produto)
  }

  public async update({ params, request, response }: HttpContextContract) {
    const { id } = params
    const { descricao, preco } = request.all()

    const produto = await this.produtoService.update(id, descricao, preco)

    if (!produto) {
      return response.status(404).json({ message: 'Produto não encontrado' })
    }

    return produto
  }

  public async delete({ params, response }: HttpContextContract) {
    const { id } = params

    const produto = await this.produtoService.delete(id)

    if (!produto) {
      return response.status(404).json({ message: 'Produto não encontrado' })
    }

    return response.noContent()
  }

  public async getById({ params, response }: HttpContextContract) {
    const { id } = params

    const produto = await this.produtoService.getById(id)

    if (!produto) {
      return response.status(404).json({ message: 'Produto não encontrado' })
    }

    return produto
  }

  public async getAll({ response }: HttpContextContract) {
    const produtos = await this.produtoService.getAll()

    return response.ok(produtos)
  }
}

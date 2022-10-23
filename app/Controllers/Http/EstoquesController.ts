import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import EstoqueService from 'App/Services/EstoqueService'
import CreateEstoqueValidator from 'App/Validators/CreateEstoqueValidator'
import UpdateEstoqueValidator from 'App/Validators/UpdateEstoqueValidator'

export default class EstoquesController {
  public estoqueService = new EstoqueService()

  public async create({ request, response }: HttpContextContract) {
    const payload = await request.validate(CreateEstoqueValidator)

    const estoque = await this.estoqueService.create(payload)

    return response.created({ estoque })
  }

  public async index({ response }: HttpContextContract) {
    const estoques = await this.estoqueService.getAll()

    return response.ok({ estoques })
  }

  public async show({ params, response }: HttpContextContract) {
    const { id } = params

    const estoque = await this.estoqueService.getEstoqueById(id)

    return response.ok({ estoque })
  }

  public async update({ request, params, response }: HttpContextContract) {
    const payload = await request.validate(UpdateEstoqueValidator)
    const { id } = params

    const estoque = await this.estoqueService.update(payload, id)

    return response.ok({ estoque })
  }

  public async destroy({ params, response }: HttpContextContract) {
    const { id } = params

    const estoque = await this.estoqueService.delete(id)

    return response.ok({ estoque })
  }

  public async getEstoqueByProdutoDescricao({ params, response }: HttpContextContract) {
    const { descricao } = params
    console.log(descricao)

    const estoques = await this.estoqueService.getEstoqueByProdutoDescricao(descricao)

    return response.ok({ estoques })
  }

  async updateQuantidade({ request, response }: HttpContextContract) {
    const id = request.param('id')
    const { quantidade } = request.body()

    const estoque = await this.estoqueService.updateQuantidade(id, quantidade)

    return response.ok({ estoque })
  }
}

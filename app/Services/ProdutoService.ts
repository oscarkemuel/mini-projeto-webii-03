import BadRequestException from "App/Exceptions/BadRequestException"
import Produto from "App/Models/Produto"

interface IUpdatePartialPayload {
  descricao?: string
  preco?: number
}

class ProdutoService {
  async save(descricao: string, preco: number) {
    const produto = await Produto.create({ descricao, preco })

    return produto
  }

  async update(id: number, descricao: string, preco: number) {
    const produto = await Produto.findBy('id', id)

    if(!produto) throw new BadRequestException('Produto não encontrado', 404)

    produto.descricao = descricao
    produto.preco = preco

    await produto.save()

    return produto
  }

  async updatePartial(id: number, payload: IUpdatePartialPayload) {
    const produto = await Produto.findBy('id', id)

    if(!produto) throw new BadRequestException('Produto não encontrado', 404)

    produto.merge(payload)
    await produto.save()

    return produto
  }

  async delete(id: number) {
    const produto = await Produto.findBy('id', id)

    if(!produto) throw new BadRequestException('Produto não encontrado', 404)

    await produto.delete()

    return produto
  }

  async getById(id: number) {
    const produto = await Produto.findBy('id', id)

    if(!produto) throw new BadRequestException('Produto não encontrado', 404)

    return produto
  }

  async getAll() {
    const produtos = await Produto.all()

    return produtos
  }
}

export default ProdutoService

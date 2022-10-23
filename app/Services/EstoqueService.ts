import BadRequestException from "App/Exceptions/BadRequestException";
import Estoque from "App/Models/Estoque";

interface ICreateEstoqueDTO {
  produto_id: number;
  quantidade: number;
}

class EstoqueService {
  async create(data: ICreateEstoqueDTO) {
    const estoque = await Estoque.create(data)

    return estoque
  }

  async update(data: ICreateEstoqueDTO, id: number) {
    const estoque = await Estoque.findBy('id', id)

    if(!estoque) throw new BadRequestException('Estoque não encontrado', 404)

    estoque.merge(data)
    await estoque.save()

    return estoque
  }

  async delete(id: number) {
    const estoque = await Estoque.findBy('id', id)

    if(!estoque) throw new BadRequestException('Estoque não encontrado', 404)

    await estoque.delete()

    return estoque
  }

  async getEstoqueById(id: number) {
    const estoque = await Estoque.findBy('id', id)

    if(!estoque) throw new BadRequestException('Estoque não encontrado', 404)

    return estoque
  }

  async getAll() {
    const estoques = await Estoque.all()

    return estoques
  }

  async getEstoqueByProdutoDescricao(descricao: string) {
    const estoques = await Estoque.query()
      .whereHas('produto', (query) => {
        query.where('descricao', 'like', `%${descricao}%`)
      })
      .preload('produto')



    return estoques
  }

  async updateQuantidade(id: number, quantidade: number) {
    const estoque = await Estoque.findBy('id', id)

    if(!estoque) throw new BadRequestException('Estoque não encontrado', 404)

    estoque.merge({ quantidade })
    await estoque.save()

    return estoque
  }
}

export default EstoqueService

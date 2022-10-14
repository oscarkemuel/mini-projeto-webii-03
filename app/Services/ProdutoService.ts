import Produto from "App/Models/Produto"

class ProdutoService {
  async save(descricao: string, preco: number) {
    const produto = await Produto.create({ descricao, preco })

    return produto
  }

  async update(id: number, descricao: string, preco: number) {
    const produto = await Produto.find(id)

    if (!produto) return null;

    produto.descricao = descricao
    produto.preco = preco

    await produto.save()

    return produto
  }

  async delete(id: number) {
    const produto = await Produto.find(id)

    if (!produto) return null;

    await produto.delete()

    return produto
  }

  async getById(id: number) {
    const produto = await Produto.find(id)

    if (!produto) return null;

    return produto
  }

  async getAll() {
    const produtos = await Produto.all()

    return produtos
  }
}

export default ProdutoService

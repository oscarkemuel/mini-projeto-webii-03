import BadRequestException from "App/Exceptions/BadRequestException";
import Cliente from "App/Models/Cliente";
import Estoque from "App/Models/Estoque";
import ItemPedido from "App/Models/ItemPedido";
import Pedido from "App/Models/Pedido";

import { StatusEnum } from '../Models/Pedido'

interface PedidoCreateInput {
  id?: number;
  clienteId: number;
  itens: {
    produtoId: number;
    quantidade: number;
  }[]
}

class PedidoService {
  async save(data: PedidoCreateInput) {
    const cliente = await Cliente.findOrFail(data.clienteId)
    let total = 0;

    const itensOfStock = await Promise.all(data.itens.map(async (item) => {
      const estoque = await Estoque.findBy('produtoId', item.produtoId)

      if (!estoque) {
        throw new BadRequestException(`Produto ${item.produtoId} não encontrado no estoque`, 400)
      }

      if (estoque.quantidade < item.quantidade) {
        throw new BadRequestException('Quantidade insuficiente em estoque', 400)
      }

      return item
    }))

    if(itensOfStock.length === 0) {
      throw new BadRequestException('Nenhum item foi adicionado ao pedido', 400)
    }

    await Promise.all(itensOfStock.map(async (item) => {
      const estoque = await Estoque.findBy('produtoId', item.produtoId)
      await estoque?.load('produto')

      if (!estoque) {
        throw new BadRequestException(`Produto ${item.produtoId} não encontrado no estoque`, 400)
      }

      estoque.quantidade -= item.quantidade
      total += estoque.produto.preco * item.quantidade

      await estoque.save()
    }))

    const pedido = await Pedido.create({
      clienteId: cliente.id,
      status: StatusEnum.REALIZADO,
      total: total
    });

    const itens = itensOfStock.map((item) => {
      return {
        produtoId: item.produtoId,
        pedidoId: pedido.id,
        quantidade: item.quantidade
      }
    })

    const itensCreated = await ItemPedido.createMany(itens)

    return { pedido, itens: itensCreated };
  }

  async getAll() {
    const pedidos = await Pedido.all();

    await Promise.all(pedidos.map(async (pedido) => {
      await pedido.load('cliente')
      await pedido.load('itens')

      await Promise.all(pedido.itens.map(async (item) => {
        await item.load('produto')
      }))
    }))

    return { pedidos };
  }

  async updateStatus(id: number, status: StatusEnum) {
    const pedido = await Pedido.findOrFail(id);

    pedido.status = status

    await pedido.save()
  }

  async delete(id: number) {
    const pedido = await Pedido.findOrFail(id);

    await pedido.delete()
  }
}

export default PedidoService;

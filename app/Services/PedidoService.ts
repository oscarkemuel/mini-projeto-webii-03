import Cliente from "App/Models/Cliente";
import ItemPedido from "App/Models/ItemPedido";
import Pedido from "App/Models/Pedido";

import { StatusEnum } from '../Models/Pedido'

interface PedidoCreateInput {
  id?: number;
  clienteId: number;
  total: number;
  itens: {
    produtoId: number;
    quantidade: number;
  }[]
}

class PedidoService {
  async save(data: PedidoCreateInput) {
    const cliente = await Cliente.findOrFail(data.clienteId)
    
    const pedido = await Pedido.create({
      clienteId: cliente.id,
      status: StatusEnum.REALIZADO,
      total: data.total
    });

    const itens = data.itens.map((item) => {
      return {
        produtoId: item.produtoId,
        pedidoId: pedido.id,
        quantidade: item.quantidade
      }
    })

    const itensCreated = await ItemPedido.createMany(itens)

    return {pedido, itens: itensCreated};
  }

  async getAll() {
    const pedidos = await Pedido.all();

    await Promise.all(pedidos.map(async (pedido) => {
      await pedido.load('cliente')
      await pedido.load('itens')
    }))

    return pedidos;
  }
  
  async updateStatus(id: number) {
    const pedido = await Pedido.findOrFail(id);

    pedido.status = pedido.status === StatusEnum.REALIZADO ? StatusEnum.CANCELADO : StatusEnum.REALIZADO

    await pedido.save()
  }
}

export default PedidoService;

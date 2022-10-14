import Pedido from "App/Models/Pedido";

interface PedidoCreateInput {
  id?: number;
  clienteId: number;
  valorTotal: number;
}

class PedidoService {
  async create(data: PedidoCreateInput) {
    const pedido = await Pedido.create(data);

    return pedido;
  }
}

export default PedidoService;

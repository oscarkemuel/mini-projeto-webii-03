import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PedidoService from 'App/Services/PedidoService'
import CreatePedidoValidator from 'App/Validators/CreatePedidoValidator';

export default class PedidosController {
  public pedidoService = new PedidoService();

  public async save({ request }: HttpContextContract) {
    const payload = await request.validate(CreatePedidoValidator);

    const pedido = await this.pedidoService.save(payload);

    return pedido;
  }

  public async getAll({ response }: HttpContextContract) {
    const pedidos = await this.pedidoService.getAll();

    return response.ok(pedidos);
  }

  public async updateStatus({ params, request, response }: HttpContextContract) {
    const { id } = params;
    const { status } = request.only(['status']);

    await this.pedidoService.updateStatus(id, status);

    return response.noContent();
  }
}

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

  public async delete({ params, response }: HttpContextContract) {
    const { id } = params;

    await this.pedidoService.delete(id);

    return response.noContent();
  }

  public async update({ params, request, response }: HttpContextContract) {
    const { id } = params;
    const payload = request.only(['clienteId', 'itens']);

    await this.pedidoService.update(id, payload);

    return response.noContent();
  }
}

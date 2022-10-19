import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ClienteService from 'App/Services/ClienteService'

export default class ClientesController {
  public clienteService = new ClienteService()

  public async getClienteById({ params, response }: HttpContextContract) {
    const { id } = params

    const cliente = await this.clienteService.getClienteById(id)

    return response.ok({cliente})
  }

  public async save({ request, response }: HttpContextContract){
    const { nome, cpf } = request.all()

    const cliente = await this.clienteService.save(nome, cpf)

    return response.created({cliente})
  }


  public async delete({ params, response }: HttpContextContract) {
    const { id } = params

    await this.clienteService.delete(id)

    return response.noContent()
  }

  public async update({ params, request, response }: HttpContextContract) {
    const { id } = params
    const { nome, cpf } = request.all()

    await this.clienteService.update(id, nome, cpf)

    return response.noContent()
  }

  public async getAll({ response }: HttpContextContract) {
    const clientes = await this.clienteService.getAll()

    return response.ok({clientes})
  }

  public async getClienteByIdWithPedidos({ params, response }: HttpContextContract) {
    const { id } = params

    const cliente = await this.clienteService.getClienteByIdWithPedidos(id)

    return response.ok({cliente})
  }
}

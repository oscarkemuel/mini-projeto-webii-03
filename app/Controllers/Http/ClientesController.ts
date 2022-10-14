import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ClienteService from 'App/Services/ClienteService'

export default class ClientesController {
  public clienteService = new ClienteService()

  public async getClienteById({ params, response }: HttpContextContract) {
    const { id } = params

    const cliente = await this.clienteService.getClienteById(id)

    if (!cliente) {
      return response.status(404).json({ message: 'Cliente não encontrado' })
    }

    return cliente
  }

  public async save({ request, response }: HttpContextContract){
    const { nome, cpf } = request.all()

    const cliente = await this.clienteService.save(nome, cpf)

    return response.created(cliente)
  }


  public async delete({ params, response }: HttpContextContract) {
    const { id } = params

    const cliente = await this.clienteService.delete(id)

    if (!cliente) {
      return response.status(404).json({ message: 'Cliente não encontrado' })
    }

    return response.noContent()
  }

  public async update({ params, request, response }: HttpContextContract) {
    const { id } = params
    const { nome, cpf } = request.all()

    const cliente = await this.clienteService.update(id, nome, cpf)

    if (!cliente) {
      return response.status(404).json({ message: 'Cliente não encontrado' })
    }

    return cliente
  }

  public async getAll({ response }: HttpContextContract) {
    const clientes = await this.clienteService.getAll()

    return response.ok(clientes)
  }
}

import BadRequestException from "App/Exceptions/BadRequestException"
import Cliente from "App/Models/Cliente"

interface IUpdatePartialPayload {
  nome?: string
  cpf?: string
}

class ClienteService {
  public async getClienteById(id: number) {
    const cliente = await Cliente.findBy('id', id)

    if(!cliente) throw new BadRequestException('Cliente não encontrado', 404)

    return cliente
  }

  public async save(nome: string, cpf: string) {
    const cliente = await Cliente.create({ nome, cpf })

    return cliente
  }

  public async delete(id: number) {
    const cliente = await Cliente.findBy('id', id)

    if(!cliente) throw new BadRequestException('Cliente não encontrado', 404)

    await cliente.delete()

    return cliente
  }

  public async update(id: number, nome: string, cpf: string) {
    const cliente = await Cliente.findBy('id', id)

    if(!cliente) throw new BadRequestException('Cliente não encontrado', 404)

    cliente.nome = nome
    cliente.cpf = cpf

    await cliente.save()

    return cliente
  }

  public async updatePartial(id: number, payload: IUpdatePartialPayload) {
    const cliente = await Cliente.findBy('id', id)

    if(!cliente) throw new BadRequestException('Cliente não encontrado', 404)

    cliente.merge(payload)

    await cliente.save()

    return cliente
  }

  public async getAll() {
    const clientes = await Cliente.all()

    return clientes
  }

  public async getClienteByIdWithPedidos(id: number) {
    const cliente = await Cliente.findBy('id', id)

    if(!cliente) throw new BadRequestException('Cliente não encontrado', 404)

    await cliente.load('pedidos')

    return cliente
  }
}

export default ClienteService

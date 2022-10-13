import Cliente from "App/Models/Cliente"

class ClienteService {
  public async getClienteById(id: number) {
    const cliente = await Cliente.find(id)

    if (!cliente) return null;

    return cliente
  }

  public async save(nome: string, cpf: string) {
    const cliente = await Cliente.create({ nome, cpf })

    return cliente
  }

  public async delete(id: number) {
    const cliente = await Cliente.find(id)

    if (!cliente) return null;

    await cliente.delete()

    return cliente
  }

  public async update(id: number, nome: string, cpf: string) {
    const cliente = await Cliente.find(id)

    if (!cliente) return null;

    cliente.nome = nome
    cliente.cpf = cpf

    await cliente.save()

    return cliente
  }
}

export default ClienteService

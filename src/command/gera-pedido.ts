import { Orcamento } from "../@core/orcamento"
import { Pedido } from "../@core/pedido"

interface Repository {
  save(pedido: Pedido): void
}

interface Service {
  sendEmail(cliente: string): void
}

class GeraPedido {
  constructor(
    private _cliente: string,
    private _valorOrcamento: number,
    private _quantidadeItens: number
  ) { }

  execute(repository: Repository, service: Service): void {
    const orcamento = new Orcamento(this._valorOrcamento, this._quantidadeItens)
    const pedido = new Pedido(this._cliente, new Date().toISOString(), orcamento)

    console.log(`LOG => pedido ${JSON.stringify(pedido)}`)

    repository.save(pedido)
    service.sendEmail(pedido.cliente)
  }
}

export { GeraPedido, Repository, Service }
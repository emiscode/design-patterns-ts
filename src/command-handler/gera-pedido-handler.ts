import { Orcamento } from "../@core/orcamento"
import { Pedido } from "../@core/pedido"
import { GeraPedido } from "./gera-pedido"

interface Repository {
  save(pedido: Pedido): void
}

interface Service {
  sendEmail(cliente: string): void
}

class GeraPedidoHandler {
  constructor(private _repository: Repository, private _service: Service) { }

  execute(dados: GeraPedido): void {
    const orcamento = new Orcamento(dados.valorOrcamento, dados.quantidadeItens)
    const pedido = new Pedido(dados.cliente, new Date().toISOString(), orcamento)

    console.log(`LOG => pedido ${JSON.stringify(pedido)}`)

    this._repository.save(pedido)
    this._service.sendEmail(pedido.cliente)
  }
}

export { GeraPedidoHandler, Repository, Service }
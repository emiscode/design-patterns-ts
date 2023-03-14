
import { Orcamento } from "../../@shared/orcamento"
import { Pedido } from "../../@shared/pedido"
import { GeraPedido } from "./gera-pedido"

interface Service {
  execute(pedido: Pedido): void
}

class GeraPedidoHandler {
  constructor(private _services: Array<Service>) { }

  execute(dados: GeraPedido): void {
    const orcamento = new Orcamento(dados.valorOrcamento, dados.quantidadeItens)
    const pedido = new Pedido(dados.cliente, new Date().toISOString(), orcamento)

    console.log(`LOG => pedido ${JSON.stringify(pedido)}`)

    this._services.forEach(service => {
      service.execute(pedido)
    })
  }
}

export { GeraPedidoHandler, Service }

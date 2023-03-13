import { Orcamento } from "../@core/orcamento"
import { Pedido } from "../@core/pedido"


class GeraPedido {
  constructor(
    private cliente: string,
    private valorOrcamento: number,
    private quantidadeItens: number
  ) { }

  executa() {
    const orcamento = new Orcamento(this.valorOrcamento, this.quantidadeItens)
    const pedido = new Pedido(this.cliente, new Date().toISOString(), orcamento)

    console.log(`LOG => pedido ${JSON.stringify(pedido)}`)
  }
}

export { GeraPedido }
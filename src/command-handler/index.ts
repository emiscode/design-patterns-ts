import { Pedido } from "../@core/pedido"
import { GeraPedido } from "./gera-pedido"
import { GeraPedidoHandler, Repository, Service } from "./gera-pedido-handler"

class FakeRepository implements Repository {
  save(pedido: Pedido) {
    console.log(`LOG => saving pedido ${JSON.stringify(pedido)}`)
  }
}

class FakeService implements Service {
  sendEmail(cliente: string): void {
    console.log(`LOG => sending email to ${cliente}`)
  }
}

const geradorPedido = new GeraPedido('Emilio', 200, 3)
const geradorPedidoHandler = new GeraPedidoHandler(new FakeRepository(), new FakeService())

geradorPedidoHandler.execute(geradorPedido)

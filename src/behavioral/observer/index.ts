import { Pedido } from "../../@shared/pedido"
import { GeraPedido } from "./gera-pedido"
import { GeraPedidoHandler, Service } from "./gera-pedido-handler"

class FakeRepository implements Service {
  execute(pedido: Pedido): void {
    console.log(`LOG => salvando o pedido ${JSON.stringify(pedido)}`)
  }
}

class FakeEmail implements Service {
  execute(pedido: Pedido): void {
    console.log(`LOG => enviando email do pedido ${JSON.stringify(pedido)}`)
  }
}

console.log('LOG => Testing Observer')

const geradorPedido = new GeraPedido('Emilio', 200, 3)
const geradorPedidoHandler = new GeraPedidoHandler([new FakeRepository(), new FakeEmail])

geradorPedidoHandler.execute(geradorPedido)

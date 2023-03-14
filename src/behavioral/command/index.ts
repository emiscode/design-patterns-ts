import { Pedido } from "../../@shared/pedido"
import { GeraPedido, Repository, Service } from "../command/gera-pedido";


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

const geraPedido = new GeraPedido('Emilio', 200, 3)

geraPedido.execute(new FakeRepository, new FakeService)
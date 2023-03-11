import { Orcamento } from "../../@core/orcamento"
import { Desconto } from "./desconto"

class DescontoNaoAplicado implements Desconto {
  calcular(orcamento: Orcamento): number {
    return orcamento.valor - orcamento.valor
  }

}

export { DescontoNaoAplicado }
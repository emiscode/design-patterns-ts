import { Orcamento } from "../../@shared/orcamento"
import { AbsDesconto } from "./desconto"

class DescontoNaoAplicado extends AbsDesconto {
  deveAplicar(orcamento: Orcamento): boolean {
    return orcamento.valor > 0
  }

  efetuarCalculo(orcamento: Orcamento): number {
    return orcamento.valor - orcamento.valor
  }
}

export { DescontoNaoAplicado }
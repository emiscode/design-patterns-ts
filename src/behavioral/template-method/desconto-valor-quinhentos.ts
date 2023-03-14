import { Orcamento } from "../../@shared/orcamento"
import { AbsDesconto } from "./desconto";

class DescontoValorMaiorQuinhentos extends AbsDesconto {
  deveAplicar(orcamento: Orcamento): boolean {
    return orcamento.valor > 500
  }

  efetuarCalculo(orcamento: Orcamento): number {
    return orcamento.valor * 0.05
  }
}

export { DescontoValorMaiorQuinhentos }
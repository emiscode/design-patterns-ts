import { Orcamento } from "../../../@shared/orcamento"
import { AbsDesconto } from "./desconto";

class DescontoValorMaiorQuinhentos extends AbsDesconto {
  calcular(orcamento: Orcamento): number {
    if (orcamento.valor > 500) {
      return orcamento.valor * 0.05
    }

    return super.calcular(orcamento)
  }

}

export { DescontoValorMaiorQuinhentos }
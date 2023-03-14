import { Orcamento } from "../../../../@shared/orcamento"
import { AbsDesconto, Desconto } from "./desconto";

class DescontoValorMaiorQuinhentos extends AbsDesconto implements Desconto {
  calcular(orcamento: Orcamento): number {
    if (orcamento.valor > 500) {
      return orcamento.valor * 0.05
    }

    return this.proximo.calcular(orcamento)
  }

}

export { DescontoValorMaiorQuinhentos }
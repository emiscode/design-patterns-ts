import { Orcamento } from "../../../../@shared/orcamento"
import { Desconto, AbsDesconto } from "./desconto";

class DescontoMaisCincoItens extends AbsDesconto implements Desconto {
  calcular(orcamento: Orcamento): number {
    if (orcamento.quantidade > 5) {
      return orcamento.valor * 0.1
    }

    return this.proximo.calcular(orcamento)
  }
}

export { DescontoMaisCincoItens }
import { Orcamento } from "../../../../@shared/orcamento"
import { Desconto, AbsDesconto } from "./desconto";

class DescontoGerente extends AbsDesconto implements Desconto {
  calcular(orcamento: Orcamento): number {
    if (orcamento.valor > 300) {
      return orcamento.valor * 0.2
    }

    return this.proximo.calcular(orcamento)
  }
}

export { DescontoGerente }
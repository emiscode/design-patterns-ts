import { Orcamento } from "../../../@shared/orcamento"
import { AbsDesconto } from "./desconto"

class DescontoMaisCincoItens extends AbsDesconto {
  calcular(orcamento: Orcamento): number {
    if (orcamento.quantidade > 5) {
      return orcamento.valor * 0.1
    }

    return super.calcular(orcamento)
  }
}

export { DescontoMaisCincoItens }
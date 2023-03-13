import { Orcamento } from "../@core/orcamento"
import { AbsDesconto } from "./desconto"

class DescontoGerente extends AbsDesconto {
  calcular(orcamento: Orcamento): number {
    if (orcamento.valor > 300) {
      return orcamento.valor * 0.2
    }

    return super.calcular(orcamento)
  }
}

export { DescontoGerente }
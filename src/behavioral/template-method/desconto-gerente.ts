import { Orcamento } from "../../@shared/orcamento"
import { AbsDesconto } from "./desconto"

class DescontoGerente extends AbsDesconto {
  deveAplicar(orcamento: Orcamento): boolean {
    return orcamento.valor > 300
  }

  efetuarCalculo(orcamento: Orcamento): number {
    return orcamento.valor * 0.2
  }
}

export { DescontoGerente }
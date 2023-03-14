import { Orcamento } from "../../@shared/orcamento"
import { AbsDesconto } from "./desconto"

class DescontoMaisCincoItens extends AbsDesconto {
  deveAplicar(orcamento: Orcamento): boolean {
    return orcamento.quantidade > 5
  }

  efetuarCalculo(orcamento: Orcamento): number {
    return orcamento.valor * 0.1
  }
}

export { DescontoMaisCincoItens }
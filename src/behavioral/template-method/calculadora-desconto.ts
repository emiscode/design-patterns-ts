import { Orcamento } from "../../@shared/orcamento"
import { DescontoMaisCincoItens } from "./desconto-cinco-itens"
import { DescontoGerente } from "./desconto-gerente"
import { DescontoValorMaiorQuinhentos } from "./desconto-valor-quinhentos"


class CalculadoraDesconto {
  calcular(orcamento: Orcamento): number {

    const desconto = new DescontoMaisCincoItens()
    const descontoQuinhentos = new DescontoValorMaiorQuinhentos()
    const descontoGerente = new DescontoGerente()

    desconto
      .proximo(descontoQuinhentos)
      ?.proximo(descontoGerente)

    return desconto.calcular(orcamento)
  }
}

export { CalculadoraDesconto }
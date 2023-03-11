import { Orcamento } from "../@core/orcamento"
import { DescontoMaisCincoItens } from "./desconto-cinco-itens"
import { DescontoValorMaiorQuinhentos } from "./desconto-valor-quinhentos"


class CalculadoraDesconto {
  calcular(orcamento: Orcamento): number {

    const desconto = new DescontoMaisCincoItens()
    const descontoQuinhentos = new DescontoValorMaiorQuinhentos()

    desconto.proximo(descontoQuinhentos)

    return desconto.calcular(orcamento)
  }
}

export { CalculadoraDesconto }
import { Orcamento } from "../../@core/orcamento";
import { Desconto } from "./desconto";
import { DescontoMaisCincoItens } from "./desconto-cinco-itens";
import { DescontoGerente } from "./desconto-gerente";
import { DescontoNaoAplicado } from "./desconto-nao-aplicado";
import { DescontoValorMaiorQuinhentos } from "./desconto-valor-quinhentos";

class CalculadoraDesconto {
  calcular(orcamento: Orcamento): number {
    const desconto: Desconto =
      new DescontoMaisCincoItens(
        new DescontoValorMaiorQuinhentos(
          new DescontoGerente(
            new DescontoNaoAplicado())))

    return desconto.calcular(orcamento)
  }
}

export { CalculadoraDesconto }
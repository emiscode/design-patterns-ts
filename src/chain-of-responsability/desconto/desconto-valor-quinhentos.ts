import { Orcamento } from "../../@core/orcamento";
import { Desconto } from "./desconto";

class DescontoValorMaiorQuinhentos implements Desconto {
  constructor (private proximo: Desconto) {}

  calcular (orcamento: Orcamento): number {
    if (orcamento.valor > 500) {
      return orcamento.valor * 0.05
    }

    return this.proximo.calcular(orcamento)
  }
  
}

export { DescontoValorMaiorQuinhentos }
import { Orcamento } from "../../@core/orcamento";
import { Desconto } from "./desconto";

class DescontoMaisCincoItens implements Desconto {
  constructor (private proximo: Desconto) {}

  calcular(orcamento: Orcamento): number {
    if (orcamento.quantidade > 5) {
      return orcamento.valor * 0.1
    }

    return this.proximo.calcular(orcamento)
  }
}

export { DescontoMaisCincoItens }
import { Orcamento } from "../../@core/orcamento";

class CalculadoraDesconto {
  calcular(orcamento: Orcamento): number {
    if (orcamento.quantidade > 5) {
      return orcamento.valor * 0.1
    }

    return 0.0
  }
}

export { CalculadoraDesconto }
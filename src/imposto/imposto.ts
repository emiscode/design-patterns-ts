import { Orcamento } from "../orcamento/orcamento";
import { TipoImposto } from "./tipoImposto";

class CalculadoraDeImpostos {
  constructor(private tipoImposto: TipoImposto) { }

  calcular(orcamento: Orcamento): number {
    let result = 0.0

    switch (this.tipoImposto) {
      case "ICMS":
        result = orcamento.valor * 0.1
        break
      case "ISS":
        result = orcamento.valor * 0.15
        break
      default: break
    }

    return result
  }
}

export { CalculadoraDeImpostos }
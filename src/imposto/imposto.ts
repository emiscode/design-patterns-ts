import { Orcamento } from "../orcamento/orcamento";
import { TipoImposto } from "./tipoImposto";

class CalculadoraDeImpostos {
  calcular(orcamento: Orcamento, tipoImposto: TipoImposto): number {
    let result = 0.0

    switch (tipoImposto) {
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

import { Orcamento } from "../../@core/orcamento";
import { Imposto } from "./imposto";

class CalculadoraImposto {
  calcular(orcamento: Orcamento, imposto: Imposto) {
    return imposto.calcular(orcamento)
  }
}

export { CalculadoraImposto }
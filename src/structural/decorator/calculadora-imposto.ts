import { Orcamento } from "../../@shared/orcamento";
import { Imposto } from "./imposto";

class CalculadoraImposto {
  calcular(orcamento: Orcamento, imposto: Imposto) {
    return imposto.calcular(orcamento)
  }
}

export { CalculadoraImposto }

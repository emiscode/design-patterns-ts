import { Orcamento } from "../orcamento/orcamento";
import { Imposto } from "./imposto";

class ISS implements Imposto {
  calcular(orcamento: Orcamento): number {
    return orcamento.valor * 0.06
  }
}

export { ISS }
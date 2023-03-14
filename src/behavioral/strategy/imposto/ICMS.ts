import { Orcamento } from "../../../@shared/orcamento";
import { Imposto } from "./imposto";

class ICMS implements Imposto {
  calcular(orcamento: Orcamento): number {
    return orcamento.valor * 0.10
  }
}

export { ICMS }
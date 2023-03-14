import { Orcamento } from "../../@shared/orcamento";
import { AbsImposto } from "./imposto";

class ICMS extends AbsImposto {
  realizarCalculo(orcamento: Orcamento): number {
    return orcamento.valor * 0.10
  }
}

export { ICMS }

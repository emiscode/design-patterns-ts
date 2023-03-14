import { Orcamento } from "../../@shared/orcamento";
import { AbsImposto } from "./imposto";

class ISS extends AbsImposto {
  realizarCalculo(orcamento: Orcamento): number {
    return orcamento.valor * 0.06
  }
}

export { ISS }

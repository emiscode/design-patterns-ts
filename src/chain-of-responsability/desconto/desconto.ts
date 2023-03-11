import { Orcamento } from "../../@core/orcamento";

interface Desconto {
  calcular(orcamento: Orcamento): number
}

abstract class AbsDesconto {
  constructor(protected proximo: Desconto) { }
}

export { Desconto, AbsDesconto }
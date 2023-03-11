import { Orcamento } from "../orcamento/orcamento";

interface Imposto {
  calcular(orcamento: Orcamento): number
}

export { Imposto }
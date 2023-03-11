import { Orcamento } from "../../@core/orcamento"

interface Imposto {
  calcular(orcamento: Orcamento): number
}

export { Imposto }
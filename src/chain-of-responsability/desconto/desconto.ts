import { Orcamento } from "../../@core/orcamento";

interface Desconto {
  calcular(orcamento: Orcamento | null): number
}

export { Desconto }
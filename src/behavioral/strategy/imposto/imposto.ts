import { Orcamento } from "../../../@shared/orcamento";

interface Imposto {
  calcular(orcamento: Orcamento): number
}

export { Imposto }
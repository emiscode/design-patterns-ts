import { Orcamento } from "./orcamento";

interface SituacaoOrcamento {
  aprovar(orcamento: Orcamento): void
  reprovar(orcamento: Orcamento): void
  finalizar(orcamento: Orcamento): void
  calcularValorDescontoExtra(orcamento: Orcamento): number
}

abstract class AbsSituacaoOrcamento implements SituacaoOrcamento {
  aprovar(orcamento: Orcamento) {
    throw new Error(`Orçamento ${JSON.stringify(orcamento)} não pode ser aprovado`)
  }

  reprovar(orcamento: Orcamento) {
    throw new Error(`Orçamento ${JSON.stringify(orcamento)} não pode ser reprovado`)
  }

  finalizar(orcamento: Orcamento) {
    throw new Error(`Orçamento ${JSON.stringify(orcamento)} não pode ser finalizado`)
  }

  calcularValorDescontoExtra(orcamento: Orcamento): number {
    return orcamento.valor - orcamento.valor
  }
}

export { AbsSituacaoOrcamento, SituacaoOrcamento }
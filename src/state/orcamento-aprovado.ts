import { Orcamento } from "./orcamento";
import { OrcamentoFinalizado } from "./orcamento-finalizado";
import { AbsSituacaoOrcamento } from "./situacao-orcamento";

class OrcamentoAprovado extends AbsSituacaoOrcamento {
  calcularValorDescontoExtra(orcamento: Orcamento): number {
    return orcamento.valor * 0.02
  }

  finalizar(orcamento: Orcamento) {
    orcamento.alterarSituacao(new OrcamentoFinalizado());
  }
}

export { OrcamentoAprovado }
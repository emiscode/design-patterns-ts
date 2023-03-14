import { Orcamento } from "./orcamento";
import { OrcamentoFinalizado } from "./orcamento-finalizado";
import { AbsSituacaoOrcamento } from "./situacao-orcamento";

class OrcamentoReprovado extends AbsSituacaoOrcamento {
  finalizar(orcamento: Orcamento) {
    orcamento.alterarSituacao(new OrcamentoFinalizado());
  }
}

export { OrcamentoReprovado }
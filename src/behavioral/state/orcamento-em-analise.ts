import { Orcamento } from "./orcamento";
import { OrcamentoAprovado } from "./orcamento-aprovado";
import { OrcamentoReprovado } from "./orcamento-reprovado";
import { AbsSituacaoOrcamento } from "./situacao-orcamento";

class OrcamentoEmAnalise extends AbsSituacaoOrcamento {
  calcularValorDescontoExtra(orcamento: Orcamento): number {
    return orcamento.valor * 0.05
  }

  aprovar(orcamento: Orcamento) {
    orcamento.alterarSituacao(new OrcamentoAprovado());
  }

  reprovar(orcamento: Orcamento) {
    orcamento.alterarSituacao(new OrcamentoReprovado());
  }
}

export { OrcamentoEmAnalise }
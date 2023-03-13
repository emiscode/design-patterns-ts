import { OrcamentoEmAnalise } from "./orcamento-em-analise"
import { SituacaoOrcamento } from "./situacao-orcamento"

class Orcamento {
  private _situacao: SituacaoOrcamento

  constructor(
    private _valor: number,
    private _quantidade: number,
  ) {
    this._situacao = new OrcamentoEmAnalise()
  }

  aplicarDescontoExtra(): void {
    this._valor = this._valor - this._situacao.calcularValorDescontoExtra(this)
  }

  alterarSituacao(situacao: SituacaoOrcamento) {
    this._situacao = situacao
  }

  aprovar() {
    this._situacao.aprovar(this)
  }

  reprovar() {
    this._situacao.reprovar(this)
  }

  finalizar() {
    this._situacao.finalizar(this)
  }

  verSituacao(): string {
    return this._situacao.constructor.name
  }

  get valor(): number {
    return this._valor
  }

  get quantidade(): number {
    return this._quantidade
  }

  get situacao(): SituacaoOrcamento {
    return this._situacao
  }
}

export { Orcamento }
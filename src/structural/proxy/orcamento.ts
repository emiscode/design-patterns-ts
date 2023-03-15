import { execSync } from 'child_process';

import { OrcamentoEmAnalise } from "./orcamento-em-analise"
import { SituacaoOrcamento } from "./situacao-orcamento"

interface IOrcamento {
  getValor(): number
}

class Orcamento implements IOrcamento {
  protected _valor: number
  protected _itens: Array<IOrcamento>
  protected _situacao: SituacaoOrcamento

  constructor() {
    this._valor = 0.0
    this._itens = []
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

  get situacao(): SituacaoOrcamento {
    return this._situacao
  }

  addItem(item: IOrcamento): void {
    this._itens.push(item)
  }

  itens(): Array<IOrcamento> {
    return this._itens
  }

  getValor(): number {
    execSync('sleep 2')
    const valores: Array<number> = []

    this._itens.forEach(item => valores.push(item.getValor()))
    this._valor = valores.reduce((sum, valor) => sum + valor)

    return this._valor
  }

  quantidade(): number {
    return this._itens.length
  }
}

export { Orcamento, IOrcamento }

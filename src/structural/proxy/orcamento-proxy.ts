import { Orcamento } from "./orcamento";

class OrcamentoProxy extends Orcamento {
  constructor(protected _orcamento: Orcamento) {
    super()
  }

  getValor(): number {
    if (!this._valor) {
      this._valor = this._orcamento.getValor()
    }

    return this._valor
  }

  getOrcamento(): Orcamento {
    return this.getOrcamento()
  }
}

export { OrcamentoProxy }

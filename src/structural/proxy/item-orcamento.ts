import { IOrcamento } from "./orcamento"

class ItemOrcamento implements IOrcamento {
  constructor(private _valor: number) { }

  getValor(): number {
    return this._valor
  }

}

export { ItemOrcamento }

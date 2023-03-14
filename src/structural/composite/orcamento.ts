import { ItemOrcamento } from "../../@shared/item-orcamento"

class Orcamento {
  private _valor: number
  private _itens: Array<ItemOrcamento>

  constructor() {
    this._valor = 0.0
    this._itens = []
  }

  addItem(item: ItemOrcamento): void {
    this._itens.push(item)
  }

  itens(): Array<ItemOrcamento> {
    return this._itens
  }

  valor(): number {
    const valores: Array<number> = []

    this._itens.forEach(item => valores.push(item.valor))
    this._valor = valores.reduce((sum, valor) => sum + valor)

    return this._valor
  }

  quantidade(): number {
    return this._itens.length
  }
}

export { Orcamento }

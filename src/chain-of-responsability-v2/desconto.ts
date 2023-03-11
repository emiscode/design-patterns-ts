import { Orcamento } from "../@core/orcamento"

interface Desconto {
  proximo(desconto: Desconto): Desconto | void
  calcular(orcamento: Orcamento): number
}

abstract class AbsDesconto implements Desconto {
  protected _proximo: Desconto | void

  constructor(proximo: Desconto | void) {
    this._proximo = proximo
  }

  proximo(proximo: Desconto | void): Desconto | void {
    this._proximo = proximo
    return proximo
  }

  calcular(orcamento: Orcamento) {
    if (this._proximo) {
      return this._proximo.calcular(orcamento)
    }

    return 0.0
  }
}

export { Desconto, AbsDesconto }
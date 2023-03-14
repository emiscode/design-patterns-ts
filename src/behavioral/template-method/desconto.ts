import { Orcamento } from "../../@shared/orcamento"

interface Desconto {
  deveAplicar(orcamento: Orcamento): boolean
  calcular(orcamento: Orcamento): number
  proximo(desconto: Desconto): Desconto | void
}

abstract class AbsDesconto implements Desconto {
  protected _proximo: Desconto | void
  protected abstract efetuarCalculo(orcamento: Orcamento): number

  constructor(proximo: Desconto | void) {
    this._proximo = proximo
  }

  deveAplicar(orcamento: Orcamento): boolean {
    return orcamento.valor > 0
  }

  calcular(orcamento: Orcamento): number {
    if (this.deveAplicar(orcamento)) {
      return this.efetuarCalculo(orcamento)
    }

    const calculo = this._proximo ? this._proximo.calcular(orcamento) : 0.0

    return calculo
  }

  proximo(proximo: Desconto): Desconto {
    this._proximo = proximo
    return proximo
  }
}

export { Desconto, AbsDesconto }
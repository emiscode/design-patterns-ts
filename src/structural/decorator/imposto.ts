import { Orcamento } from "../../@shared/orcamento";

interface Imposto {
  calcular(orcamento: Orcamento): number
}

abstract class AbsImposto implements Imposto {
  constructor(private _outroImposto: Imposto | void) { }

  protected abstract realizarCalculo(orcamento: Orcamento): number

  calcular(orcamento: Orcamento): number {
    const valorImposto = this.realizarCalculo(orcamento)
    const valorOutroImposto = this._outroImposto ? this._outroImposto.calcular(orcamento) : 0.0

    return valorImposto + valorOutroImposto
  }
}

export { Imposto, AbsImposto }

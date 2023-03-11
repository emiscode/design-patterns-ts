class Orcamento {
  constructor(private _valor: number) { }

  get valor(): number {
    return this._valor
  }
}

export { Orcamento }
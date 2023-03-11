class Orcamento {
  constructor(private _valor: number, private _quantidade: number) { }

  get valor(): number {
    return this._valor
  }

  get quantidade(): number {
    return this._quantidade
  }
}

export { Orcamento }
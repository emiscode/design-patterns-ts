class GeraPedido {
  constructor(
    private _cliente: string,
    private _valorOrcamento: number,
    private _quantidadeItens: number
  ) { }

  get cliente(): string {
    return this._cliente
  }

  get valorOrcamento(): number {
    return this._valorOrcamento
  }

  get quantidadeItens(): number {
    return this._quantidadeItens
  }
}

export { GeraPedido }
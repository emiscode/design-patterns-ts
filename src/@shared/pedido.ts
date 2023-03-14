import { Orcamento } from "./orcamento";

class Pedido {
  constructor(
    private _cliente: string,
    private _data: string,
    private _orcamento: Orcamento
  ) { }

  get cliente(): string {
    return this._cliente
  }

  get data(): string {
    return this._data
  }

  get orcamento(): Orcamento {
    return this._orcamento
  }
}

export { Pedido }
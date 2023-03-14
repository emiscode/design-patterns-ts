import { Orcamento } from "../../@shared/orcamento";
import { HttpAdapter } from "./http-adapter";

class RegistroOrcamento {
  constructor(private _httpAdapter: HttpAdapter) { }

  registrar(orcamento: Orcamento): void {
    console.log(`LOG => registrando orçamento ${JSON.stringify(orcamento)}`)
    this._httpAdapter.post('http://api.externa/orcamento', orcamento)
  }
}

export { RegistroOrcamento }

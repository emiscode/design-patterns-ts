import { Desconto } from "./desconto"

class DescontoNaoAplicado implements Desconto {
  calcular (): number {
    return 0.0
  }
  
}

export { DescontoNaoAplicado }
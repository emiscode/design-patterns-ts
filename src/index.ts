import { CalculadoraDeImpostos } from "./imposto/imposto"
import { TipoImposto } from "./imposto/tipoImposto"
import { Orcamento } from "./orcamento/orcamento"

type App = {
  status: string
}

const app: App = {
  status: 'Running',
}

console.log(`INFO => app ${JSON.stringify(app)}`)

const orcamento = new Orcamento(100)

const impostoICMS = new CalculadoraDeImpostos(TipoImposto.ICMS)
console.log(`INFO => orcamento ${JSON.stringify(orcamento)} =>
  imposto ${JSON.stringify(impostoICMS)} => 
  resultado => ${impostoICMS.calcular(orcamento)}`)

const impostoISS = new CalculadoraDeImpostos(TipoImposto.ISS)
console.log(`INFO => orcamento ${JSON.stringify(orcamento)} =>
  imposto ${JSON.stringify(impostoISS)} => 
  resultado => ${impostoISS.calcular(orcamento)}`)

export default App
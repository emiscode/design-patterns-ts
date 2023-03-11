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

const imposto = new CalculadoraDeImpostos()
console.log(`INFO => orcamento ${JSON.stringify(orcamento)} =>
  imposto ${JSON.stringify(imposto)} => 
  resultado => ${imposto.calcular(orcamento, TipoImposto.ISS)}`)

export default App
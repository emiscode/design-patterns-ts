import { Orcamento } from "./orcamento"


console.log('LOG => Testing State Pattern')

const valor = 200
const orcamento = new Orcamento(valor, 6)

console.log(`LOG => 
  valor ${valor} => 
  orcamento ${orcamento.valor} => 
  situacao ${orcamento.verSituacao()} =>
  quantidade ${orcamento.quantidade}`)

orcamento.aplicarDescontoExtra()

console.log(`LOG => 
  valor ${valor} => 
  orcamento ${orcamento.valor} => 
  situacao ${orcamento.verSituacao()} =>
  quantidade ${orcamento.quantidade}`)

orcamento.aprovar()
orcamento.aplicarDescontoExtra()

console.log(`LOG => 
  valor ${valor} => 
  orcamento ${orcamento.valor} => 
  situacao ${orcamento.verSituacao()} =>
  quantidade ${orcamento.quantidade}`)

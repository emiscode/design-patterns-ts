import { Orcamento } from "./orcamento"
import { ItemOrcamento } from "./item-orcamento"

console.log('LOG => Testing Composite')

const orcamento = new Orcamento()

orcamento.addItem(new ItemOrcamento(20))
orcamento.addItem(new ItemOrcamento(50))
orcamento.addItem(new ItemOrcamento(100))

console.log(`LOG =>
  orcamento ${orcamento.getValor()} =>
  quantidade ${orcamento.quantidade()}`)

const antigo = new Orcamento()
antigo.addItem(new ItemOrcamento(300))
antigo.reprovar()

const novo = new Orcamento()
novo.addItem(new ItemOrcamento(280))
novo.addItem(antigo)

console.log(`LOG =>
  orcamento ${novo.getValor()} =>
  quantidade ${novo.quantidade()}`)

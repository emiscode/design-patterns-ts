import { Orcamento } from "./orcamento"
import { ItemOrcamento } from "./item-orcamento"
import { OrcamentoProxy } from "./orcamento-proxy"

console.log('LOG => Testing Proxy')

const orcamento = new Orcamento()

orcamento.addItem(new ItemOrcamento(20))
orcamento.addItem(new ItemOrcamento(50))
orcamento.addItem(new ItemOrcamento(100))

const orcamentoProxy = new OrcamentoProxy(orcamento)

console.log(`LOG =>
  orcamento ${orcamentoProxy.getValor()} =>
  quantidade ${orcamentoProxy.quantidade()}`)

console.log(`LOG =>
  orcamento ${orcamentoProxy.getValor()} =>
  quantidade ${orcamentoProxy.quantidade()}`)

console.log(`LOG =>
  orcamento ${orcamentoProxy.getValor()} =>
  quantidade ${orcamentoProxy.quantidade()}`)

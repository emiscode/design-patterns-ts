import { Orcamento } from "./orcamento"
import { ItemOrcamento } from "../../@shared/item-orcamento"

console.log('LOG => Testing Composite')

const orcamento = new Orcamento()

orcamento.addItem(new ItemOrcamento(20))
orcamento.addItem(new ItemOrcamento(50))
orcamento.addItem(new ItemOrcamento(100))

console.log(`LOG =>
  orcamento ${orcamento.valor()} =>
  quantidade ${orcamento.quantidade()}`)

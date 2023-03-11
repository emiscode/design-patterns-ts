import { Orcamento } from "../@core/orcamento"
import { CalculadoraDesconto } from "./desconto/calculadora-desconto"

const orcamento = new Orcamento(100, 6)
const calculadoraDesconto = new CalculadoraDesconto()
const desconto = calculadoraDesconto.calcular(orcamento)

console.log(`LOG => orcamento ${orcamento.valor} => 
  quantidade ${orcamento.quantidade} => 
  desconto ${desconto}`)

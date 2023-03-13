import { Orcamento } from "../@core/orcamento"
import { CalculadoraDesconto } from "./calculadora-desconto"

console.log('LOG => Testing Template Method')

const orcamento200 = new Orcamento(200, 6)
let calculadoraDesconto = new CalculadoraDesconto()
let desconto = calculadoraDesconto.calcular(orcamento200)

console.log(`LOG => orcamento ${orcamento200.valor} => 
  quantidade ${orcamento200.quantidade} => 
  desconto ${desconto}`)

const orcamento100 = new Orcamento(100, 2)
desconto = calculadoraDesconto.calcular(orcamento100)

console.log(`LOG => orcamento ${orcamento100.valor} => 
  quantidade ${orcamento100.quantidade} => 
  desconto ${desconto}`)

const orcamento600 = new Orcamento(600, 3)
desconto = calculadoraDesconto.calcular(orcamento600)

console.log(`LOG => orcamento ${orcamento600.valor} => 
  quantidade ${orcamento600.quantidade} => 
  desconto ${desconto}`)

const orcamento350 = new Orcamento(350, 1)
desconto = calculadoraDesconto.calcular(orcamento350)

console.log(`LOG => orcamento ${orcamento350.valor} => 
  quantidade ${orcamento350.quantidade} => 
  desconto ${desconto}`)

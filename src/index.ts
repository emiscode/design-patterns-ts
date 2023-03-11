
import { ISS } from "./strategy/imposto/ISS";
import { ICMS } from "./strategy/imposto/ICMS";
import { Orcamento } from "./strategy/orcamento/orcamento";
import { CalculadoraImposto } from "./strategy/imposto/calculadora-imposto";

const orcamento = new Orcamento(100)
const calculadoraImposto = new CalculadoraImposto()
const impostoISS = calculadoraImposto.calcular(orcamento, new ISS())
const impostoICMS = calculadoraImposto.calcular(orcamento, new ICMS())

console.log(`LOG => orcamento => ${orcamento.valor} => ISS ${impostoISS}`)
console.log(`LOG => orcamento => ${orcamento.valor} => ICMS ${impostoICMS}`)
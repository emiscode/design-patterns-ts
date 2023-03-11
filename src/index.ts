
import { ISS } from "./imposto/ISS";
import { ICMS } from "./imposto/ICMS";
import { Orcamento } from "./orcamento/orcamento";
import { CalculadoraImposto } from "./imposto/calculadora-imposto";

const orcamento = new Orcamento(100)
const calculadoraImposto = new CalculadoraImposto()
const impostoISS = calculadoraImposto.calcular(orcamento, new ISS())
const impostoICMS = calculadoraImposto.calcular(orcamento, new ICMS())

console.log(`LOG => orcamento => ${orcamento.valor} => ISS ${impostoISS}`)
console.log(`LOG => orcamento => ${orcamento.valor} => ICMS ${impostoICMS}`)
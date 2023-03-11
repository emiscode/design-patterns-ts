import { ISS } from "./imposto/ISS";
import { ICMS } from "./imposto/ICMS";
import { CalculadoraImposto } from "./imposto/calculadora-imposto";
import { Orcamento } from "../@core/orcamento";

const orcamento = new Orcamento(100, 1)
const calculadoraImposto = new CalculadoraImposto()
const impostoISS = calculadoraImposto.calcular(orcamento, new ISS())
const impostoICMS = calculadoraImposto.calcular(orcamento, new ICMS())

console.log(`LOG => orcamento => ${orcamento.valor} => ICMS ${impostoICMS}`)
console.log(`LOG => orcamento => ${orcamento.valor} => ICMS ${impostoISS}`)
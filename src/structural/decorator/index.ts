
import { Orcamento } from "../../@shared/orcamento";
import { CalculadoraImposto } from "./calculadora-imposto";
import { ICMS } from "./ICMS";
import { ISS } from "./ISS";

console.log('LOG => Testing Decorator')

const orcamento = new Orcamento(100, 1)
const calculadoraImposto = new CalculadoraImposto()
const impostoICMSISS = calculadoraImposto.calcular(orcamento, new ICMS(new ISS()))

console.log(`LOG => orcamento => ${orcamento.valor} => ICMS+ISS ${impostoICMSISS}`)

import { Orcamento } from "../../@shared/orcamento";
import { FakeHttpAdapter } from "./fake-http-adapter";
import { RegistroOrcamento } from "./registro-orcamento";

const orcamento = new Orcamento(200, 3)
const registroOrcameto = new RegistroOrcamento(new FakeHttpAdapter())

registroOrcameto.registrar(orcamento)

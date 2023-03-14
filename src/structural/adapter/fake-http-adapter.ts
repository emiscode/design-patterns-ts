import { HttpAdapter } from "./http-adapter";

class FakeHttpAdapter implements HttpAdapter {
  post(url: string, dados: object): void {
    console.log(`LOG => POST to url ${url} with data ${JSON.stringify(dados)}`)
  }
}

export { FakeHttpAdapter }

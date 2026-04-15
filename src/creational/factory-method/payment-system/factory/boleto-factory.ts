import { Boleto } from "../products/boleto";
import { Pagamento } from "../interfaces/pagamento";
import { PagamentoFactory } from "./pagamento-factory";

export class BoletoFactory extends PagamentoFactory {
  constructor(private numeroBoleto: string) {
    super();
  }

  create(): Pagamento {
    const boleto = new Boleto(this.numeroBoleto);
    return boleto;
  }
}

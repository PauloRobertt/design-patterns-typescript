import { Pix } from "../products/pix";
import { Pagamento } from "../interfaces/pagamento";
import { PagamentoFactory } from "./pagamento-factory";

export class PixFactory extends PagamentoFactory {
  constructor(private chavePix: string) {
    super();
  }

  create(): Pagamento {
    const pix = new Pix(this.chavePix);
    return pix;
  }
}

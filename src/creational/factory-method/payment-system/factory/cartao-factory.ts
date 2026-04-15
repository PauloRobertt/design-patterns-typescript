import { Cartao } from "../products/cartao";
import { Pagamento } from "../interfaces/pagamento";
import { PagamentoFactory } from "./pagamento-factory";

export class CartaoFactory extends PagamentoFactory {
  constructor(private numeroCartao: number) {
    super();
  }

  create(): Pagamento {
    const cartao = new Cartao(this.numeroCartao);
    return cartao;
  }
}

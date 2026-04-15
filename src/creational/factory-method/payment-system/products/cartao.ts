import { Pagamento } from "../interfaces/pagamento";

export class Cartao implements Pagamento {
  constructor(private numeroCartao: number) {}

  realizarPagamento(valor: number): void {
    console.log(
      `Pagamento no valor de ${valor} foi realizado pelo cartao de número ${this.numeroCartao}`,
    );
  }
}

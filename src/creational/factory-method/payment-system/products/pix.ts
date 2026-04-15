import { Pagamento } from "../interfaces/pagamento";

export class Pix implements Pagamento {
  constructor(private chavePix: string) {}

  realizarPagamento(valor: number): void {
    console.log(
      `Pagamento no valor de ${valor} foi realizado via Pix pela chave ${this.chavePix}`,
    );
  }
}

import { Pagamento } from "../interfaces/pagamento";

export class Boleto implements Pagamento {
  constructor(private numeroBoleto: string) {}

  realizarPagamento(valor: number): void {
    console.log(
      `Pagamento no valor de ${valor} foi realizado pelo boleto: ${this.numeroBoleto}`,
    );
  }
}

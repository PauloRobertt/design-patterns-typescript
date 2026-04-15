import { Pagamento } from "../interfaces/pagamento";

export abstract class PagamentoFactory {
  abstract create(): Pagamento;
}

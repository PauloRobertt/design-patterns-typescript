import { PixFactory } from "./factory/pix-factory";

const pixPagamento = new PixFactory("chavepix-12312312312321");
const pix = pixPagamento.create();
pix.realizarPagamento(125);

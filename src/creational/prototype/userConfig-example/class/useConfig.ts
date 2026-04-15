import { Prototype } from "../interface/prototype";

export class UseConfig implements Prototype {
  constructor(
    public tema: string,
    public idioma: string,
    public notificacoes: {},
  ) {}

  clone(): Prototype {
    return new UseConfig(this.tema, this.idioma, {
      ...this.notificacoes,
    });
  }
}

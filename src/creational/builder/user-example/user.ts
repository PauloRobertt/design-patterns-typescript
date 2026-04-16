export class User {
  constructor(
    public name: string,
    public email: string,
    public admin: boolean,
    public age?: number,
    public phone?: string,
  ) {}
}

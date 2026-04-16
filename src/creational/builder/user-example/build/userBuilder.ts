import { Builder } from "../interface/builder";
import { User } from "../user";

export class UserBuilder implements Builder {
  constructor(
    private name: string,
    private email: string,
    private admin: boolean = false,
  ) {}

  private age?: number;
  private phone?: string;

  setAge(age: number): this {
    this.age = age;
    return this;
  }

  setPhone(phone: string): this {
    this.phone = phone;
    return this;
  }

  setAdmin(role: boolean): this {
    this.admin = role;
    return this;
  }

  build(): User {
    if (!this.name) {
      throw new Error("Nome é obrigatorio!");
    }

    if (!this.email) {
      throw new Error("E-mail Obrigatorio!");
    }

    return new User(this.name, this.email, this.admin, this.age, this.phone);
  }
}

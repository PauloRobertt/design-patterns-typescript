import { User } from "../user";

export interface Builder {
  setAge(age: number): this;
  setPhone(phone: string): this;
  setAdmin(role: boolean): this;
  build(): User;
}

import { Customer } from "../../interface/customer";

export class EnterpriseCustomer implements Customer {
  constructor(
    public name: string,
    public age: number,
  ) {}

  createEnterpriseCustomer(): EnterpriseCustomer {
    const customer = new EnterpriseCustomer(this.name, this.age);
    return customer;
  }
}

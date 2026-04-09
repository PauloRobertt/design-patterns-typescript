class Adress {
  constructor(
    public street: string,
    public number: number,
  ) {}
}

interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Adress[] = [];
  constructor(
    public name: string,
    public age: number,
  ) {}

  clone(): this {
    const newPerson = Object.assign({}, this);
    return newPerson;
  }

  addAddresses(address: Adress): void {
    this.addresses.push(address);
  }
}

const address1 = new Adress("Av Brasil", 15);
const person1 = new Person("Pessoa", 12);
person1.addAddresses(address1);
const person2 = person1.clone();

person1.addresses[0].street = "Av Ceara";

console.log("Person1", person1);
console.log("Person2", person2.addresses);

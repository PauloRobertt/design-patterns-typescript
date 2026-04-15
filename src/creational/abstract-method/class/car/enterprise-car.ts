import { Vehicle } from "../../interface/vehicle";

export class EnterpriseCar implements Vehicle {
  constructor(
    public name: string,
    public age: number,
    public plate: number,
  ) {}
}

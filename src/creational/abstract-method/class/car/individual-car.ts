import { Vehicle } from "../../interface/vehicle";

export class IndividualCar implements Vehicle {
  constructor(
    public name: string,
    public age: number,
    public plate: number,
  ) {}
}

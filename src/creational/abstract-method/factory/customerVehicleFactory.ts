import { Customer } from "../interface/customer";
import { Vehicle } from "../interface/vehicle";

export interface CustomerVehicleFactory {
  createCustomer(name: string, age: number): Customer;
  createVehicle(name: string, age: number, plate: number): Vehicle;
}

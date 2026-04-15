import { IndividualCustomer } from "../class/customer/individual-customer";
import { IndividualCar } from "../class/car/individual-car";
import { CustomerVehicleFactory } from "../factory/customerVehicleFactory";
import { Customer } from "../interface/customer";
import { Vehicle } from "../interface/vehicle";

export class IndividualCustomerVehicleFactory implements CustomerVehicleFactory {
  createCustomer(name: string, age: number): Customer {
    const customer = new IndividualCustomer(name, age);
    return customer;
  }

  createVehicle(name: string, age: number, plate: number): Vehicle {
    const vehicle = new IndividualCar(name, age, plate);
    return vehicle;
  }
}

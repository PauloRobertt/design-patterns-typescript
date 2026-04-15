import { EnterpriseCustomer } from "../class/customer/enterprise-customer";
import { EnterpriseCar } from "../class/car/enterprise-car";
import { CustomerVehicleFactory } from "../factory/customerVehicleFactory";
import { Customer } from "../interface/customer";
import { Vehicle } from "../interface/vehicle";

export class EnterpriseCustomerVehicleFactory implements CustomerVehicleFactory {
  createCustomer(name: string, age: number): Customer {
    const customer = new EnterpriseCustomer(name, age);
    return customer;
  }

  createVehicle(name: string, age: number, plate: number): Vehicle {
    const vehicle = new EnterpriseCar(name, age, plate);
    return vehicle;
  }
}

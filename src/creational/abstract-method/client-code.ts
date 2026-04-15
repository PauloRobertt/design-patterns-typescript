import { EnterpriseCustomerVehicleFactory } from "./factory/enterprise-customer-vehicle-factory";
import { IndividualCustomerVehicleFactory } from "./factory/individual-customer-vehicle-factory";

const individualCustomerFactory = new IndividualCustomerVehicleFactory();
const enterpriseVehicleFactory = new EnterpriseCustomerVehicleFactory();

const IndividualCustomer = individualCustomerFactory.createCustomer(
  "Paulo",
  22,
);

const enterpriseVehicle = enterpriseVehicleFactory.createVehicle(
  "FOX",
  2010,
  11111,
);

const individualVehicle = individualCustomerFactory.createVehicle(
  "GOL",
  2014,
  123123123,
);

console.log(enterpriseVehicle);
console.log(IndividualCustomer);
console.log(individualVehicle);

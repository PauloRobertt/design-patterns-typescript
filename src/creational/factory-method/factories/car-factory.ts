import { Car } from "../vehicle/car";
import { Vehicle } from "../vehicle/vehicle";
import { VehicleFatory } from "./vehicle-fatory";

export class CarFactory extends VehicleFatory {
  getVehicle(vehicleName: string): Vehicle {
    return new Car(vehicleName);
  }
}

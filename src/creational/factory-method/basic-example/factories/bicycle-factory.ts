import { Bicycle } from "../vehicle/bicycle";
import { Vehicle } from "../vehicle/vehicle";
import { VehicleFatory } from "./vehicle-fatory";

export class BicycleFactory extends VehicleFatory {
  getVehicle(vehicleName: string): Vehicle {
    return new Bicycle(vehicleName);
  }
}

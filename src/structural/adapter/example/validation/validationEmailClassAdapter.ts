import { ValidationEmailProtocol } from "./validationEmailProtocol";
import isEmail from "validator/lib/isEmail";

export class ValidationEmailClassAdapter implements ValidationEmailProtocol {
  isEmail(value: string): boolean {
    return isEmail(value);
  }
}

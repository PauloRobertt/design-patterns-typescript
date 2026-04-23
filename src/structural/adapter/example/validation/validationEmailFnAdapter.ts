import isEmail from "validator/lib/isEmail";
import { ValidationEmailFnProtocol } from "./validationEmailProtocol";

export const validationEmailFnAdapter: ValidationEmailFnProtocol = (
  value: string,
) => {
  return isEmail(value);
};

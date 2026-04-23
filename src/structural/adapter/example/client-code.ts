import { ValidationEmailProtocol } from "./validation/validationEmailProtocol";
import { ValidationEmailClassAdapter } from "./validation/validationEmailClassAdapter";
import { validationEmailFnAdapter } from "./validation/validationEmailFnAdapter";

function ValidationEmailClassClient(
  emailValidator: ValidationEmailProtocol,
  value: string,
): void {
  if (emailValidator.isEmail(value)) {
    console.log("Email Valido!");
  } else {
    console.log("Email Invalido!");
  }
}
const email = "Email@hotmail.com";

ValidationEmailClassClient(new ValidationEmailClassAdapter(), email);

if (validationEmailFnAdapter(email)) {
  console.log("Email Valido!");
} else {
  console.log("Email Invalido!");
}

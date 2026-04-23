export interface ValidationEmailProtocol {
  isEmail: ValidationEmailFnProtocol;
}

export interface ValidationEmailFnProtocol {
  (value: string): boolean;
}

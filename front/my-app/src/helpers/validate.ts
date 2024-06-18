export interface ILoginErrors {
  email?: string;
  password?: string;
}
export interface IRegisterErrors {
  name?: string;
  email?: string;
  password?: string;
  address?: string;
  phone?: string;
}


type FormErrors = Partial<Record<keyof IRegisterErrors, string>>;

export const ValidateLogin = (input: ILoginErrors): FormErrors => {
  const errors: FormErrors = {};
  const emailRegExp = /\S+@\S+.\S+/;
  const uppercaseRegex = /[A-Z]/;
  const numberRegex = /[0-9]/;

  // VALIDACION EMAIL
  if (!input.email) {
    errors.email = "You must enter an email";
  } else if (!emailRegExp.test(input.email)) {
    errors.email = "You must enter a valid email";
  }

  // VALIDACION CONTRASEÑA
  else if (!input.password) errors.password = "You must enter a password";
  else if (input.password.length < 4)
    errors.password = "Password of at least 4 characters";
  else if (input.password.length > 10)
    errors.password = "Password of maximum 10 characters";
  else if (!uppercaseRegex.test(input.password))
    errors.password = "Password must have at least one uppercase letter";
  else if (!numberRegex.test(input.password))
    errors.password = "Password must have at least one number";

  return errors;
}

  // V A L I D A C I O N   R E G I S T E R - - - - - - - - - - - - - - - - - - -




export const ValidateRegister = (input: IRegisterErrors): FormErrors => {
  const errors: FormErrors = {};
  const emailRegExp = /\S+@\S+.\S+/; // Validador de email.
  const uppercaseRegex = /[A-Z]/;
  const numberRegex = /[0-9]/;

  // VALIDACION NAME
  if (!input.name) errors.name = "You must enter a name";
  else if (input.name.length < 4) {
    errors.name = "Name of at least 4 characters";
  } else if (input.name.length > 15) {
    errors.name = "Name of maximum 15 characters";
  } else if (!input.name.trim()) {
    errors.name = "You must enter a valid name";
  }

  // VALIDACION EMAIL
  else if (!input.email) {
    errors.email = "You must enter an email";
  } else if (!emailRegExp.test(input.email)) {
    errors.email = "You must enter a valid email";
  }

  // VALIDACION CONTRASEÑA
  else if (!input.password) errors.password = "You must enter a password";
  else if (input.password.length < 4)
    errors.password = "Password of at least 4 characters";
  else if (input.password.length > 10)
    errors.password = "Password of maximum 10 characters";
  else if (!uppercaseRegex.test(input.password))
    errors.password = "Password must have at least one uppercase letter";
  else if (!numberRegex.test(input.password))
    errors.password = "Password must have at least one number";
  else if (!input.address) {
    errors.address = "Enter an address";
  } else if (!input.phone) {
    errors.phone = "Enter a phone number";
  }

  return errors;
};
export function loginValidate(values, randomWord) {
  const errors = {};

  // validation for Email
  if (!values.email) {
    errors.email = "Email Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // validation for password
  if (!values.password) {
    errors.password = "Password Required";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = "Must be greater then 8 and less then 20 characters long";
  } else if (values.password.includes(" ")) {
    errors.password = "Invalid Password";
  }

  // Validation for Security Code
  if (!values.code) {
    errors.code = "Code Required";
  } else if (values.code.length !== 5) {
    errors.code = "Must be 5 characters long";
  } else if (/\s/.test(values.code)) {
    errors.code = "Invalid Security Code (contains spaces)";
  } else if (values.code !== randomWord) {
    errors.code = "Incorrect Security Code";
  }

  return errors;
}

export function registerValidate(values, randomWord) {
  const errors = {};

  // Validation for CIN
  if (!values.cin) {
    errors.cin = "CIN Required";
  } else if (!/^\d{8}$/.test(values.cin)) {
    errors.cin = "Invalid CIN";
  }

  // validation for Email
  if (!values.email) {
    errors.email = "Email Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // Phone Number Validation using Regex
  if (!values.phone) {
    errors.phone = "Phone Required";
  } else {
    const phoneRegex = /^(?:(?:\+|00)216)?\d{8}$/;
    if (!phoneRegex.test(values.phone)) {
      errors.phone = "Invalid Phone Number";
    }
  }

  // Validation for Security Code
  if (!values.code) {
    errors.code = "Code Required";
  } else if (values.code.length !== 5) {
    errors.code = "Must be 5 characters long";
  } else if (/\s/.test(values.code)) {
    errors.code = "Invalid Security Code (contains spaces)";
  } else if (values.code !== randomWord) {
    errors.code = "Incorrect Security Code";
  }

  return errors;
}

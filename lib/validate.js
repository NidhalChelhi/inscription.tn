export function loginValidate(values, randomWord) {
  const errors = {};

  // validation for Email
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // validation for password
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = "Must be greater then 8 and less then 20 characters long";
  } else if (values.password.includes(" ")) {
    errors.password = "Invalid Password";
  }

  // Validation for Security Code
  if (!values.code) {
    errors.code = "Required";
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
    errors.cin = "Required";
  } else if (!/^\d{8}$/.test(values.cin)) {
    errors.cin = "Invalid CIN";
  }

  // Phone Number Validation using Regex
  if (!values.phone) {
    errors.phone = "Required";
  } else {
    // Define a regex pattern for a Tunisian phone number
    const phoneRegex = /^(?:(?:\+|00)216)?\d{8}$/;

    // Test if the phone number matches the pattern
    if (!phoneRegex.test(values.phone)) {
      errors.phone = "Invalid Phone Number";
    }
  }

  // validation for Email
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // Validation for Security Code
  if (!values.code) {
    errors.code = "Required";
  } else if (values.code.length !== 5) {
    errors.code = "Must be 5 characters long";
  } else if (/\s/.test(values.code)) {
    errors.code = "Invalid Security Code (contains spaces)";
  } else if (values.code !== randomWord) {
    errors.code = "Incorrect Security Code";
  }

  return errors;
}

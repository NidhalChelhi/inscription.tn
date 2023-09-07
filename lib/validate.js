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
    errors.password = "Must be greater than 8 and less than 20 characters long";
  } else if (values.password.includes(" ")) {
    errors.password = "Invalid Password";
  }

  // Validation for Security Code
  if (!values.code) {
    errors.code = "Code Required";
  } else if (values.code.length !== 5) {
    errors.code = "Must be 5 characters long";
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
  } else if (values.code !== randomWord) {
    errors.code = "Incorrect Security Code";
  }

  return errors;
}

export function forgetpwdValidate(values, randomWord) {
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
  // Validation for Security Code
  if (!values.code) {
    errors.code = "Code Required";
  } else if (values.code.length !== 5) {
    errors.code = "Must be 5 characters long";
  } else if (values.code !== randomWord) {
    errors.code = "Incorrect Security Code";
  }
  return errors;
}

export function changePasswordValidate(values) {
  const errors = {};
  // validation for password
  if (!values.actual) {
    errors.actual = "Field Required";
  } else if (values.actual.length < 8 || values.actual.length > 20) {
    errors.actual = "Must be greater than 8 and less than 20 characters long";
  } else if (values.actual.includes(" ")) {
    errors.actual = "Invalid Password";
  }
  if (!values.new) {
    errors.new = "Field Required";
  } else if (values.new.length < 8 || values.new.length > 20) {
    errors.new = "Must be greater than 8 and less than 20 characters long";
  } else if (values.new.includes(" ")) {
    errors.new = "Invalid Password";
  }
  if (!values.newconfirm) {
    errors.newconfirm = "Field Required";
  } else if (values.newconfirm.length < 8 || values.newconfirm.length > 20) {
    errors.newconfirm =
      "Must be greater than 8 and less than 20 characters long";
  } else if (values.newconfirm.includes(" ")) {
    errors.newconfirm = "Invalid Password";
  }
  if (values.new !== values.newconfirm) {
    errors.new = "Passwords don't match";
  }

  return errors;
}

export function contactValidate(values) {
  const errors = {};

  // Validation for Name
  if (!values.name) {
    errors.name = "Fullname Required";
  } else if (values.name.length < 5) {
    errors.name = "Fullname must greater than 5 characters";
  }

  // validation for Email
  if (!values.email) {
    errors.email = "Email Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // Validation for Subject
  if (!values.subject) {
    errors.subject = "Subject Required";
  } else if (values.subject.length < 5) {
    errors.subject = "Subject must greater than 5 characters";
  }

  // Validation for Message
  if (!values.message) {
    errors.message = "Message Required";
  } else if (values.message.length < 8) {
    errors.message = "Message must greater than 8 characters";
  }

  return errors;
}

export function firstFormValidate(values) {
  const errors = {};

  if (!values.nomComplet) {
    errors.nomComplet = "Full Name is required";
  }

  if (!values.sexe || values.sexe === "none") {
    errors.sexe = "Gender is required";
  }

  if (!values.dateNaissance) {
    errors.dateNaissance = "Date of Birth is required";
  }

  if (!values.lieuNaissance) {
    errors.lieuNaissance = "Place of Birth is required";
  }

  if (!values.gouvernoratNaissance || values.gouvernoratNaissance === "none") {
    errors.gouvernoratNaissance = "Governorate of Birth is required";
  }

  if (!values.paysNaissance || values.paysNaissance === "none") {
    errors.paysNaissance = "Country of Birth is required";
  }

  if (!values.nationalite) {
    errors.nationalite = "Nationality is required";
  }

  return errors;
}

export function secondFormValidate(values) {
  const errors = {};

  // Validation for Année du bac
  if (!values.anneeBac) {
    errors.anneeBac = "Year of Bac Required";
  } else if (!/^\d{4}$/.test(values.anneeBac)) {
    errors.anneeBac = "Invalid Year Format";
  }

  // Validation for Section du bac
  if (!values.sectionBac || values.sectionBac === "none") {
    errors.sectionBac = "Bac Section Required";
  }

  // Validation for Mention du bac
  if (!values.mentionBac || values.mentionBac === "none") {
    errors.mentionBac = "Bac Mention Required";
  }

  // Validation for Session du bac
  if (!values.sessionBac || values.sessionBac === "none") {
    errors.sessionBac = "Bac Session Required";
  }

  // Validation for Pays du bac
  if (!values.paysBac || values.paysBac === "none") {
    errors.paysBac = "Bac Country Required";
  }

  return errors;
}

export function thirdFormValidate(values) {
  const errors = {};

  // Validation for Street Address (rue)
  if (!values.rue) {
    errors.rue = "Street Address Required";
  }

  // Validation for City (ville)
  if (!values.ville) {
    errors.ville = "City Required";
  }

  // Validation for Postal Code (codePostal)
  if (!values.codePostal) {
    errors.codePostal = "Postal Code Required";
  } else if (!/^\d{4}$/.test(values.codePostal)) {
    errors.codePostal = "Invalid Postal Code (must be 4 digits)";
  }

  // Validation for Governorate (gouvernoratAdresse)
  if (!values.gouvernoratAdresse || values.gouvernoratAdresse === "none") {
    errors.gouvernoratAdresse = "Please select a Governorate";
  }

  // Validation for Country (paysAdresse)
  if (!values.paysAdresse || values.paysAdresse === "none") {
    errors.paysAdresse = "Please select a Country";
  }

  // Validation for Telephone (telephone)
  if (!values.telephone) {
    errors.telephone = "Telephone Required";
  } else {
    const phoneRegex = /^(?:(?:\+|00)216)?\d{8}$/;
    if (!phoneRegex.test(values.telephone)) {
      errors.telephone = "Invalid Phone Number";
    }
  }

  // Validation for Email
  if (!values.email) {
    errors.email = "Email Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
}

export function fourthFormValidate(values) {
  const errors = {};

  // Validation for etatPere
  if (!values.etatPere || values.etatPere === "none") {
    errors.etatPere = "Father's status is required";
  }

  // Validation for nomPere
  if (!values.nomPere) {
    errors.nomPere = "Father's name is required";
  }

  // Validation for prenomPere
  if (!values.prenomPere) {
    errors.prenomPere = "Father's first name is required";
  }

  // Validation for etatMere
  if (!values.etatMere || values.etatMere === "none") {
    errors.etatMere = "Mother's status is required";
  }

  // Validation for nomMere
  if (!values.nomMere) {
    errors.nomMere = "Mother's name is required";
  }

  // Validation for prenomMere
  if (!values.prenomMere) {
    errors.prenomMere = "Mother's first name is required";
  }

  return errors;
}

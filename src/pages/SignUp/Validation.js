function Validation(values) {
  let error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-z0-9]{7,}$/;

  if (values.name === "") {
    error.name = "nama tidak boleh kosong";
  }

  if (values.email === "") {
    error.email = "email tidak boleh kosong";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Kata tidak dalam format email";
  }
  if (values.password === "") {
    error.password = "password tidak boleh kosong";
  } else if (!password_pattern.test(values.password)) {
    error.password = "Kata tidak dalam format password";
  }
  return error;
}

export default Validation;

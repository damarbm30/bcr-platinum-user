function Validation(values) {
  let error = {};
  
  if (values.email === "") {
    error.email = "email tidak boleh kosong";
  } 
  if (values.password === "") {
    error.password = "password tidak boleh kosong";
  }
  return error;
}

export default Validation;
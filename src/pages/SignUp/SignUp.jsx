import React from "react";
import { register, kutak } from "../../assets";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import Validation from "./Validation";
import "./SignUp.css";

const SignUp = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    setValues({ ...values, [e.target.name]: [e.target.value] });
  };

  function handleValidation(e) {
    e.preventDefault();
    setErrors(Validation(values));
  }

  return (
    <div className="fpage">
      <div className="halfform">
        <div className="jdl">
          <img src={kutak} alt="register" />
          <h1>Sign Up</h1>
        </div>
        <form className="signup" onSubmit={handleValidation}>
          <div className="inputform">
            <label htmlFor="name">Name*</label>
            <input
              className="form-control"
              placeholder="Nama Lengkap"
              name="name"
              onChange={handleInput}
            />
            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
          </div>
          <div className="inputform">
            <label htmlFor="email">Email*</label>
            <input
              className="form-control"
              placeholder="Contoh: johndee@gmail.com"
              name="email"
              onChange={handleInput}
            />
            <p>{errors.email}</p>
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </div>
          <div className="inputform">
            <label htmlFor="password">Create Password*</label>
            <input
              className="form-control"
              placeholder="6+ karakter"
              name="password"
              onChange={handleInput}
            />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password}</p>
            )}
          </div>
          <div className="inputform">
            <button role="button" type="submit" className="tombol-signup">
              SignUp
            </button>
          </div>
        </form>
        <div className="kelogin">
          <p>
            Already have an account?
            <HashLink to="" className="text-blue">
              Sign in here
            </HashLink>
          </p>
        </div>
      </div>
      <div className="halfpic">
        <img src={register} alt="register" />
      </div>
    </div>
  );
};

export default SignUp;

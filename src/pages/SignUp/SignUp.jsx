import React, { useState, useEffect } from "react";
import { register, kutak } from "../../assets";
import { HashLink } from "react-router-hash-link";
import Validation from "./Validation";
import { isEmpty, get } from "lodash";
// import { useHistory } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  // const history = useHistory();
  async function daftar() {
    console.log(values);
    let result = await fetch(
      "https://bootcamp-rent-cars.herokuapp.com/customer/auth/register",
      {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    result = await result.json();
    console.warn("result", result);
    // localStorage.setItem("user-info", JSON.stringify(result));
    // history.push("/SignUp");
  }

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };

  function handleValidation(e) {
    e.preventDefault();
    console.log("masuk");
    const error = Validation(values);
    console.log(error);
    if (isEmpty(error)) {
      daftar();
    } else {
      setErrors(error);
    }
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
            {get(errors, "name") && (
              <p style={{ color: "red" }}>{get(errors, "name")}</p>
            )}
          </div>
          <div className="inputform">
            <label htmlFor="email">Email*</label>
            <input
              className="form-control"
              placeholder="Contoh: johndee@gmail.com"
              name="email"
              onChange={handleInput}
            />
            {get(errors, "email") && (
              <p style={{ color: "red" }}>{get(errors, "email")}</p>
            )}
          </div>
          <div className="inputform">
            <label htmlFor="password">Create Password*</label>
            <input
              className="form-control"
              placeholder="6+ karakter"
              name="password"
              onChange={handleInput}
            />
            {get(errors, "password") && (
              <p style={{ color: "red" }}>{get(errors, "password")}</p>
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

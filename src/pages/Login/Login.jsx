import React, { useState } from "react";
import { register, kutak } from "../../assets";
import { HashLink } from "react-router-hash-link";
import Validation from "./Validation";
import axios from "axios";
import {isEmpty, get } from "lodash";
import Swal from "sweetalert2";
import "./Login.css";

const Login = () => {
  async function masuk() {
    try {
    console.log(values);
    let result = await fetch(
      "https://bootcamp-rent-cars.herokuapp.com/customer/auth/login",
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
    } catch (error) {
        authError(error);
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Email atau Password salah!',
          showConfrimButton: false,
          timer: 1500
        });
    }
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
      masuk();
      alert("Sign In Berhasil...!");
    } else {
      setErrors(error);
    }
  }

  return (
    <div className="fpage">
      <div className="halfform">
        <div className="jdl">
          <img src={kutak} alt="SignIn" />
          <h1>Welcome Back!</h1>
        </div>
        <form className="login" onSubmit={handleValidation}>
          <div className="inputform">
            <label htmlFor="email">Email*</label>
            <input
              className="form-control"
              placeholder="eg: johndee@gmail.com"
              name="email"
              onChange={handleInput}
            />
            {get(errors, "email") && (
              <p style={{ color: "red" }}>{get(errors, "email")}</p>
            )}
          </div>
          <div className="inputform">
            <label htmlFor="password">Password*</label>
            <input
              className="form-control"
              placeholder="Masukkan password"
              name="password"
              onChange={handleInput}
            />
            {get(errors, "password") && (
              <p style={{ color: "red" }}>{get(errors, "password")}</p>
            )}
          </div>
          <div className="inputform">
            <button role="button" type="submit" className="tombol-signup">
              Sign In
            </button>
          </div>
        </form>
        <div className="kedaftar">
          <p>
            Don't have an account?
            <HashLink to="" className="text-blue">
              Sign Up Here!
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

export default Login;

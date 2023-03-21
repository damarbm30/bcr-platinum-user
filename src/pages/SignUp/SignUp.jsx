import React, { useState } from "react";
import { register, kutak } from "../../assets";
import Validation from "./Validation";
import { isEmpty, get } from "lodash";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  async function daftar() {
    console.log(values);
    await fetch(
      "https://bootcamp-rent-cars.herokuapp.com/customer/auth/register",
      {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        navigate("/login");
      });
    result = await result.json();

    console.warn("result", result);
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
      alert("Sign Up Berhasil...!");
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
              type="password"
              className="form-control"
              placeholder="Wajib 6+ karakter dengan gabungan huruf kapital dan angka"
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
            <Link to="/login" className="text-blue">
              Sign in here
            </Link>
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

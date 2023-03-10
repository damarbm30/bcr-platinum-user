import React, { useState } from "react";
import { register, kutak } from "../../assets";
import Validation from "./Validation";
import axios from "axios";
import { isEmpty, get } from "lodash";
import "./Login.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Login = () => {
  async function masuk(values) {
    axios
      .post(
        "https://bootcamp-rent-cars.herokuapp.com/customer/auth/login",
        values
      )
      .then((res) => {
        console.log(res);
        console.log("masuk res", res);
        localStorage.setItem("token", res.data.access_token);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Selamat Datang",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.log(err.message);
        console.log("masuk catch");
        // alert('Email atau Password salah')
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Email atau password salah",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  }
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };

  function handleLogin(e) {
    e.preventDefault();
    console.log("masuk");
    const error = Validation(values);
    console.log(error);
    if (isEmpty(error)) {
      masuk(values);
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
        <form className="login" onSubmit={handleLogin}>
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
            <Link to="/sign-up" className="text-blue">
              Sign Up Here!
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

export default Login;

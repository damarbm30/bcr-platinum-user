import React from "react";
import { register, kutak } from "../../assets";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import "./SignUp.css";

const SignUp = () => {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  return (
    <div className="fpage">
      <div className="halfform">
        <div className="jdl">
          <img src={kutak} alt="register" />
          <h1>Sign Up</h1>
        </div>
        <form className="signup">
          <div className="inputform">
            <label htmlFor="name">Name*</label>
            <input
              className="form-control"
              placeholder="Nama Lengkap"
              onInput={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="inputform">
            <label htmlFor="name">Email*</label>
            <input
              className="form-control"
              placeholder="Contoh: johndee@gmail.com"
              onInput={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="inputform">
            <label htmlFor="name">Create Password*</label>
            <input
              className="form-control"
              placeholder="6+ karakter"
              onInput={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="inputform">
            <button role="button" type="submit" className="tombol-signup">
              SignUp
            </button>
          </div>
          <div>
            <h1>{name}</h1>
          </div>
          <div>
            <h1>{email}</h1>
          </div>
          <div>
            <h1>{password}</h1>
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

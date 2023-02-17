import React from "react";
import { register } from "../../assets";
import { HashLink } from "react-router-hash-link";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="fpage">
      <div className="halfform">
        <div className="jdl">
          <div> ICON </div>
          <h1>Sign Up</h1>
        </div>
        <form className="signup">
          <label htmlFor="name">Name*</label>
          <input className="form-control" placeholder="Nama Lengkap" />
          <label htmlFor="name">Email*</label>
          <input
            className="form-control"
            placeholder="Contoh: johndee@gmail.com"
          />
          <label htmlFor="name">Create Password*</label>
          <input className="form-control" placeholder="6+ karakter" />
          <button role="button" type="submit">
            SignUp
          </button>
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

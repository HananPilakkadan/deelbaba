import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.scss";

const SignUp = () => {
  return (
    <div className="signup">
      <div className="signup-box">
        <div className="top">
          <div className="head">
            <h3>Sign Up</h3>
          </div>
          <div className="form">
            <div className="item">
              <input type="text" id="email" />
              <label htmlFor="email">Enter email or Phone Number</label>
            </div>
            <button>Send OTP</button>
          </div>
          <p>
            By continuing, you agree to deelbaba's{" "}
            <Link to=""> term of use</Link>
             and <Link to="">privecy policy</Link>.
          </p>
        </div>
        <div className="bottom">
          <div className="cutting">
            <span>Existing User ?</span>
            <hr />
          </div>
          <button>
            <Link to="/login">Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

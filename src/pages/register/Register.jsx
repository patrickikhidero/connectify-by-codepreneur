import "./register.css";
import { NavLink } from "react-router-dom";


export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Connectify</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Connectify.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <button className="loginButton">
            <NavLink to="/login" style={{ textDecoration: "none", color: "white" }}>
            Sign Up
            </NavLink>
            </button>
            <button className="loginRegisterButton">
            <NavLink to="/login" style={{ textDecoration: "none", color: "white" }}>
              Log into Account
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

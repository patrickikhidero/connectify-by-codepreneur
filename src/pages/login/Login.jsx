import "./login.css";
import { NavLink } from "react-router-dom";


export default function Login() {
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
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">
            <NavLink to="/profile" style={{ textDecoration: "none", color: "white" }}>
            Log In
            </NavLink>
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
            <NavLink to="/register" style={{ textDecoration: "none", color: "white" }}>
              Create a New Account
      </NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

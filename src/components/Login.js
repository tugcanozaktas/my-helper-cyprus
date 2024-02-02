import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import Authentication from "../services/Authentication/index";
import "../styles/Login.css";

const auth = new Authentication();

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const history = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await auth.login({ email, password });
      setIsLoggedIn(true);
      setEmail("");
      setPassword("");
      history("/account");
    } catch (error) {
      alert("Incorrect E-mail or Password");
      setEmail("");
      setPassword("");
    }
  };
  return (
    <div className="login-page">
      {isLoggedIn ? (
        <p>Redirecting...</p>
      ) : (
        <form onSubmit={handleLogin}>
          <label htmlFor="email">
            <FontAwesomeIcon className="icon" icon={faUser} />
            E-mail
            <input
              className="login-input"
              name="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>

          <label htmlFor="password">
            <FontAwesomeIcon className="icon" icon={faLock} />
            Password
            <input
              className="login-input"
              name="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <button className="login-button" type="submit">
            Log In
          </button>
          <Link to="/register">
            <button className="register-button" type="button">
              Register
            </button>
          </Link>
        </form>
      )}
    </div>
  );
}

export default Login;

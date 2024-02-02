import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import postRegister from "../services/postRegister";

function Register() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      await postRegister({ firstName, lastName, email, password });
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      // eslint-disable-next-line no-alert
      alert("User created successfully");
      history("/");
    } catch (error) {
      // eslint-disable-next-line no-console
      alert(error.response.data[0].message);
    }
  };

  return (
    <div className="register-page">
      <form onSubmit={handleRegister} className="register-form">
        <label className="label-name" htmlFor="firstName">
          First Name
          <input
            className="register-input"
            required
            value={firstName}
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
            name="firstName"
            type="text"
          />
        </label>
        <label className="label-name" htmlFor="lastName">
          Last Name
          <input
            className="register-input"
            required
            value={lastName}
            onChange={(event) => {
              event.preventDefault();
              setLastName(event.target.value);
            }}
            name="lastName"
            type="text"
          />
        </label>
        <label className="label-email" htmlFor="email">
          <FontAwesomeIcon className="icon" icon={faEnvelope} />
          Email
          <input
            className="register-input"
            required
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            name="email"
            type="email"
          />
        </label>
        <label className="label-password" htmlFor="password">
          <FontAwesomeIcon className="icon" icon={faLock} />
          Password
          <input
            className="register-input"
            required
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            name="password"
            type="password"
          />
        </label>
        <button className="register-button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;

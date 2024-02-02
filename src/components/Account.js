import React, { useState } from "react";

import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import updateUserById from "../services/updateUserById";
import "../styles/Account.css";

function Account() {
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);

  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [email, setEmail] = useState();
  const [pnumber, setPnumber] = useState();

  const handleEdit = () => {
    setIsReadOnly(!isReadOnly);
    setIsDisabled(!isDisabled);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      fname !== undefined ||
      lname !== undefined ||
      email !== undefined ||
      pnumber !== undefined
    ) {
      updateUserById({ fname, lname, email, pnumber });
      alert("User info updated successfully!");
    } else {
      alert("Please update AT LEAST ONE field.");
    }
  };

  return (
    <div className="account-page">
      {localStorage.getItem("creds") ? (
        <form onSubmit={handleSubmit}>
          <div className="account-details">
            <h3>Personal Information</h3>
            <div className="account-buttons">
              <button
                className="edit-button"
                type="button"
                onClick={() => {
                  handleEdit();
                }}
              >
                Edit
              </button>
              <button
                className="update-button"
                disabled={isDisabled}
                type="submit"
              >
                Update
              </button>
            </div>

            <div className="account-info">
              <div className="names-section">
                <label className="account-labels name" htmlFor="fname">
                  <p>First Name</p>
                  <input
                    value={fname}
                    onChange={(event) => {
                      setFname(event.target.value);
                    }}
                    type="text"
                    className="account-input"
                    name="fname"
                    placeholder={localStorage.getItem("fname")}
                    readOnly={isReadOnly}
                  />
                </label>
                <label className="account-labels name" htmlFor="lname">
                  <p>Last Name</p>
                  <input
                    value={lname}
                    onChange={(event) => {
                      setLname(event.target.value);
                    }}
                    type="text"
                    className="account-input"
                    name="lname"
                    placeholder={localStorage.getItem("lname")}
                    readOnly={isReadOnly}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="email-section">
            <h3>Contact Information</h3>
            <div className="contact-info">
              <label className="account-labels email" htmlFor="email">
                <p>Email</p>
                <input
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  type="email"
                  className="account-input email-input"
                  name="fname"
                  placeholder={localStorage.getItem("email")}
                  readOnly={isReadOnly}
                />
              </label>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="pnumber" className="account-labels number">
                <p>Phone Number</p>
                <PhoneInput
                  country="TR"
                  placeholder={
                    localStorage.getItem("pnumber") || "Enter phone number"
                  }
                  readOnly={isReadOnly}
                  value={pnumber}
                  onChange={setPnumber}
                />
              </label>
            </div>
          </div>
          <div className="security-section">
            <a href="/">Change Password</a>
          </div>
        </form>
      ) : (
        <div className="no-logged-account">
          <div className="button-divs">
            <p>Log in to see your account...</p>
            <button className="login-button" type="button">
              <Link className="login-link" to="/">
                Login
              </Link>
            </button>
          </div>
          <div className="button-divs">
            <p>Don&apos;t have an account ?</p>
            <button className="register-button" type="button">
              <Link className="register-link" to="/register">
                Register
              </Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Account;

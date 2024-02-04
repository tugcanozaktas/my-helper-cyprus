import React from "react";
import { Link } from "react-router-dom";
import "../styles/Objectives.css";

function Objectives() {
  return (
    <div className="objectives-page">
      <div className="objectives-section">
        {!localStorage.getItem("creds") ? (
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
        ) : (
          <div className="objectives">
            <ul className="objectives-list">
              <h2>Getting started</h2>
              <ul className="getting-started">
                <li>Land on the Ercan Airport.</li>
                <li>
                  Take the KIBHAS bus! (
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.kibhas.org/"
                  >
                    Book First
                  </a>
                  )
                </li>
              </ul>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Objectives;

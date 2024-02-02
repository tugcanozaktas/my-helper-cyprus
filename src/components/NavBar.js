import React from "react";
import { useNavigate } from "react-router-dom";
import Authentication from "../services/Authentication";
import "../styles/Navbar.css";

const auth = new Authentication();

function NavBar() {
  const history = useNavigate();
  const handleLogout = async () => {
    try {
      await auth.logout();
      history("/");
      console.log(localStorage.getItem("creds"));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="navbar">
      <a href="/account">Account</a>
      <a href="/objectives">Objectives</a>
      {localStorage.getItem("creds") ? (
        <a onClick={handleLogout} className="logout" href="/">
          Log out
        </a>
      ) : (
        <a className="login" href="/">
          Log in
        </a>
      )}
    </div>
  );
}

export default NavBar;

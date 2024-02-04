import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Account from "./Account";
import NavBar from "./NavBar";
import Objectives from "./Objectives";
import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
        <Route path="/objectives" element={<Objectives />} />
      </Routes>
    </div>
  );
}

export default App;

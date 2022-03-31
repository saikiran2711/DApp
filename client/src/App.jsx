import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoginComponent from "./components/authComponents/LoginComponent";
import SignUpBox from "./components/authComponents/SignUpComponent";
import Home from "./components/Dashboard/Home";
import Profile from "./components/Dashboard/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path="/signup" element={<SignUpBox />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;

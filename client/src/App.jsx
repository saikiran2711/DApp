
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoginComponent from "./components/authComponents/LoginComponent";
import SignUpBox from "./components/authComponents/SignUpComponent";
import Home from "./components/Dashboard/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/signup" element={<SignUpBox />} />
      </Routes>
    </>
  );
}

export default App;

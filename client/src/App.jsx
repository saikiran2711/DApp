import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoginComponent from "./components/authComponents/LoginComponent";
import SignUpBox from "./components/authComponents/SignUpComponent";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginComponent />} />

        <Route path="/signup" element={<SignUpBox />} />
      </Routes>
    </>
  );
}

export default App;

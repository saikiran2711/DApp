import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoginComponent from "./components/authComponents/LoginComponent";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginComponent />} />

        <Route path="/signup" />
      </Routes>
    </>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
// import "./App.css";
import LoginComponent from "./components/authComponents/LoginComponent";
import SignUpBox from "./components/authComponents/SignUpComponent";
import Home from "./components/Dashboard/Home";
import Profile from "./components/Dashboard/Profile";
import Index from "./components/Dashboard/index";
import AccountPage from "./components/Dashboard/account";
import EducationPage from "./components/Dashboard/education";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginComponent />} />

        <Route path="/signup" element={<SignUpBox />} />
        <Route path="/dashboard" element={<Index />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/educationalDetails" element={<EducationPage />} />

        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;

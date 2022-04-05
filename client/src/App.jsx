import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginComponent from "./components/authComponents/LoginComponent";
import SignUpBox from "./components/authComponents/SignUpComponent";

import Profile from "./components/Dashboard/Profile";
import Index from "./components/Dashboard/index";
import AccountPage from "./components/Dashboard/account";
import EducationPage from "./components/Dashboard/education";
import LandingPage from "./components/landingPage";
import AdminComponent from "./components/authComponents/adminComponent";
import GeneralDetails from "./components/Dashboard/generalDetails";

import SemesterTable from "./components/EducationDetails/SemesterTable";

import LogoutComponent from "./components/authComponents/LogoutComponent";
import AdminDashboard from "./components/adminDashboard/AdminDashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminComponent />} />
        <Route path="/login" element={<LoginComponent />} />

        <Route path="/signup" element={<SignUpBox />} />
        <Route path="/dashboard" element={<Index />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/general" element={<GeneralDetails />} />

        <Route path="/account" element={<AccountPage />} />
        <Route path="/educationalDetails" element={<ListSemCards />} />
        <Route exact path={"/educationalDetails/:sem"} element={<InterfaceCard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<LogoutComponent />} />
      </Routes>
    </>
  );
}

export default App;

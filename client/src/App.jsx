import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginComponent from "./components/authComponents/LoginComponent";
import SignUpBox from "./components/authComponents/SignUpComponent";
import Home from "./components/Dashboard/Home";
import Profile from "./components/Dashboard/Profile";
import Index from "./components/Dashboard/index";
import AccountPage from "./components/Dashboard/account";
import EducationPage from "./components/Dashboard/education";
import LandingPage from "./components/landingPage";
import AdminComponent from "./components/authComponents/adminComponent";
import GeneralDetails from "./components/Dashboard/generalDetails";
import SemesterComponent from "./components/EducationDetails/SemesterDetails";
import SemCards from "./components/EducationDetails/SemCards";
import ListSemCards from "./components/EducationDetails/ListSemCards";
import SemesterTable from "./components/EducationDetails/SemesterTable";
import { setSemDetails } from "./components/EducationDetails/getHandler";
import SetSemesterTable from "./components/EducationDetails/SetSemesterTable";
import InterfaceCard from "./components/EducationDetails/InterfaceCard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminComponent />} />
        <Route path="/login" element={<LoginComponent />} />

        <Route path="/signup" element={<SignUpBox />} />
        <Route path="/dashboard" element={<Index />} />
        <Route path="/general" element={<GeneralDetails />} />

        <Route path="/account" element={<AccountPage />} />
        <Route path="/educationalDetails" element={<ListSemCards />} />
        <Route exact path={"/educationalDetails/:sem"} element={<InterfaceCard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;

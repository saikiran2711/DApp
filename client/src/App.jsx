import React, { useState } from "react";
import { Routes, Route, useSearchParams } from "react-router-dom";
import LoginComponent from "./components/authComponents/LoginComponent";
import SignUpBox from "./components/authComponents/SignUpComponent";

import Profile from "./components/Dashboard/Profile";
import Index from "./components/Dashboard/index";
import AccountPage from "./components/Dashboard/account";
import LandingPage from "./components/landingPage";
import AdminComponent from "./components/authComponents/adminComponent";
import GeneralDetails from "./components/Dashboard/generalDetails";
import InterfaceCard from "./components/EducationDetails/InterfaceCard";
import SemesterTable from "./components/EducationDetails/SemesterTable";
import ListSemCards from "./components/EducationDetails/ListSemCards";
import LogoutComponent from "./components/authComponents/LogoutComponent";
import AdminDashboard from "./components/adminDashboard/AdminDashboard";
import ListLog from "./components/EducationDetails/Temp";
import ListRollNoWithSearchBar from "./components/adminDashboard/ListRollNoWithSearchBar";
import TempCompo from "./components/adminDashboard/TempCompo";

export const hashProvider=React.createContext();
function App() {
  let hasher=useState(false);
  return (
    <hashProvider.Provider value={hasher}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/signup" element={<SignUpBox />} />
        <Route path="/dashboard" element={<Index />} />

        <Route path="/admin" element={<AdminComponent />} />
        <Route path="/admin/students" element={<ListRollNoWithSearchBar />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/students/view/:roll" element={<TempCompo />} />
        
        
        <Route path="/general" element={<GeneralDetails />} />
        <Route path="/logMessage" element={<ListLog />} />

        <Route path="/educationalDetails" element={<ListSemCards />} />
        <Route
          exact
          path={"/educationalDetails/:sem"}
          element={<InterfaceCard />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<LogoutComponent />} />
      </Routes>
    </hashProvider.Provider>
  );
}

export default App;

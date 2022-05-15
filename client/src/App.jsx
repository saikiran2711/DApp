import React, { useState } from "react";
import { Routes, Route, useSearchParams } from "react-router-dom";
import LoginComponent from "./components/authComponents/LoginComponent";
import SignUpBox from "./components/authComponents/SignUpComponent";

import Profile from "./components/Dashboard/Profile";
import Index from "./components/Dashboard/index";
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
import DetailsInterface from "./components/adminDashboard/DetailsInterface";
import AddRecruiter from "./components/adminDashboard/AddRecruiter";
import SendEmail from "./components/adminDashboard/SendEmail";

export const hashProvider = React.createContext();
function App() {
  let hasher = useState(false);
  return (
    <hashProvider.Provider value={hasher}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/signup" element={<SignUpBox />} />
        <Route path="/dashboard" element={<Index />} />

        <Route path="/admin" element={<AdminComponent />} />
        <Route path="/admin/students" element={<ListRollNoWithSearchBar />} />
        <Route
          path="admin/students/view/general"
          element={<GeneralDetails admin={true} />}
        />

        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/addRecruiter" element={<AddRecruiter />} />
        <Route
          path="/admin/students/view/:roll"
          element={<DetailsInterface />}
        />
        <Route path="/admin/students/sendEmail" element={<SendEmail />} />
        <Route
          path="/admin/students/view/semester"
          element={<ListSemCards admin={true} />}
        />
        <Route
          path="/admin/educationDetails/:sem"
          element={<InterfaceCard admin={true} />}
        />

        <Route path="/general" element={<GeneralDetails />} />
        <Route path="/logMessage" element={<ListLog />} />

        <Route path="/educationalDetails" element={<ListSemCards />} />
        <Route
          exact
          path={"/educationalDetails/:sem"}
          element={<InterfaceCard admin={false} />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<LogoutComponent />} />
      </Routes>
    </hashProvider.Provider>
  );
}

export default App;

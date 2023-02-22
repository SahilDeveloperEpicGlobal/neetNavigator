import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";
import StudentDetails from "./pages/auth/studentdetails";
import PersonalDetails from "./pages/auth/personaldetails";
import EducationalDetails from "./pages/auth/educationaldetails";
import OtherDetails from "./pages/auth/otherdetails";

const root = ReactDOM.createRoot(document.getElementById("root"));

// NAGIATION PAGES
const RootApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student-details" element={<StudentDetails />} />
        <Route path="/personal-details" element={<PersonalDetails />} />
        <Route path="/educational-details" element={<EducationalDetails />} />
        <Route path="/other-details" element={<OtherDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

root.render(
  <React.StrictMode>
    <RootApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

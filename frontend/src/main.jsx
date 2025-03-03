import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Dashboard from "./Dashboard";
import Landing from "./Landing";
import Features from "./Features";
import Community from "./Community";
import SignUp from "./SignUp"; 
import Login from "./Login";
import Layout from "./Layout";  

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Wrap only main pages with Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/features" element={<Features />} />
          <Route path="/community" element={<Community />} />
        </Route>

        {/* Login and Signup are outside Layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  </StrictMode>
);

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import NavBar from "./components/navbar.jsx";
import Dashboard from "./DashBoardPage/Dashboard.jsx";
import LoginForm from "./LoginPage/LoginForm.jsx";
import WelcomePage from "./WelcomePage/WelcomePage.jsx";

function App() {
  return (
    <Router>
      {/* <NavBar /> */}
      <Routes>
        <Route exact path="/" element={<WelcomePage />} />
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

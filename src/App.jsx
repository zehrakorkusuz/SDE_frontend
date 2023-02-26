import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import NavBar from "./components/navbar.jsx";
import Dashboard from "./DashBoardPage/Dashboard.jsx";
import LoginForm from "./LoginPage/LoginForm.jsx";
import WelcomePage from "./WelcomePage/WelcomePage.jsx";
import ContentPage from "./ContentPage/ContentPage.jsx";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        {/* <NavBar /> */}
        <Routes>
          <Route exact path="/" element={<WelcomePage />} />
          <Route exact path="/login" element={<LoginForm />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/dashboard/:id" element={<ContentPage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;

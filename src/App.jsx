import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import LoginForm from "./pages/LoginForm";
import WelcomePage from "./pages/WelcomePage";
import ContentPage from "./pages/ContentPage";
import AboutPage from "./pages/AboutPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<WelcomePage />} />
          <Route exact path="/login" element={<LoginForm />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/dashboard/:id" element={<ContentPage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;

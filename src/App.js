import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components /Navbar/Navbar";
import Footer from "./Components /Navbar/Footer/Footer";
import HomePage from "./Components /Navbar/pages/Homepage/Homepage";
import AboutUs from "./Components /Navbar/pages/Homepage/AboutUs/AboutUs";
import Productspage from "./Components /Navbar/pages/Homepage/Productspage/Productspage";
import OurTeam from "./Components /Navbar/pages/Homepage/OurTeam/OurTeam";
import Signup from "./Components /Navbar/pages/Homepage/signup/signup";
import Login from "./Components /Navbar/pages/Homepage/login/login";
import AdminPage from "./Components /Navbar/adminpage/adminpage";
import { UserProvider } from "./contexts/UserContext";
import ProtectedRoute from "./Components /Navbar/ProtectedRoute";
function App() {
  return (
    <UserProvider>
      {" "}
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Homepage" element={<HomePage />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route
              path="/Productspage"
              element={
                <ProtectedRoute>
                  <Productspage />
                </ProtectedRoute>
              }
            />
            <Route path="/OurTeam" element={<OurTeam />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/adminpage"
              element={
                <ProtectedRoute>
                  <AdminPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </UserProvider>
  );
}

export default App;

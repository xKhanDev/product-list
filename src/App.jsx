import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import ProductsProvider from "./context/Products";

const App = () => {
  const { user } = useAuth();
  const noNavbarAndFooter = ["/login", "/signup"].includes(
    window.location.pathname
  );
  return (
    <div className="w-full h-full bg-white text-black px-4">
      <ProductsProvider>
        <Router>
          {noNavbarAndFooter ? "" : <Navbar />}
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={user ? <Navigate to="/" /> : <Login />}
            />
            <Route
              path="/signup"
              element={user ? <Navigate to="/" /> : <Signup />}
            />
          </Routes>
          {noNavbarAndFooter ? "" : <Footer />}
        </Router>
      </ProductsProvider>
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryFilter from "./components/CategoryFilter";
import Home from "./pages/Home";
import ArtistSection from "./components/ArtistSection";
import Footer from "./components/Footer";
import Login from "./components/Login";

function App() {
  const[category, setCategory] = useState('Todos');
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <div className="App">
      <Navbar 
        user={user}
        onLoginClick={() => setShowLogin(true)}
        onLogout={handleLogout}
      />
      <Hero />
      <CategoryFilter onCategoryChange={setCategory} />
      <Home category={category} />
      <ArtistSection />
      <Footer />
      {showLogin && (
        <Login
          onLogin={handleLogin}
          onClose={() => setShowLogin(false)}
        />
      )}
    </div>
  );
}

export default App;

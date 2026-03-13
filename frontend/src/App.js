import React, { useState } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryFilter from "./components/CategoryFilter";
import Home from "./pages/Home";
import ArtistSection from "./components/ArtistSection";
import Footer from "./components/Footer";

function App() {
  const[category, setCategory] = useState('Todos');

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CategoryFilter onCategoryChange={setCategory} />
      <Home category={category} />
      <ArtistSection />
      <Footer />
    </div>
  );
}

export default App;

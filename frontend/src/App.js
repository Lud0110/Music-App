import React, { useState } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryFilter from "./components/CategoryFilter";
import Home from "./pages/Home";

function App() {
  const[category, setCategory] = useState('Todos');

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CategoryFilter onCategoryChange={setCategory} />
      <Home category={category} />
    </div>
  );
}

export default App;

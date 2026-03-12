import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function app() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
    </div>
  );
}

export default app;

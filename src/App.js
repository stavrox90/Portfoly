import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Navigation, Routes, Footer } from "./components/layout";

function App() {
  return (
    <div className="full">
      <Router>
        <Navigation />
        <Routes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

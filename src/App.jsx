import React from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import Home from "./pages/Home";
import Mireta from "./pages/Mireta";
import MathCircle from "./pages/MathCircle";
import Competitions from "./pages/Competitions";
import Coursework from "./pages/Coursework";
import AIML from "./pages/AIML.jsx";
import Activities from "./pages/Activities";

function App() {
  return (
    <Router>
      <header className="sticky top-0 left-0 w-full z-50">
        <Navbar />
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-12 pt-28 pb-20 w-full max-w-7xl mx-auto">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mireta" element={<Mireta />} />
          <Route path="/mathcircle" element={<MathCircle />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/coursework" element={<Coursework />} />
          <Route path="/aiml" element={<AIML />} />
          <Route path="/activities" element={<Activities />} />
        </Routes>
      </main>

      <footer className="w-full z-10">
        <Footer />
      </footer>
    </Router>
  );
}

export default App;

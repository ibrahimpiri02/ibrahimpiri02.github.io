import React from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import ScrollToTop from "./ScrollToTop";

import Home from "./pages/Home";
import Parsec from "./pages/Parsec";
import Research from "./pages/Research";
import Mireta from "./pages/Mireta";
import EarlierWork from "./pages/EarlierWork";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-50">
          <Navbar />
        </header>
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/parsec" element={<Parsec />} />
            <Route path="/research" element={<Research />} />
            <Route path="/mireta" element={<Mireta />} />
            <Route path="/earlier-work" element={<EarlierWork />} />
            {/* Old routes from the previous site */}
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/aiml" element={<Navigate to="/research" replace />} />
            <Route path="/competitions" element={<Navigate to="/earlier-work" replace />} />
            <Route path="/mathcircle" element={<Navigate to="/earlier-work" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

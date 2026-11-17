import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import ScrollToTop from "./ScrollToTop";
import { PAGES, NOT_FOUND } from "./pages";

import Home from "./pages/Home";
import Parsec from "./pages/Parsec";
import Research from "./pages/Research";
import Mireta from "./pages/Mireta";
import EarlierWork from "./pages/EarlierWork";
import NotFound from "./pages/NotFound";

function DocumentTitle() {
  const { pathname } = useLocation();
  useEffect(() => {
    const path = pathname.replace(/\/+$/, "") || "/";
    document.title = (PAGES.find((p) => p.path === path) ?? NOT_FOUND).title;
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <DocumentTitle />
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-50">
          <Navbar />
        </header>
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mireta" element={<Mireta />} />
            <Route path="/research" element={<Research />} />
            <Route path="/parsec" element={<Parsec />} />
            <Route path="/earlier-work" element={<EarlierWork />} />
            {/* Old routes from the previous site */}
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/aiml" element={<Navigate to="/research" replace />} />
            <Route path="/competitions" element={<Navigate to="/earlier-work" replace />} />
            <Route path="/mathcircle" element={<Navigate to="/earlier-work" replace />} />
            <Route path="/coursework" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

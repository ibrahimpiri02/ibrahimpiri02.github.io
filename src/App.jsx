
import React, { useState } from "react";

import { Navbar, Footer } from "components/Layout";
import {
  MiretaTab,
  MathCircleTab,
  CompetitionsTab,
  CourseworkTab,
  ResearchTab,
  ActivitiesTab,
} from "components/Tabs";

function App() {
  const [activeTab, setActiveTab] = useState("Home");

  function renderTab() {
    switch (activeTab) {
      case "Home":
        return (
          <div className="w-full flex flex-col md:flex-row items-center gap-8 text-gray-700 rounded-lg shadow bg-white p-8">
            <div className="flex-shrink-0">
              <img
                src="portrait.jpg"
                alt="Ibrahim Piri portrait"
                className="w-[500px] h-[500px] rounded-full object-cover border-4 border-blue-200 shadow"
              />
            </div>
            <div className="flex-1 text-left">
              <h2 className="text-3xl font-bold mb-2 text-blue-700">About Me</h2>
              <p className="mb-4 text-lg">
                Hello! I'm Ibrahim Piri, an undergraduate student passionate about mathematics, computer science, and urban design. As cofounder and head of software at Mireta Urban Design, I develop algorithms to improve cities and help the environment. I've been a student and instructor at the Olga Radko Endowed Math Circle for over a decade, where I love inspiring creative problem solving. My competition experience includes leading my Science Bowl team to 2nd place, ranking top 10 globally in Citadel, and being a MIT semifinalist. I enjoy university-level coursework, research in AI and mathematics, and sharing my interests in chess, board games, space launches, and travel. Welcome to my portfolio!
              </p>
            </div>
          </div>
        );
      case "Mireta":
        return <MiretaTab />;
      case "Math Circle":
        return <MathCircleTab />;
      case "Competitions":
        return <CompetitionsTab />;
      case "Coursework/Certificates":
        return <CourseworkTab />;
      case "Research Interests":
        return <ResearchTab />;
      case "Activities":
        return <ActivitiesTab />;
      default:
        return null;
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="sticky top-0 left-0 w-full z-20">
        <Navbar activeTab={activeTab} onTabClick={setActiveTab} />
      </header>
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 pt-28 pb-20 w-full">
        <div className="w-full flex justify-center">
          {renderTab()}
        </div>
      </main>
      <footer className="w-full z-10">
        <Footer />
      </footer>
    </div>
  );
}

export default App;

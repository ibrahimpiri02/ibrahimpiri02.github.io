import React from "react";

const NAV_TABS = [
  "Home",
  "Mireta",
  "Math Circle",
  "Competitions",
  "Coursework/Certificates",
  "Research Interests",
  "Activities",
];

export function Navbar({ activeTab, onTabClick }) {
  return (
    <nav className="w-full bg-white shadow flex justify-center items-center py-4 mb-8 font-classic">
      <div className="flex gap-6 text-lg font-semibold">
        {NAV_TABS.map((tab) => (
          <button
            key={tab}
            className={`px-3 py-2 rounded transition-colors duration-200 font-classic ${
              activeTab === tab
                ? "bg-accent-light text-accent-dark border-b-4 border-accent"
                : "hover:bg-accent-light hover:text-accent-dark text-gray-700"
            }`}
            onClick={() => onTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-gray-50 border-t py-4 mt-8 flex flex-col items-center text-sm text-gray-600 font-classic">
      <div className="flex gap-4 mb-2">
        <a href="https://linkedin.com/in/ibrahimpiri" target="_blank" rel="noopener noreferrer" className="hover:underline text-accent-dark">LinkedIn</a>
        <a href="https://github.com/ibrahimpiri" target="_blank" rel="noopener noreferrer" className="hover:underline text-accent-dark">GitHub</a>
        <a href="mailto:ibrahimpiri@gmail.com" className="hover:underline text-accent-dark">Email</a>
        <a href="mailto:ibrahim.piri@business.com" className="hover:underline text-accent-dark">Business Email</a>
      </div>
      <div className="text-accent">&copy; {new Date().getFullYear()} Ibrahim Piri</div>
    </footer>
  );
}

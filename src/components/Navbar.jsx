import React from "react";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const location = useLocation();

  const links = [
    { to: "/home", label: "Home" },
    { to: "/mireta", label: "Mireta" },
    { to: "/mathcircle", label: "Math Circle" },
    { to: "/competitions", label: "Competitions" },
    { to: "/coursework", label: "Coursework" },
    { to: "/research", label: "Research" },
    { to: "/activities", label: "Activities" },
  ];

  return (
    <nav className="sticky top-4 z-30 bg-white/90 backdrop-blur-md mx-auto max-w-7xl px-10 py-4 mt-4 rounded-2xl">
      <div className="flex justify-between items-center font-navbar">
        {/* Logo on the left */}
        <div className="flex-shrink-0">
          <img
            src="/ibrahimlogo.png"
            alt="Ibrahim Logo"
            className="h-16 w-auto"
          />
        </div>

        {/* Navbar Links on the right */}
        <div className="flex justify-end items-center gap-8">
          {links.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative text-base font-semibold tracking-wide uppercase transition-all duration-300 pb-1
                  ${isActive ? "text-[#009a8c]" : "text-gray-700 hover:text-[#009a8c]"}
                `}
              >
                {link.label}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] rounded-full transition-all duration-300
                    ${isActive ? "w-full bg-[#009a8c]" : "w-0 bg-[#009a8c] hover:w-full"}
                  `}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

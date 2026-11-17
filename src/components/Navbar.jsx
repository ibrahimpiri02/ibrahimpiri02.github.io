import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { RESUME_URL } from "../site";


const links = [
  { to: "/mireta", label: "Mireta" },
  { to: "/research", label: "Research" },
  { to: "/parsec", label: "PARSEC" },
  { to: "/earlier-work", label: "Earlier Work" },
];

function navClass({ isActive }) {
  return `text-sm transition-colors ${
    isActive ? "text-accent" : "text-ink-soft hover:text-ink"
  }`;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  const resumeLink = (
    <a
      href={RESUME_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-ink-soft transition-colors hover:text-ink"
    >
      Resume&nbsp;<span aria-hidden="true">↗</span>
    </a>
  );

  return (
    <nav className="border-b border-black/5 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link to="/" aria-label="Home" className="shrink-0">
          <img src="/ibrahimlogo.png" alt="Ibrahim Piri" className="h-10 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={navClass}>
              {l.label}
            </NavLink>
          ))}
          {resumeLink}
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="-mr-2 p-2 text-ink-soft md:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-4 border-t border-black/5 px-6 py-5 md:hidden">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={navClass}>
              {l.label}
            </NavLink>
          ))}
          {resumeLink}
        </div>
      )}
    </nav>
  );
}

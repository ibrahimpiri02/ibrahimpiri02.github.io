import React from "react";
import { Link } from "react-router-dom";
import { CONTACT, RESUME_URL } from "../site";

const now = [
  {
    to: "/parsec",
    title: "Caltech PARSEC",
    text: "Controls subteam. Building the simulation stack for the Daedalus Diver test rocket in Isaac Sim and Isaac Lab.",
  },
  {
    to: "/research",
    title: "Research",
    text: "Characterizing the critical points of linear self-attention, with Prof. Guido Montúfar's group at UCLA.",
  },
  {
    to: "/mireta",
    title: "Mireta Urban Dynamics",
    text: "Co-founder. Slime-mold-inspired algorithms for designing roads, rail, and utility networks.",
  },
  {
    to: "/earlier-work",
    title: "Earlier Work",
    text: "The AIML Initiative, Science Bowl, Citadel Terminal, MIT Battlecode, and the UCLA Math Circle.",
  },
];

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pt-16 sm:pt-24">
      {/* Intro */}
      <section className="flex flex-col-reverse gap-10 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl">
          <p className="eyebrow mb-4">Caltech</p>
          <h1 className="font-serif text-5xl leading-none tracking-tight sm:text-6xl">Ibrahim Piri</h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            I'm a student at Caltech. I work on rocket guidance and control, the mathematics behind machine
            learning, and algorithms that borrow from nature to design better networks.
          </p>
        </div>
        <img
          src="/portrait.jpg"
          alt="Portrait of Ibrahim Piri"
          className="h-40 w-32 shrink-0 rounded-md object-cover grayscale-[15%] sm:h-48 sm:w-36"
        />
      </section>

      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="link">
          Resume
        </a>
        {CONTACT.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="link"
          >
            {c.label}
          </a>
        ))}
      </div>

      {/* What I'm working on */}
      <section className="mt-24">
        <h2 className="mb-2 text-xs font-medium uppercase tracking-[0.14em] text-ink-faint">Work</h2>
        <ul className="divide-y divide-black/5">
          {now.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="group flex items-baseline justify-between gap-6 py-6 transition-colors"
              >
                <div>
                  <h3 className="font-medium text-ink transition-colors group-hover:text-accent">{item.title}</h3>
                  <p className="mt-1 leading-relaxed text-ink-soft">{item.text}</p>
                </div>
                <span
                  aria-hidden="true"
                  className="text-ink-faint transition-transform group-hover:translate-x-1 group-hover:text-accent"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Personal */}
      <section className="mt-20">
        <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.14em] text-ink-faint">Otherwise</h2>
        <p className="leading-relaxed text-ink-soft">
          You'll usually find me playing ping pong, chess, or a good board game, or up early for a rocket launch
          livestream.
        </p>
      </section>
    </div>
  );
}

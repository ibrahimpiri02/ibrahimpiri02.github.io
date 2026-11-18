// Page metadata shared by the app (document titles) and the build
// (per-page HTML files with their own titles and link-preview tags).
// Keep this file plain JS: vite.config.js imports it.

export const SITE_URL = "https://ibrahimpiri.com";
export const SITE_NAME = "Ibrahim Piri";

export const PAGES = [
  {
    path: "/",
    title: "Ibrahim Piri",
    description:
      "Caltech CS student. Co-founder & CTO of Mireta Urban Dynamics, machine learning researcher, and PARSEC controls engineer.",
  },
  {
    path: "/mireta",
    title: "Mireta Urban Dynamics · Ibrahim Piri",
    description:
      "Designing cities the way a slime mold would: bio-inspired algorithms for roads, rail, and utility networks.",
  },
  {
    path: "/research",
    title: "Research · Ibrahim Piri",
    description: "Characterizing the critical points of linear self-attention, with UCLA Mathematics.",
  },
  {
    path: "/parsec",
    title: "Caltech PARSEC · Ibrahim Piri",
    description: "Building the Isaac Sim simulation for Daedalus Diver, PARSEC's belly-flop landing testbed.",
  },
  {
    path: "/earlier-work",
    title: "Earlier Work · Ibrahim Piri",
    description: "The UCLA Math Circle, the AIML Initiative, MIT Battlecode, Citadel Terminal, and Science Bowl.",
  },
];

PAGES.push({
  path: "/resume",
  title: "Resume · Ibrahim Piri",
  description: "Ibrahim Piri's resume.",
});

export const NOT_FOUND = {
  title: "Page not found · Ibrahim Piri",
  description: "This page doesn't exist.",
};

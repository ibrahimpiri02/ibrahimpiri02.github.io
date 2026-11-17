import React from "react";
import { Page, Section, Figure } from "../components/ui";

const recognition = [
  <>
    Featured in{" "}
    <a
      href="https://www.technologyreview.com/2025/10/17/1125223/slime-design-better-cities-mireta/"
      target="_blank"
      rel="noopener noreferrer"
      className="link"
    >
      MIT Technology Review
    </a>{" "}
    (2025)
  </>,
  "Named one of the top seven government innovations at the 2024 World Governments Summit, Dubai",
  "Selected for Harvard's Climate Tech Accelerator (2025), one of ~35 ventures",
  "Presented at Global Rail Abu Dhabi and Urban Tech Summit NYC (2025)",
  "Pilots with some of the world's largest infrastructure firms",
];

const media = [
  { src: "/uae_ani.mp4", video: true, caption: "A proposed highway network for the UAE." },
  { src: "/wadi_ani.mp4", video: true, caption: "A transit corridor routed through a protected wadi landscape." },
  { src: "/proof_ani.mp4", video: true, caption: "Early proof of concept, matching brute-force results far faster." },
  { src: "/forage.png", caption: "Foraging: the model spreads across the domain. Layers like flood risk or habitat shape the search." },
  { src: "/refine.png", caption: "Refining: pressure-driven feedback prunes the mesh into an efficient network." },
  { src: "/mireta2.jpg", caption: "At the Edge of Government exhibition, World Governments Summit 2024." },
];

export default function Mireta() {
  return (
    <Page
      eyebrow="Co-founder · 2023–present"
      title="Mireta Urban Dynamics"
      intro="Slime mold builds remarkably efficient networks with no central planner. Mireta, which I co-founded with Raphael Kay, turns that behavior into algorithms for designing roads, rail, and utility networks."
    >
      <Section title="What we do">
        <p>
          Our models simulate how a slime mold forages and then reinforces its best paths. Planners can add layers
          like population density, flood exposure, or protected habitat, and get networks that balance cost,
          travel time, and resilience. We've used them to propose highway systems, route low-impact transit
          corridors, and refine existing networks for clients.
        </p>
        <p>
          <a href="https://miretaurban.com" target="_blank" rel="noopener noreferrer" className="link">
            miretaurban.com ↗
          </a>
        </p>
      </Section>

      <Section title="Recognition">
        <ul className="space-y-2">
          {recognition.map((r, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-accent">—</span>
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Selected work">
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2">
          {media.map((m) => (
            <Figure key={m.src} {...m} />
          ))}
        </div>
      </Section>
    </Page>
  );
}

import React from "react";
import { Page, Section, Entry } from "../components/ui";

export default function Parsec() {
  return (
    <Page
      eyebrow="Caltech PARSEC · Controls"
      title="Teaching a rocket to belly flop"
      intro="PARSEC is Caltech's rocketry team. We're building Icarus, a liquid-oxygen and kerosene rocket designed to take off, hover, and land itself on its own engine, for the Collegiate Propulsive Lander Challenge."
    >
      <Section title="Daedalus Diver">
        <p>
          Before any guidance or control code flies on Icarus, it flies on the Daedalus testbeds, where a bad day
          costs a propeller instead of a rocket. Daedalus Diver takes on the hardest maneuver of all: the{" "}
          <strong className="font-medium text-ink">belly flop</strong>. The vehicle falls broadside to bleed off
          energy, then flips upright and lands propulsively, the way Starship does.
        </p>
      </Section>

      <Section title="My work">
        <Entry title="Simulation stack" meta="Controls subteam · Sept 2026–present">
          <p>
            I'm building Daedalus Diver's simulation in NVIDIA{" "}
            <strong className="font-medium text-ink">Isaac Sim</strong> and{" "}
            <strong className="font-medium text-ink">Isaac Lab</strong>. It gives the team a physics environment
            where controllers for the flip and landing can be developed, trained, and stress-tested before they
            touch hardware. I also work in SolidWorks to bring the vehicle geometry into the sim.
          </p>
        </Entry>
        {/* Add sim screenshots/clips here with <Figure src="/..." caption="..." /> once available. */}
      </Section>

      <p className="text-sm text-ink-faint">
        More about the team at{" "}
        <a href="https://parsec.caltech.edu" target="_blank" rel="noopener noreferrer" className="link">
          parsec.caltech.edu ↗
        </a>
      </p>
    </Page>
  );
}

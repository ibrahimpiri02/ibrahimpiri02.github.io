import React from "react";
import { Page, Section, Todo } from "../components/ui";

export default function Parsec() {
  return (
    <Page
      eyebrow="Caltech PARSEC · Controls"
      title="Simulating a rocket before it flies"
      intro="PARSEC is Caltech's student rocketry team, working toward a rocket that lands itself. I'm on the Controls subteam, where I build the simulation stack for the Daedalus Diver test rocket."
    >
      <Section title="The simulation stack">
        <p>
          A controller is only as good as the environment it was tested in. I'm building a simulation of Daedalus
          Diver in NVIDIA <strong className="font-medium text-ink">Isaac Sim</strong> and{" "}
          <strong className="font-medium text-ink">Isaac Lab</strong> so the team can develop and validate flight
          control software against realistic vehicle physics before anything leaves the ground.
        </p>
        <Todo>
          What Daedalus Diver is and what its test demonstrates; which parts of the sim you built (dynamics,
          thrust/TVC model, sensors, RL training, sim-to-real); any results.
        </Todo>
      </Section>

      <Section title="Media">
        <Todo>Screenshots, renders, or a short clip of the sim. Drop files in /public and list them here.</Todo>
      </Section>
    </Page>
  );
}

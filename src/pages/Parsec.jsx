import React from "react";
import { PageHero, Body, Section, Bullets, Callout } from "../components/ui";
import { BellyFlop } from "../components/Illustrations";

export default function Parsec() {
  return (
    <>
      <PageHero
        seed={42}
        eyebrow="Caltech PARSEC · Controls · Sept 2026–present"
        title="Teaching a rocket to belly flop"
        intro="PARSEC is Caltech’s rocketry team: Propulsion, Aeronautics, and Rocket Systems Engineering. We’re building Icarus, a liquid-oxygen and kerosene rocket designed to take off, hover, and set itself back down on its own engine, to fly in the Collegiate Propulsive Lander Challenge."
      />

      <Body>
        <Section index="01" title="Daedalus Diver">
          <p>
            Before any guidance or control code flies on Icarus, it flies on our Daedalus testbeds, where a bad day
            costs a propeller instead of a rocket.
          </p>
          <p>
            Daedalus Diver takes on the hardest maneuver of all: the{" "}
            <strong className="font-medium text-ink">belly flop</strong>. The vehicle falls broadside to bleed off
            energy, then flips upright and lands propulsively, the way Starship does.
          </p>
          <div className="rounded-2xl bg-night p-6 text-white sm:p-10">
            <BellyFlop className="mx-auto w-full max-w-xl" />
          </div>
        </Section>

        <Section index="02" title="My work">
          <p>
            I’m on the Controls subteam, developing Daedalus Diver’s simulation in NVIDIA{" "}
            <strong className="font-medium text-ink">Isaac Sim</strong> and{" "}
            <strong className="font-medium text-ink">Isaac Lab</strong>. Once it’s complete, it will give the team a
            physics environment where controllers for the flip and landing can be developed, trained, and
            stress-tested before they touch hardware.
          </p>
          <Bullets
            items={[
              "Building the simulation stack in Isaac Sim and Isaac Lab",
              "Bringing the vehicle geometry over from SolidWorks",
              "Setting up an environment to develop, train, and stress-test flip-and-land controllers",
            ]}
          />
        </Section>

        <Section index="03" title="Why rockets">
          <Callout>
            I’ve been waking up early to watch launch livestreams for more than a decade. Now I get to help build a
            vehicle that flips over and lands itself.
          </Callout>
          <p className="text-sm text-ink-faint">
            More about the team at{" "}
            <a href="https://parsec.caltech.edu" target="_blank" rel="noopener noreferrer" className="link">
              parsec.caltech.edu ↗
            </a>
          </p>
        </Section>
      </Body>
    </>
  );
}

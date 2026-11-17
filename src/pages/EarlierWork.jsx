import React from "react";
import { Page, Section, Entry, Figure } from "../components/ui";

export default function EarlierWork() {
  return (
    <Page
      eyebrow="Earlier Work"
      title="Before Caltech"
      intro="Teaching, competing, and a decade of math circle: the work I did through high school at the Los Angeles Center for Enriched Studies (2022–26)."
    >
      <Section title="Teaching">
        <Entry
          title="AIML Initiative"
          meta="Co-founder & VP · 2024–26"
          logo="/aiml_logo.png"
          href="https://aiml-initiative.org"
        >
          <p>
            Started as my school's AI and machine learning club and grew into a{" "}
            <a
              href="https://drive.google.com/drive/folders/10xwsjAUvP-medQ868O97ZcFDnvFuzs3o?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              twelve-week curriculum
            </a>{" "}
            aligned with California's CS standards, which I taught weekly to 30+ students using Colab notebooks and
            hands-on projects on topics like dataset bias. We worked with LAUSD to turn it into a district-wide AI
            elective. I also built{" "}
            <a href="https://aiml-initiative.org" target="_blank" rel="noopener noreferrer" className="link">
              aiml-initiative.org
            </a>
            , where students work through the lessons, quizzes, and labs and teachers track their progress.
          </p>
        </Entry>

        <Entry
          title="UCLA Olga Radko Endowed Math Circle"
          meta="Student, then instructor · 2025–26"
          logo="/ormc_logo.png"
          href="https://circles.math.ucla.edu/circles/circle-about.shtml"
        >
          <p>
            I joined at eight and spent ten years there doing proof-based number theory, combinatorics, geometry,
            and graph theory, often taught by former IMO medalists. In my last two years I taught the Beginners
            group, writing problem sets and lessons on how to build an argument. ORMC is also where my UCLA research
            began.
          </p>
        </Entry>
      </Section>

      <Section title="Competitions">
        <Entry title="MIT Battlecode" meta="2nd place, US high school · 2025">
          <p>
            A real-time strategy AI competition under tight compute limits. Our team built pathing, unit
            micro-behavior, and economy planning, then traveled to MIT for the finals.
          </p>
          <div className="grid grid-cols-3 gap-3 pt-2">
            <Figure src="/battlecode1.webp" />
            <Figure src="/battlecode2.webp" />
            <Figure src="/battlecode3.webp" />
          </div>
        </Entry>

        <Entry title="Citadel Terminal" meta="2nd place, North America · 2023 & 2025">
          <p>
            Designing game-playing agents under strict performance limits: search, heuristics, and resource
            allocation. Certificates:{" "}
            <a
              href="https://www.credential.net/7b5a2048-f3e2-4421-b7e7-460757d90d81"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              2023
            </a>
            ,{" "}
            <a
              href="https://www.credential.net/fc300b87-2a4f-413c-bc5f-ed95e926e716"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              2025
            </a>
            .
          </p>
        </Entry>

        <Entry title="MESA SoCal Regionals" meta="1st place ×2 · 2025">
          <p>First place in both Coding Solutions and Math Escape.</p>
        </Entry>

        <Entry title="Science Bowl" meta="4th, LADWP Regional · 2024">
          <p>
            Competed from middle school on as a math and physics player, then captained the A team and led the club.
            We placed 4th in one of the country's most competitive regions. As captain, I worked with faculty and counseling to create a for-credit Science
            Bowl class so the team could keep training new players after I left.
          </p>
          <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-4">
            {["/scibowl1.png", "/scibowl2.png", "/scibowl3.png", "/scibowl4.png"].map((s) => (
              <Figure key={s} src={s} />
            ))}
          </div>
        </Entry>
      </Section>
    </Page>
  );
}

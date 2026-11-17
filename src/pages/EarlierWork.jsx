import React from "react";
import { Link } from "react-router-dom";
import { PageHero, Body, Section, Entry, Figure, Bullets, Quote } from "../components/ui";

const terminalCerts = [
  { year: "2023", image: "/terminal23.jpg", link: "https://www.credential.net/7b5a2048-f3e2-4421-b7e7-460757d90d81" },
  { year: "2025", image: "/terminal25.jpg", link: "https://www.credential.net/fc300b87-2a4f-413c-bc5f-ed95e926e716" },
];

export default function EarlierWork() {
  return (
    <>
      <PageHero
        seed={8}
        eyebrow="Earlier Work"
        title="Before Caltech"
        intro="Teaching, competing, and ten years of math circle. This is the work I did growing up in Los Angeles and at the Los Angeles Center for Enriched Studies, and it’s where most of my habits come from."
      />

      <Body>
        <Section index="01" title="UCLA Math Circle">
          <Entry
            title="Olga Radko Endowed Math Circle"
            meta="Student, then instructor"
            logo="/ormc_logo.png"
            href="https://circles.math.ucla.edu/circles/circle-about.shtml"
          >
            <p>
              ORMC became the foundation of my math education. Over a
              decade I worked through number theory, combinatorics, functional equations, geometry, and graph
              theory, often taught by former International Math Olympiad gold medalists. Each session worked like
              small-scale research: make a conjecture, refine the proof, compare approaches.
            </p>
            <p>
              For my last year I taught the Beginners group, writing problem sets and lessons that walked
              elementary schoolers toward their first structured proofs. ORMC is also where my{" "}
              <Link to="/research" className="link">
                machine learning research
              </Link>{" "}
              began.
            </p>
          </Entry>
          <Quote cite="On what ORMC gave me">
            Mathematics became less a subject and more a way of seeing problems: through structure, clarity of
            reasoning, and the search for elegant solutions.
          </Quote>
        </Section>

        <Section index="02" title="AIML Initiative">
          <Entry
            title="Artificial Intelligence & Machine Learning Initiative"
            meta="Co-founder & VP · 2024–26"
            logo="/aiml_logo.png"
          >
            <p>
              We started as a small after-school AI club and grew into an effort to bring AI literacy into
              classrooms across Los Angeles. My co-founders and I wrote a twelve-week curriculum
              aligned with California’s Computer Science standards: Colab notebooks, visual explanations of core
              algorithms, and projects that make ideas like fairness and dataset bias concrete.
            </p>
            <Bullets
              items={[
                "Taught the curriculum live every week to 30+ students",
                "Presented to LAUSD educators and curriculum specialists, and worked with the district to turn it into a district-wide AI elective",
                "Built a web app where students work through interactive guides, quizzes, and lab notebooks, and teachers track progress and manage assignments",
              ]}
            />
            <p>
              It’s one of the things I’m proudest of, because it turned something I love into something that helps
              other people think critically about technology.
            </p>
          </Entry>
        </Section>

        <Section index="03" title="Competitions">
          <Entry title="MIT Battlecode" meta="2nd place · 2025">
            <p>
              A real-time strategy AI competition where you win on both micro control and macro planning under
              tight compute budgets. We built the full stack, from simulation-aware heuristics to match analysis,
              and were flown out to MIT for the finals.
            </p>
            <Bullets
              items={[
                "Strategy: economy planning, map control, and opponent modeling",
                "Micro: pathing, collision handling, and adaptive unit behavior",
                "Optimization: caching, pruning, and constant-time data structures",
              ]}
            />
            <div className="grid grid-cols-3 gap-3 pt-2">
              <Figure src="/battlecode1.webp" aspect="aspect-[4/3]" />
              <Figure src="/battlecode2.webp" aspect="aspect-[4/3]" />
              <Figure src="/battlecode3.webp" aspect="aspect-[4/3]" />
            </div>
          </Entry>

          <Entry title="Citadel Terminal" meta="2nd in North America · 2023 & 2025">
            <p>
              Designing real-time game agents under strict performance limits, across algorithm design, systems
              engineering, and evaluation.
            </p>
            <Bullets
              items={[
                "Algorithms: search, heuristics, state estimation, and resource allocation",
                "Engineering: profiling, latency control, and automated match evaluation",
              ]}
            />
            <div className="grid grid-cols-2 gap-4 pt-2">
              {terminalCerts.map((c) => (
                <a key={c.year} href={c.link} target="_blank" rel="noopener noreferrer" className="group block">
                  <img
                    src={c.image}
                    alt={`Citadel Terminal ${c.year} certificate`}
                    loading="lazy"
                    className="w-full rounded-lg border border-black/5 transition-transform group-hover:scale-[1.02]"
                  />
                  <span className="mt-2 block font-mono text-xs text-ink-faint group-hover:text-accent">
                    {c.year} certificate ↗
                  </span>
                </a>
              ))}
            </div>
          </Entry>

          <Entry title="Science Bowl" meta="A-team captain · 4th, LADWP Regional 2024">
            <p>
              I joined in middle school and grew into leadership through consistency and preparation: B-team
              captain for math in ninth grade, A team for math and physics in tenth, then A-team captain and club
              president in eleventh. We placed 4th in one of the most competitive regions in the country.
            </p>
            <p>
              Our roster was young, so I focused on building something that would last. Working with faculty and
              counseling, I set up a for-credit Science Bowl class with a skills-based syllabus, scrimmages, and
              buzzer drills, giving new students a ladder in and returning players structured practice time.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-4">
              {["/scibowl1.png", "/scibowl2.png", "/scibowl3.png", "/scibowl4.png"].map((s) => (
                <Figure key={s} src={s} aspect="aspect-[4/3]" />
              ))}
            </div>
          </Entry>

          <Entry title="MESA SoCal Regionals" meta="1st place ×2 · 2025">
            <p>First place in both Coding Solutions and Math Escape.</p>
          </Entry>
        </Section>

      </Body>
    </>
  );
}

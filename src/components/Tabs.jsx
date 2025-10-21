import React from "react";

export function MiretaTab() {
  return (
    <section className="w-full p-6 bg-white rounded-lg shadow font-classic">
      <h2 className="text-2xl font-bold mb-4 text-accent">Mireta Urban Design</h2>
      <p className="mb-4">
        Founded in 2023 by myself and Raphael Kay, Mireta Urban Design is dedicated to improving urban environments through innovative software and algorithms. As cofounder and head of software, I have developed multiple algorithms that enhance urban design and promote sustainability.
      </p>
      <a href="https://miretaurban.com" target="_blank" rel="noopener noreferrer" className="text-accent underline mb-4 block">Visit Mireta Urban Design Website</a>
      <div className="mb-4 flex flex-wrap gap-4 justify-center">
        {/* Replace these with actual images of your work */}
        <img src="/images/mireta1.jpg" alt="Mireta Project 1" className="w-40 h-40 object-cover rounded" />
        <img src="/images/mireta2.jpg" alt="Mireta Project 2" className="w-40 h-40 object-cover rounded" />
      </div>
      <h3 className="text-lg font-semibold mt-6 mb-2 text-accent-dark">Conferences & Talks</h3>
      <ul className="list-disc list-inside mb-2 text-gray-700">
        <li>Presented at UrbanTech 2024: "Algorithmic Approaches to Sustainable Cities"</li>
        <li>Speaker at GreenFuture Summit 2025: "Software for Environmental Impact"</li>
        <li>Panelist at Smart Cities Expo: "AI in Urban Planning"</li>
      </ul>
    </section>
  );
}

export function MathCircleTab() {
  return (
    <section className="w-full p-6 bg-white rounded-lg shadow font-classic">
      <h2 className="text-2xl font-bold mb-4 text-accent">Olga Radko Endowed Math Circle</h2>
      <p className="mb-4">
        I have been a student at the Olga Radko Endowed Math Circle at UCLA for 11 years and a volunteer instructor for the past 2 years. Topics we've explored include Fourier series and projective geometries. My favorite part of teaching is seeing the creative solutions students develop for challenging math problems—it's incredibly rewarding to give back to the community that raised me.
      </p>
      <ul className="list-disc list-inside mb-2 text-gray-700">
        <li>Fourier Series</li>
        <li>Projective Geometries</li>
        <li>Creative Problem Solving</li>
      </ul>
    </section>
  );
}

import { useState } from "react";

const COMPETITIONS = [
  {
    key: "Science Bowl",
    title: "Science Bowl",
    content: (
      <div>
        <h3 className="font-semibold text-lg mb-2">Science Bowl</h3>
        <p>
          Member for 4 years, president for 2. Led my team to 2nd place, excelling in math and physics.
        </p>
      </div>
    ),
  },
  {
    key: "Citadel",
    title: "Citadel",
    content: (
      <div>
        <h3 className="font-semibold text-lg mb-2">Citadel</h3>
        <p>
          Competed for 3+ years, won 2nd place twice, and my algorithm ranked top 10 globally for years.
        </p>
      </div>
    ),
  },
  {
    key: "MIT",
    title: "MIT",
    content: (
      <div>
        <h3 className="font-semibold text-lg mb-2">MIT</h3>
        <p>
          Semifinalist in the high school division, traveled to Boston, and achieved 2nd place overall.
        </p>
      </div>
    ),
  },
];

export function CompetitionsTab() {
  const [selected, setSelected] = useState(COMPETITIONS[0].key);
  const current = COMPETITIONS.find((c) => c.key === selected);
  return (
    <section className="w-full p-6 bg-white rounded-lg shadow flex flex-col md:flex-row gap-8 font-classic">
      <div className="md:w-1/3 mb-4 md:mb-0">
        <h2 className="text-2xl font-bold mb-4 text-accent">Competitions</h2>
        <ul className="flex md:flex-col gap-4">
          {COMPETITIONS.map((c) => (
            <li key={c.key}>
              <button
                className={`w-full px-4 py-2 rounded text-left font-medium transition-colors duration-200 font-classic ${
                  selected === c.key
                    ? "bg-accent-light text-accent-dark border-b-4 border-accent"
                    : "bg-gray-100 text-gray-700 hover:bg-accent-light hover:text-accent-dark"
                }`}
                onClick={() => setSelected(c.key)}
              >
                {c.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:w-2/3 flex-1">{current.content}</div>
    </section>
  );
}

export function CourseworkTab() {
  return (
    <section className="w-full p-6 bg-white rounded-lg shadow font-classic">
      <h2 className="text-2xl font-bold mb-4 text-accent">Coursework & Certificates</h2>
      <p className="mb-4">
        I have completed university-level courses in linear algebra, differential equations, statics, physics, and C++. I also hold coding certifications in C++, Python, and JavaScript from online courses.
      </p>
      <ul className="list-disc list-inside mb-2 text-gray-700">
        <li>Linear Algebra</li>
        <li>Differential Equations</li>
        <li>Statics</li>
        <li>Physics</li>
        <li>C++</li>
        <li>Python</li>
        <li>JavaScript</li>
      </ul>
    </section>
  );
}

export function ResearchTab() {
  return (
    <section className="w-full p-6 bg-white rounded-lg shadow font-classic">
      <h2 className="text-2xl font-bold mb-4 text-accent">Research Interests</h2>
      <p className="mb-4">
        My research interests include advanced math topics and the application of AI. I am currently collaborating with a UCLA graduate student to publish a paper on AI applications, and I plan to write about barycentric coordinates.
      </p>
      <ul className="list-disc list-inside mb-2 text-gray-700">
        <li>Applications of AI in Mathematics</li>
        <li>Barycentric Coordinates</li>
        <li>Mathematical Problem Solving</li>
      </ul>
    </section>
  );
}

export function ActivitiesTab() {
  return (
    <>
      <section className="w-full p-6 bg-white rounded-lg shadow font-classic">
        <h2 className="text-2xl font-bold mb-4 text-accent">Activities & Hobbies</h2>
        <p className="mb-4">
          My favorite part about playing chess and board games like Catan is the strategy and game theory involved. I have a passion for optimization and enjoy watching rocket launches—I've been following space launches for over 10 years, often waking up early to catch the latest events. My travels have taken me to Boston, San Diego, Rome, Venice, Florence, Madrid, Barcelona, and Baku, Azerbaijan, where I was born.
        </p>
        <ul className="list-disc list-inside mb-2 text-gray-700">
          <li>Chess & Board Games (Catan)</li>
          <li>Game Theory & Optimization</li>
          <li>Space Launches (10+ years)</li>
          <li>Travel: Boston, San Diego, Italy (Rome, Venice, Florence), Spain (Madrid, Barcelona), Baku</li>
        </ul>
      </section>
    </>
  );
}

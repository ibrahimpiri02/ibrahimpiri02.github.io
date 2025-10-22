import React, { useState, useEffect } from "react";

export default function Competitions() {
  const competitions = [
    {
      key: "science-bowl",
      title: "Science Bowl",
      content: (
        <div>
          <h3 className="text-xl font-semibold mb-2">Science Bowl</h3>
          <p>
            Participated in Science Bowl competitions, tackling physics, chemistry, and math problems under time pressure. Learned teamwork and rapid problem solving.
          </p>
        </div>
      ),
    },
    {
      key: "citadel",
      title: "Citadel",
      content: (
        <div>
          <h3 className="text-xl font-semibold mb-2">Citadel</h3>
          <p>
            Competed in Citadel's summer challenge program focusing on finance, algorithms, and quantitative problem solving.
          </p>
        </div>
      ),
    },
    {
      key: "mit",
      title: "MIT",
      content: (
        <div>
          <h3 className="text-xl font-semibold mb-2">MIT</h3>
          <p>
            Attended MIT workshops and hackathons. Worked on collaborative coding projects and explored advanced math concepts.
          </p>
        </div>
      ),
    },
  ];

  const [active, setActive] = useState(competitions[0].key);

  useEffect(() => {
    const sections = document.querySelectorAll("section[data-competition]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  const handleClick = (key) => {
    const section = document.getElementById(key);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row gap-8 font-classic">
      {/* Sidebar */}
      <aside className="md:w-1/6 mb-4 md:mb-0 sticky top-6 self-start">
        <h2 className="text-xl font-semibold mb-3 text-accent">Competitions</h2>
        <ul className="flex md:flex-col gap-2">
          {competitions.map((c) => (
            <li key={c.key}>
              <button
                onClick={() => handleClick(c.key)}
                className={`w-full text-left px-3 py-2 rounded font-medium text-sm transition-colors duration-200 ${
                  active === c.key
                    ? "bg-accent-light text-accent-dark border-l-2 border-accent"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {c.title}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Scrollable content */}
      <div className="md:flex-1 flex-1 space-y-12">
        {competitions.map((c) => (
          <section
            key={c.key}
            id={c.key}
            data-competition
            className="scroll-mt-24 bg-white p-6 rounded-lg shadow"
          >
            {c.content}
          </section>
        ))}
      </div>
    </div>
  );
}

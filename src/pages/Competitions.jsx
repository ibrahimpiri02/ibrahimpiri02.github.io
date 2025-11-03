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
            Participated in Science Bowl competitions, tackling physics,
            chemistry, and math problems under time pressure. Learned teamwork
            and rapid problem solving.
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
            Competed in Citadel's summer challenge program focusing on finance,
            algorithms, and quantitative problem solving.
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
            Attended MIT workshops and hackathons. Worked on collaborative
            coding projects and explored advanced math concepts.
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
    setActive(key); // ensure active state updates on click
    const section = document.getElementById(key);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row gap-8 font-classic bg-white text-gray-800">
      {/* Sidebar */}
      <aside className="md:w-1/6 mb-4 md:mb-0 sticky top-20 self-start">
        {/* Heading uses original font-classic */}
        <h2 className="text-xl font-bold mb-4 text-accent font-classic">
          Competitions
        </h2>

        {/* Sidebar links */}
        <ul className="flex md:flex-col gap-4">
          {competitions.map((c) => {
            const isActive = active === c.key;
            return (
              <li key={c.key} className="relative">
                <button
                  onClick={() => handleClick(c.key)}
                  className={`relative text-base font-semibold tracking-wide uppercase transition-all duration-300 pb-1 bg-transparent border-none text-left cursor-pointer ${
                    isActive
                      ? "text-[#009a8c]"
                      : "text-gray-700 hover:text-[#009a8c]"
                  }`}
                >
                  {c.title}
                  <span
                    className={`absolute left-0 bottom-0 h-[2px] rounded-full transition-all duration-300 ${
                      isActive
                        ? "w-full bg-[#009a8c]"
                        : "w-0 bg-[#009a8c] hover:w-full"
                    }`}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </aside>

      {/* Scrollable content */}
      <div className="md:flex-1 flex-1 space-y-12 p-6">
        {competitions.map((c) => (
          <section
            key={c.key}
            id={c.key}
            data-competition
            className="scroll-mt-24 bg-white"
          >
            {c.content}
          </section>
        ))}
      </div>
    </div>
  );
}

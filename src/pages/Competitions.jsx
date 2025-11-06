import React, { useState, useEffect } from "react";

export default function Competitions() {
    const competitions = [
        {
            key: "science-bowl",
            title: "Science Bowl",
            content: (
                <div>
                    <h3 className="text-xl font-semibold mb-2">Science Bowl</h3>
                    <p className="mb-3">
                        I joined Science Bowl in middle school and grew into leadership through consistency and preparation.
                        In ninth grade I captained the B team for math. In tenth I moved to A team with a focus on math and physics,
                        and we placed fourth in one of the most competitive regions in the country. In eleventh I became A team captain
                        and club president. Our roster was young, so I focused on building systems that would last.
                    </p>
                    <p className="mb-3">
                        Working with students, faculty, and school officials, I helped establish a for-credit Science Bowl class.
                        I coordinated with counseling on scheduling, partnered with a faculty sponsor, drafted a skills-based syllabus,
                        and set up a practice pipeline that included content blocks, scrimmages, and buzzer drills. The class created a
                        stable ladder of training for new students and gave returning players structured time to sharpen speed, breadth,
                        and accuracy.
                    </p>

                </div>
            ),
        },
        {
            key: "citadel",
            title: "Terminal (Citadel)",
            content: (
                <div>
                    <h3 className="text-xl font-semibold mb-2">Terminal, sponsored by Citadel</h3>
                    <p className="mb-3">
                        I compete in Citadel’s Terminal competitions, which challenge teams to design real-time game agents under strict
                        performance limits. My work spans algorithm design, systems engineering, and evaluation.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Results: 2nd place in North America in 2023 and again in 2025</li>
                        <li>Algorithms: Search, heuristics, state estimation, and resource allocation</li>
                        <li>Engineering: Profiling, latency control, and robust CI for match evaluations</li>
                        <li>Team play: Version control discipline, modular strategy testing, and rapid iteration</li>
                    </ul>
                </div>
            ),
        },
        {
            key: "mit",
            title: "MIT Battlecode",
            content: (
                <div>
                    <h3 className="text-xl font-semibold mb-2">MIT Battlecode</h3>
                    <p className="mb-3">
                        Battlecode is a strategy AI competition where performance depends on both micro-level control and macro-level planning.
                        Our team built a full stack from simulation-aware heuristics to match analysis. We traveled to MIT for the finals and
                        placed second nationally in 2025.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Strategy: Macro economy planning, map control, and opponent modeling</li>
                        <li>Micro: Pathing, collision handling, and adaptive unit behaviors</li>
                        <li>Optimization: Caching, pruning, and constant-time data structures for tight time budgets</li>
                        <li>Collaboration: Code reviews, role clarity, and sprint-style testing for tournament phases</li>
                    </ul>
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
        setActive(key);
        const section = document.getElementById(key);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className="w-full flex flex-col md:flex-row gap-8 font-classic bg-white text-gray-800">
            {/* Sidebar */}
            <aside className="md:w-1/6 mb-4 md:mb-0 sticky top-20 self-start">
                <h2 className="text-xl font-bold mb-4 text-accent font-classic">
                    Competitions
                </h2>

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

import React, { useState, useEffect } from "react";
import {Carousel} from "react-responsive-carousel";

const scibowl_carousel = [
    {
        src: "scibowl1.png",
    },
    {
        src: "scibowl2.png",
    },
    {
        src: "scibowl3.png",
    },
    {
        src: "scibowl4.png",
    }
];

const terminal_certs = [
    {
        title: "2023 High School Terminal - 2nd Place",
        date: "July 25, 2023",
        image: "terminal23.jpg",
        link: "https://www.credential.net/7b5a2048-f3e2-4421-b7e7-460757d90d81",
    },
    {
        title: "2025 High School Terminal - 2nd Place",
        date: "August 12, 2025",
        image: "terminal25.jpg",
        link: "https://www.credential.net/fc300b87-2a4f-413c-bc5f-ed95e926e716",
    }
];

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
                    <div className="flex w-full justify-center">
                        <div className="w-2/3 flex items-center justify-center">
                            <Carousel
                                autoPlay
                                infiniteLoop
                                showThumbs={false}
                                showStatus={false}
                                interval={5000}
                                transitionTime={600}
                                swipeable
                                emulateTouch
                                className="rounded-lg"
                            >
                                {scibowl_carousel.map((s, i) => (
                                    <div key={i} className="flex flex-col items-center justify-center">
                                        <img
                                            src={s.src}
                                            alt=""
                                            className="w-full h-[450px] object-contain rounded-lg"
                                        />
                                        <br />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>


                </div>
            ),
        },
        {
            key: "citadel",
            title: "Terminal",
            content: (
                <div>
                    <h3 className="text-xl font-semibold mb-2">Terminal, sponsored by Citadel</h3>
                    <p className="mb-3">
                        I compete in Citadel’s Terminal competitions, which challenge teams to design real-time game agents under strict
                        performance limits. My work spans algorithm design, systems engineering, and evaluation.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
                        <li>Results: 2nd place in North America in 2023 and again in 2025</li>
                        <li>Algorithms: Search, heuristics, state estimation, and resource allocation</li>
                        <li>Engineering: Profiling, latency control, and robust CI for match evaluations</li>
                        <li>Team play: Version control discipline, modular strategy testing, and rapid iteration</li>
                    </ul>

                    <div className="flex md:grid-cols-2 gap-4">
                        {terminal_certs.map((cert, index) => (
                            <div
                                key={index}
                                className="flex flex-col md:flex-col w-1/2 items-center gap-8 bg-white p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                {/* Text Info */}
                                <div className="flex-1">
                                    <h4 className="text-2xl font-semibold mb-1">{cert.title}</h4>
                                    <p className="text-gray-600 italic mb-3">{cert.date}</p>
                                </div>

                                {/* Certificate Image */}
                                <div className="flex-shrink-0 w-full md:w-[320px]">
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block overflow-hidden rounded-lg"
                                    >
                                        <img
                                            src={cert.image}
                                            alt={cert.title}
                                            className="w-full h-auto transform transition-transform duration-300 hover:scale-105"
                                        />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
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
                    <ul className="list-disc list-inside text-gray-700 space-y-1 mb-8">
                        <li>Strategy: Macro economy planning, map control, and opponent modeling</li>
                        <li>Micro: Pathing, collision handling, and adaptive unit behaviors</li>
                        <li>Optimization: Caching, pruning, and constant-time data structures for tight time budgets</li>
                        <li>Collaboration: Code reviews, role clarity, and sprint-style testing for tournament phases</li>
                    </ul>
                    <div className="flex flex-col items-center justify-center">
                        <img
                            src="battlecode1.webp"
                            alt="Battlecode"
                            className="w-auto max-w-[800px] h-auto rounded-lg mb-6"
                        />

                        {/* Two images side by side with equal height */}
                        <div className="flex flex-row flex-wrap justify-center gap-2">
                            <div className="w-auto h-[500px] overflow-hidden rounded-lg">
                                <img
                                    src="battlecode2.webp"
                                    alt="Battlecode"
                                    className="h-full w-auto object-cover"
                                />
                            </div>
                            <div className="w-auto h-[500px] overflow-hidden rounded-lg">
                                <img
                                    src="battlecode3.webp"
                                    alt="Battlecode"
                                    className="h-full w-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>

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

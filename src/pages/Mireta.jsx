import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../index.css";

const slides = [
    { src: "/mireta1.png", cap: "Masterplan for Pioneer Village, Canada, based on Mireta's network optimization." },
    { src: "/mireta2.jpg", cap: "Mireta featured as part of the Edge of Government Exhibition at the 2024 World Governments Summit"},
    { src: "/mireta3.png", cap: "Mireta's presentation for Global Rail Abu Dhabi 2025" },
];

// Put these near the top of the file, above the component:
const highlightVideos = [
    { src: "/uae_ani.mp4", cap: "UAE Case Study: Mireta's network optimization used to design a new highway system for the UAE"},
    { src: "/wadi_ani.mp4", cap: "Wadi Greenway: Developed a new transit corridor within a protected wadi landscape for an undisclosed" +
            " internation design firm." },
    { src: "/proof_ani.mp4", cap: "Proof of Concept: One of our initial tests of our slime-mold algorithm. Our algorithm's" +
            " results aligned with existing brute-force models at a far superior time complexity." },
];

const highlightImages = [
    { src: "/gbc.png", cap: "Example deliverables for a past client: Our algorithms provided suggested network refinements that" +
            " measurably improved both transit time and resiliency." },
    { src: "/forage.png", cap: "Foraging Phase: Our slime-mold algorithm accurately models the phases of the real organism. Other layers" +
            " can be added to foraging domain, such as flood-risk or critical habitats, to optimize for these factors." },
    { src: "/refine.png", cap: "Refining Phase: After the foraging phase, our algorithms use pressure-driven feedbacks to refine the" +
            " mesh, resulting in an optimal network. Several networks can be created from the same initial mesh, based on the desired" +
            " 'connectivity'"},
];



export default function Mireta() {
    return (
        <section className="w-full p-6 bg-white font-classic">
            <h2 className="text-2xl font-bold mb-4 text-accent">Mireta Urban Dynamics</h2>

            <p className="mb-4">
                <strong>Mireta Urban Dynamics</strong> is a tech-startup I co-founded in 2023 with Raphael Kay to make urban networks as
                efficient and adaptive as those found in nature. Our work bridges biology, computation, and urban design to help
                governments and infrastructure firms create roads, highways, and utility networks that are smarter, greener, and more resilient.
            </p>

            <p className="mb-4">
                As co-founder and Head of Software, I’ve led the development of Mireta’s entire computational engine:
                a growing library of biologically inspired algorithms that simulate processes like slime mold foraging
                and ant colony optimization. These systems translate natural behavior into network intelligence,
                enabling us to model transportation, energy, and water grids that balance efficiency with sustainability.
            </p>

            <p className="mb-4">
                What began as side project has become a platform recognized by global leaders and
                institutions. In the process, I’ve had to learn not just how networks function, but how people
                collaborate to build them, from engineers and city planners to the communities that depend on them.
                That human element has shaped how I design every system we create.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2 text-accent-dark">Recognition & Collaborations</h3>
            <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="md:w-2/3">
            <p className="mb-4">
                In just two years, Mireta has gained global recognition:
            </p>


                <ul className="list-disc list-inside text-gray-700">
                    <li>Recognized among the top seven innovations to impact government at the 2024 <strong>World Governments Summit</strong> in Dubai.</li>
                    <li>Invited to private discussions with more than five world leaders and their senior delegations, including the Crown Prince of Dubai.</li>
                    <li>Selected in 2025 as one of ~35 high-potential ventures by <strong>Harvard University’s Climate Tech Accelerator</strong>.</li>
                    <li>Partnered with some of the world's largest infrastructure firms to pilot our algorithms. Check out some of our{" "}
                        <a href="https://miretaurban.com/projects" target="_blank" rel="noopener noreferrer" className="text-accent underline hover:text-accent-dark">
                        <strong>past projects!</strong></a></li>
                    <li>Invited to feature at major conferences including <strong>Global Rail Abu Dhabi 2025</strong> and <strong>Urban Tech Summit NYC 2025</strong>.</li>
                    <li>Recently featured in{" "} <a href="https://www.technologyreview.com/2025/10/17/1125223/slime-design-better-cities-mireta/" target="_blank" rel="noopener noreferrer" className="text-accent underline hover:text-accent-dark">
                        <strong>MIT Technology Review</strong></a> .
                    </li>
                </ul>
                </div>
                <div className="md:w-1/3 w-full rounded-lg shadow-md">
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
                        {slides.map((s, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <img src={s.src} alt={s.cap} className="w-full h-64 object-cover rounded-lg" />
                                <p className="mt-2 mb-6 w-full text-center text-sm text-gray-700 bg-white rounded px-3 py-2">
                                    {s.cap}
                                </p>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-2 text-accent-dark">Technology & Impact</h3>
            <p className="mb-4">
                Our models draw directly from nature’s own problem solvers. Slime mold algorithms guide the formation of branching transit
                corridors that adapt to population density, while ant-colony dynamics help simulate decentralized traffic flow and water
                distribution. We’ve also developed graph-based heuristics that combine these biological principles with optimization
                techniques from network science to design systems that balance efficiency, redundancy, and resilience. The result is a suite
                of tools that allows planners to visualize and reconfigure how entire cities move, connect, and share resources.
            </p>

            <p className="mb-4">
                The impact of this approach goes beyond performance metrics. By optimizing routes and resource allocation, our models allow
                developing cities to expand essential services to otherwise underserved areas without significant increases in materials or
                energy. Our algorithms can also be calibrated for environmental factors, and have been used to map out low-deforestation
                transit alignments, minimize flood exposure in coastal areas, and identify urban expansion patterns that preserve green
                corridors for biodiversity.
            </p>

            <a
                href="https://miretaurban.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline mb-6 block"
            >
                Visit Mireta Urban Dynamics Website
            </a>

            {/* 2×3 Grid: first row videos, second row images */}
            <h3 className="text-lg font-semibold mt-8 mb-3 text-accent-dark">Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Row 1: videos */}
                {highlightVideos.map((v, i) => (
                    <figure key={`vid-${i}`} className="flex flex-col">
                        <video
                            src={v.src}
                            className="w-full h-56 md:h-64 rounded-lg object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                            controls={false}
                        />
                        <figcaption className="mt-2 text-sm text-gray-700 text-center bg-white rounded px-3 py-2">
                            {v.cap}
                        </figcaption>
                    </figure>
                ))}

                {/* Row 2: images */}
                {highlightImages.map((img, i) => (
                    <figure key={`img-${i}`} className="flex flex-col">
                        <img
                            src={img.src}
                            alt={img.cap}
                            className="w-full h-56 md:h-64 rounded-lg object-cover"
                        />
                        <figcaption className="mt-2 text-sm text-gray-700 text-center bg-white rounded px-3 py-2">
                            {img.cap}
                        </figcaption>
                    </figure>
                ))}
            </div>



        </section>
    );
}

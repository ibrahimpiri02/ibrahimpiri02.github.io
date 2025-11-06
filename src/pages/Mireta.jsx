import React from "react";

export default function Mireta() {
    return (
        <section className="w-full p-6 bg-white font-classic">
            <h2 className="text-2xl font-bold mb-4 text-accent">Mireta Urban Dynamics</h2>

            <p className="mb-4">
                <strong>Mireta Urban Dynamics</strong> is a tech-startup I co-founded in 2023 with Raphael Kay to make urban networks as
                efficient and adaptive as those found in nature. Our work bridges biology, computation, and urban design to help
                governments and infrastructure firms create networks that grow smarter, greener, and more resilient over time.
            </p>

            <p className="mb-4">
                As co-founder and Head of Software, I’ve led the development of Mireta’s entire computational engine:
                a growing library of biologically inspired algorithms that simulate processes like slime mold foraging
                and ant colony optimization. These systems translate natural behavior into network intelligence,
                enabling us to model transportation, energy, and water grids that balance efficiency with sustainability.
            </p>

            <p className="mb-4">
                What began as late-night code experiments has become a platform recognized by global leaders and
                institutions. In the process, I’ve had to learn not just how networks function, but how people
                collaborate to build them, from engineers and city planners to the communities that depend on them.
                That human element has shaped how I design every system we create.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2 text-accent-dark">Recognition & Collaborations</h3>
            <p className="mb-4">
                In just two years, Mireta has gained global recognition:
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-700">
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

            <h3 className="text-lg font-semibold mt-6 mb-2 text-accent-dark">Technology & Impact</h3>
            <p className="mb-4">
                Our algorithms don’t just optimize — they rethink what optimization means.
                By lowering infrastructure costs and improving spatial efficiency,
                our tools make high-quality systems accessible to cities and communities that need them most.
                The same code that finds the shortest path between two nodes can also help minimize
                deforestation, protect habitats, or reduce flood vulnerability.
            </p>

            <p className="mb-4">
                To me, Mireta is more than a company. It’s a reflection of how curiosity can evolve into impact.
                Every model begins with a question, every simulation with a hypothesis — and somewhere between
                data and design, I get to watch new patterns of possibility emerge.
                The project has taught me that real innovation happens when computation meets empathy,
                when precision serves vision, and when technology grows in rhythm with the world it’s meant to help.
            </p>

            <a
                href="https://miretaurban.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline mb-6 block"
            >
                Visit Mireta Urban Dynamics Website
            </a>

        </section>
    );
}

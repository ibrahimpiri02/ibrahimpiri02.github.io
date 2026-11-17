import React from "react";
import { PageHero, Body, Section, Stats, Bullets, Figure, Callout } from "../components/ui";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "link" };

export default function Mireta() {
  return (
    <>
      <PageHero
        seed={21}
        eyebrow="Mireta Urban Dynamics · Co-founder & CTO · 2023–present"
        title="Designing cities the way a slime mold would"
        intro="I co-founded Mireta with Raphael Kay in 2023 to make urban networks as efficient and adaptive as the ones nature builds. We work across biology, computation, and urban design to help governments and infrastructure firms plan roads, highways, and utility networks that are smarter, greener, and more resilient."
      >
        <div className="mt-12">
          <Stats
            dark
            items={[
              { value: "1 of 7", label: "global innovations, World Governments Summit 2024" },
              { value: "4+", label: "pilots with infrastructure firms" },
              { value: "10+", label: "bio-inspired algorithms in our library" },
              { value: "30+", label: "software interns managed" },
            ]}
          />
        </div>
      </PageHero>

      <Body>
        <Section index="01" title="The idea">
          <p>
            <em className="font-serif text-xl text-ink">Physarum polycephalum</em> is a single-celled
            slime mold with no brain. Put it on a map with food at the locations of major cities and it grows a
            network that rivals the one human engineers built. It does this by exploring everywhere, then
            reinforcing the paths that carry the most flow and letting the rest die back.
          </p>
          <p>
            Our models borrow from nature’s problem solvers. Slime-mold dynamics grow branching transit corridors
            that adapt to population density. Ant-colony methods simulate decentralized traffic and water
            distribution. Graph heuristics from network science tie it together, balancing efficiency,
            redundancy, and resilience.
          </p>
          <Figure
            src="/proof_ani.mp4"
            video
            caption="One of our first tests. The slime-mold algorithm matched existing brute-force models at a far better time complexity."
          />
        </Section>

        <Section index="02" title="How it works">
          <p>
            Every network starts with a <strong className="font-medium text-ink">foraging</strong> phase, where
            simulated agents spread across the domain. Extra layers like flood risk or critical habitat change
            where they’re willing to go. Then a <strong className="font-medium text-ink">refining</strong> phase uses
            pressure-driven feedback to prune that mesh into an efficient network. The same mesh can produce
            several designs, depending on how connected the planner wants the result to be.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <Figure src="/forage.png" caption="Foraging: agents explore, guided by noise and attractive forces." />
            <Figure src="/refine.png" caption="Refining: the biased mesh is pruned into a final network." />
          </div>
        </Section>

        <Section index="03" title="Impact">
          <p>
            The payoff isn’t only shorter travel times. Better routing and resource allocation let developing
            cities extend essential services to underserved areas without large increases in materials or energy.
            Our algorithms have mapped low-deforestation transit alignments, reduced flood exposure in coastal
            areas, and identified growth patterns that preserve green corridors for wildlife.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <Figure src="/uae_ani.mp4" video caption="UAE case study: a new highway network designed with our optimizer." />
            <Figure src="/wadi_ani.mp4" video caption="Wadi Greenway: a transit corridor routed through a protected wadi landscape for an international design firm." />
          </div>
          <Figure
            src="/gbc.png"
            aspect="aspect-[16/9]"
            caption="Deliverables for a past client: suggested refinements that measurably improved transit time and resiliency."
          />
        </Section>

        <Section index="04" title="My role">
          <p>
            As CTO I own the technology, from the algorithms themselves to how they reach clients.
          </p>
          <Bullets
            items={[
              "Built our Python library of 10+ bio-inspired AI algorithms for infrastructure network design",
              "Delivered 4+ pilots, including with B+H Architects and Surbana Jurong Group",
              "Led a pilot engagement with McKinsey applying our algorithms to infrastructure use cases",
              "Managed a team of 30+ software development interns",
            ]}
          />
          <p>
            What began as a side project taught me that networks are built by people as much as by algorithms,
            from engineers and city planners to the communities that rely on them. That shapes every system we
            design.
          </p>
        </Section>

        <Section index="05" title="Recognition">
          <Bullets
            items={[
              <>
                Featured in{" "}
                <a href="https://www.technologyreview.com/2025/10/17/1125223/slime-design-better-cities-mireta/" {...ext}>
                  MIT Technology Review
                </a>{" "}
                (2025)
              </>,
              "Named one of the top seven innovations shaping government at the 2024 World Governments Summit in Dubai",
              "Invited to private discussions with more than five world leaders and their delegations, including the Crown Prince of Dubai",
              "Selected for the Harvard Climate Circle accelerator, 2025–26 cohort",
              "Presented at Global Rail Abu Dhabi and Urban Tech Summit NYC (2025)",
            ]}
          />
          <div className="grid gap-6 pt-4 sm:grid-cols-3">
            <Figure src="/mireta2.jpg" aspect="aspect-[4/3]" caption="Edge of Government exhibition, WGS 2024" />
            <Figure src="/mireta3.png" aspect="aspect-[4/3]" caption="Presenting at Global Rail Abu Dhabi 2025" />
            <Figure src="/mireta1.png" aspect="aspect-[4/3]" caption="Pioneer Village masterplan, Canada" />
          </div>
          <Callout>
            See our full portfolio at{" "}
            <a href="https://miretaurban.com" {...ext}>
              miretaurban.com ↗
            </a>
          </Callout>
        </Section>
      </Body>
    </>
  );
}

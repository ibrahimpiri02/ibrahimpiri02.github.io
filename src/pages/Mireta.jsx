import React from "react";

export default function Mireta() {
  return (
    <section className="w-full p-6 bg-white font-classic">
      <h2 className="text-2xl font-bold mb-4 text-accent">Mireta Urban Dynamics</h2>

      <p className="mb-4">
        Co-founded in 2023 with Raphael Kay, <strong>Mireta Urban Dynamics</strong> 
        is a technology startup dedicated to transforming infrastructure planning through 
        AI-driven design. Our goal is to help cities grow smarter, greener, and more 
        resilient by reimagining how transit, energy, and water networks are planned and 
        optimized.
      </p>

      <p className="mb-4">
        As co-founder and Head of Software, I’ve spent countless nights building our 
        entire computational toolkit from the ground up — a suite of more than six AI 
        algorithms inspired by biological systems such as slime mold growth and ant 
        colony dynamics. These models learn from the natural world to create efficient, 
        adaptive, and sustainable infrastructure networks.
      </p>

      <p className="mb-4">
        Developing these systems required diving deeply into fields I had never formally 
        studied: urban network design, traffic dynamics, human geography, and biological 
        growth processes — all through the lenses of computer science and mathematics. 
        It’s been a journey of both personal and intellectual growth, one that demanded 
        the same late nights and perseverance that first defined my early experiences in 
        math competitions.
      </p>

      <p className="mb-4">
        Beyond the algorithms, I’ve built an entire Python library for urban network design 
        and have been deeply involved in Mireta’s outreach — helping prepare materials and 
        leading sales pitches with senior executives at global infrastructure firms. 
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-2 text-accent-dark">Recognition & Collaborations</h3>
      <p className="mb-4">
        In just two years, Mireta has grown from an idea to a venture with global recognition:
      </p>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Featured among the seven top innovations to impact government at the 2024 <strong>World Governments Summit</strong> in Dubai.</li>
        <li>Invited to private discussions with over five world leaders and their senior delegations, including the Crown Prince of Dubai.</li>
        <li>Selected in 2025 as one of ~35 high-potential ventures by <strong>Harvard University’s Climate Tech Accelerator</strong>.</li>
        <li>Completed pilot projects with <strong>B+H Architects</strong> (600 employees, ~$80M annual revenue) and <strong>Surbana Jurong Group</strong> (16,000 employees, ~$1.5B annual revenue).</li>
        <li>Signed a formal partnership with B+H Architects.</li>
        <li>Invited to present at major global events such as <strong>Global Rail Abu Dhabi 2025</strong> and the <strong>Urban Tech Summit NYC 2025</strong>.</li>
        <li>Upcoming feature in <strong>MIT Technology Review</strong>.</li>
        <li>Currently negotiating a large-scale contract (~$500K–$600K) with a government body in Abu Dhabi.</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 mb-2 text-accent-dark">Social & Environmental Impact</h3>
      <p className="mb-4">
        The goal of our work goes far beyond optimization. By reducing the cost of 
        constructing and maintaining infrastructure, we help make high-quality systems 
        more accessible to underserved communities. Our networks are not only more 
        efficient, but also more environmentally responsible — capable of minimizing 
        deforestation, avoiding critical habitat fragmentation, promoting green spaces, 
        and mitigating flood damage.
      </p>
      <p className="mb-4">
        To me, Mireta represents a full-circle moment: from competing in math contests 
        that taught me how to think abstractly, to now applying those same principles 
        toward creating real-world change with global reach.
      </p>
      <p className="mb-4">
        Working at Mireta reminded me why the intersection of business and technology is 
        so powerful. Behind every innovation is not just a line of code or a model, 
        but people — their needs, creativity, and the desire to make something better. 
        Building Mireta taught me that lasting impact comes from understanding both the 
        technical and human sides of a problem. It’s this balance — between data and empathy, 
        precision and vision — that I hope to carry forward in everything I build.
      </p>

      <a
        href="https://miretaurban.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent underline mb-6 block"
      >
        Visit Mireta Urban Dynamics Website
      </a>

      <div className="mb-4 flex flex-wrap gap-4 justify-center">
        <img
          src="/images/mireta1.jpg"
          alt="Mireta Project 1"
          className="w-52 h-52 object-cover rounded transition-transform duration-300 hover:scale-105"
        />
        <img
          src="/images/mireta2.jpg"
          alt="Mireta Project 2"
          className="w-52 h-52 object-cover rounded transition-transform duration-300 hover:scale-105"
        />
      </div>
    </section>
  );
}

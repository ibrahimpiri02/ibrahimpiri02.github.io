import React from "react";
import {ParticleAnimation} from "../components/particle-animation.tsx";

export default function Home() {
  return (
    <section className="w-full bg-white font-classic">
        <div className="relative flex h-[580px] w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br">

      <span className="pointer-events-none z-10 whitespace-pre-wrap absolute text-center text-3xl w-[300px] font-semibold leading-none tracking-tighter">
        Luck plays a role in success, but the harder you work and the more you prepare, the luckier you get. - Jim Simons
      </span>
            <ParticleAnimation />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8">
        {/* About Me text on the left */}
        <div className="flex-1 text-left">
          <h2 className="text-2xl font-bold mb-4 text-accent">About Me</h2>
          <p className="mb-4">
            Hello! I'm Ibrahim Piri, a high school student passionate about mathematics,
            computer science, and urban design. I love exploring how mathematical logic
            and algorithmic thinking can be applied to real-world challenges — from
            software systems to sustainable city planning.
          </p>
        </div>

        {/* Portrait on the right */}
        <div className="flex-shrink-0">
          <img
            src="/portrait.jpg"
            alt="Ibrahim Piri portrait"
            className="w-[300px] h-[400px] object-cover border-4 border-accent/30"
          />
        </div>
      </div>
    </section>
  );
}

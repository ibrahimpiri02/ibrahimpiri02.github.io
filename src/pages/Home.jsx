import React from "react";

export default function Home() {
  return (
    <section className="w-full p-6 bg-white font-classic">
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

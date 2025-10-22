import React from "react";

export default function Activities() {
  return (
    <section className="w-full p-6 bg-white font-classic">
      <h2 className="text-2xl font-bold mb-4 text-accent">Activities & Hobbies</h2>
      <p className="mb-4">
        My favorite part about playing chess and board games like Catan is the strategy and game theory involved. I have a passion for optimization and enjoy watching rocket launches—I've been following space launches for over 10 years, often waking up early to catch the latest events. My travels have taken me to Boston, San Diego, Rome, Venice, Florence, Madrid, Barcelona, and Baku, Azerbaijan, where I was born.
      </p>
      <ul className="list-disc list-inside mb-2 text-gray-700">
        <li>Chess & Board Games (Catan)</li>
        <li>Game Theory & Optimization</li>
        <li>Space Launches (10+ years)</li>
        <li>Travel: Boston, San Diego, Italy (Rome, Venice, Florence), Spain (Madrid, Barcelona), Baku</li>
      </ul>
    </section>
  );
}

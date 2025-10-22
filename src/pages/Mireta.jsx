import React from "react";

export default function Mireta() {
  return (
    <section className="w-full p-6 bg-white font-classic">
      <h2 className="text-2xl font-bold mb-4 text-accent">Mireta Urban Dynamics</h2>
      <p className="mb-4">
        Founded in 2023 by myself and Raphael Kay, Mireta Urban Dynamics is dedicated to improving urban environments through innovative software and algorithms. As cofounder and head of software, I have developed multiple algorithms that enhance urban design and promote sustainability.
      </p>
      <a href="https://miretaurban.com" target="_blank" rel="noopener noreferrer" className="text-accent underline mb-4 block">
        Visit Mireta Urban Dynamics Website
      </a>
      <div className="mb-4 flex flex-wrap gap-4 justify-center">
        <img src="/images/mireta1.jpg" alt="Mireta Project 1" className="w-40 h-40 object-cover rounded" />
        <img src="/images/mireta2.jpg" alt="Mireta Project 2" className="w-40 h-40 object-cover rounded" />
      </div>
      <h3 className="text-lg font-semibold mt-6 mb-2 text-accent-dark">Conferences & Talks</h3>
      <ul className="list-disc list-inside mb-2 text-gray-700">
        <li>Presented at UrbanTech 2024: "Algorithmic Approaches to Sustainable Cities"</li>
        <li>Speaker at GreenFuture Summit 2025: "Software for Environmental Impact"</li>
        <li>Panelist at Smart Cities Expo: "AI in Urban Planning"</li>
      </ul>
    </section>
  );
}

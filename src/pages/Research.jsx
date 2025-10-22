import React from "react";

export default function Research() {
  return (
    <div className="w-full flex justify-center">
      <section className="w-full bg-white p-6 font-classic">
        <h2 className="text-2xl font-bold mb-4 text-accent">Research Interests</h2>
        <p className="mb-4">
          My research interests include advanced math topics and the application of AI. I am currently collaborating with a UCLA graduate student to publish a paper on AI applications, and I plan to write about barycentric coordinates.
        </p>
        <ul className="list-disc list-inside mb-2 text-gray-700">
          <li>Applications of AI in Mathematics</li>
          <li>Barycentric Coordinates</li>
          <li>Mathematical Problem Solving</li>
        </ul>
      </section>
    </div>
  );
}

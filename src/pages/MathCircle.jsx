import React from "react";

export default function MathCircle() {
  return (
    <section className="w-full p-6 bg-white rounded-lg shadow font-classic">
      <h2 className="text-2xl font-bold mb-4 text-accent">Olga Radko Endowed Math Circle</h2>
      <p className="mb-4">
        I have been a student at the Olga Radko Endowed Math Circle at UCLA for 11 years and a volunteer instructor for the past 2 years. Topics we've explored include Fourier series and projective geometries. My favorite part of teaching is seeing the creative solutions students develop for challenging math problems—it's incredibly rewarding to give back to the community that raised me.
      </p>
      <ul className="list-disc list-inside mb-2 text-gray-700">
        <li>Fourier Series</li>
        <li>Projective Geometries</li>
        <li>Creative Problem Solving</li>
      </ul>
    </section>
  );
}

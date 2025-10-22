import React from "react";

export default function Coursework() {
  return (
    <section className="w-full max-w-full bg-white p-6 font-classic overflow-x-hidden">
      <h2 className="text-2xl font-bold mb-4 text-accent">Coursework & Certificates</h2>
      <p className="mb-4">
        I have completed university-level courses in linear algebra, differential equations, statics, physics, and C++. I also hold coding certifications in C++, Python, and JavaScript from online courses.
      </p>
      <ul className="list-disc list-inside mb-2 text-gray-700">
        <li>Linear Algebra</li>
        <li>Differential Equations</li>
        <li>Statics</li>
        <li>Physics</li>
        <li>C++</li>
        <li>Python</li>
        <li>JavaScript</li>
      </ul>
    </section>
  );
}

import React from "react";

const coursework = [
  { title: "CS 157: Full-Stack Web Application Development", term: "Spring 2026", school: "LAMC", grade: null, status: "planned" },
  { title: "FINANCE 001: Principles of Finance", term: "Spring 2026", school: "LAMC", grade: null, status: "planned" },
  { title: "MATH 263: Calculus III (Multivariable)", term: "Spring 2026", school: "LAMC", grade: null, status: "planned" },
  { title: "CS 131: Discrete Structures", term: "Fall 2025", school: "LACC", grade: "A (In progress)", status: "in-progress" },
  { title: "CS 216: Object Oriented Programming in C++", term: "Fall 2025", school: "WLAC", grade: "A (In progress)", status: "in-progress" },
  { title: "ENG GEN 131: Statics", term: "Fall 2025", school: "WLAC", grade: "A", status: "completed" },
  { title: "MATH 270: Linear Algebra", term: "Summer 2025", school: "LACC", grade: "A", status: "completed" },
  { title: "MATH 275: Ordinary Differential Equations", term: "Summer 2025", school: "LACC", grade: "A", status: "completed" },
  { title: "CS 116: Programming in C++", term: "Summer 2025", school: "LACC", grade: "A", status: "completed" },
  { title: "BUS 032: Business Communications", term: "Spring 2025", school: "WLAC", grade: "A", status: "completed" },
  { title: "BUS 001: Introduction to Business", term: "Fall 2024", school: "WLAC", grade: "A", status: "completed" },
  { title: "CS 81: JavaScript Programming", term: "Summer 2024", school: "SMC", grade: "A", status: "completed" },
  { title: "CS 85: PHP Programming", term: "Summer 2024", school: "SMC", grade: "A", status: "completed" },
  { title: "MARKET 001: Principles of Selling", term: "Spring 2024", school: "WLAC", grade: "A", status: "completed" },
  { title: "BUS 005: Business Law I", term: "Fall 2023", school: "WLAC", grade: "A", status: "completed" },
];

const certificates = [
  {
    title: "Programming in C++: A Hands-on Introduction",
    date: "December 16, 2024",
    description:
      "Completed a 4-course specialization covering foundational and object-oriented programming concepts in C++ through hands-on projects.",
    details: [
      "C++ Basics: Selection and Iteration",
      "C++ Basic Structures: Vectors, Pointers, Strings, and Files",
      "C++ Object Basics: Functions, Recursion, and Objects",
      "Object-Oriented C++: Inheritance and Encapsulation",
    ],
    image: "cpp-specialization.png",
    link: "https://coursera.org/share/1c3e97e19b6f9ab0868366cf1ec6edf5",
  },
  {
    title: "Data Analysis with Python (FreeCodeCamp)",
    date: "August 27, 2021",
    description:
      "Applied Python data analysis and visualization techniques to real datasets, implementing multiple projects with automated testing.",
    details: [
      "Mean-Variance-Standard Deviation Calculator",
      "Demographic Data Analyzer",
      "Medical Data Visualizer",
      "Page View Time Series Visualizer",
      "Sea Level Predictor",
    ],
    image: "data-analysis.png",
    link: "https://www.freecodecamp.org/certification/ibrahimpiri/data-analysis-with-python-v7",
  },
  {
    title: "Scientific Computing with Python (FreeCodeCamp)",
    date: "May 29, 2021",
    description:
      "Developed core programming skills in Python by building functional projects focused on computation and algorithmic logic.",
    details: [
      "Arithmetic Formatter",
      "Time Calculator",
      "Budget App",
      "Polygon Area Calculator",
      "Probability Calculator",
    ],
    image: "scientific-computing.png",
    link: "https://www.freecodecamp.org/certification/ibrahimpiri/scientific-computing-with-python-v7",
  },
  {
    title: "Python 3 Programming Specialization (University of Michigan)",
    date: "June 25, 2020",
    description:
      "Completed a comprehensive 5-course specialization in Python 3, emphasizing software engineering, data processing, and object-oriented programming.",
    details: [
      "Python Basics",
      "Python Functions, Files, and Dictionaries",
      "Data Collection and Processing with Python",
      "Python Classes and Inheritance",
      "Python Project: Software Engineering and Image Manipulation",
    ],
    image: "umich-python.png",
    link: "https://coursera.org/share/c64b84f4b4383009190acc26560e2952",
  },
];

export default function CourseworkAndCertificates() {
  return (
    <section className="p-8 bg-white font-classic">
      <h2 className="text-3xl font-semibold mb-2 text-accent text-center">
        Coursework & Certificates
      </h2>
      <p className="text-gray-600 text-center mb-10 text-sm">
        Online courses and specializations outside of traditional school coursework
      </p>

      {/* Coursework Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
          Coursework
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {coursework.map((course, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border ${
                course.status === "planned"
                  ? "bg-gray-50 text-gray-500 border-gray-200"
                  : "bg-white border-gray-200"
              } hover:shadow-sm transition`}
            >
              <h4 className="text-lg font-semibold">{course.title}</h4>
              <p className="text-sm text-gray-600">
                {course.school} — {course.term}
              </p>
              {course.grade && (
                <p className="text-sm text-gray-600">
                  Grade: <span className="font-medium">{course.grade}</span>
                </p>
              )}
              <p
                className={`text-sm mt-1 ${
                  course.status === "planned"
                    ? "text-gray-400"
                    : course.status === "in-progress"
                    ? "text-[#009a8c]"
                    : "text-green-600"
                }`}
              >
                {course.status === "planned"
                  ? "📅 Planned"
                  : course.status === "in-progress"
                  ? "🕓 In Progress"
                  : "✅ Completed"}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Certificates Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
          Certificates
        </h3>
        <div className="flex flex-col gap-12">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-8 bg-white p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Text Info */}
              <div className="flex-1">
                <h4 className="text-2xl font-semibold mb-1">{cert.title}</h4>
                <p className="text-gray-600 italic mb-3">{cert.date}</p>
                <p className="mb-4">{cert.description}</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {cert.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Certificate Image */}
              <div className="flex-shrink-0 w-full md:w-[320px]">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden rounded-lg"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-auto transform transition-transform duration-300 hover:scale-105"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

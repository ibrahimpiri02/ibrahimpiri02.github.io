import React from "react";

export default function MathCircle() {
  return (
    <section className="w-full p-6 bg-white font-classic">
      <h2 className="text-2xl font-bold mb-4 text-accent">
        UCLA Olga Radko Endowed Math Circle
      </h2>
        <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
            <p className="md:w-3/4 mb-4 md:mb-0 md:pr-6">
                The Olga Radko Endowed Math Circle at UCLA has been the foundation of my mathematical education for more than a decade.
                I joined the program at eight years old after completing an entrance exam designed to evaluate problem-solving ability and abstract reasoning.
                ORMC exposed me to topics far beyond standard school curricula, emphasizing proof-based thinking, logical rigor, and the creative structure of advanced mathematics.
                Weekly sessions in the UCLA Math and Sciences Building provided an environment where students were encouraged to explore deep mathematical concepts independently
                and present their reasoning before an audience of peers. This early immersion in a rigorous, discussion-driven format built the foundation for the way I approach all complex systems today.
            </p>

            {/* ORMC logo on the right */}
            <div className="md:w-1/4 flex justify-center">
                <img
                    src="/ormc_logo.png"
                    alt="ORMC Logo"
                    className="w-48 h-48 rounded-full object-cover border border-gray-200 shadow-sm"
                />
            </div>
        </div>

        <p className="mb-4">
            Over the years, I progressed through increasingly advanced levels of the program, studying number theory, combinatorics, functional equations, geometry, and graph theory.
            Several of my instructors have been former International Mathematical Olympiad gold medalists. They introduced me to the precision and structure of Olympiad-style problem solving.
            Their approach highlighted the importance of deriving results through clear reasoning rather than memorization.
            Each session followed the format of mathematical research at a small scale: students developed conjectures, refined proofs, and compared multiple solution paths to determine optimal methods of attack.
            These experiences established a mindset that treats every challenge as an iterative process of refinement and verification.
        </p>

        <p className="mb-4">
            For the past two years, I have served as a volunteer instructor for the Beginners group, teaching elementary-level students the fundamentals of mathematical reasoning.
            My responsibilities include designing problem sets, developing lesson plans, and guiding students toward writing structured arguments for their solutions.
            The instructional process emphasized conceptual understanding over computational speed, aligning with ORMC’s philosophy of training young learners to reason analytically from first principles.
            Through teaching, I gained a deeper appreciation for mathematical reasoning and the translation of complex ideas into accessible forms without losing rigor.
        </p>

        <p className="mb-4">
            ORMC has given me more than technical skill; it has shaped the way I think and work.
            The program blends rigorous coursework with mentorship from mathematicians and active collaboration among students, creating an environment where ideas evolve through discussion rather than instruction.
            Many of the analytical habits I rely on today originated in these classes.
            Mathematics became less a subject and more a way of seeing problems: through structure, clarity of reasoning, and the search for elegant solutions.
        </p>


        <p className="mb-4">
        You can learn more about the program on the{" "}
        <a
          href="https://circles.math.ucla.edu/circles/circle-about.shtml"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          official ORMC website
        </a>
        . Through my involvement with ORMC, I also began conducting research in
        artificial intelligence alongside a UCLA graduate student. More details
        about this project can be found in the{" "}
        <a href="/#/aiml" className="text-accent hover:underline">
          AI & Machine Learning tab.
        </a>{" "}
      </p>
    </section>
  );
}

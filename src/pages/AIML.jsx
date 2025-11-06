import React from "react";

export default function AIML() {
    return (
        <div className="w-full flex justify-center">
            <section className="w-full bg-white p-6 font-classic">
                <h2 className="text-2xl font-bold mb-4 text-accent">Machine Learning Research at UCLA</h2>

                <p className="mb-4">
                    I am currently conducting research at UCLA under graduate student Khang Nguyen and Professor Guido Montúfar,
                    focusing on the <strong>mathematical characterization of critical points in linear self-attention mechanisms</strong>.
                    This project combines linear algebra, matrix calculus, and computational modeling to better understand
                    when and how attention-based neural networks stabilize during training.
                </p>

                <p className="mb-4">
                    Our goal is to understand how learning stabilizes or diverges depending on the model's architecture. By studying the
                    critical points of linear self-attention, we aim to uncover the mathematical principles that govern when a model
                    converges, why certain configurations are stable, and how these insights can inform the design of more reliable machine
                    learning systems.
                </p>

                <p className="mb-4">
                    My broader research interests include optimization in high-dimensional systems,
                    biologically inspired algorithms, and the intersection between network theory and AI interpretability.
                    I’m especially fascinated by how ideas from dynamical systems and graph theory
                    can illuminate the behavior of modern machine learning models.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-accent">Artificial Intelligence & Machine Learning Initiative</h2>

                <p className="mb-4">
                    At my school, I co-founded and serve as Vice President of the
                    <strong> Artificial Intelligence and Machine Learning Club</strong>,
                    where we teach students how to understand and build the systems shaping their world.
                    What started as a small after-school group became a full-scale initiative to bring
                    <strong> AI literacy</strong> into classrooms across our district.
                </p>

                <p className="mb-4">
                    Alongside my cofounders, I helped develop a{" "} <a
                        href="https://drive.google.com/drive/folders/10xwsjAUvP-medQ868O97ZcFDnvFuzs3o?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent underline hover:text-accent-dark"
                    > <strong>twelve-week AI curriculum</strong> </a> aligned with California’s Computer Science standards.
                    We built interactive Google Colab notebooks, designed visual explanations of core algorithms,
                    and created projects that made abstract concepts like fairness and bias in datasets accessible to younger students.
                </p>

                <p className="mb-4">
                    This initiative grew into a proposal for <strong>district-wide adoption by LAUSD</strong>,
                    which we presented to educators and curriculum specialists. We are now working closely with LAUSD to implement a new AI
                    elective course to made available to schools district-wide.
                    It represents one of my proudest achievements: transforming our passion for machine learning
                    into something that empowers others to think critically about technology.
                </p>

            </section>
        </div>
    );
}

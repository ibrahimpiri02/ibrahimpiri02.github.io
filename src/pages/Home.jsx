import React from "react";

export default function Home() {
    return (
        <section className="w-full p-6 bg-white font-classic flex flex-col items-center">
            <blockquote className="text-center text-xl md:text-2xl font-medium italic text-gray-600 max-w-3xl mb-10 leading-relaxed">
                “Luck plays a role in success, but the harder you work and the more you prepare, the luckier you get.”
                <footer className="mt-2 text-gray-500 text-base">— Jim Simons</footer>
            </blockquote>

            <div className="flex flex-col md:flex-row items-center gap-8">
                {/* About Me text on the left */}
                <div className="flex-1 text-left">
                    <h2 className="text-2xl font-bold mb-4 text-accent">About Me</h2>
                    <p className="mb-4">
                        Hello! I’m Ibrahim Piri, a high school senior passionate about using math and computer science to improve lives. I’ve always
                        loved finding patterns in complex systems and turning them into something practical. Whether I’m writing code, studying models
                        of behavior, or leading a project, I’m drawn to work that blends logic with creativity. I like challenges that force me to
                        think deeply and build things that matter, turning an idea into something real and useful. What drives me most is the
                        possibility of helping shape a future where technology solves real-world problems more than it ever has before.
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

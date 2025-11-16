import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
    const [quoteVisible, setQuoteVisible] = useState(false);
    const [footerVisible, setFooterVisible] = useState(false);

    useEffect(() => {
        // Trigger quote animation
        const timer1 = setTimeout(() => setQuoteVisible(true), 100);
        // Trigger footer animation after quote
        const timer2 = setTimeout(() => setFooterVisible(true), 800);
        
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    return (
        <section className="w-full p-6 bg-white font-classic flex flex-col items-center">
            <blockquote className="relative text-center text-xl md:text-2xl font-medium italic text-gray-600 max-w-3xl mb-10 leading-relaxed px-8 py-6 rounded-lg bg-gradient-to-br from-accent/5 to-transparent border-l-4 border-accent/30">
                {/* Decorative opening quote */}
                <span 
                    className={`absolute -top-2 -left-2 text-6xl md:text-7xl text-accent/20 font-serif transition-all duration-1000 ${
                        quoteVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                    }`}
                    style={{ transitionDelay: '200ms' }}
                >
                    {" "}"
                </span>
                
                {/* Quote text */}
                <span 
                    className={`inline-block transition-all duration-1000 ${
                        quoteVisible 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-4'
                    }`}
                >
                    Luck plays a role in success, but the harder you work and the more you prepare, the luckier you get.
                </span>
                
                {/* Decorative closing quote */}
                <span 
                    className={`absolute -bottom-4 -right-2 text-6xl md:text-7xl text-accent/20 font-serif transition-all duration-1000 ${
                        quoteVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                    }`}
                    style={{ transitionDelay: '400ms' }}
                >
                    "
                </span>
                
                {/* Footer with staggered animation */}
                <footer 
                    className={`mt-4 text-gray-500 text-base transition-all duration-1000 ${
                        footerVisible 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-4'
                    }`}
                >
                    — Jim Simons
                </footer>
            </blockquote>

            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                {/* About Me text on the left */}
                <div className="flex-1 text-left">
                    <h2 className="text-2xl font-bold mb-4 text-accent">About Me</h2>
                    <p className="mb-4">
                        Hello! I’m Ibrahim Piri and I'm a high school senior excited to use my passions to understand and improve the world!
                        I’ve always loved finding patterns in complex systems and turning them into something practical. I'm drawn to challenges
                        that force me to think deeply and build things that matter, transforming an idea into something real and useful.
                        When I'm not working on a project, you'll probably find me playing ping pong, chess, or a good board game.
                        I also love watching rocket launch livestreams! I hope to see one in-person someday :)
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

            {/* Explore My Work Section */}
            <div className="w-full max-w-4xl mb-12">
                <h2 className="text-2xl font-bold mb-6 text-accent text-center">Explore My Work</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Link
                        to="/mireta"
                        className="group relative overflow-hidden bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/30 rounded-lg p-6 hover:border-accent hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <h3 className="text-xl font-semibold mb-2 text-accent group-hover:text-accent-dark transition-colors">
                            Mireta Urban Dynamics
                        </h3>
                        <p className="text-gray-700 text-sm mb-4">
                            Co-founded startup using biologically inspired algorithms for urban network optimization
                        </p>
                        <span className="text-accent font-medium text-sm group-hover:underline">
                            Learn more →
                        </span>
                    </Link>

                    <Link
                        to="/aiml"
                        className="group relative overflow-hidden bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/30 rounded-lg p-6 hover:border-accent hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <h3 className="text-xl font-semibold mb-2 text-accent group-hover:text-accent-dark transition-colors">
                            AI & Machine Learning
                        </h3>
                        <p className="text-gray-700 text-sm mb-4">
                            Research at UCLA and co-founded AI/ML initiative at my school
                        </p>
                        <span className="text-accent font-medium text-sm group-hover:underline">
                            Learn more →
                        </span>
                    </Link>

                    <Link
                        to="/competitions"
                        className="group relative overflow-hidden bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/30 rounded-lg p-6 hover:border-accent hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <h3 className="text-xl font-semibold mb-2 text-accent group-hover:text-accent-dark transition-colors">
                            Competitions
                        </h3>
                        <p className="text-gray-700 text-sm mb-4">
                            Science Bowl, Terminal (Citadel), and MIT Battlecode achievements
                        </p>
                        <span className="text-accent font-medium text-sm group-hover:underline">
                            Learn more →
                        </span>
                    </Link>

                    <Link
                        to="/coursework"
                        className="group relative overflow-hidden bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/30 rounded-lg p-6 hover:border-accent hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <h3 className="text-xl font-semibold mb-2 text-accent group-hover:text-accent-dark transition-colors">
                            Coursework & Certificates
                        </h3>
                        <p className="text-gray-700 text-sm mb-4">
                            Academic coursework and online certifications in CS and math
                        </p>
                        <span className="text-accent font-medium text-sm group-hover:underline">
                            Learn more →
                        </span>
                    </Link>

                    <Link
                        to="/mathcircle"
                        className="group relative overflow-hidden bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/30 rounded-lg p-6 hover:border-accent hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <h3 className="text-xl font-semibold mb-2 text-accent group-hover:text-accent-dark transition-colors">
                            Math Circle
                        </h3>
                        <p className="text-gray-700 text-sm mb-4">
                            Teaching and exploring advanced mathematics with peers
                        </p>
                        <span className="text-accent font-medium text-sm group-hover:underline">
                            Learn more →
                        </span>
                    </Link>

                    <a
                        href="https://miretaurban.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative overflow-hidden bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/30 rounded-lg p-6 hover:border-accent hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <h3 className="text-xl font-semibold mb-2 text-accent group-hover:text-accent-dark transition-colors">
                            Visit Mireta Website
                        </h3>
                        <p className="text-gray-700 text-sm mb-4">
                            Explore Mireta's projects and learn about our urban network solutions
                        </p>
                        <span className="text-accent font-medium text-sm group-hover:underline">
                            Visit site →
                        </span>
                    </a>
                </div>
            </div>

            {/* Connect Section */}
            <div className="w-full max-w-4xl mb-8">
                <h2 className="text-2xl font-bold mb-6 text-accent text-center">Connect With Me</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    <a
                        href="https://linkedin.com/in/ibrahim-piri"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:text-white transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/ibrahimpiri02"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:text-white transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                    >
                        GitHub
                    </a>
                    <a
                        href="mailto:ibrahimpiri02@gmail.com"
                        className="px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:text-white transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                    >
                        Email
                    </a>
                    <a
                        href="mailto:ibrahim@miretaurban.com"
                        className="px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:text-white transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                    >
                        Business Email
                    </a>
                </div>
            </div>
        </section>
    );
}

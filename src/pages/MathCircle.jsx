import React from "react";

export default function MathCircle() {
  return (
    <section className="w-full p-6 bg-white font-classic">
      <h2 className="text-2xl font-bold mb-4 text-accent">
        Olga Radko Endowed Math Circle
      </h2>
      <p className="mb-4">
        The Olga Radko Endowed Math Circle at UCLA has been my academic home for
        over a decade. I first joined when I was eight years old, after taking
        an entrance exam that opened the door to a world of mathematics far
        beyond what I had seen in school. What began as a weekend class quickly
        became a second family and tight community where curiosity, creativity, and
        persistence are celebrated.
      </p>
      <p className="mb-4">
        Over the years, I attended countless sessions in the Math and Sciences
        Building, exploring topics that revealed the beauty and depth of
        mathematics. Some of my most memorable classes were taught by Ciprian
        Bonciocat and Alexandru Pascadi, former IMO gold medalists for Romania,
        whose passion and insight transformed complex Olympiad problems into
        something both elegant and human. Learning from them was deeply
        inspiring and served as a reminder of how far curiosity can take you when nurtured
        in the right environment.
      </p>
      <p className="mb-4">
        For the past two years, I’ve had the privilege of serving as a
        volunteer instructor, working with the Beginners class of elementary
        school students. Teaching young learners has shown me how boundless
        creativity can be when guided by wonder. There’s a special joy in
        watching students find new ways to approach a problem. It's these moments that
        remind me why I fell in love with math in the first place.
      </p>
      <p className="mb-4">
        ORMC has shaped not only how I think but who I am. It’s more than a math
        circle; it’s a family of people who aren’t afraid to make mistakes in
        the pursuit of understanding. I’m profoundly grateful for the mentors,
        classmates, and the UCLA Math Department for building a community that
        continues to inspire me.
      </p>
      <p className="mb-4 italic text-gray-700">
        Thank you, UCLA Math Circle, for giving me a place to grow, to learn,
        and to share my love for mathematics.
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
        <a href="/src/pages/AIML" className="text-accent hover:underline">
          Research
        </a>{" "}
        tab.
      </p>
    </section>
  );
}

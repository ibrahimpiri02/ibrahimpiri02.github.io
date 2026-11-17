import React from "react";
import { Link } from "react-router-dom";
import Physarum from "../components/Physarum";
import { Stats, Quote } from "../components/ui";
import { BellyFlop, AttentionMatrix } from "../components/Illustrations";
import { CONTACT, RESUME_URL } from "../site";

const stats = [
  { value: "1 of 7", label: "global innovations, World Governments Summit 2024" },
  { value: "4+", label: "infrastructure pilots delivered with Mireta" },
  { value: "2×", label: "2nd in North America, Citadel Terminal" },
  { value: "2nd", label: "MIT Battlecode 2025" },
];

function More({ children = "Read more" }) {
  return (
    <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent">
      {children}
      <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
    </span>
  );
}

const card =
  "group relative block overflow-hidden rounded-2xl border border-black/5 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10";

const heroLink =
  "text-white underline decoration-accent-light/60 underline-offset-4 hover:text-white hover:decoration-accent-light";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-night text-white">
        <Physarum seed={11} density={0.1} />
        <div className="pointer-events-none absolute inset-0 bg-night/60 md:bg-transparent md:bg-gradient-to-r md:from-night md:via-night/80 md:to-night/10" />
        <div className="relative mx-auto grid max-w-5xl items-center gap-12 px-6 pb-36 pt-20 sm:pt-28 md:grid-cols-[1fr_auto]">
          <div>
            <p className="eyebrow mb-6 text-accent-light">Caltech CS ’30 · Los Angeles</p>
            <h1 className="font-serif text-5xl leading-[1.02] tracking-tight sm:text-7xl">
              Hi, I’m Ibrahim<span className="text-accent-light">.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">
              I like systems that organize themselves. I co-founded{" "}
              <Link to="/mireta" className={heroLink}>Mireta</Link>, where we use slime mold to design cities. I
              study the <Link to="/research" className={heroLink}>mathematics of attention</Link>. And at Caltech,
              I’m helping <Link to="/parsec" className={heroLink}>teach a rocket to belly flop</Link>.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn-primary hover:text-white">
                Resume ↗
              </a>
              <a href="mailto:ibrahimpiri02@gmail.com" className="btn-ghost">
                Get in touch
              </a>
            </div>
            <p className="mt-10 hidden font-mono text-xs text-white/40 md:block">
              ↖ that’s a live slime-mold simulation. Move your cursor and it’ll follow.
            </p>
          </div>
          <div className="relative mx-auto hidden md:block">
            <div className="absolute -inset-3 rounded-full border border-accent-light/30" />
            <img
              src="/portrait-square.jpg"
              alt="Ibrahim Piri"
              className="relative h-60 w-60 rounded-full object-cover shadow-2xl shadow-black/50"
            />
          </div>
        </div>
      </section>

      {/* Stats overlapping the hero */}
      <div className="relative z-10 mx-auto -mt-20 max-w-5xl px-6">
        <div className="rounded-xl shadow-xl shadow-black/10">
          <Stats items={stats} />
        </div>
      </div>

      {/* Work */}
      <section className="mx-auto max-w-5xl px-6 pt-24">
        <p className="eyebrow mb-3">What I’m working on</p>
        <h2 className="mb-10 font-serif text-3xl tracking-tight sm:text-4xl">Three problems I can’t stop thinking about</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <Link to="/mireta" className={`${card} md:col-span-2 md:grid md:grid-cols-2`}>
            <video
              src="/uae_ani.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="aspect-video w-full bg-night object-cover md:aspect-auto md:h-full"
            />
            <div className="p-8">
              <p className="font-mono text-xs text-accent">01 · Co-founder & CTO · 2023–now</p>
              <h3 className="mt-3 font-serif text-3xl tracking-tight text-ink">Mireta Urban Dynamics</h3>
              <p className="mt-4 leading-relaxed text-ink-soft">
                A slime mold has no brain, yet it builds transport networks that rival human engineers. We turned
                that into software for designing highways, rail, and utilities, and have piloted it with firms like
                Surbana Jurong and McKinsey.
              </p>
              <More />
            </div>
          </Link>

          <Link to="/research" className={card}>
            <div className="flex h-56 items-center justify-center bg-accent-wash text-ink">
              <AttentionMatrix className="h-44" />
            </div>
            <div className="p-8">
              <p className="font-mono text-xs text-accent">02 · UCLA Mathematics · 2025–26</p>
              <h3 className="mt-3 font-serif text-2xl tracking-tight text-ink">Why does attention learn?</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">
                Characterizing the critical points of linear self-attention, to explain when training converges
                and why.
              </p>
              <More />
            </div>
          </Link>

          <Link to="/parsec" className={card}>
            <div className="flex h-56 items-center justify-center bg-night text-white">
              <BellyFlop className="h-48" />
            </div>
            <div className="p-8">
              <p className="font-mono text-xs text-accent">03 · Caltech PARSEC · Controls</p>
              <h3 className="mt-3 font-serif text-2xl tracking-tight text-ink">Teaching a rocket to belly flop</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">
                Developing the Isaac Sim simulation for Daedalus Diver, a testbed for Starship-style flip-and-land
                maneuvers.
              </p>
              <More />
            </div>
          </Link>

          <Link to="/earlier-work" className={`${card} md:col-span-2`}>
            <div className="grid grid-cols-4">
              {["/scibowl2.png", "/battlecode2.webp", "/scibowl3.png", "/scibowl4.png"].map((s) => (
                <img key={s} src={s} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover" />
              ))}
            </div>
            <div className="p-8 md:flex md:items-end md:justify-between md:gap-10">
              <div>
                <p className="font-mono text-xs text-accent">Before Caltech</p>
                <h3 className="mt-3 font-serif text-2xl tracking-tight text-ink">Earlier work</h3>
                <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">
                  A decade at the UCLA Math Circle, an AI curriculum for LA schools, and a lot of competitions:
                  Science Bowl, Citadel Terminal, and MIT Battlecode.
                </p>
              </div>
              <More>See it all</More>
            </div>
          </Link>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-5xl px-6 pt-28">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="eyebrow mb-3">Off the clock</p>
            <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">A little more about me</h2>
            <div className="mt-6 space-y-4 text-[1.0625rem] leading-relaxed text-ink-soft">
              <p>
                I speak Azeri fluently and Russian conversationally.
              </p>
              <p>
                I’ve been waking up early for rocket launch livestreams for more than ten years. Now I get to work
                on one. Otherwise you’ll find me playing ping pong, chess, or a long game of Catan, mostly for the
                strategy and game theory.
              </p>
            </div>
          </div>
          <div className="space-y-10 md:pt-10">
            <Quote cite="Jim Simons">
              Luck plays a role in success, but the harder you work and the more you prepare, the luckier you get.
            </Quote>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {CONTACT.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="link"
                >
                  {c.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

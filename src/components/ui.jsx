import React from "react";
import Physarum from "./Physarum";

/** Dark header band with the slime-mold network behind it. */
export function PageHero({ eyebrow, title, intro, seed = 3, children }) {
  return (
    <header className="relative overflow-hidden bg-night text-white">
      <Physarum seed={seed} density={0.07} />
      <div className="pointer-events-none absolute inset-0 bg-night/65 md:bg-transparent md:bg-gradient-to-r md:from-night md:via-night/85 md:to-night/30" />
      <div className="relative mx-auto max-w-5xl px-6 pb-16 pt-20 sm:pb-20 sm:pt-28">
        {eyebrow && <p className="eyebrow mb-5 text-accent-light">{eyebrow}</p>}
        <h1 className="max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight sm:text-6xl">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">{intro}</p>}
        {children}
      </div>
    </header>
  );
}

/** Page body container. */
export function Body({ children }) {
  return <div className="mx-auto max-w-5xl space-y-24 px-6 pt-20">{children}</div>;
}

/** Section with a numbered mono label in a left rail on wide screens. */
export function Section({ index, title, id, children }) {
  return (
    <section id={id} className="scroll-mt-24 md:grid md:grid-cols-[200px_1fr] md:gap-12">
      <div className="mb-6 md:mb-0">
        <div className="md:sticky md:top-24">
          {index && <span className="font-mono text-xs text-accent">{index}</span>}
          <h2 className="font-serif text-2xl tracking-tight text-ink">{title}</h2>
        </div>
      </div>
      <div className="min-w-0 space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft">{children}</div>
    </section>
  );
}

/** Row of big numbers. */
export function Stats({ items, dark = false }) {
  return (
    <dl
      className={`grid grid-cols-2 gap-px overflow-hidden rounded-xl sm:grid-cols-4 ${
        dark ? "bg-white/10" : "border border-black/5 bg-black/5"
      }`}
    >
      {items.map((s) => (
        <div key={s.label} className={`flex flex-col-reverse justify-end p-5 ${dark ? "bg-night/70 backdrop-blur" : "bg-white"}`}>
          <dt className={`mt-1 text-sm leading-snug ${dark ? "text-white/60" : "text-ink-faint"}`}>{s.label}</dt>
          <dd className={`font-serif text-3xl ${dark ? "text-white" : "text-ink"}`}>{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/** A single item: title, meta line, body. */
export function Entry({ title, meta, logo, href, children }) {
  const heading = href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="link">
      {title}
    </a>
  ) : (
    title
  );
  return (
    <div className="flex gap-5 pt-6 first:pt-0">
      {logo && (
        <img src={logo} alt="" className="mt-1 h-12 w-12 shrink-0 rounded-full border border-black/5 object-cover" />
      )}
      <div className="min-w-0 flex-1">
        <div className="flex flex-col gap-x-4 sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="text-lg font-medium text-ink">{heading}</h3>
          {meta && <span className="shrink-0 font-mono text-xs text-accent">{meta}</span>}
        </div>
        {children && <div className="mt-2 space-y-3 leading-relaxed text-ink-soft">{children}</div>}
      </div>
    </div>
  );
}

/** Bulleted list with teal markers. */
export function Bullets({ items }) {
  return (
    <ul className="space-y-2">
      {items.map((r, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          <span>{r}</span>
        </li>
      ))}
    </ul>
  );
}

/** Image or video with a caption. */
export function Figure({ src, video, caption, aspect = "aspect-video", className = "" }) {
  const cls = `${aspect} w-full rounded-lg bg-black/5 object-cover`;
  return (
    <figure className={className}>
      {video ? (
        <video src={src} autoPlay muted loop playsInline className={cls} />
      ) : (
        <img src={src} alt={caption || ""} loading="lazy" className={cls} />
      )}
      {caption && <figcaption className="mt-2 text-sm leading-snug text-ink-faint">{caption}</figcaption>}
    </figure>
  );
}

/** Large italic pull quote. */
export function Quote({ children, cite }) {
  return (
    <blockquote className="border-l-2 border-accent pl-6">
      <p className="font-serif text-2xl italic leading-snug text-ink">{children}</p>
      {cite && <footer className="mt-3 font-mono text-xs uppercase tracking-wider text-ink-faint">{cite}</footer>}
    </blockquote>
  );
}

/** Small highlighted callout. */
export function Callout({ children }) {
  return <div className="rounded-xl bg-accent-wash p-6 leading-relaxed text-ink">{children}</div>;
}

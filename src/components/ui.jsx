import React from "react";

/** Page wrapper with a consistent header. */
export function Page({ eyebrow, title, intro, children }) {
  return (
    <article className="mx-auto w-full max-w-3xl px-6 pt-16 sm:pt-24">
      <header className="mb-16">
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        <h1 className="font-serif text-4xl leading-tight tracking-tight sm:text-5xl">{title}</h1>
        {intro && <p className="mt-6 text-lg leading-relaxed text-ink-soft">{intro}</p>}
      </header>
      <div className="space-y-20">{children}</div>
    </article>
  );
}

/** A titled section within a page. */
export function Section({ title, id, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      {title && (
        <h2 className="mb-6 border-b border-black/5 pb-3 text-xs font-medium uppercase tracking-[0.14em] text-ink-faint">
          {title}
        </h2>
      )}
      <div className="space-y-5 leading-relaxed text-ink-soft">{children}</div>
    </section>
  );
}

/** A single item: title, meta line (date / role), body. */
export function Entry({ title, meta, logo, href, children }) {
  const heading = href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="link">
      {title}
    </a>
  ) : (
    title
  );
  return (
    <div className="flex gap-5 pt-5 first:pt-0">
      {logo && (
        <img src={logo} alt="" className="mt-1 h-10 w-10 shrink-0 rounded-full border border-black/5 object-cover" />
      )}
      <div className="min-w-0 flex-1">
        <div className="flex flex-col gap-x-4 sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="font-medium text-ink">{heading}</h3>
          {meta && <span className="shrink-0 text-sm text-ink-faint">{meta}</span>}
        </div>
        {children && <div className="mt-2 space-y-3 leading-relaxed text-ink-soft">{children}</div>}
      </div>
    </div>
  );
}

/** Image or video with a short caption. */
export function Figure({ src, video, caption, className = "" }) {
  const media = video ? (
    <video src={src} autoPlay muted loop playsInline className="aspect-video w-full rounded-md bg-black/5 object-cover" />
  ) : (
    <img src={src} alt={caption || ""} loading="lazy" className="aspect-video w-full rounded-md bg-black/5 object-cover" />
  );
  return (
    <figure className={className}>
      {media}
      {caption && <figcaption className="mt-2 text-sm leading-snug text-ink-faint">{caption}</figcaption>}
    </figure>
  );
}

/** Visible placeholder for content still to be filled in. Remove before shipping. */
export function Todo({ children }) {
  return (
    <p className="rounded border border-dashed border-amber-400 bg-amber-50 px-3 py-2 text-sm text-amber-800">
      TODO: {children}
    </p>
  );
}

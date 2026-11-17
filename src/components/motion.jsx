import React, { useEffect, useRef, useState } from "react";

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Video that only downloads once it's near the viewport, pauses when off screen,
 * and shows a still poster (with play controls instead of autoplay) for visitors
 * who prefer reduced motion. The poster is the same path with .jpg instead of .mp4.
 */
export function LazyVideo({ src, poster = src.replace(/\.mp4$/, ".jpg"), className = "", label }) {
  const ref = useRef(null);
  const [load, setLoad] = useState(false);
  const [reduced] = useState(prefersReducedMotion);

  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true);
          if (!reduced) el.play?.().catch(() => {});
        } else if (!el.paused) {
          el.pause();
        }
      },
      { rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced]);

  return (
    <video
      ref={ref}
      src={load ? src : undefined}
      poster={poster}
      preload="none"
      muted
      loop
      playsInline
      autoPlay={!reduced && load}
      controls={reduced}
      aria-label={label}
      className={className}
    />
  );
}

/** Fades and lifts its children into place the first time they scroll into view. */
export function Reveal({ as = "div", className = "", delay = 0, children, ...rest }) {
  const Tag = as;
  const ref = useRef(null);
  const [shown, setShown] = useState(prefersReducedMotion);

  useEffect(() => {
    if (shown) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shown]);

  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

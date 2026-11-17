import React from "react";

/** Daedalus Diver's belly-flop maneuver as ghosted frames along its descent. */
export function BellyFlop({ className = "" }) {
  // [x, y, rotation in degrees]; the vehicle is drawn vertical, so 90 means broadside.
  const frames = [
    [60, 38, 90],
    [118, 70, 90],
    [176, 104, 92],
    [226, 140, 70],
    [262, 172, 35],
    [282, 198, 10],
    [290, 221, 0],
  ];
  return (
    <svg viewBox="0 0 400 260" className={className} role="img" aria-label="Belly-flop maneuver: the vehicle falls broadside, flips upright, and lands on its engine">
      <defs>
        <linearGradient id="flame" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffb347" />
          <stop offset="1" stopColor="#ff6a3d" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M60 38 Q 200 90 250 160 T 290 221"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeDasharray="3 5"
      />
      {frames.map(([x, y, r], i) => {
        const last = i === frames.length - 1;
        return (
          <g key={i} transform={`translate(${x} ${y}) rotate(${r})`} opacity={0.25 + (0.75 * i) / (frames.length - 1)}>
            {last && <path d="M-4 22 L0 40 L4 22 Z" fill="url(#flame)" />}
            <rect x="-5" y="-22" width="10" height="44" rx="2" fill={last ? "#009a8c" : "currentColor"} />
            <path d="M-5 -22 Q0 -32 5 -22 Z" fill={last ? "#009a8c" : "currentColor"} />
            <path d="M-5 14 L-9 22 L-5 22 Z M5 14 L9 22 L5 22 Z" fill={last ? "#009a8c" : "currentColor"} />
          </g>
        );
      })}
      <line x1="20" y1="244" x2="380" y2="244" stroke="currentColor" strokeOpacity="0.3" />
      <rect x="270" y="242" width="40" height="4" fill="#009a8c" opacity="0.6" />
      <g fontFamily="JetBrains Mono, monospace" fontSize="10" fill="currentColor" fillOpacity="0.6">
        <text x="40" y="18">01 broadside fall</text>
        <text x="235" y="118">02 flip</text>
        <text x="318" y="214">03 land</text>
      </g>
    </svg>
  );
}

/** A stylized attention-score matrix. */
export function AttentionMatrix({ className = "" }) {
  const n = 10;
  const cells = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // Deterministic, structured-looking pattern: diagonal band + a few "heads"
      const band = Math.exp(-((i - j) ** 2) / 4);
      const block = (i < 4 && j < 4) || (i > 6 && j > 5) ? 0.45 : 0;
      const ripple = 0.15 * (1 + Math.sin(i * 1.7 + j * 0.9));
      const v = Math.min(1, band * 0.8 + block + ripple * 0.5);
      cells.push(
        <rect key={`${i}-${j}`} x={j * 22} y={i * 22} width="20" height="20" rx="3" fill="#009a8c" opacity={0.08 + v * 0.85} />
      );
    }
  }
  return (
    <svg viewBox="-30 -26 254 252" className={className} role="img" aria-label="Attention score matrix">
      <g fontFamily="JetBrains Mono, monospace" fontSize="11" fill="currentColor" fillOpacity="0.55">
        <text x="80" y="-10">keys →</text>
        <text x="-14" y="140" transform="rotate(-90 -14 140)">queries →</text>
      </g>
      {cells}
    </svg>
  );
}

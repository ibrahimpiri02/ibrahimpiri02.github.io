import React, { useEffect, useRef } from "react";

/**
 * A small Physarum (slime mold) simulation drawn to a canvas.
 * Agents follow and deposit chemical trails, which self-organize into networks:
 * the same behavior Mireta's algorithms are built on. The pointer leaves "food"
 * that the network grows toward.
 */
function mulberry32(a) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export default function Physarum({ seed = 7, density = 0.09, scale = 2, className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const W = Math.max(80, Math.round(canvas.clientWidth / scale));
    const H = Math.max(50, Math.round(canvas.clientHeight / scale));
    canvas.width = W;
    canvas.height = H;

    const rand = mulberry32(seed);
    const N = Math.round(W * H * density);
    const ax = new Float32Array(N);
    const ay = new Float32Array(N);
    const aa = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      ax[i] = rand() * W;
      ay[i] = rand() * H;
      aa[i] = rand() * Math.PI * 2;
    }

    let trail = new Float32Array(W * H);
    let next = new Float32Array(W * H);
    const img = ctx.createImageData(W, H);

    const SA = 0.5; // sensor angle
    const RA = 0.7; // rotation angle
    const SO = 6; // sensor offset
    const SPEED = 1;
    const DEPOSIT = 4;
    const DECAY = 0.86;

    const sense = (x, y, a) => {
      let sx = Math.round(x + Math.cos(a) * SO);
      let sy = Math.round(y + Math.sin(a) * SO);
      sx = ((sx % W) + W) % W;
      sy = ((sy % H) + H) % H;
      return trail[sy * W + sx];
    };

    const step = () => {
      for (let i = 0; i < N; i++) {
        const x = ax[i], y = ay[i], a = aa[i];
        const f = sense(x, y, a);
        const fl = sense(x, y, a - SA);
        const fr = sense(x, y, a + SA);
        if (f > fl && f > fr) {
          // keep heading
        } else if (f < fl && f < fr) {
          aa[i] += (rand() < 0.5 ? -1 : 1) * RA;
        } else if (fl < fr) {
          aa[i] += RA;
        } else if (fr < fl) {
          aa[i] -= RA;
        }
        let nx = x + Math.cos(aa[i]) * SPEED;
        let ny = y + Math.sin(aa[i]) * SPEED;
        if (nx < 0) nx += W; else if (nx >= W) nx -= W;
        if (ny < 0) ny += H; else if (ny >= H) ny -= H;
        ax[i] = nx;
        ay[i] = ny;
        trail[(ny | 0) * W + (nx | 0)] += DEPOSIT;
      }
      // 3x3 blur + decay
      for (let y = 0; y < H; y++) {
        const ym = (y === 0 ? H - 1 : y - 1) * W;
        const y0 = y * W;
        const yp = (y === H - 1 ? 0 : y + 1) * W;
        for (let x = 0; x < W; x++) {
          const xm = x === 0 ? W - 1 : x - 1;
          const xp = x === W - 1 ? 0 : x + 1;
          const s =
            trail[ym + xm] + trail[ym + x] + trail[ym + xp] +
            trail[y0 + xm] + trail[y0 + x] + trail[y0 + xp] +
            trail[yp + xm] + trail[yp + x] + trail[yp + xp];
          next[y0 + x] = (trail[y0 + x] * 0.4 + (s / 9) * 0.6) * DECAY;
        }
      }
      [trail, next] = [next, trail];
    };

    // Colors: deep ink -> teal -> pale mint
    const draw = () => {
      const d = img.data;
      for (let i = 0; i < W * H; i++) {
        const v = Math.min(1, trail[i] / 10);
        const t = Math.sqrt(v);
        const j = i * 4;
        d[j] = 8 + t * 20 + v * v * 180;
        d[j + 1] = 17 + t * 160 + v * v * 70;
        d[j + 2] = 20 + t * 140 + v * v * 60;
        d[j + 3] = 255;
      }
      ctx.putImageData(img, 0, 0);
    };

    // Pointer / finger adds food that lingers briefly; the network grows toward it.
    // Touch is handled with passive touch events because the browser cancels
    // pointer events as soon as a drag turns into a scroll.
    const foods = [];
    const FOOD_LIFE = 45; // frames
    const addFood = (clientX, clientY) => {
      const r = canvas.getBoundingClientRect();
      const x = ((clientX - r.left) / r.width) * W;
      const y = ((clientY - r.top) / r.height) * H;
      if (x < 0 || x >= W || y < 0 || y >= H) return;
      foods.push({ x: Math.round(x), y: Math.round(y), life: FOOD_LIFE });
      if (foods.length > 60) foods.shift();
    };
    const feed = () => {
      for (let k = foods.length - 1; k >= 0; k--) {
        const f = foods[k];
        const amt = 25 * (f.life / FOOD_LIFE);
        for (let dy = -3; dy <= 3; dy++)
          for (let dx = -3; dx <= 3; dx++) {
            if (dx * dx + dy * dy > 9) continue;
            const x = f.x + dx, y = f.y + dy;
            if (x >= 0 && x < W && y >= 0 && y < H) trail[y * W + x] += amt;
          }
        if (--f.life <= 0) foods.splice(k, 1);
      }
    };
    const onPointer = (e) => {
      if (e.pointerType !== "touch") addFood(e.clientX, e.clientY);
    };
    const onTouch = (e) => {
      for (const t of e.touches) addFood(t.clientX, t.clientY);
    };
    const host = canvas.parentElement;
    host.addEventListener("pointermove", onPointer);
    host.addEventListener("touchstart", onTouch, { passive: true });
    host.addEventListener("touchmove", onTouch, { passive: true });

    // Warm up so the first frame already shows a network
    for (let i = 0; i < 120; i++) step();
    draw();

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let visible = true;
    // Phones and tablets run at ~30 fps to save battery; the motion still reads as smooth.
    const frameMs = window.matchMedia("(pointer: coarse)").matches ? 1000 / 30 : 0;
    let last = 0;
    const loop = (now) => {
      raf = requestAnimationFrame(loop);
      if (frameMs && now - last < frameMs - 1) return;
      last = now;
      feed();
      step();
      draw();
    };
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible && !reduced) raf = requestAnimationFrame(loop);
    });
    io.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      host.removeEventListener("pointermove", onPointer);
      host.removeEventListener("touchstart", onTouch);
      host.removeEventListener("touchmove", onTouch);
    };
  }, [seed, density, scale]);

  return <canvas ref={canvasRef} aria-hidden="true" className={`absolute inset-0 h-full w-full ${className}`} />;
}

"use client";

import { useEffect, useRef } from "react";

export function ParticleAnimation() {
    const containerRef = useRef<HTMLDivElement>(null);
    const sketchRef = useRef<any>(null);

    useEffect(() => {
        const loadScripts = async () => {
            if (typeof window === "undefined") return;

            if (!window.p5) {
                const p5Script = document.createElement("script");
                p5Script.src = "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.7.0/p5.min.js";
                document.head.appendChild(p5Script);
                await new Promise((resolve) => (p5Script.onload = resolve));
            }

            if (!window.gsap) {
                const gsapScript = document.createElement("script");
                gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
                document.head.appendChild(gsapScript);
                await new Promise((resolve) => (gsapScript.onload = resolve));
            }

            initSketch();
        };

        const initSketch = () => {
            if (!containerRef.current || !window.p5 || !window.gsap) return;

            const sketch = (p: any) => {
                const particles: any[] = [];
                const amount = p.windowWidth < 600 || p.windowHeight < 600 ? 1000 : 2000;
                const durationShrink = 8;
                const durationGrow = 8;
                const total = durationShrink + durationGrow;
                const theme = ["#a8adb1", "#8ad6d0", "#4cbcb2", "#6ea8a3"];

                const proxy = { progress: 1, val: 0 };
                let progress: any;
                let interpolator: any;

                class Particle {
                    i: number;
                    cos: number;
                    sin: number;
                    r: number;
                    offset: number;
                    color: string;

                    constructor(i: number) {
                        this.i = i;
                        this.cos = p.cos(i * p.TWO_PI);
                        this.sin = p.sin(i * p.TWO_PI);
                        this.r = p.floor(p.random(2, 8));
                        this.offset = p.pow(p.random(1, 2), 2.5) * p.random(-0.015, 0.015);
                        this.color = p.random(theme);
                    }

                    draw() {
                        interpolator.progress((proxy.progress + this.i) % 1);
                        const r = p.width * (0.3 + proxy.val * this.offset);
                        const x = this.cos * r + p.width / 2;
                        const y = this.sin * r + p.width / 2 - 80;
                        p.fill(this.color);
                        p.circle(x, y, this.r);
                    }
                }

                p.setup = () => {
                    const size = p.min(p.windowWidth, p.windowHeight);
                    const canvas = p.createCanvas(size, size);
                    canvas.parent(containerRef.current);
                    p.noStroke();

                    if (navigator.userAgent.indexOf("Firefox") < 0) p.blendMode(p.SCREEN);

                    const gsap = window.gsap!;
                    progress = gsap.to(proxy, {
                        progress: 0,
                        ease: "none",
                        duration: total,
                        repeat: -1,
                    });

                    interpolator = gsap.timeline({ paused: true, reverse: true })
                        .to(proxy, {
                            val: 1,
                            duration: durationShrink,
                            ease: "elastic.in(1.5, 0.15)",
                        })
                        .to(proxy, {
                            val: 0,
                            duration: durationGrow,
                            ease: "back.in(3)",
                        });

                    for (let i = 0; i < amount; i++) particles.push(new Particle(i / amount));
                };

                const onMove = (x: number, y: number) => {
                    let mouseAngle = p.atan2(y - p.height / 2, x - p.width / 2);
                    mouseAngle = mouseAngle < 0 ? mouseAngle + p.TWO_PI : mouseAngle;
                    mouseAngle = p.abs(mouseAngle / p.TWO_PI) * total;
                    progress.time(mouseAngle);
                };

                p.mouseMoved = () => onMove(p.mouseX, p.mouseY);
                p.touchMoved = () => {
                    if (p.touches.length === 0) return;
                    onMove(p.touches[0].x, p.touches[0].y);
                };

                p.windowResized = () => {
                    const size = p.min(p.windowWidth, p.windowHeight);
                    p.resizeCanvas(size, size);
                };

                p.draw = () => {
                    p.clear();
                    particles.forEach((particle) => particle.draw());
                };
            };

            sketchRef.current = new window.p5(sketch);
        };

        loadScripts();

        return () => {
            if (sketchRef.current) sketchRef.current.remove();
        };
    }, []);

    return (
        <div ref={containerRef} className="w-full h-full particle-container">
            <style>
                {`
          .particle-container canvas {
            margin: auto;
            touch-action: none;
            filter: drop-shadow(0px 0px 3px rgba(0, 228, 233, 0.7));
          }
        `}
            </style>
        </div>
    );
}

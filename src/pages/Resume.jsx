import React, { useEffect, useRef, useState } from "react";
// The legacy build supports older mobile browsers (e.g. pre-2024 Safari).
import * as pdfjs from "pdfjs-dist/legacy/build/pdf.min.mjs";
import workerUrl from "pdfjs-dist/legacy/build/pdf.worker.min.mjs?url";
import { RESUME_PDF } from "../site";

pdfjs.GlobalWorkerOptions.workerSrc = workerUrl;

/**
 * Draws resume.pdf on the page with pdf.js, so it opens the same way on every
 * device. (Android browsers have no built-in PDF viewer and download PDFs instead.)
 * Links inside the PDF stay clickable.
 */
async function renderPdf(doc, container, isCancelled) {
  const width = container.clientWidth;
  const pages = [];

  for (let n = 1; n <= doc.numPages; n++) {
    const page = await doc.getPage(n);
    const viewport = page.getViewport({ scale: width / page.getViewport({ scale: 1 }).width });

    const sheet = document.createElement("div");
    sheet.className = "relative overflow-hidden rounded-md bg-white shadow-xl shadow-black/10 ring-1 ring-black/5";
    sheet.style.width = `${viewport.width}px`;
    sheet.style.height = `${viewport.height}px`;

    // Render somewhat above screen resolution so text holds up when pinch-zoomed,
    // but keep each canvas under ~12 MP so phones don't run out of canvas memory.
    const want = viewport.width * (window.devicePixelRatio || 1) * 1.5;
    const maxByArea = Math.sqrt(12e6 * (viewport.width / viewport.height));
    const pixelWidth = Math.max(1200, Math.min(want, 2400, maxByArea));
    const dpr = pixelWidth / viewport.width;
    const canvas = document.createElement("canvas");
    canvas.width = Math.floor(viewport.width * dpr);
    canvas.height = Math.floor(viewport.height * dpr);
    canvas.style.width = `${viewport.width}px`;
    canvas.style.height = `${viewport.height}px`;
    canvas.setAttribute("aria-hidden", "true");
    await page.render({
      canvasContext: canvas.getContext("2d"),
      viewport,
      transform: dpr !== 1 ? [dpr, 0, 0, dpr, 0, 0] : undefined,
    }).promise;
    sheet.appendChild(canvas);

    // Overlay the PDF's own hyperlinks (email, website, LinkedIn, ...)
    for (const a of await page.getAnnotations()) {
      if (a.subtype !== "Link" || !a.url) continue;
      const [x1, y1, x2, y2] = viewport.convertToViewportRectangle(a.rect);
      const link = document.createElement("a");
      link.href = a.url;
      if (/^https?:/.test(a.url)) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      }
      link.setAttribute("aria-label", a.url.replace(/^mailto:/, ""));
      link.className = "absolute rounded-sm hover:bg-accent/10";
      Object.assign(link.style, {
        left: `${Math.min(x1, x2)}px`,
        top: `${Math.min(y1, y2)}px`,
        width: `${Math.abs(x2 - x1)}px`,
        height: `${Math.abs(y2 - y1)}px`,
      });
      sheet.appendChild(link);
    }

    if (isCancelled()) return;
    pages.push(sheet);
  }
  container.replaceChildren(...pages);
}

export default function Resume() {
  const pagesRef = useRef(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let cancelled = false;
    let doc = null;
    let lastWidth = 0;
    let timer = 0;
    const isCancelled = () => cancelled;

    const draw = () => {
      const el = pagesRef.current;
      if (!doc || !el || el.clientWidth === lastWidth) return; // ignore height-only resizes (mobile URL bar)
      lastWidth = el.clientWidth;
      renderPdf(doc, el, isCancelled)
        .then(() => !cancelled && setStatus("ready"))
        .catch(() => !cancelled && setStatus("error"));
    };

    // isEvalSupported: false keeps pdf.js from compiling code at runtime (safer, CSP-friendly).
    const task = pdfjs.getDocument({ url: RESUME_PDF, isEvalSupported: false });
    task.promise
      .then((d) => {
        if (cancelled) return;
        doc = d;
        draw();
      })
      .catch(() => !cancelled && setStatus("error"));

    const onResize = () => {
      clearTimeout(timer);
      timer = setTimeout(draw, 200);
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelled = true;
      clearTimeout(timer);
      window.removeEventListener("resize", onResize);
      task.destroy();
    };
  }, []);

  return (
    <div className="bg-[#eef2f2] pb-16">
      <div className="mx-auto flex max-w-[52rem] flex-wrap items-end justify-between gap-4 px-4 pb-6 pt-10 sm:px-6 sm:pt-14">
        <div>
          <p className="eyebrow mb-2">Resume</p>
          <h1 className="font-serif text-3xl tracking-tight text-ink sm:text-4xl">Ibrahim Piri</h1>
        </div>
        <a href={RESUME_PDF} download="Ibrahim_Piri_Resume.pdf" className="btn-primary hover:text-white">
          Download PDF ↓
        </a>
      </div>

      <div className="mx-auto max-w-[52rem] px-4 sm:px-6">
        {status === "loading" && (
          <div className="aspect-[8.5/11] w-full animate-pulse rounded-md bg-white shadow-xl shadow-black/10 ring-1 ring-black/5" />
        )}
        {status === "error" && (
          <div className="rounded-xl bg-white p-8 text-ink-soft shadow-sm">
            The resume couldn’t be displayed here.{" "}
            <a href={RESUME_PDF} className="link">
              Open the PDF directly
            </a>
            .
          </div>
        )}
        <div ref={pagesRef} className="flex flex-col gap-6" />
      </div>
    </div>
  );
}

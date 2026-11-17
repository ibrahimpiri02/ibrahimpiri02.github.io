import React from "react";
import { CONTACT } from "../site";


export function Footer() {
  return (
    <footer className="mx-auto mt-28 flex w-full max-w-5xl flex-col gap-3 border-t border-black/5 px-6 py-8 text-sm text-ink-faint sm:flex-row sm:items-center sm:justify-between">
      <span>&copy; {new Date().getFullYear()} Ibrahim Piri</span>
      <div className="flex gap-6">
        {CONTACT.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="transition-colors hover:text-ink"
          >
            {c.label}
          </a>
        ))}
      </div>
    </footer>
  );
}

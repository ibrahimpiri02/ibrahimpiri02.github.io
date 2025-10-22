import React from "react";

export function Footer() {
  return (
    <footer className="w-full bg-gray-50 border-t py-4 mt-8 flex flex-col items-center text-sm text-gray-600 font-classic">
      <div className="flex gap-4 mb-2">
        <a href="https://linkedin.com/in/ibrahim-piri" target="_blank" rel="noopener noreferrer" className="hover:underline text-accent-dark">LinkedIn</a>
        <a href="https://github.com/ibrahimpiri02" target="_blank" rel="noopener noreferrer" className="hover:underline text-accent-dark">GitHub</a>
        <a href="mailto:ibrahimpiri02@gmail.com" className="hover:underline text-accent-dark">Email</a>
        <a href="mailto:ibrahim@miretaurban.com" className="hover:underline text-accent-dark">Business Email</a>
      </div>
      <div className="text-accent">&copy; {new Date().getFullYear()} Ibrahim Piri</div>
    </footer>
  );
}

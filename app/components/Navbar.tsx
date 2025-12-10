"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <div className="flex flex-col leading-tight text-white">
          <span className="text-xs tracking-[0.35em] uppercase">
            Sketch
          </span>
          <span className="text-lg font-semibold tracking-[0.35em] uppercase">
            Robotics
          </span>
        </div>

        {/* Center Nav (Desktop) */}
        <div className="hidden md:flex items-center gap-10 text-sm text-white">
          <a
            href="#home"
            className="transition-colors hover:text-gray-300"
          >
            Home
          </a>
          <a
            href="#solution"
            className="transition-colors hover:text-gray-300"
          >
            Solution
          </a>
          <a
            href="#team"
            className="transition-colors hover:text-gray-300"
          >
            Team
          </a>
          <a
            href="#careers"
            className="transition-colors hover:text-gray-300"
          >
            careers
          </a>
        </div>

        {/* Right CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            className="rounded-full border border-white/40 px-4 py-2 text-xs font-medium tracking-[0.18em] uppercase text-white transition-colors hover:bg-white hover:text-black"
          >
            CONNECT US
          </button>

          {/* Hamburger (Mobile) */}
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <span className="flex flex-col items-center justify-center space-y-1">
              <span
                className={`h-[2px] w-4 bg-white transition-transform ${
                  open ? "translate-y-[3px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[2px] w-4 bg-white transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-[2px] w-4 bg-white transition-transform ${
                  open ? "-translate-y-[3px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-black/90">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 pb-4 pt-2 text-sm text-white">
            <a
              href="#home"
              className="transition-colors hover:text-gray-300"
              onClick={() => setOpen(false)}
            >
              Home
            </a>
            <a
              href="#solution"
              className="transition-colors hover:text-gray-300"
              onClick={() => setOpen(false)}
            >
              Solution
            </a>
            <a
              href="#team"
              className="transition-colors hover:text-gray-300"
              onClick={() => setOpen(false)}
            >
              Team
            </a>
            <a
              href="#careers"
              className="transition-colors hover:text-gray-300"
              onClick={() => setOpen(false)}
            >
              careers
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

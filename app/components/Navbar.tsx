"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-transparent">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        {/* Brand */}
        <div className="flex flex-col leading-none text-white">
          <span className="text-[10px] font-light tracking-[0.25em] uppercase">
            Sketch
          </span>
          <span className="text-sm font-medium tracking-[0.2em] uppercase">
            Robotics
          </span>
        </div>

        {/* Center Nav (Desktop) */}
        <div className="hidden md:flex items-center gap-10 text-sm font-light text-white/80">
          <a href="#home" className="transition-colors hover:text-white">
            Home
          </a>
          <a href="#solution" className="transition-colors hover:text-white">
            Solution
          </a>
          <a href="#team" className="transition-colors hover:text-white">
            Team
          </a>
          <a href="#careers" className="transition-colors hover:text-white">
            careers
          </a>
        </div>

        {/* Right CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-xs font-light tracking-[0.12em] uppercase text-white transition-colors hover:bg-white/20">
            CONNECT US
          </button>

          {/* Hamburger (Mobile) */}
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 md:hidden"
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
        <div className="md:hidden bg-black/95 backdrop-blur">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 pb-4 pt-2 text-sm font-light text-white/80">
            <a
              href="#home"
              className="transition-colors hover:text-white"
              onClick={() => setOpen(false)}
            >
              Home
            </a>
            <a
              href="#solution"
              className="transition-colors hover:text-white"
              onClick={() => setOpen(false)}
            >
              Solution
            </a>
            <a
              href="#team"
              className="transition-colors hover:text-white"
              onClick={() => setOpen(false)}
            >
              Team
            </a>
            <a
              href="#careers"
              className="transition-colors hover:text-white"
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

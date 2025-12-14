"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 h-16 backdrop-blur-[10px]"
      style={{
        background:
          "linear-gradient(360deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.10) 100%)",
      }}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4">
        {/* Brand / Logo */}
        <div className="flex items-center">
          <div className="h-9 w-28 relative">
            <img
              src="/images/colored-logo.png"
              alt="Sketch Robotics"
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        {/* Center Nav (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="/"
            className="text-stone-300 text-xs font-normal leading-3 transition-colors hover:text-white"
            style={{ fontFamily: "'Unbounded', sans-serif" }}
          >
            Home
          </a>
          <a
            href="/solutions"
            className="text-stone-300 text-xs font-normal leading-3 transition-colors hover:text-white"
            style={{ fontFamily: "'Unbounded', sans-serif" }}
          >
            Solution
          </a>
          <a
            href="/team"
            className="text-stone-300 text-xs font-normal leading-3 transition-colors hover:text-white"
            style={{ fontFamily: "'Unbounded', sans-serif" }}
          >
            Team
          </a>
          <a
            href="#careers"
            className="text-stone-300 text-xs font-normal leading-3 transition-colors hover:text-white"
            style={{ fontFamily: "'Unbounded', sans-serif" }}
          >
            careers
          </a>
        </div>

        {/* Right CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="mailto:sketchrobotics@gmail.com"
            className="h-7 w-28 flex items-center justify-center rounded-full bg-gray-800/80 text-center text-stone-300 text-[9.78px] font-semibold uppercase leading-3 tracking-wide transition-colors hover:bg-gray-700/80"
            style={{ fontFamily: "'Unbounded', sans-serif" }}
          >
            CONNECT US
          </a>

          {/* Hamburger (Mobile) */}
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <span className="flex flex-col items-center justify-center space-y-1">
              <span
                className={`h-0.5 w-4 bg-white transition-transform ${
                  open ? "translate-y-[3px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-4 bg-white transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-0.5 w-4 bg-white transition-transform ${
                  open ? "-translate-y-[3px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-[10px]">
          <div
            className="mx-auto flex max-w-7xl flex-col gap-4 px-4 pb-6 pt-4"
            style={{ fontFamily: "'Unbounded', sans-serif" }}
          >
            <a
              href="/"
              className="text-stone-300 text-xs font-normal leading-3 transition-colors hover:text-white"
              onClick={() => setOpen(false)}
            >
              Home
            </a>
            <a
              href="/solutions"
              className="text-stone-300 text-xs font-normal leading-3 transition-colors hover:text-white"
              onClick={() => setOpen(false)}
            >
              Solution
            </a>
            <a
              href="/team"
              className="text-stone-300 text-xs font-normal leading-3 transition-colors hover:text-white"
              onClick={() => setOpen(false)}
            >
              Team
            </a>
            <a
              href="#careers"
              className="text-stone-300 text-xs font-normal leading-3 transition-colors hover:text-white"
              onClick={() => setOpen(false)}
            >
              careers
            </a>
            <a
              href="mailto:sketchrobotics@gmail.com"
              className="h-7 w-28 flex items-center justify-center rounded-full bg-gray-800/80 text-center text-stone-300 text-[9.78px] font-semibold uppercase leading-3 tracking-wide transition-colors hover:bg-gray-700/80 mt-2"
              style={{ fontFamily: "'Unbounded', sans-serif" }}
              onClick={() => setOpen(false)}
            >
              CONNECT US
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

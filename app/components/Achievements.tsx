"use client";

import { useState } from "react";

export default function Achievements() {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 6;

  return (
    <section className="bg-[#f5f5f5] py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light uppercase tracking-[0.15em] text-zinc-800">
            Achievments
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Slides */}
          <div className="flex gap-6 justify-center items-center">
            {/* Left placeholder card - smaller */}
            <div className="hidden md:block w-48 h-64 bg-white/80 rounded-2xl shadow-sm flex-shrink-0 opacity-60">
              {/* IMAGE PLACEHOLDER: Achievement image */}
            </div>

            {/* Center card - larger, main focus */}
            <div className="w-72 md:w-80 h-80 md:h-96 bg-white rounded-2xl shadow-lg flex-shrink-0">
              {/* IMAGE PLACEHOLDER: Main achievement image */}
            </div>

            {/* Right placeholder card - smaller */}
            <div className="hidden md:block w-48 h-64 bg-white/80 rounded-2xl shadow-sm flex-shrink-0 opacity-60">
              {/* IMAGE PLACEHOLDER: Achievement image */}
            </div>
          </div>

          {/* Carousel indicators */}
          <div className="mt-10 flex justify-center gap-2">
            {[...Array(totalSlides)].map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`h-2 rounded-full transition-all ${
                  i === activeSlide ? "w-8 bg-zinc-800" : "w-2 bg-zinc-300"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";

export default function Achievements() {
  const [activeSlide, setActiveSlide] = useState(1);
  const totalSlides = 7;

  return (
    <section className="bg-white py-16 sm:py-20 md:py-28 relative overflow-hidden min-h-[600px] sm:min-h-[750px] md:min-h-[878px]">
      {/* Background gradient from Figma */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(217,217,217,0.10) 0%, rgba(115,115,115,0.10) 100%)",
        }}
      />
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.30) 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Title – Figma: text-white/90, text-5xl, font-light, tracking-[4px], leading-[59.04px] */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 pt-4 sm:pt-6 md:pt-8">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-[2px] sm:tracking-[3px] md:tracking-[4px] leading-[1.2] sm:leading-[1.3] md:leading-[59.04px] text-white/90"
            style={{
              fontFamily: "'Unbounded', sans-serif",
              color: "rgba(255,255,255,0.9)",
              WebkitTextStroke: "0.5px rgba(0,0,0,0.1)",
              textShadow: "0 0 40px rgba(0,0,0,0.3)",
            }}
          >
            ACHIEVMENTS
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative mt-12 sm:mt-16 md:mt-20">
          {/* Slides */}
          <div className="flex gap-3 sm:gap-4 md:gap-6 justify-center items-center">
            {/* Left placeholder card */}
            <div className="hidden lg:block w-[450px] h-[350px] bg-zinc-400/50 rounded-[20px] shrink-0 -ml-[350px]">
              {/* IMAGE PLACEHOLDER: Achievement image */}
            </div>

            {/* Center card - main focus */}
            <div className="w-[240px] sm:w-[280px] md:w-[450px] h-[280px] sm:h-[340px] md:h-[350px] bg-zinc-300/30 rounded-[20px] shadow-[0px_0px_60px_40px_rgba(32,32,32,0.10)] sm:shadow-[0px_0px_90px_80px_rgba(32,32,32,0.10)] shrink-0">
              {/* IMAGE PLACEHOLDER: Main achievement image */}
            </div>

            {/* Right placeholder card */}
            <div className="hidden lg:block w-[450px] h-[350px] bg-zinc-400/30 rounded-[20px] shrink-0 -mr-[350px]">
              {/* IMAGE PLACEHOLDER: Achievement image */}
            </div>
          </div>

          {/* Carousel indicators – from Figma */}
          <div className="mt-10 sm:mt-12 md:mt-16 flex justify-center">
            <div className="h-6 sm:h-7 bg-neutral-400/90 rounded-[20px] px-3 sm:px-4 flex items-center gap-2 sm:gap-3">
              {[...Array(totalSlides)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className={`w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full transition-all ${
                    i === activeSlide ? "bg-zinc-800/50" : "bg-white/50"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

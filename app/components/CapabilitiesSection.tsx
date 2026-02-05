"use client";

import { useRef, useState, useEffect } from "react";

const CAPABILITIES = [
  {
    number: "01",
    title: "Automating Hazardous and Repetitive Work",
    description:
      "Many essential tasks remain manual despite being repetitive or unsafe. We develop robotic systems that reduce human exposure while improving safety.",
  },
  {
    number: "02",
    title: "Reliable Software–Hardware Integration",
    description:
      "We engineer hardware that fully realizes the potential of advanced software, enabling precise sensing in real-world environments.",
  },
  {
    number: "03",
    title: "Problem-Specific Robotic Solutions",
    description:
      "We address distinct real-world constraints and operating conditions by designing tailored robotic systems.",
  },
  {
    number: "04",
    title: "Practical and Usable Automation",
    description:
      "Automation should be easy to operate and maintain. We focus on intuitive interfaces and dependable performance for on-site use.",
  },
  {
    number: "05",
    title: "Scaling Processes with Minimal Disruption",
    description:
      "We enable a smooth transition to scalable robotic systems without interrupting your existing operations.",
  },
  {
    number: "06",
    title: "Designed for Real Operating Conditions",
    description:
      "Our robots function in dust, moisture, heat, and uneven environments outside controlled lab settings.",
  },
];

export default function CapabilitiesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.offsetWidth * 0.75 + 16;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(newIndex, CAPABILITIES.length - 1));
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-black relative overflow-hidden h-[100dvh] py-12 md:py-16 flex flex-col snap-start snap-always">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0) 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto w-full h-full relative z-10 px-6 md:px-10 lg:px-16 flex flex-col">
        {/* Section Header - No bottom margin */}
        <header className="mb-0 md:mb-8 max-w-2xl flex-shrink-0">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-light text-white leading-[1.1] tracking-tight"
            style={{ fontFamily: "'Unbounded', sans-serif" }}
          >
            <span className="block opacity-80">WHAT WE</span>
            <span className="block font-medium">SOLVE</span>
          </h2>
        </header>

        {/* Mobile Carousel */}
        <div className="md:hidden flex-1 flex flex-col">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-8 pt-6"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {CAPABILITIES.map((capability, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[80vw] p-6 border border-neutral-800 rounded-xl bg-neutral-900/30 backdrop-blur-sm snap-center"
              >
                <span className="text-neutral-500 text-xs font-mono mb-4 block">
                  {capability.number}
                </span>
                <h3
                  className="text-white text-lg font-normal leading-tight mb-3"
                  style={{ fontFamily: "'Unbounded', sans-serif" }}
                >
                  {capability.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed font-light">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 pb-4">
            {CAPABILITIES.map((_, index) => (
              <div
                key={index}
                className={`h-1 transition-all duration-300 rounded-full ${
                  activeIndex === index ? "bg-white w-8" : "bg-neutral-800 w-2"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid - All cards visible without scrolling */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 flex-1 content-center pb-8">
          {CAPABILITIES.map((capability, index) => (
            <div
              key={index}
              className="group relative p-6 border border-neutral-800 rounded-xl hover:border-neutral-600 transition-colors duration-300 bg-neutral-900/20 backdrop-blur-sm flex flex-col"
            >
              <span className="text-neutral-500 text-xs mb-3 block">
                {capability.number}
              </span>
              <h3
                className="text-white text-base font-normal leading-snug mb-3"
                style={{ fontFamily: "'Unbounded', sans-serif" }}
              >
                {capability.title}
              </h3>
              <p className="text-neutral-400 text-xs leading-relaxed font-light flex-1">
                {capability.description}
              </p>
              <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-neutral-600 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
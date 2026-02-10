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
    <section className="bg-black relative overflow-hidden h-[100dvh] flex flex-col snap-start snap-always">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0) 70%)",
        }}
      />

      <div className="w-full h-full relative z-10 px-5 md:px-10 lg:px-[60px] pt-24 pb-12 xl:pt-28 2xl:pt-32 flex flex-col">
        {/* Section Header - Matching Core Capabilities style */}
        <header className="mb-8 xl:mb-10 2xl:mb-12 flex-shrink-0">
          <h2
            className="font-unbounded font-light text-[32px] sm:text-[36px] md:text-[42px] lg:text-[38px] leading-[1.1] tracking-[2px] sm:tracking-[3px] md:tracking-[4px] text-white"
          >
            <span className="block">WHAT WE</span>
            <span className="block">SOLVE</span>
          </h2>
        </header>

        {/* Mobile Carousel */}
        <div className="md:hidden flex-1 flex flex-col">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-6"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {CAPABILITIES.map((capability, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[80vw] p-5 border border-neutral-800 rounded-lg bg-neutral-900/30 backdrop-blur-sm snap-center"
              >
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
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-8 2xl:gap-[36px] flex-1 content-start">
          {CAPABILITIES.map((capability, index) => (
            <div
              key={index}
              className="group relative p-5 xl:p-6 border border-neutral-800 rounded-lg hover:border-neutral-600 transition-colors duration-300 bg-neutral-900/20 flex flex-col"
            >
              <h3
                className="text-white text-sm xl:text-base font-normal leading-snug mb-3"
                style={{ fontFamily: "'Unbounded', sans-serif" }}
              >
                {capability.title}
              </h3>
              <p className="text-neutral-400 text-xs leading-relaxed font-light flex-1">
                {capability.description}
              </p>
              <div className="absolute bottom-0 left-5 right-5 xl:left-6 xl:right-6 h-[1px] bg-gradient-to-r from-transparent via-neutral-600 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import { useRef, useState, useEffect } from "react";

const CAPABILITIES = [
  {
    number: "01",
    title: "Automating Hazardous and Repetitive Work",
    description:
      "Many essential tasks remain manual despite being repetitive or unsafe. We develop robotic systems that reduce human exposure while improving safety and operational consistency.",
  },
  {
    number: "02",
    title: "Reliable Software–Hardware Integration",
    description:
      "We engineer hardware that fully realizes the potential of advanced software, enabling precise sensing, in real-world environments.",
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
    title: "Scaling Manual Processes with Minimal Disruption",
    description:
      "Many processes stay manual due to fear of disruption. We enable a smooth transition to scalable robotic systems without interrupting existing operations.",
  },
  {
    number: "06",
    title: "Designed for Real Operating Conditions",
    description:
      "Our robots are built to function in dust, moisture, heat, and uneven environments outside controlled lab settings.",
  },
];

export default function CapabilitiesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Update active index on scroll for mobile carousel
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.offsetWidth * 0.75 + 16; // card width + gap
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(newIndex, CAPABILITIES.length - 1));
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-black relative overflow-hidden min-h-screen h-[100dvh] flex flex-col snap-start snap-always">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 60%)",
        }}
      />

      <div className="w-full h-full pt-24 pb-8 md:py-20 relative z-10 flex flex-col justify-start md:justify-center">
        {/* Section Header */}
        <div className="mb-4 md:mb-12 px-5 md:px-10 lg:px-[60px]">
          <h2
            className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-[48px] font-light text-white leading-[1.1] tracking-[2px] sm:tracking-[3px] md:tracking-[4px]"
            style={{ fontFamily: "'Unbounded', sans-serif" }}
          >
            <span className="block">WHAT WE</span>
            <span className="block font-normal">SOLVE</span>
          </h2>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden flex flex-col flex-grow">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 px-5 pb-4 flex-grow items-center"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {CAPABILITIES.map((capability, index) => (
              <div
                key={index}
                className="group relative flex-shrink-0 w-[75vw] p-5 border border-neutral-800 rounded-lg bg-black/50 backdrop-blur-sm snap-center flex flex-col justify-center min-h-[200px]"
              >
                {/* Number */}
                <span className="text-neutral-600 text-xs tracking-widest mb-3 block">
                  {capability.number}
                </span>

                {/* Title */}
                <h3
                  className="text-white text-sm font-normal leading-snug tracking-wide mb-3"
                  style={{ fontFamily: "'Unbounded', sans-serif" }}
                >
                  {capability.title}
                </h3>

                {/* Description */}
                <p
                  className="text-neutral-400 text-xs font-light leading-relaxed tracking-wide"
                  style={{ fontFamily: "'Unbounded', sans-serif" }}
                >
                  {capability.description}
                </p>
              </div>
            ))}
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 py-4">
            {CAPABILITIES.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const container = scrollRef.current;
                  if (container) {
                    const cardWidth = container.offsetWidth * 0.75 + 16;
                    container.scrollTo({
                      left: cardWidth * index,
                      behavior: "smooth",
                    });
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "bg-white w-6" : "bg-neutral-600"
                }`}
                aria-label={`Go to card ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-5 md:px-10 lg:px-[60px]">
          {CAPABILITIES.map((capability, index) => (
            <div
              key={index}
              className="group relative p-5 md:p-6 border border-neutral-800 rounded-lg hover:border-neutral-600 transition-all duration-300 bg-black/50 backdrop-blur-sm"
            >
              {/* Number */}
              <span className="text-neutral-600 text-xs tracking-widest mb-3 block">
                {capability.number}
              </span>

              {/* Title */}
              <h3
                className="text-white text-sm md:text-base font-normal leading-snug tracking-wide mb-3"
                style={{ fontFamily: "'Unbounded', sans-serif" }}
              >
                {capability.title}
              </h3>

              {/* Description */}
              <p
                className="text-neutral-400 text-xs md:text-sm font-light leading-relaxed tracking-wide"
                style={{ fontFamily: "'Unbounded', sans-serif" }}
              >
                {capability.description}
              </p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CapabilitiesSection from "../components/CapabilitiesSection";
import Image from "next/image";
import { useState } from "react";

// --- Types ---
interface SolutionCardData {
  title: string;
  shortDescription: string;
  fullDescription: string;
}

// --- Data ---
const solutions: SolutionCardData[] = [
  {
    title: "ROBOTICS & AUTOMATION",
    shortDescription:
      "ROS 2–based autonomy framework enabling real-time robotic operation",
    fullDescription:
      "ROS 2–based autonomy framework enabling real-time robotic operation, including advanced perception, 2D & 3D LiDAR SLAM, multi-sensor fusion, computer vision pipelines, embedded actuator control, precision motion control, trajectory execution, and global & local path planning.",
  },
  {
    title: "AI & INTELLIGENT SYSTEMS",
    shortDescription:
      "Application of artificial intelligence for perception and decision-making",
    fullDescription:
      "Application of artificial intelligence for perception, decision-making, and autonomy, enabling robotic systems to adapt, learn, and operate reliably in dynamic, real-world environments.",
  },
  {
    title: "EMBEDDED & REAL-TIME CONTROL SYSTEMS",
    shortDescription: "Design and implementation of real-time embedded software",
    fullDescription:
      "Design and implementation of real-time embedded software for motor drives, sensors, and safety-critical subsystems, enabling deterministic control, low-latency feedback, and reliable operation in demanding robotic applications.",
  },
  {
    title: "REAL-TIME EDGE INTELLIGENCE & COMPUTE ACCELERATION",
    shortDescription:
      "Deployment and optimization of AI models on edge computing platforms",
    fullDescription:
      "Deployment and optimization of AI models on edge computing platforms for real-time perception and decision-making, including model compression, inference acceleration, and efficient use of onboard compute under power and latency constraints.",
  },
];

// --- Sub-Component: Solution Card ---
interface SolutionCardProps {
  solution: SolutionCardData;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

function SolutionCard({
  solution,
  index,
  isExpanded,
  onToggle,
}: SolutionCardProps) {
  return (
    <div
      className={`
        relative flex flex-col p-5 xl:p-6 2xl:p-8 
        rounded-[1.25rem] 2xl:rounded-[1.875rem] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] 
        transition-all duration-300 ease-in-out
        ${isExpanded ? "h-auto" : "h-auto"} 
        min-h-[11.875rem] xl:min-h-[13.125rem] 2xl:min-h-[15.625rem]
      `}
      style={{
        background:
          index % 2 === 0
            ? "linear-gradient(248.77deg, rgba(16, 15, 15, 1) 3.053%, rgba(44, 44, 44, 1) 158.22%)"
            : "linear-gradient(248.8deg, rgba(16, 15, 15, 1) 3.053%, rgba(44, 44, 44, 1) 158.22%)",
      }}
    >
      <p className="font-unbounded font-normal text-[0.875rem] xl:text-[1rem] 2xl:text-[1.2rem] text-[rgba(255,255,255,0.4)] mb-2 xl:mb-4">
        {solution.title}
      </p>

      {/* Description Area */}
      <div className="flex-grow mb-4">
        <p className="font-unbounded font-light text-[0.8125rem] xl:text-[0.875rem] 2xl:text-[1rem] text-[rgba(255,255,255,0.7)] leading-relaxed">
          {isExpanded ? solution.fullDescription : solution.shortDescription}
        </p>
      </div>

      <button
        onClick={onToggle}
        className="self-end h-[2.25rem] w-[6.875rem] xl:h-[2.75rem] xl:w-[8.125rem] 2xl:h-[3.5rem] 2xl:w-[10.6875rem] rounded-[0.9375rem] 2xl:rounded-[1.25rem] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex items-center justify-center font-unbounded text-[0.6875rem] xl:text-[0.75rem] 2xl:text-[0.875rem] text-white hover:bg-white/10 transition-all shrink-0"
        style={{
          background:
            "linear-gradient(230.26deg, rgba(16, 15, 15, 1) 163.03%, rgba(44, 44, 44, 1) 160.2%)",
        }}
      >
        {isExpanded ? "Show Less" : "Read More"}
      </button>
    </div>
  );
}

// --- Main Page Component ---
export default function SolutionsPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleCardToggle = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <Navbar />

      <main className="h-dvh w-full overflow-y-auto snap-y snap-mandatory scroll-smooth bg-black text-white">

        {/* ========================================
            SECTION 1: HERO & INTRO
           ======================================== */}
        <section className="h-dvh w-full snap-start relative overflow-hidden bg-black flex flex-col justify-start shrink-0">
          <div className="relative z-10 w-full px-5 md:px-10 lg:px-[3.75rem] flex flex-col lg:flex-row items-start lg:items-center pt-28 lg:pt-[clamp(7rem,9vw,11.25rem)]">

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4 lg:gap-[clamp(1.5rem,2.5vw,3rem)] w-full pt-6 lg:pt-0">
              {/* Left Column - Text Content */}
              <div className="flex flex-col justify-start relative z-30">
                {/* Heading wrapper with stroke behind */}
                <div className="relative mb-2 lg:mb-4">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-[0.15] pointer-events-none select-none z-0">
                    <h1
                      className="font-unbounded font-normal whitespace-nowrap text-[4.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[clamp(11rem,16vw,20.05rem)] leading-[1] tracking-tighter lg:tracking-[-0.125rem] text-transparent origin-left scale-y-[0.85]"
                      style={{
                        WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.4)",
                      }}
                    >
                      SOLUTION
                    </h1>
                  </div>
                  <h2
                    className="font-unbounded font-light text-[2rem] sm:text-[2.25rem] md:text-[2.625rem] lg:text-[clamp(2.5rem,3.5vw,3.75rem)] leading-[1.1] tracking-[0.125rem] sm:tracking-[0.1875rem] md:tracking-[0.25rem] relative z-10"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    SOLUTION
                  </h2>
                </div>

                <div className="mt-8 lg:mt-10 xl:mt-12 2xl:mt-16 max-w-[100%] lg:max-w-[clamp(28rem,35vw,40rem)] text-left mx-auto lg:mx-0 relative z-10">
                  <p className="font-unbounded font-normal text-[#a7a7a7] opacity-60 text-[0.875rem] leading-[1.8] md:text-[1rem] lg:text-[clamp(0.85rem,1.05vw,1.25rem)] lg:leading-[1.7] lg:tracking-[0.02rem]">
                    <span>At </span>
                    <span className="font-semibold text-[#efefef]">Sketch Robotics</span>
                    <span>, we transform challenges into opportunities by designing and delivering end-to-end robotics and </span>
                    <span className="text-white">AI solutions</span>
                    <span>. Whether it&apos;s automating processes, building </span>
                    <span className="text-white">intelligent systems</span>
                    <span>, or enabling next-generation human–machine interaction, we tailor our solutions to meet industry-specific needs with scalable, cost-effective, and </span>
                    <span className="text-white">deployment-ready systems.</span>
                  </p>
                  <p className="font-unbounded font-normal text-[#a7a7a7] opacity-60 text-[0.875rem] leading-[1.8] md:text-[1rem] lg:text-[clamp(0.85rem,1.05vw,1.25rem)] lg:leading-[1.7] lg:tracking-[0.02rem] mt-4 lg:mt-[clamp(0.75rem,1vw,1.5rem)]">
                    <span>From concept and prototyping to integration and real-world deployment, we combine </span>
                    <span className="text-white">advanced engineering</span>
                    <span> with practical innovation to ensure reliability, performance, and </span>
                    <span className="text-white">long-term value</span>
                    <span> for our partners across diverse industries.</span>
                  </p>
                </div>
              </div>

              {/* Right Column - Robot Image */}
              <div className="hidden lg:flex justify-end items-start mt-[clamp(1.25rem,2.5vw,3.75rem)] relative z-10">
                <div className="relative w-[clamp(22rem,30vw,38rem)] h-[clamp(25rem,37vw,44rem)]">
                  <Image
                    src="/images/robot-image.png"
                    alt="Robot"
                    fill
                    className="object-contain object-top"
                  />
                  <div
                    className="absolute top-0 left-0 w-full h-[50%] pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to bottom, #000000 10%, rgba(0,0,0,0) 100%)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Cards Carousel - Positioned close to where text ends */}
          <div className="md:hidden flex-1 flex flex-col justify-center px-5 pb-8">
            <div
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-3"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {[
                { num: "01", title: "Automating Hazardous Work", desc: "Robotic systems that reduce human exposure while improving safety." },
                { num: "02", title: "Software–Hardware Integration", desc: "Hardware that realizes the potential of advanced software." },
                { num: "03", title: "Problem-Specific Solutions", desc: "Tailored robotic systems for real-world constraints." },
                { num: "04", title: "Practical Automation", desc: "Intuitive interfaces and dependable on-site performance." },
                { num: "05", title: "Minimal Disruption Scaling", desc: "Smooth transition to scalable robotic systems." },
                { num: "06", title: "Real Operating Conditions", desc: "Built for dust, moisture, heat, and uneven environments." },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[70vw] p-4 border border-neutral-800 rounded-lg bg-neutral-900/40 backdrop-blur-sm snap-center"
                >
                  <h3 className="text-white text-sm font-normal leading-tight mb-2" style={{ fontFamily: "'Unbounded', sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-neutral-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================
            SECTION 2: WHAT WE SOLVE (Desktop only)
           ======================================== */}
        <section className="hidden md:block h-dvh w-full snap-start snap-always">
          <CapabilitiesSection />
        </section>

        {/* ========================================
            SECTION 3: CORE CAPABILITIES
            - Removed "sticky" classes from the h3 title.
           ======================================== */}
        <section className="w-full snap-start relative bg-black flex flex-col justify-start overflow-hidden">
          {/* Dot pattern - bottom right */}
          <div
            className="absolute pointer-events-none hidden md:block z-[5] opacity-85"
            style={{
              width: "clamp(32rem, 45vw, 55rem)",
              height: "clamp(32rem, 45vw, 55rem)",
              right: "clamp(-6rem, -4vw, -2rem)",
              bottom: "clamp(-6rem, -4vw, -2rem)",
              backgroundImage:
                "radial-gradient(circle, rgba(255, 255, 255, 0.25) 1.5px, transparent 2px)",
              backgroundSize: "clamp(1.25rem, 1.5vw, 1.75rem) clamp(1.25rem, 1.5vw, 1.75rem)",
              maskImage: "radial-gradient(circle, black 30%, transparent 70%)",
              WebkitMaskImage: "radial-gradient(circle, black 30%, transparent 70%)",
            }}
          />

          <div className="w-full h-full px-5 md:px-10 lg:px-[3.75rem] pt-24 pb-12 xl:pt-28 2xl:pt-32 relative z-10">
            <div className="w-full">
              {/* UPDATED: Removed sticky, top-20, z-40, mix-blend-difference */}
              <h3 className="font-unbounded font-light text-[2rem] sm:text-[2.25rem] md:text-[2.375rem] lg:text-[clamp(2rem,2.5vw,3rem)] leading-[1.1] tracking-[0.125rem] sm:tracking-[0.1875rem] md:tracking-[0.25rem] text-white mb-6 xl:mb-8 2xl:mb-12">
                CORE CAPABILITIES
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 xl:gap-8 2xl:gap-[2.25rem] max-w-[clamp(58.5rem,75vw,72rem)] pb-20">
                {solutions.map((solution, index) => (
                  <SolutionCard
                    key={index}
                    solution={solution}
                    index={index}
                    isExpanded={expandedIndex === index}
                    onToggle={() => handleCardToggle(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
            SECTION 3: FOOTER
           ======================================== */}
        <section className="w-full flex flex-col justify-end bg-black">
          <Footer />
        </section>
      </main>
    </>
  );
}
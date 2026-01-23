"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
    shortDescription: "ROS 2–based autonomy framework enabling real-time robotic operation",
    fullDescription:
      "ROS 2–based autonomy framework enabling real-time robotic operation, including advanced perception, 2D & 3D LiDAR SLAM, multi-sensor fusion, computer vision pipelines, embedded actuator control, precision motion control, trajectory execution, and global & local path planning.",
  },
  {
    title: "AI & INTELLIGENT SYSTEMS",
    shortDescription: "Application of artificial intelligence for perception and decision-making",
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
    shortDescription: "Deployment and optimization of AI models on edge computing platforms",
    fullDescription:
      "Deployment and optimization of AI models on edge computing platforms for real-time perception and decision-making, including model compression, inference acceleration, and efficient use of onboard compute under power and latency constraints.",
  },
];

// --- Sub-Component: Solution Card ---
function SolutionCard({ solution, index }: { solution: SolutionCardData; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="h-auto min-h-[200px] lg:min-h-[250px] rounded-[30px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] relative p-6 lg:p-8 flex flex-col transition-all duration-300"
      style={{
        background:
          index % 2 === 0
            ? "linear-gradient(248.77deg, rgba(16, 15, 15, 1) 3.053%, rgba(44, 44, 44, 1) 158.22%)"
            : "linear-gradient(248.8deg, rgba(16, 15, 15, 1) 3.053%, rgba(44, 44, 44, 1) 158.22%)",
      }}
    >
      <p className="font-unbounded font-normal text-[16px] lg:text-[19.2px] text-[rgba(255,255,255,0.4)] mb-4">
        {solution.title}
      </p>
      <p className="font-unbounded font-light text-[14px] lg:text-[16px] text-[rgba(255,255,255,0.7)] mb-6 flex-grow">
        {isExpanded ? solution.fullDescription : solution.shortDescription}
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="self-end h-[40px] w-[120px] lg:h-[56px] lg:w-[171px] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex items-center justify-center font-unbounded text-[12px] lg:text-[14px] text-white hover:bg-white/10 transition-all"
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
  return (
    <>
      <Navbar />

      <main className="h-dvh w-full overflow-y-auto snap-y snap-mandatory scroll-smooth bg-black text-white">

        {/* ========================================
          SECTION 1: HERO & INTRO
          - Changed: Removed hardcoded pixels (top-[166px]).
          - Changed: Used Flexbox to vertically center content.
          - Changed: Made Image responsive to viewport height.
          ========================================
        */}
        <section className="h-dvh w-full snap-start snap-always relative flex items-center justify-center overflow-hidden">

          {/* 1. Large Background Text (Centered & Responsive) */}
          <div className="absolute inset-0 flex items-center justify-start lg:justify-center overflow-hidden pointer-events-none select-none opacity-5">
            <h1 className="font-unbounded font-normal whitespace-nowrap text-[18vw] lg:text-[343px] leading-none tracking-tighter pl-4 lg:pl-0">
              SOLUTION
            </h1>
          </div>

          {/* 2. Main Content Container (Grid for layout) */}
          <div className="relative z-10 w-full h-full container mx-auto px-6 lg:px-[76px] flex flex-col justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">

              {/* Text Column (Spans 7 cols on large screens) */}
              <div className="lg:col-span-7 flex flex-col justify-center relative z-20 pt-20 lg:pt-0">
                {/* Gradient Title */}
                <h2
                  className="font-unbounded font-normal text-4xl lg:text-[65.6px] lg:leading-[1.1] tracking-tight mb-6"
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

                {/* Description Text */}
                <p className="font-unbounded font-normal text-[#a7a7a7] opacity-60 text-base leading-relaxed lg:text-[24px] lg:leading-[1.4] max-w-lg">
                  <span>At </span>
                  <span className="font-semibold text-[#efefef]">
                    Sketch Robotics
                  </span>
                  <span>
                    , we transform challenges into opportunities by designing and
                    delivering end-to-end robotics and{" "}
                  </span>
                  <span className="text-white">AI solutions</span>
                  <span>. Whether it's automating processes, building </span>
                  <span className="text-white">intelligent systems</span>
                  <span>
                    , or enabling next-generation human–machine interaction, we
                    tailor our solutions to meet industry-specific needs with
                    scalable, cost-effective, and{" "}
                  </span>
                  <span className="text-white">deployment-ready systems.</span>
                </p>
              </div>

              {/* Robot Image Column (Spans 5 cols on large screens) */}
              {/* Absolute on mobile to sit behind text, Relative/Grid on desktop */}
              <div className="absolute lg:relative right-0 top-0 h-full w-full lg:col-span-5 pointer-events-none lg:pointer-events-auto z-0 lg:z-10 flex items-center justify-end">
                <div className="relative w-[80%] max-w-[400px] lg:max-w-none lg:w-full h-[60vh] lg:h-[80vh] opacity-30 lg:opacity-100 translate-x-[20%] lg:translate-x-0">
                  <Image
                    src="/images/robot-image.png"
                    alt="Robot"
                    fill
                    className="object-contain object-right lg:object-center"
                    priority
                  />
                  {/* Gradient Overlay */}
                  <div
                    className="absolute top-0 left-0 w-full h-[50%] pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to bottom, #000000 0%, rgba(0,0,0,0) 100%)",
                    }}
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================
          SECTION 2: CORE CAPABILITIES
          ========================================
        */}
        <section className="h-dvh w-full snap-start snap-always relative flex items-center justify-center overflow-y-auto bg-black">
          <div className="w-full px-6 lg:px-[76px] py-20 max-w-[1440px]">
            <h3 className="font-unbounded font-normal text-[24px] lg:text-[32px] text-white mb-12 lg:mb-16">
              CORE CAPABILITIES
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[36px] w-full lg:w-[936px] mx-auto lg:mx-0">
              {solutions.map((solution, index) => (
                <SolutionCard key={index} solution={solution} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="w-full flex flex-col justify-end bg-black">
          <Footer />
        </section>

      </main>
    </>
  );
}
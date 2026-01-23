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
        rounded-[20px] 2xl:rounded-[30px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] 
        transition-all duration-300 ease-in-out
        ${isExpanded ? "h-auto" : "h-auto"} 
        min-h-[190px] xl:min-h-[210px] 2xl:min-h-[250px]
      `}
      style={{
        background:
          index % 2 === 0
            ? "linear-gradient(248.77deg, rgba(16, 15, 15, 1) 3.053%, rgba(44, 44, 44, 1) 158.22%)"
            : "linear-gradient(248.8deg, rgba(16, 15, 15, 1) 3.053%, rgba(44, 44, 44, 1) 158.22%)",
      }}
    >
      <p className="font-unbounded font-normal text-[14px] xl:text-[16px] 2xl:text-[19.2px] text-[rgba(255,255,255,0.4)] mb-2 xl:mb-4">
        {solution.title}
      </p>

      {/* Description Area */}
      <div className="flex-grow mb-4">
        <p className="font-unbounded font-light text-[13px] xl:text-[14px] 2xl:text-[16px] text-[rgba(255,255,255,0.7)] leading-relaxed">
          {isExpanded ? solution.fullDescription : solution.shortDescription}
        </p>
      </div>

      <button
        onClick={onToggle}
        className="self-end h-[36px] w-[110px] xl:h-[44px] xl:w-[130px] 2xl:h-[56px] 2xl:w-[171px] rounded-[15px] 2xl:rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex items-center justify-center font-unbounded text-[11px] xl:text-[12px] 2xl:text-[14px] text-white hover:bg-white/10 transition-all shrink-0"
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
          <div className="relative z-10 w-full px-5 md:px-10 lg:px-[60px] flex items-start lg:items-center pt-24 lg:pt-[120px] laptop-sm:pt-[180px] xl:pt-[140px] 2xl:pt-[180px]">

            {/* Large Background Text */}
            <div className="absolute left-4 top-25 lg:top-10 laptop-sm:top-[40px] xl:top-[60px] 2xl:top-[80px] opacity-20 pointer-events-none select-none z-20">
              <h1
                className="font-unbounded font-normal whitespace-nowrap text-[60px] md:text-[80px] lg:text-[180px] laptop-sm:text-[220px] xl:text-[240px] 2xl:text-[320.745px] lg:leading-[1] 2xl:leading-[152.047px] tracking-tighter lg:tracking-[-2px] 2xl:tracking-[-3.5256px] text-transparent origin-left scale-y-[0.85]"
                style={{
                  WebkitTextStroke: "2px rgba(255, 255, 255, 0.3)",
                }}
              >
                SOLUTION
              </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full pt-8 lg:pt-0">
              {/* Left Column - Text Content */}
              <div className="flex flex-col justify-start relative z-30">
                <h2
                  className="font-unbounded font-normal text-3xl md:text-4xl lg:text-[55px] laptop-sm:text-[75px] laptop-sm:leading-[1.1] xl:text-[60px] 2xl:text-[65.591px] lg:leading-[1.1] 2xl:leading-[53.818px] lg:tracking-[-0.5px] 2xl:tracking-[-0.6727px] mb-2"
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

                <p className="font-unbounded font-normal text-[#a7a7a7] opacity-60 text-[16px] leading-[1.6] md:text-base lg:text-[15px] laptop-sm:text-[20px] laptop-sm:mt-[80px] xl:text-[16px] 2xl:text-[24.264px] lg:leading-[1.4] 2xl:leading-[33.363px] lg:tracking-[0.5px] max-w-[100%] lg:max-w-[420px] xl:max-w-[480px] 2xl:max-w-[497.62px] mt-6 lg:mt-8 xl:mt-12 2xl:mt-30">
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

              {/* Right Column - Robot Image */}
              <div className="hidden lg:flex justify-end items-start mt-[20px] laptop-sm:mt-[80px] xl:mt-[60px] 2xl:mt-[100px] relative z-10">
                <div className="relative w-[300px] h-[350px] laptop-sm:w-[350px] laptop-sm:h-[420px] xl:w-[400px] xl:h-[480px] 2xl:w-[516px] 2xl:h-[600px]">
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
        </section>

        {/* ========================================
            SECTION 2: CORE CAPABILITIES
            - Removed "sticky" classes from the h3 title.
           ======================================== */}
        <section className="min-h-dvh w-full snap-start relative bg-black flex flex-col justify-start">
          <div className="w-full h-full px-5 md:px-10 lg:px-[60px] pt-24 pb-12 xl:pt-28 2xl:pt-32">
            <div className="w-full">
              {/* UPDATED: Removed sticky, top-20, z-40, mix-blend-difference */}
              <h3 className="font-unbounded font-normal text-2xl lg:text-[26px] xl:text-[28px] 2xl:text-[32px] text-white mb-8 xl:mb-10 2xl:mb-16">
                CORE CAPABILITIES
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 xl:gap-8 2xl:gap-[36px] max-w-[936px] pb-20">
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
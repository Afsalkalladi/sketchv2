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
      // CHANGED: Reduced min-height for lg/xl (laptops) to fit 768px height, kept 2xl large
      className="h-auto min-h-[190px] xl:min-h-[210px] 2xl:min-h-[250px] rounded-[20px] 2xl:rounded-[30px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] relative p-5 xl:p-6 2xl:p-8 flex flex-col transition-all duration-300"
      style={{
        background:
          index % 2 === 0
            ? "linear-gradient(248.77deg, rgba(16, 15, 15, 1) 3.053%, rgba(44, 44, 44, 1) 158.22%)"
            : "linear-gradient(248.8deg, rgba(16, 15, 15, 1) 3.053%, rgba(44, 44, 44, 1) 158.22%)",
      }}
    >
      {/* CHANGED: Adjusted font sizes for laptop (xl) vs desktop (2xl) */}
      <p className="font-unbounded font-normal text-[14px] xl:text-[16px] 2xl:text-[19.2px] text-[rgba(255,255,255,0.4)] mb-2 xl:mb-4">
        {solution.title}
      </p>

      <p className="font-unbounded font-light text-[13px] xl:text-[14px] 2xl:text-[16px] text-[rgba(255,255,255,0.7)] mb-4 flex-grow leading-relaxed">
        {isExpanded ? solution.fullDescription : solution.shortDescription}
      </p>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        // CHANGED: Smaller button on laptop, larger on 2xl
        className="self-end h-[36px] w-[110px] xl:h-[44px] xl:w-[130px] 2xl:h-[56px] 2xl:w-[171px] rounded-[15px] 2xl:rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex items-center justify-center font-unbounded text-[11px] xl:text-[12px] 2xl:text-[14px] text-white hover:bg-white/10 transition-all"
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
          ========================================
        */}
        <section className="h-dvh w-full snap-start snap-always relative overflow-hidden bg-black">

          {/* CHANGED: Adjusted top padding. 
              pt-[100px] for laptops (to save vertical space), 
              pt-[160px] for large monitors. 
          */}
          <div className="relative z-10 w-full h-full px-5 md:px-10 lg:px-[60px] flex items-start pt-[100px] xl:pt-[120px] 2xl:pt-[160px]">

            {/* Large Background Text */}
            <div className="absolute left-4 top-20 xl:top-[80px] 2xl:top-[100px] opacity-20 pointer-events-none select-none z-20">
              <h1
                // CHANGED: Added `xl:text` for 1366px screens. 
                // 1366px gets ~160px font size. 1920px gets ~320px.
                className="font-unbounded font-normal whitespace-nowrap text-[80px] lg:text-[140px] xl:text-[180px] 2xl:text-[320.745px] lg:leading-[1] 2xl:leading-[152.047px] tracking-tighter lg:tracking-[-2px] 2xl:tracking-[-3.5256px] text-transparent origin-left scale-y-[0.85]"
                style={{
                  WebkitTextStroke: "2px rgba(255, 255, 255, 0.3)"
                }}
              >
                SOLUTION
              </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full h-full">

              {/* Left Column - Text Content */}
              <div className="flex flex-col justify-start relative z-30">

                {/* Gradient Title */}
                <h2
                  // CHANGED: Scaled down for 1366px (xl), kept large for 1920px (2xl)
                  className="font-unbounded font-normal text-4xl lg:text-[40px] xl:text-[48px] 2xl:text-[65.591px] lg:leading-[1.1] 2xl:leading-[53.818px] lg:tracking-[-0.5px] 2xl:tracking-[-0.6727px] mb-2 mt-[-9]"
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
                {/* CHANGED: Reduced `mt` significantly for laptop screens to prevent overflow */}
                <p className="font-unbounded font-normal text-[#a7a7a7] opacity-60 text-base leading-relaxed lg:text-[15px] xl:text-[16px] 2xl:text-[24.264px] lg:leading-[1.4] 2xl:leading-[33.363px] lg:tracking-[0.5px] max-w-[420px] xl:max-w-[480px] 2xl:max-w-[497.62px] mt-8 xl:mt-12 2xl:mt-30">
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
              {/* CHANGED: Adjusted `mt` and dimensions. 1366px usually needs the image slightly smaller or pulled up. */}
              <div className="hidden lg:flex justify-end items-start mt-[20px] xl:mt-[60px] 2xl:mt-[100px] relative z-10">
                <div className="relative w-[300px] h-[350px] xl:w-[400px] xl:h-[480px] 2xl:w-[516px] 2xl:h-[600px]">
                  <Image
                    src="/images/robot-image.png"
                    alt="Robot"
                    fill // Use fill for better responsive behavior within parent div
                    className="object-contain object-top"
                  />
                  {/* Gradient Overlay */}
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
          ========================================
        */}
        <section className="h-dvh w-full snap-start snap-always relative overflow-y-auto bg-black">
          {/* CHANGED: Reduced py to fit content in 768px height */}
          <div className="w-full h-full px-5 md:px-10 lg:px-[60px] py-12 xl:py-16 2xl:py-20 flex items-center">
            <div className="w-full">
              {/* CHANGED: Reduced margin bottom */}
              <h3 className="font-unbounded font-normal text-2xl lg:text-[26px] xl:text-[28px] 2xl:text-[32px] text-white mb-8 xl:mb-10 2xl:mb-16">
                CORE CAPABILITIES
              </h3>

              {/* CHANGED: Gap reduction for smaller screens */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 xl:gap-8 2xl:gap-[36px] max-w-[936px]">
                {solutions.map((solution, index) => (
                  <SolutionCard key={index} solution={solution} index={index} />
                ))}
              </div>
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
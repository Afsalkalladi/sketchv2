"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { useState } from "react";

interface SolutionCard {
  title: string;
  shortDescription: string;
  fullDescription: string;
}

const solutions: SolutionCard[] = [
  {
    title: "ROBOTICS & AUTOMATION",
    shortDescription: "ROS 2–based autonomy framework enabling real-time robotic operation",
    fullDescription: "ROS 2–based autonomy framework enabling real-time robotic operation, including advanced perception, 2D & 3D LiDAR SLAM, multi-sensor fusion, computer vision pipelines, embedded actuator control, precision motion control, trajectory execution, and global & local path planning.",
  },
  {
    title: "AI & INTELLIGENT SYSTEMS",
    shortDescription: "Application of artificial intelligence for perception and decision-making",
    fullDescription: "Application of artificial intelligence for perception, decision-making, and autonomy, enabling robotic systems to adapt, learn, and operate reliably in dynamic, real-world environments.",
  },
  {
    title: "EMBEDDED & REAL-TIME CONTROL SYSTEMS",
    shortDescription: "Design and implementation of real-time embedded software",
    fullDescription: "Design and implementation of real-time embedded software for motor drives, sensors, and safety-critical subsystems, enabling deterministic control, low-latency feedback, and reliable operation in demanding robotic applications.",
  },
  {
    title: "REAL-TIME EDGE INTELLIGENCE & COMPUTE ACCELERATION",
    shortDescription: "Deployment and optimization of AI models on edge computing platforms",
    fullDescription: "Deployment and optimization of AI models on edge computing platforms for real-time perception and decision-making, including model compression, inference acceleration, and efficient use of onboard compute under power and latency constraints.",
  },
];

function SolutionCard({ solution, index }: { solution: SolutionCard; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="h-auto min-h-[200px] lg:min-h-[250px] rounded-[30px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] relative p-6 lg:p-8 flex flex-col"
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

export default function SolutionsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Main Content */}
      <div className="bg-black relative min-h-screen w-full overflow-x-hidden pt-[63px]">
        {/* Mobile Wrapper */}
        <div className="flex flex-col lg:block h-full">
          {/* Large Background Text */}
          <div className="relative mt-10 lg:mt-0 flex justify-center lg:block lg:absolute lg:left-4 lg:top-[193.5px] lg:-translate-y-1/2 opacity-5 pointer-events-none">
            <h1 className="font-unbounded font-normal whitespace-nowrap text-[60px] lg:text-[343.745px] lg:leading-[282.047px] tracking-tighter lg:tracking-[-3.5256px]">
              SOLUTION
            </h1>
          </div>

          {/* Gradient Title */}
          <div className="relative px-5 lg:px-0 lg:absolute lg:left-[59px] lg:top-[166px] lg:-translate-y-1/2 z-10">
            <h2
              className="font-unbounded font-normal text-4xl lg:text-[65.591px] lg:leading-[53.818px] lg:tracking-[-0.6727px]"
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

          {/* Description Text */}
          <div className="relative px-5 mt-6 lg:mt-0 lg:px-0 lg:absolute lg:left-[87px] lg:top-[632px] lg:-translate-y-1/2 w-full lg:w-[497.62px] z-10">
            <p className="font-unbounded font-normal text-[#a7a7a7] opacity-60 text-base leading-relaxed lg:text-[24.264px] lg:leading-[33.363px] lg:tracking-[0.5px]">
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

          {/* Robot Image */}
          <div className="relative w-full flex justify-center mt-10 lg:mt-0 lg:absolute lg:right-0 lg:top-[359px] lg:w-auto lg:block z-0">
            <div className="w-[300px] h-auto lg:w-[516px] lg:h-[600px]">
              <Image
                src="/images/robot-image.png"
                alt="Robot"
                width={516}
                height={600}
                className="object-cover w-full h-auto"
              />
            </div>
          </div>

          {/* Core Capabilities Section */}
          <div className="relative px-5 mt-10 lg:mt-0 lg:px-0 lg:absolute lg:left-[76px] lg:top-[950px] w-full lg:w-auto z-10">
            <h3 className="font-unbounded font-normal text-2xl lg:text-[32px] text-white mb-8">
              CORE CAPABILITIES
            </h3>
          </div>

          {/* Solution Cards Grid */}
          <div className="relative px-5 mt-10 mb-20 lg:mb-0 lg:mt-0 lg:px-0 lg:absolute lg:left-[76px] lg:top-[1050px] grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[36px] w-full lg:w-[936px]">
            {solutions.map((solution, index) => (
              <SolutionCard key={index} solution={solution} index={index} />
            ))}
          </div>

          {/* Extra spacing for content */}
          <div className="hidden lg:block lg:h-[2200px]" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

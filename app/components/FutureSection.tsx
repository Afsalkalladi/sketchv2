"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function FutureSection() {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <section
      id="solution"
      className="bg-black py-16 sm:py-20 md:py-32 relative overflow-hidden min-h-[600px] md:min-h-[867px] h-screen snap-start"
    >
      <div className="w-full h-full px-5 md:px-10 lg:px-[60px] relative z-10 flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 h-full max-h-full items-center">
          {/* Left Column - Text */}
          <div className="pt-4 sm:pt-6 md:pt-8 self-center">
            <h2
              className="text-[32px] sm:text-[36px] md:text-[42px] lg:text-[54px] font-light text-white leading-[1.1] sm:leading-[1.2] tracking-[2px] sm:tracking-[3px] md:tracking-[4px]"
              style={{ fontFamily: "'Unbounded', sans-serif" }}
            >
              <span className="block">FUTURE</span>
              <span className="block">BY DESIGN</span>
            </h2>

            <div
              className="mt-6 sm:mt-8 md:mt-10 text-neutral-400 text-sm sm:text-base xl:text-sm 2xl:text-base font-light leading-6 tracking-wide sm:tracking-widest max-w-[610px]"
              style={{ fontFamily: "'Unbounded', sans-serif" }}
            >
              <p>
                We believe the future belongs to those who build it. Driven by
                the &quot;Make in India&quot; spirit, our mission is to design
                and develop innovative robotic solutions that solve real-world
                problems.
              </p>
              <p className="mt-4">
                Founded by a passionate team from CUSAT, we focus on turning
                bold ideas into real-world solutions that simplify lives and
                enhance productivity. With this vision, we are committed to
                positioning India as a benchmark in the global robotics
                revolution.
              </p>
            </div>

            <button
              className="mt-6 sm:mt-8 md:mt-10 h-8 sm:h-9 px-4 sm:px-6 rounded-full bg-gray-600/80 opacity-70 text-white text-xs sm:text-sm font-light leading-6 tracking-wide sm:tracking-widest transition-all hover:opacity-90"
              style={{ fontFamily: "'Unbounded', sans-serif" }}
            >
              Get started
            </button>
          </div>

          {/* Right Column - Robotic Arm Image & Dots (Hidden on mobile) */}
          <div className="hidden md:flex justify-center md:justify-end relative self-center overflow-hidden max-h-[70vh]">
            {/* --- THE DOT PATTERN (More Circular) --- */}
            <div
              className="absolute pointer-events-none hidden sm:block"
              style={{
                width: "800px",
                height: "800px",
                right: "-100px",
                top: "-100px",
                backgroundImage:
                  "radial-gradient(circle, rgba(255, 255, 255, 0.3) 1.5px, transparent 2px)",
                backgroundSize: "24px 24px",
                maskImage:
                  "radial-gradient(circle at center, black 30%, transparent 65%)",
                WebkitMaskImage:
                  "radial-gradient(circle at center, black 30%, transparent 65%)",
                zIndex: 0,
              }}
            />
            {/* --------------------------- */}

            <div
              ref={imageRef}
              className={`relative 
                w-[280px] h-[350px] 
                sm:w-[400px] sm:h-[500px] 
                md:w-[320px] md:h-[400px] md:max-h-[55vh]
                laptop-sm:w-[400px] laptop-sm:h-[675px] laptop-sm:max-h-[55vh]
                lg:w-[480px] lg:h-[600px] lg:max-h-[65vh]
                xl:w-[500px] xl:h-[625px] xl:max-h-[70vh]
                2xl:w-[585px] 2xl:h-[732px] 2xl:max-h-[75vh]
                z-10 transition-all duration-1000 ${isVisible
                  ? "animate-slide-up"
                  : "opacity-0 translate-y-[100px]"
                }`}
            >
              <Image
                src="/images/robotic-arm.svg"
                alt="Robotic arm"
                fill
                className="object-contain relative z-10"
              />
              {/* Radial gradient overlay to blend arm into background */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(ellipse at 50% 40%, transparent 20%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.8) 75%, black 100%)",
                  zIndex: 20,
                  pointerEvents: "none",
                }}
              />
              {/* Bottom gradient to blend lower part of arm into black background */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "40%",
                  background:
                    "linear-gradient(to top, black 0%, rgba(0, 0, 0, 0.8) 30%, transparent 100%)",
                  zIndex: 21,
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
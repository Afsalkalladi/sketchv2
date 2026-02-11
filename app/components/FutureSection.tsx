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
      className="bg-black py-16 sm:py-20 md:py-24 relative overflow-hidden h-full"
    >
      <div className="w-full h-full px-5 md:px-10 lg:px-[3.75rem] relative z-10 flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 h-full">
          {/* Left Column - Text */}
          <div className="pt-4 sm:pt-6 md:pt-8 self-center">
            <h2
              className="text-[2rem] sm:text-[2.25rem] md:text-[2.625rem] lg:text-[3.375rem] font-light text-white leading-[1.1] sm:leading-[1.2] tracking-[0.125rem] sm:tracking-[0.1875rem] md:tracking-[0.25rem]"
              style={{ fontFamily: "'Unbounded', sans-serif" }}
            >
              <span className="block">FUTURE</span>
              <span className="block">BY DESIGN</span>
            </h2>

            <div
              className="mt-6 sm:mt-8 md:mt-10 text-neutral-400 text-sm sm:text-base xl:text-sm 2xl:text-base font-light leading-6 tracking-wide sm:tracking-widest max-w-[38.125rem]"
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

            <a
              href="mailto:sketchrobotics@gmail.com"
              className="mt-6 sm:mt-8 md:mt-10 h-8 sm:h-9 px-4 sm:px-6 rounded-full bg-gray-600/80 opacity-70 text-white text-xs sm:text-sm font-light leading-6 tracking-wide sm:tracking-widest transition-all hover:opacity-90 inline-flex items-center justify-center"
              style={{ fontFamily: "'Unbounded', sans-serif" }}
            >
              Get started
            </a>
          </div>

          {/* Right Column - Robotic Arm Image & Dots (Hidden on mobile) */}
          <div className="hidden md:flex justify-center md:justify-end relative mt-8 md:mt-0 self-end pb-0 overflow-hidden">
            {/* --- THE DOT PATTERN --- */}
            <div
              className="absolute pointer-events-none hidden sm:block"
              style={{
                width: "800px",
                height: "800px",
                right: "-50px",
                top: "50px",
                backgroundImage:
                  "radial-gradient(circle, rgba(255, 255, 255, 0.3) 1.5px, transparent 2px)",
                backgroundSize: "24px 24px",
                maskImage:
                  "radial-gradient(ellipse 50% 45% at 50% 40%, black 30%, transparent 70%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 50% 45% at 50% 40%, black 30%, transparent 70%)",
                zIndex: 25,
              }}
            />
            {/* --------------------------- */}

            <div
              ref={imageRef}
              className={`relative 
                w-[17.5rem] h-[21.875rem] 
                sm:w-[25rem] sm:h-[31.25rem] 
                md:w-[31.25rem] md:h-[38.75rem] 
                xl:w-[27.5rem] xl:h-[34.375rem] 
                2xl:w-[36.5625rem] 2xl:h-[42.5rem] 
                z-10 transition-all duration-1000 ${isVisible
                  ? "animate-slide-up"
                  : "opacity-0 translate-y-[6.25rem]"
                }`}
            >
              <Image
                src="/images/robotic-arm.svg"
                alt="Robotic arm"
                fill
                className="object-contain relative z-10"
              />
              {/* Bottom gradient fade - contained within section */}
              <div
                className="absolute bottom-0 left-[-20%] w-[140%] h-[60%] pointer-events-none z-20"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 0%, black 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
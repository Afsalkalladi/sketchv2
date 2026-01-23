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
      // 1. FIXED: Removed large vertical padding (py-32). Used 'h-screen' and 'overflow-hidden'.
      // This ensures the section is exactly the size of the window and cuts off anything extra.
      className="bg-black relative overflow-hidden h-screen min-h-[600px] w-full snap-start flex items-center"
    >
      {/* Container for content */}
      <div className="w-full h-full px-5 md:px-10 lg:px-[60px] relative z-10 flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 h-full items-center">

          {/* Left Column - Text */}
          <div className="relative z-20 flex flex-col justify-center h-full">
            <h2
              className="text-[32px] sm:text-[36px] md:text-[42px] lg:text-[54px] font-light text-white leading-[1.1] sm:leading-[1.2] tracking-[2px] sm:tracking-[3px] md:tracking-[4px]"
              style={{ fontFamily: "'Unbounded', sans-serif" }}
            >
              <span className="block">FUTURE</span>
              <span className="block">BY DESIGN</span>
            </h2>

            <div
              className="mt-6 sm:mt-8 md:mt-8 text-neutral-400 text-sm sm:text-base xl:text-sm 2xl:text-base font-light leading-6 tracking-wide sm:tracking-widest max-w-[610px]"
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
                enhance productivity.
              </p>
            </div>

            <button
              className="mt-8 md:mt-10 w-fit h-8 sm:h-9 px-4 sm:px-6 rounded-full bg-gray-600/80 opacity-70 text-white text-xs sm:text-sm font-light leading-6 tracking-wide sm:tracking-widest transition-all hover:opacity-90"
              style={{ fontFamily: "'Unbounded', sans-serif" }}
            >
              Get started
            </button>
          </div>

          {/* Right Column - Spacer only (Image is now outside the grid flow) */}
          <div className="hidden md:block h-full"></div>
        </div>
      </div>

      {/* --- ROBOTIC ARM (ABSOLUTE POSITIONED) --- */}
      {/* 2. FIXED: This div is outside the grid completely. It anchors to the bottom right of the SECTION. */}
      <div
        ref={imageRef}
        className={`
          hidden md:block
          absolute bottom-0 right-0 
          z-10 transition-all duration-1000
          
          /* SIZE LOGIC: Use HEIGHT (vh), not WIDTH. */
          /* This guarantees it fits the screen vertically without overflowing. */
          h-[60vh] w-auto aspect-[3/4]
          
          /* Laptop/Desktop Adjustments */
          md:h-[65vh] md:right-[-20px]
          lg:h-[80vh] lg:right-0
          xl:h-[85vh] 
          
          ${isVisible ? "animate-slide-up" : "opacity-0 translate-y-[100px]"}
        `}
      >
        <Image
          src="/images/robotic-arm.svg"
          alt="Robotic arm"
          fill
          // object-bottom ensures the base stays at the bottom
          className="object-contain object-bottom"
        />

        {/* Gradient Overlay */}
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
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "30%",
            background:
              "linear-gradient(to top, black 0%, rgba(0, 0, 0, 0.8) 30%, transparent 100%)",
            zIndex: 21,
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Background Dots (Absolute) */}
      <div
        className="absolute pointer-events-none hidden md:block"
        style={{
          width: "800px",
          height: "800px",
          right: "-10%",
          top: "50%",
          transform: "translateY(-50%)",
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
    </section>
  );
}
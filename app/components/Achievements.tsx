"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Achievement {
  id: number;
  title: string;
  description: string;
  image: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "WorldSkills 2022 - World Rank 4",
    description: "Our CEO Faisal and Co-Founder Siyad represented India at WorldSkills 2022, securing World Rank 4 with a Medallion of Excellence and proudly holding the national flag.",
    image: "/images/achievements/achievement-1.jpg",
  },
  {
    id: 2,
    title: "Honored by MSDE Secretary",
    description: "Our CEO Faisal and Co-Founder Siyad were honored by MSDE Secretary Shri Atul Kumar Tiwari for securing World Rank 4 in Mobile Robotics at WorldSkills 2022.",
    image: "/images/achievements/achievement-2.jpg",
  },
  {
    id: 3,
    title: "European Rover Challenge - World Rank 18",
    description: "Our COO, Romal, and Co-Founder, Siyad, with Team Horizon at the European Rover Challenge, proudly holding the Indian flag after securing World Rank 18.",
    image: "/images/achievements/achievement-3.jpg",
  },
  {
    id: 4,
    title: "SAE India HBAJA - All India Rank 1",
    description: "Our COO Romal Josbin, along with Team Tarusa Motorsport CUSAT, on the SAE India HBAJA podium after leading the team to secure All India Rank 1.",
    image: "/images/achievements/achievement-4.jpeg",
  },
  {
    id: 5,
    title: "ISRO Chairman Appreciation",
    description: "Our Co-Founder Siyad receiving appreciation from Dr. S. Somanath, former Chairman of ISRO, on behalf of CUSAT's Mars Rover Team, Team Horizon.",
    image: "/images/achievements/achievement-5.jpeg",
  },
  {
    id: 6,
    title: "IndiaSkills 2022 Champions",
    description: "Our Co-Founder Siyad and CEO Faisal as IndiaSkills 2022 Champions, marking their win at the national level.",
    image: "/images/achievements/achievement-6.jpg",
  },
  {
    id: 7,
    title: "Flipkart Grid 6.0 Finalist",
    description: "Our COO, Romal Josbin, as a finalist at Flipkart Grid 6.0, one of India's leading innovation challenges.",
    image: "/images/achievements/achievement-7.jpeg",
  },
  {
    id: 8,
    title: "Times of India Feature - ERC",
    description: "Our Co-Founder Siyad and COO Romal Josbin were featured in The Times of India along with Team Horizon CUSAT after leading the team to World Rank 18 at the European Rover Challenge (ERC).",
    image: "/images/achievements/achievement-8.jpg",
  },
  {
    id: 9,
    title: "ISRO Scientist Appreciation",
    description: "Our COO, Romal Josbin, with Team Horizon, appreciated by Dr. T. N. Suresh Kumar, Retired Senior Space Scientist, ISRO, for leading the team at the European Rover Challenge.",
    image: "/images/achievements/achievement-9.jpeg",
  },
  {
    id: 10,
    title: "Times of India Feature - HBAJA",
    description: "Our COO, Romal Josbin, featured in The Times of India along with Team Tarusa Motorsport CUSAT, after leading the team to All India Rank 1 at SAE India HBAJA.",
    image: "/images/achievements/achievement-10.png",
  },
  {
    id: 11,
    title: "Mathrubhumi Feature",
    description: "Our Co-Founder Siyad and CEO Faisal featured in Mathrubhumi for securing World Rank 4 at WorldSkills 2022.",
    image: "/images/achievements/achievement-11.jpg",
  },
  {
    id: 12,
    title: "Cash Award Recognition",
    description: "Our CEO Faisal and Co-Founder Siyad receiving the cash award for securing World Rank 4 in Mobile Robotics at WorldSkills 2022.",
    image: "/images/achievements/achievement-12.jpeg",
  },
];

export default function Achievements() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const id = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % achievements.length);
    }, 6000);

    return () => window.clearInterval(id);
  }, [isPaused]);

  useEffect(() => {
    setIsExpanded(false);
  }, [activeSlide]);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % achievements.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  const getSlideIndex = (offset: number) => {
    return (activeSlide + offset + achievements.length) % achievements.length;
  };

  const handleToggleExpand = () => setIsExpanded((prev) => !prev);

  // Helper to render the side cards (ghost cards)
  const SideCard = ({ index, onClick }: { index: number; onClick: () => void }) => (
    <div
      onClick={onClick}
      className="hidden md:block relative w-[200px] lg:w-[280px] h-[300px] lg:h-[380px] rounded-[30px] overflow-hidden cursor-pointer transition-all duration-500 ease-out opacity-40 hover:opacity-60 grayscale-[50%] blur-[1px] scale-90"
    >
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm z-10" />
      <Image
        src={achievements[index].image}
        alt={achievements[index].title}
        fill
        className="object-cover"
        sizes="300px"
      />
    </div>
  );

  return (
    <section className="relative overflow-hidden bg-black py-16 sm:py-20 md:py-28 min-h-[700px] h-screen snap-start flex flex-col justify-center">
      {/* Background Effects */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.4) 100%)",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)" }} />

      <div className="w-full px-4 sm:px-10 lg:px-[60px] relative z-10">

        {/* Header - Fixed Mobile Sizing */}
        <div className="text-center mb-8 sm:mb-16 pt-4 px-2">
          <h2
            className="text-2xl sm:text-4xl md:text-[42px] lg:text-[54px] font-light uppercase tracking-[0.15em] sm:tracking-[0.24em] leading-tight text-white break-words"
            style={{
              fontFamily: "'Unbounded', sans-serif",
              WebkitTextStroke: "0.5px rgba(255,255,255,0.12)",
              textShadow: "0 0 32px rgba(255,255,255,0.18)",
            }}
          >
            ACHIEVEMENTS
          </h2>
        </div>

        {/* Carousel Container */}
        <div
          className="relative mt-4 sm:mt-8 flex justify-center items-center gap-4 lg:gap-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          {/* Previous Card (Left Ghost) */}
          <SideCard index={getSlideIndex(-1)} onClick={prevSlide} />

          {/* Main Active Card */}
          <div className="relative w-[85vw] sm:w-full max-w-[340px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-[420px] sm:h-[450px] md:h-[500px] rounded-[24px] sm:rounded-[30px] border border-white/10 bg-white/5 shadow-[0_0_80px_0_rgba(255,255,255,0.10)] overflow-hidden z-20 transition-all duration-500">
            <Image
              src={achievements[activeSlide].image}
              alt={achievements[activeSlide].title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 600px"
              priority
            />

            {/* Content Overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/90 to-transparent pt-20">
              <button
                type="button"
                onClick={handleToggleExpand}
                className="w-full text-left p-5 sm:p-6 space-y-2 sm:space-y-3 text-white/90 outline-none focus:outline-none"
              >
                <div className="flex items-center justify-between gap-3 sm:gap-4">
                  <h3 className="font-unbounded text-base sm:text-lg md:text-xl font-semibold tracking-wide uppercase line-clamp-1">
                    {achievements[activeSlide].title}
                  </h3>
                  <span className="text-[10px] sm:text-xs font-medium tracking-[0.2em] text-white/70 whitespace-nowrap pt-1">
                    {isExpanded ? "LESS" : "MORE"}
                  </span>
                </div>
                <p
                  className={`text-xs sm:text-sm leading-relaxed transition-[max-height] duration-500 ease-in-out ${isExpanded ? "max-h-[320px] opacity-100" : "max-h-[48px] sm:max-h-[56px] opacity-80"
                    } overflow-hidden text-white/80 pr-2`}
                >
                  {achievements[activeSlide].description}
                </p>
              </button>
            </div>
          </div>

          {/* Next Card (Right Ghost) */}
          <SideCard index={getSlideIndex(1)} onClick={nextSlide} />

          {/* Navigation Arrows (Floating) - Improved Mobile Size/Pos */}
          <button
            onClick={prevSlide}
            className="absolute left-0 sm:left-2 md:left-10 lg:left-20 top-1/2 -translate-y-1/2 w-9 h-9 md:w-14 md:h-14 bg-black/40 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center text-white transition-all backdrop-blur z-30 touch-manipulation active:scale-95"
            aria-label="Previous slide"
          >
            <ArrowLeft className="w-4 h-4 md:w-6 md:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 sm:right-2 md:right-10 lg:right-20 top-1/2 -translate-y-1/2 w-9 h-9 md:w-14 md:h-14 bg-black/40 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center text-white transition-all backdrop-blur z-30 touch-manipulation active:scale-95"
            aria-label="Next slide"
          >
            <ArrowRight className="w-4 h-4 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="mt-8 sm:mt-16 flex justify-center">
          <div className="h-8 md:h-10 bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-4 sm:px-6 flex items-center gap-2 sm:gap-3">
            {achievements.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`rounded-full transition-all duration-300 ${i === activeSlide
                  ? "bg-white h-2 w-2 sm:h-3 sm:w-3 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                  : "bg-white/20 h-1.5 w-1.5 sm:h-2 sm:w-2 hover:bg-white/40"
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
"use client";

import { useState } from "react";
import Image from "next/image";

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
    image: "/images/achievements/achievement-4.jpg",
  },
  {
    id: 5,
    title: "ISRO Chairman Appreciation",
    description: "Our Co-Founder Siyad receiving appreciation from Dr. S. Somanath, former Chairman of ISRO, on behalf of CUSAT's Mars Rover Team, Team Horizon.",
    image: "/images/achievements/achievement-5.jpg",
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
    image: "/images/achievements/achievement-7.jpg",
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
    image: "/images/achievements/achievement-9.jpg",
  },
  {
    id: 10,
    title: "Times of India Feature - HBAJA",
    description: "Our COO, Romal Josbin, featured in The Times of India along with Team Tarusa Motorsport CUSAT, after leading the team to All India Rank 1 at SAE India HBAJA.",
    image: "/images/achievements/achievement-10.jpg",
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
    image: "/images/achievements/achievement-12.jpg",
  },
];

export default function Achievements() {
  const [activeSlide, setActiveSlide] = useState(0);

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

  return (
    <section className="bg-white py-16 sm:py-20 md:py-28 relative overflow-hidden min-h-[600px] sm:min-h-[750px] md:min-h-[878px]">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(217,217,217,0.10) 0%, rgba(115,115,115,0.10) 100%)",
        }}
      />
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.30) 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 pt-4 sm:pt-6 md:pt-8">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-[2px] sm:tracking-[3px] md:tracking-[4px] leading-[1.2] sm:leading-[1.3] md:leading-[59.04px] text-white/90"
            style={{
              fontFamily: "'Unbounded', sans-serif",
              color: "rgba(255,255,255,0.9)",
              WebkitTextStroke: "0.5px rgba(0,0,0,0.1)",
              textShadow: "0 0 40px rgba(0,0,0,0.3)",
            }}
          >
            ACHIEVEMENTS
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative mt-12 sm:mt-16 md:mt-20">
          {/* Slides */}
          <div className="flex gap-3 sm:gap-4 md:gap-6 justify-center items-center">
            {/* Left card */}
            <div className="hidden lg:block w-[350px] h-[280px] bg-zinc-400/50 rounded-[20px] shrink-0 opacity-50 overflow-hidden relative">
              <Image
                src={achievements[getSlideIndex(-1)].image}
                alt={achievements[getSlideIndex(-1)].title}
                fill
                className="object-cover"
              />
            </div>

            {/* Center card - main focus */}
            <div className="w-[280px] sm:w-[350px] md:w-[450px] h-[320px] sm:h-[380px] md:h-[450px] bg-zinc-300/30 rounded-[20px] shadow-[0px_0px_60px_40px_rgba(32,32,32,0.10)] sm:shadow-[0px_0px_90px_80px_rgba(32,32,32,0.10)] shrink-0 overflow-hidden relative group">
              <Image
                src={achievements[activeSlide].image}
                alt={achievements[activeSlide].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-unbounded text-sm md:text-base font-semibold mb-2">
                    {achievements[activeSlide].title}
                  </h3>
                  <p className="font-unbounded text-xs md:text-sm font-light">
                    {achievements[activeSlide].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Right card */}
            <div className="hidden lg:block w-[350px] h-[280px] bg-zinc-400/30 rounded-[20px] shrink-0 opacity-50 overflow-hidden relative">
              <Image
                src={achievements[getSlideIndex(1)].image}
                alt={achievements[getSlideIndex(1)].title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all"
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all"
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Carousel indicators */}
          <div className="mt-10 sm:mt-12 md:mt-16 flex justify-center">
            <div className="h-6 sm:h-7 bg-neutral-400/90 rounded-[20px] px-3 sm:px-4 flex items-center gap-2 sm:gap-3">
              {achievements.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full transition-all ${
                    i === activeSlide ? "bg-zinc-800/50" : "bg-white/50"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

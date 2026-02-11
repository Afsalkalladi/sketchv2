"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const PARTNERS = [
  // { name: "Kerala Startup Mission", src: "/images/trusted/keralastartupmission.svg" },
  { name: "Rizins", src: "/images/trusted/rizins.svg" },
  // { name: "DPIIT", src: "/images/trusted/dpiit.svg" },
  { name: "Maker Village", src: "/images/trusted/makervillage.svg" },
  { name: "CUSAT", src: "/images/trusted/cusat.svg" },
];

// Dotted World Map Component
const DottedWorldMap = () => {
  const [mapSvg, setMapSvg] = useState<string>('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const generateMap = async () => {
      try {
        // Try simpler configuration first
        const { default: DottedMap } = await import('dotted-map');
        
        // Create the map with minimal settings
        const map = new DottedMap({ 
          height: 50, 
          grid: 'diagonal'
        });

        // Add just a few key pins
        map.addPin({
          lat: 9.9312, // Kochi (CUSAT/Maker Village) - Main location
          lng: 76.2673,
          svgOptions: { color: '#ffffff', radius: 0.8 },
        });

        map.addPin({
          lat: 40.7128, // New York
          lng: -74.0060,
          svgOptions: { color: '#ffffff', radius: 0.6 },
        });

        map.addPin({
          lat: -33.8688, // Sydney
          lng: 151.2093,
          svgOptions: { color: '#ffffff', radius: 0.6 },
        });

        // Generate the SVG with minimal settings
        const svgMap = map.getSVG({
          radius: 0.18,
          color: 'rgba(255,255,255,0.40)', // Increased opacity
          shape: 'circle',
          backgroundColor: 'transparent',
        });

        setMapSvg(svgMap);
      } catch (error) {
        console.error('Error generating dotted map:', error);
        // Create fallback custom SVG map
        const fallbackSvg = `
          <svg width="765" height="489" viewBox="0 0 765 489" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                <circle cx="4" cy="4" r="0.8" fill="rgba(13, 35, 224, 0.45)"/>
              </pattern>
            </defs>
            
            <!-- World outline with dots -->
            <g fill="rgba(27, 168, 63, 0)">
              <!-- India outline dots -->
              <circle cx="500" cy="220" r="1.5" fill="#ffffff" opacity="0.8"/>
              <circle cx="498" cy="225" r="1" fill="rgba(255,255,255,0.6)"/>
              <circle cx="502" cy="225" r="1" fill="rgba(255,255,255,0.6)"/>
              <circle cx="495" cy="230" r="1" fill="rgba(255,255,255,0.6)"/>
              <circle cx="505" cy="230" r="1" fill="rgba(255,255,255,0.6)"/>
              <circle cx="500" cy="235" r="1" fill="rgba(255,255,255,0.6)"/>
              
              <!-- USA outline dots -->
              <circle cx="180" cy="180" r="1.5" fill="#ffffff" opacity="0.8"/>
              <circle cx="170" cy="185" r="1" fill="rgba(255,255,255,0.6)"/>
              <circle cx="190" cy="185" r="1" fill="rgba(255,255,255,0.6)"/>
              <circle cx="175" cy="190" r="1" fill="rgba(255,255,255,0.6)"/>
              <circle cx="185" cy="190" r="1" fill="rgba(255,255,255,0.6)"/>
              <circle cx="160" cy="195" r="1" fill="rgba(255,255,255,0.6)"/>
              <circle cx="200" cy="195" r="1" fill="rgba(255,255,255,0.6)"/>
              
              <!-- Australia outline dots -->
              <circle cx="650" cy="320" r="1.5" fill="#ffffff" opacity="0.8"/>
              <circle cx="640" cy="325" r="1" fill="rgba(255,255,255,0.6)"/>
              <circle cx="660" cy="325" r="1" fill="rgba(255,255,255,0.6)"/>
              <circle cx="645" cy="330" r="1" fill="rgba(255,255,255,0.6)"/>
              <circle cx="655" cy="330" r="1" fill="rgba(255,255,255,0.6)"/>
              <circle cx="650" cy="335" r="1" fill="rgba(255,255,255,0.6)"/>
              
              <!-- Additional scattered dots for global effect -->
              <circle cx="350" cy="150" r="0.8" fill="rgba(255,255,255,0.3)"/>
              <circle cx="280" cy="200" r="0.8" fill="rgba(255,255,255,0.3)"/>
              <circle cx="420" cy="180" r="0.8" fill="rgba(255,255,255,0.3)"/>
              <circle cx="550" cy="160" r="0.8" fill="rgba(255,255,255,0.3)"/>
              <circle cx="320" cy="280" r="0.8" fill="rgba(255,255,255,0.3)"/>
              <circle cx="450" cy="300" r="0.8" fill="rgba(255,255,255,0.3)"/>
              <circle cx="600" cy="250" r="0.8" fill="rgba(255,255,255,0.3)"/>
            </g>
          </svg>
        `;
        setMapSvg(fallbackSvg);
      }
    };

    generateMap();
  }, [isClient]);

  if (!isClient || !mapSvg) return null;

  return (
    <div 
      className="w-full h-full opacity-70"
      dangerouslySetInnerHTML={{ __html: mapSvg }}
    />
  );
};

export default function GlobalSection() {
  return (
    <section className="bg-black relative overflow-hidden h-full flex flex-col">

      {/* CSS Animation Styles */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>

      {/* --- Background Gradients --- */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0) 70%)",
          zIndex: 0,
        }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-full opacity-70 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Dotted World Map Background */}
      <div className="absolute right-0 top-[35%] md:top-1/2 -translate-y-1/2 opacity-40 sm:opacity-60 md:opacity-100 pointer-events-none">
        <div className="relative w-[25rem] h-[15.9375rem] sm:w-[37.5rem] sm:h-[23.9375rem] md:w-[47.8125rem] md:h-[30.5625rem] opacity-90">
          <DottedWorldMap />
        </div>
      </div>

      {/* --- Main Content Container --- */}
      <div className="w-full relative z-10 flex-grow flex flex-col pb-20 sm:py-16 md:py-20">

        {/* --- TOP: LOGOS (DESKTOP ONLY) --- */}
        <div className="hidden md:grid w-full px-10 lg:px-[3.75rem] grid-cols-5 gap-4 items-center opacity-80 mb-10 justify-items-start">
          {PARTNERS.map((partner, index) => (
            <Image
              key={`desktop-${index}`}
              src={partner.src}
              alt={partner.name}
              width={128}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          ))}
        </div>

        {/* --- BOTTOM CONTENT --- */}
        <div className="px-5 md:px-10 lg:px-[3.75rem] flex-grow flex flex-col justify-end md:justify-center">
          <div className="w-full max-w-3xl animate-slide-up">

            {/* 1. Heading */}
            <h2 className="font-sans text-[1.75rem] sm:text-[2rem] md:text-[2.375rem] lg:text-[3rem] leading-[1.1] sm:leading-[1.2] tracking-[0.125rem] sm:tracking-[0.1875rem] md:tracking-[0.25rem] text-white font-light">
              <div className="block md:hidden">
                <span className="block whitespace-nowrap">
                  FROM <span className="font-normal">INDIA</span>
                </span>
                <span className="block whitespace-nowrap">
                  TO THE <span className="font-normal">WORLD</span>
                </span>
              </div>

              <div className="hidden md:block">
                <span className="block whitespace-nowrap">
                  FROM <span className="font-normal">INDIA</span> TO
                </span>
                <span className="block whitespace-nowrap">
                  THE <span className="font-normal">WORLD</span>
                </span>
              </div>
            </h2>

            {/* 2. Subtext */}
            <p className="font-sans mt-4 sm:mt-6 text-neutral-400 text-sm sm:text-base font-light leading-6 tracking-wide sm:tracking-widest max-w-80">
              Shaping Robotics Across Three Continents
            </p>

            {/* 3. Mobile Logos (Marquee below text) */}
            <div className="md:hidden w-full relative mt-6 md:mt-10 mb-2 overflow-hidden opacity-80">
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

              <div className="flex w-max animate-marquee items-center">
                {PARTNERS.map((partner, index) => (
                  <div key={`set1-${index}`} className="mx-6 flex items-center justify-center">
                    <Image
                      src={partner.src}
                      alt={partner.name}
                      width={128}
                      height={40}
                      className="h-8 w-auto object-contain"
                      priority
                    />
                  </div>
                ))}
                {PARTNERS.map((partner, index) => (
                  <div key={`set2-${index}`} className="mx-6 flex items-center justify-center">
                    <Image
                      src={partner.src}
                      alt={partner.name}
                      width={128}
                      height={40}
                      className="h-8 w-auto object-contain"
                      priority
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
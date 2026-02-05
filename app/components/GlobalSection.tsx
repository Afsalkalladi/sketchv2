"use client";

import Image from "next/image";

const PARTNERS = [
  { name: "Kerala Startup Mission", src: "/images/trusted/keralastartupmission.svg" },
  { name: "Rizins", src: "/images/trusted/rizins.svg" },
  { name: "DPIIT", src: "/images/trusted/dpiit.svg" },
  { name: "Maker Village", src: "/images/trusted/makervillage.svg" },
  { name: "CUSAT", src: "/images/trusted/cusat.svg" },
];

export default function GlobalSection() {
  return (
    <section className="bg-black relative overflow-hidden h-screen h-[100dvh] min-h-[600px] sm:min-h-[700px] md:min-h-[882px] flex flex-col snap-start">

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

      {/* World Map Background */}
      <div className="absolute right-0 top-[35%] md:top-1/2 -translate-y-1/2 opacity-30 sm:opacity-50 md:opacity-100 mix-blend-screen pointer-events-none">
        <div className="relative w-[400px] h-[255px] sm:w-[600px] sm:h-[383px] md:w-[765px] md:h-[489px] opacity-70">
          <Image
            src="/images/maped.png"
            alt="World map showing global presence"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* --- Main Content Container --- */}
      <div className="w-full relative z-10 flex-grow flex flex-col pb-20 sm:py-16 md:py-20">

        {/* --- TOP: LOGOS (DESKTOP ONLY) --- */}
        <div className="hidden md:grid w-full px-10 lg:px-[60px] grid-cols-5 gap-4 items-center opacity-80 mb-10 justify-items-start">
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
        <div className="px-5 md:px-10 lg:px-[60px] flex-grow flex flex-col justify-end md:justify-center">
          <div className="w-full max-w-3xl animate-slide-up">

            {/* 1. Heading */}
            <h2 className="font-sans text-[28px] sm:text-[32px] md:text-[38px] lg:text-[48px] leading-[1.1] sm:leading-[1.2] tracking-[2px] sm:tracking-[3px] md:tracking-[4px] text-white font-light">
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
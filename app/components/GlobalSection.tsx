import Image from "next/image";

export default function GlobalSection() {
  return (
    <section className="bg-black py-16 sm:py-20 md:py-28 relative overflow-hidden min-h-[500px] sm:min-h-[700px] md:min-h-[882px]">
      {/* Gradient overlays from Figma */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 100%)",
        }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-full opacity-70"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* World Map Background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-30 sm:opacity-50 md:opacity-100">
        <div className="relative w-[400px] h-[255px] sm:w-[600px] sm:h-[383px] md:w-[765px] md:h-[489px] opacity-70">
          <Image
            src="/images/world-map-gray.png"
            alt="World map showing global presence"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Content overlay */}
      <div className="max-w-7xl mx-auto px-4 relative z-10 h-full flex flex-col justify-center py-16 sm:py-20">
        <div className="max-w-[520px]">
          {/* Main Heading – Figma: text-4xl, tracking-[3.30px], leading-[48.75px] */}
          <h2
            className="text-2xl sm:text-3xl md:text-4xl leading-[1.2] sm:leading-[1.3] md:leading-[48.75px] tracking-[2px] sm:tracking-[2.5px] md:tracking-[3.30px]"
            style={{ fontFamily: "'Unbounded', sans-serif" }}
          >
            <span className="block text-white font-light">FROM <span className="font-normal">INDIA</span></span>
            <span className="block text-white font-light">TO THE <span className="font-normal">WORLD</span></span>
          </h2>

          {/* Subtitle – Figma: text-neutral-400, text-lg, font-light, leading-6, tracking-widest */}
          <p
            className="mt-4 sm:mt-6 text-neutral-400 text-sm sm:text-base md:text-lg font-light leading-5 sm:leading-6 tracking-wide sm:tracking-widest max-w-80"
            style={{ fontFamily: "'Unbounded', sans-serif" }}
          >
            Shaping Robotics Across The Continents
          </p>
        </div>
      </div>
    </section>
  );
}

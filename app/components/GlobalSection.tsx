import Image from "next/image";

export default function GlobalSection() {
  return (
    <section className="bg-black py-20 md:py-28 relative overflow-hidden min-h-[600px]">
      {/* World Map Background - IMAGE PLACEHOLDER */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-5xl h-[500px] opacity-60">
          <Image
            src="/images/world-map-dots.svg"
            alt="World map showing global presence"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Content overlay */}
      <div className="max-w-6xl mx-auto px-6 relative z-10 h-full flex items-end pb-16">
        <div className="max-w-md">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight tracking-tight uppercase">
            From <span className="text-white/50">India</span> To<br />
            The <span className="text-white/50">World</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-sm text-white/50 font-light">
            Shaping Robotics Across<br />
            The Continents
          </p>
        </div>
      </div>
    </section>
  );
}
